import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BUTTON } from "@/components/ds/buttons";
import { LogoMark } from "@/components/logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { restoreEarlyInput } from "@/lib/early-input";

// Google Apps Script web app that saves each request to the "Call Requests" Sheet.
const CALL_REQUEST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxX5Nf0xY_yfHNPQuIbxQ12k9ugFAJbCcNNS_DABaqw4CXt_vH9Mc6R3UnePhyukbHk/exec";

// Cloudflare Turnstile's public site key. The form runs without the spam check while this is empty.
const TURNSTILE_SITE_KEY: string = "0x4AAAAAAF1wDbU0Wz_KgOYl";
const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

let turnstileLoading: Promise<void> | undefined;

function loadTurnstile() {
  turnstileLoading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      turnstileLoading = undefined;
      script.remove();
      reject(new Error("The spam check couldn't load."));
    };
    document.head.appendChild(script);
  });
  return turnstileLoading;
}

// The design system's field style (see .ds-input in styles.css): 48px tall, 3:1 edge, clear focus.
const INPUT_CLASS = "ds-input";

const EMAIL_ERROR = "Please check your email address.";
const PHONE_ERROR = "Please enter a 10-digit phone number.";
const REACH_ERROR = "Please add a phone number or an email so I can reach you.";
const PHONE_FOR_METHOD_ERROR = "Please add a phone number, or choose email.";
const EMAIL_FOR_METHOD_ERROR = "Please add an email, or choose a call or text.";
const METHOD_ERROR = "Please choose how you’d like me to reach you.";

const CONTACT_METHODS = ["Call", "Text", "Email"] as const;
const SESSION_TYPES = ["In person", "Telehealth", "Walk and talk"] as const;

const CHOICE_CLASS =
  "flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-input bg-card px-2 text-center text-[1rem] leading-tight text-foreground transition-colors hover:border-foreground has-[:checked]:border-cta has-[:checked]:bg-primary has-[:checked]:font-semibold has-[:checked]:text-primary-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cta/40";

/** Blank is fine. Anything typed must look like name@example.com, matching what the browser checks. */
function isValidEmail(value: string) {
  return value === "" || (value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}

/** The consultation request form, used at the top of the home page and in the pop-up. */
export function ConsultationForm({ onSent }: { onSent?: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  // The home page and the pop-up can both show this form, so each copy needs its own ids.
  const emailErrorId = `${useId()}-email-error`;
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const phoneErrorId = `${useId()}-phone-error`;
  const [methodError, setMethodError] = useState<string | null>(null);
  const methodErrorId = `${useId()}-method-error`;
  const reachHintId = `${useId()}-reach-hint`;
  // False until this page's script is running. Until then the button stays off, so the
  // browser can never send the form on its own or put what's typed into the page address.
  const [ready, setReady] = useState(false);
  const turnstileBox = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | undefined>(undefined);
  const turnstileStarted = useRef(false);

  // Loaded once someone starts the form, so other visitors never contact Cloudflare.
  const startSpamCheck = () => {
    if (!TURNSTILE_SITE_KEY || turnstileStarted.current) return;
    turnstileStarted.current = true;
    loadTurnstile()
      .then(() => {
        if (!turnstileBox.current || !window.turnstile) return;
        turnstileId.current = window.turnstile.render(turnstileBox.current, {
          sitekey: TURNSTILE_SITE_KEY,
          appearance: "interaction-only",
          size: "flexible",
        });
      })
      .catch(() => {
        turnstileStarted.current = false;
      });
  };

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    restoreEarlyInput(formRef.current);
    setReady(true);
    return () => {
      if (turnstileId.current) window.turnstile?.remove(turnstileId.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const contactMethod = String(formData.get("contact_method") ?? "");
    const sessionType = String(formData.get("session_type") ?? "");
    setPhoneError(null);
    setEmailError(null);
    setMethodError(null);
    const focusField = (name: string) =>
      form.querySelector<HTMLInputElement>(`input[name="${name}"]`)?.focus();

    // Phone or email: at least one, and whichever is typed must look right.
    if (phone && phone.replace(/\D/g, "").length < 10) {
      setPhoneError(PHONE_ERROR);
      focusField("phone");
      return;
    }
    // Backup for browsers that don't check email fields themselves.
    if (!isValidEmail(email)) {
      setEmailError(EMAIL_ERROR);
      focusField("email");
      return;
    }
    if (!phone && !email) {
      setPhoneError(REACH_ERROR);
      focusField("phone");
      return;
    }
    if (!contactMethod) {
      setMethodError(METHOD_ERROR);
      focusField("contact_method");
      return;
    }
    if (contactMethod !== "Email" && !phone) {
      setPhoneError(PHONE_FOR_METHOD_ERROR);
      focusField("phone");
      return;
    }
    if (contactMethod === "Email" && !email) {
      setEmailError(EMAIL_FOR_METHOD_ERROR);
      focusField("email");
      return;
    }

    const turnstileToken = formData.get("cf-turnstile-response");
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      startSpamCheck();
      setError("The spam check is still finishing. Please wait a moment and try again.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      // Sent as plain text because Apps Script can't answer the browser's JSON preflight.
      const res = await fetch(CALL_REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          // "name" now holds the first name only, so the Sheet's existing column still fills.
          name: formData.get("name"),
          phone,
          email,
          contact_method: contactMethod,
          session_type: sessionType,
          best_time: formData.get("best_time"),
          // The Sheet's old "reason" column gets the two choices, so they show up even before
          // the script saves contact_method and session_type in columns of their own.
          reason: [`Reach by: ${contactMethod}`, sessionType && `Session type: ${sessionType}`]
            .filter(Boolean)
            .join(". "),
          _gotcha: formData.get("_gotcha"),
          turnstile_token: turnstileToken,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Submission failed.");
      // Only the event name is counted. No form field values are ever sent with it.
      setSubmitted(true);
      onSent?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      // Each spam check token only works once, so a retry needs a new one.
      if (turnstileId.current) window.turnstile?.reset(turnstileId.current);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status">
        <div
          className="success-rise mx-auto flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "color-mix(in oklab, var(--sage) 50%, transparent)" }}
        >
          <svg
            className="success-check h-6 w-6 text-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p
          className="success-rise mt-6 font-serif text-2xl text-foreground"
          style={{ animationDelay: "180ms" }}
        >
          Thank you.
        </p>
        <p
          className="success-rise mx-auto mt-3 max-w-sm text-base text-muted-foreground"
          style={{ animationDelay: "240ms" }}
        >
          I’ll reach out soon to set up your free 15-minute consultation.
        </p>
      </div>
    );
  }

  return (
    // POST to the same Sheet script the page's code uses, so details never go in the address.
    // The browser can't submit this on its own anyway: the button is off until the script runs.
    <form
      ref={formRef}
      data-booking-form=""
      method="post"
      action={CALL_REQUEST_ENDPOINT}
      onSubmit={handleSubmit}
      onFocusCapture={startSpamCheck}
      className="space-y-4"
    >
      <Field label="First name">
        <input
          name="name"
          type="text"
          autoComplete="given-name"
          maxLength={60}
          required
          className={INPUT_CLASS}
        />
      </Field>
      <div>
        <p id={reachHintId} className="mb-2 text-sm text-muted-foreground">
          A phone number or an email is enough. You don’t need both.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Field label="Phone">
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={phoneError ? true : undefined}
                aria-describedby={phoneError ? `${reachHintId} ${phoneErrorId}` : reachHintId}
                onInput={() => setPhoneError(null)}
                className={INPUT_CLASS}
              />
            </Field>
            {phoneError && (
              <span
                id={phoneErrorId}
                role="alert"
                className="mt-1.5 block text-sm text-destructive"
              >
                {phoneError}
              </span>
            )}
          </div>
          <div>
            <Field label="Email">
              <input
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                maxLength={254}
                aria-invalid={emailError ? true : undefined}
                aria-describedby={emailError ? `${reachHintId} ${emailErrorId}` : reachHintId}
                onInvalid={(e) => {
                  // Show the message under the field instead of the browser's pop-up bubble.
                  e.preventDefault();
                  setEmailError(EMAIL_ERROR);
                  if (e.currentTarget.form?.querySelector(":invalid") === e.currentTarget) {
                    e.currentTarget.focus();
                  }
                }}
                onInput={() => {
                  setEmailError(null);
                  // Either one is enough, so an email also clears "add a phone or an email".
                  setPhoneError((current) => (current === REACH_ERROR ? null : current));
                }}
                className={INPUT_CLASS}
              />
            </Field>
            {emailError && (
              <span
                id={emailErrorId}
                role="alert"
                className="mt-1.5 block text-sm text-destructive"
              >
                {emailError}
              </span>
            )}
          </div>
        </div>
      </div>
      <fieldset aria-describedby={methodError ? methodErrorId : undefined}>
        <legend className="mb-1.5 text-sm font-medium text-foreground">
          Best way to reach you
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {CONTACT_METHODS.map((method) => (
            <label key={method} className={CHOICE_CLASS}>
              <input
                type="radio"
                name="contact_method"
                value={method}
                onChange={() => setMethodError(null)}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
        {methodError && (
          <span id={methodErrorId} role="alert" className="mt-1.5 block text-sm text-destructive">
            {methodError}
          </span>
        )}
      </fieldset>
      <fieldset>
        <legend className="mb-1.5 flex w-full items-baseline justify-between text-sm font-medium text-foreground">
          <span>Type of session</span>
          <span className="text-xs font-normal text-muted-foreground">
            <span className="sr-only"> </span>(optional)
          </span>
        </legend>
        <div className="grid grid-cols-3 gap-2">
          {SESSION_TYPES.map((type) => (
            <label key={type} className={CHOICE_CLASS}>
              <input type="radio" name="session_type" value={type} className="sr-only" />
              {type}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Best times to reach you">
        <input
          name="best_time"
          type="text"
          maxLength={100}
          placeholder="Weekday mornings, after 5 pm…"
          required
          className={INPUT_CLASS}
        />
      </Field>
      {/* Hidden from people. The Sheet script discards anything a bot fills in here. */}
      <input
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      {TURNSTILE_SITE_KEY && <div ref={turnstileBox} />}

      <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm leading-relaxed text-foreground">
        Please don’t share health details here. We’ll talk about what brings you in during your free
        15-minute consultation.
      </p>
      <button
        type="submit"
        disabled={!ready || submitting}
        className={`${BUTTON.cta} w-full disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {submitting ? "Sending…" : "Request a Call"}
      </button>
      {!ready && (
        <p className="text-center text-sm text-muted-foreground">
          Prefer not to wait for the form? Call{" "}
          <a href={PHONE_HREF} className="underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>{" "}
          or email{" "}
          <a href="mailto:attya.llc@gmail.com" className="underline underline-offset-4">
            attya.llc@gmail.com
          </a>
          .
        </p>
      )}
      {error && (
        <p role="alert" className="text-center text-sm text-destructive">
          {error} You can also call{" "}
          <a href={PHONE_HREF} className="underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
      <p className="text-center text-sm leading-relaxed text-muted-foreground">
        This form isn’t watched around the clock. If you’re in crisis, call or text{" "}
        <a href="tel:988" className="underline underline-offset-4 hover:text-foreground">
          988
        </a>{" "}
        or call 911, or{" "}
        <a href="/crisis/" className="underline underline-offset-4 hover:text-foreground">
          find 24/7 crisis help
        </a>
        .
      </p>
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        Used only to contact you about scheduling.
        {TURNSTILE_SITE_KEY && (
          <>
            {" "}
            Spam protection by{" "}
            <a
              href="https://www.cloudflare.com/turnstile-privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Cloudflare Turnstile
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}

/** A button that opens the call-back request form in a pop-up. */
export function ConsultationButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [sent, setSent] = useState(false);
  const [timesOpened, setTimesOpened] = useState(0);

  const handleOpenChange = (open: boolean) => {
    if (!open) return;
    setSent(false);
    setTimesOpened((n) => n + 1);
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button type="button" className={className} data-booking="">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border-border bg-card p-6 sm:rounded-3xl sm:p-8">
        <div className={sent ? "sr-only" : "pr-6"}>
          <LogoMark className="mb-3 h-10 w-10" />
          <DialogTitle className="font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl">
            Request a call
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Leave a way to reach you and I’ll get back to you for a free 15-minute consultation. No
            pressure and no commitment.
          </DialogDescription>
        </div>
        <ConsultationForm key={timesOpened} onSent={() => setSent(true)} />
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-foreground">
        <span>{label}</span>
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">
            <span className="sr-only"> </span>(optional)
          </span>
        )}
      </span>
      {children}
    </label>
  );
}
