import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { BUTTON } from "@/components/ds/buttons";
import {
  CALL_REQUEST_ENDPOINT,
  TURNSTILE_SITE_KEY,
  isValidEmail,
  loadTurnstile,
} from "@/lib/call-request";
import {
  LICENSE_VERIFY_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SiteFooter,
  SiteHeader,
} from "@/components/site-header";

export const Route = createFileRoute("/referral-partners")({
  component: ReferralPartners,
});

const H2 = "mt-14 font-serif text-2xl leading-snug text-foreground sm:text-3xl";
const P = "mt-4 text-base leading-relaxed text-muted-foreground";
const UL =
  "mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-taupe";
const A = "underline underline-offset-4 hover:text-foreground";

const AUDIENCES = [
  {
    title: "Family law and divorce attorneys",
    body: "Clients going through divorce, separation or co-parenting changes often need a steady place to handle stress, grief and big decisions outside the legal process.",
  },
  {
    title: "Personal injury attorneys",
    body: "After an accident or injury, clients may be dealing with anxiety, low mood, poor sleep or a hard adjustment to daily life while their case moves forward.",
  },
  {
    title: "Plastic and cosmetic surgeons",
    body: "Some patients want support with body image, nerves before a procedure, or adjusting to how they look and feel during recovery.",
  },
  {
    title: "Physicians, financial advisors and other professionals",
    body: "Anyone whose clients are under stress, facing a life transition, or asking for a counselor who can see them soon and in a format that fits their schedule.",
  },
];

const STEPS = [
  {
    title: "Your client reaches out",
    body: `The simplest way: give them my number, ${PHONE_DISPLAY}, or this website. They book a free 15-minute call themselves, so they stay in control of what they share and when.`,
  },
  {
    title: "Free 15-minute consultation",
    body: "We talk about what they’re looking for and whether we’re a good fit. If I’m not the right person, I’ll help them think about other options.",
  },
  {
    title: "Counseling begins",
    body: "Sessions are self-pay, in person outdoors in Dallas–Fort Worth or by telehealth anywhere in Texas. Your client receives a Good Faith Estimate before services start.",
  },
];

/**
 * For attorneys, surgeons and other professionals who refer private-pay clients. What Sarah can
 * and can't do is stated plainly here, because referrers need to know before they send someone:
 * talk therapy only, no evaluations, letters for court or surgery, or testing.
 */
function ReferralPartners() {
  useEffect(() => {
    document.title = "Counselor Referrals for Attorneys & Surgeons | DFW";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-44 max-[340px]:pt-48 pb-20 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
            Home
          </a>
        </nav>
        <p className="mt-4 text-sm font-semibold text-clay">For referring professionals</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Referring a client for counseling
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S. I offer self-pay talk
          therapy for adults: walk and talk sessions outdoors in Irving and across Dallas–Fort
          Worth, and telehealth anywhere in Texas, in English or Arabic. If you work with clients or
          patients who could use counseling, this page explains how referrals work and what I can
          and can’t do.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#referral-form" className={BUTTON.cta}>
            Introduce yourself
          </a>
          <a href={PHONE_HREF} className={BUTTON.secondary}>
            <Phone className="h-4 w-4" aria-hidden />
            Call {PHONE_DISPLAY}
          </a>
        </div>

        <h2 className={H2}>Who I work with</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {AUDIENCES.map((item) => (
            <li key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-lg text-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
        <p className={P}>
          Common reasons people come to counseling include{" "}
          <a href="/anxiety-therapy-dallas/" className={A}>
            anxiety
          </a>
          ,{" "}
          <a href="/depression-counseling-dallas/" className={A}>
            low mood
          </a>
          , stress, grief, relationship changes and life transitions.
        </p>

        <h2 className={H2}>What I offer referring professionals</h2>
        <ul className={UL}>
          <li>
            A quick response. I return calls from referring professionals within one business day,
            and free consultation calls with clients are available daily.
          </li>
          <li>
            Flexible formats.{" "}
            <a href="/walk-and-talk-therapy-dallas/" className={A}>
              Walk and talk sessions
            </a>{" "}
            outdoors in Dallas–Fort Worth, or{" "}
            <a href="/telehealth-counseling-texas/" className={A}>
              telehealth
            </a>{" "}
            for clients located anywhere in Texas.
          </li>
          <li>
            Sessions in English or{" "}
            <a href="/arabic-counseling/" className={A}>
              Arabic
            </a>
            .
          </li>
          <li>
            Clear, self-pay pricing: $100 per session, with packages of 6 for $540 or 8 for $640.
            Reduced rates are available based on need. See{" "}
            <a href="/affordable-therapy-dallas/" className={A}>
              affordable therapy
            </a>
            .
          </li>
          <li>
            With your client’s written permission, I can confirm they’ve connected with me and
            coordinate with you. Without it, I can’t confirm whether someone is a client.
          </li>
        </ul>

        <h2 className={H2}>How referrals work</h2>
        <ol className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-3xl text-taupe">{i + 1}</p>
              <p className="mt-2 font-serif text-lg text-foreground">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className={P}>
          Your client can read{" "}
          <a href="/resources/free-counseling-consultation/" className={A}>
            what happens in the free consultation
          </a>{" "}
          and{" "}
          <a href="/new-clients/" className={A}>
            the forms they’ll sign
          </a>{" "}
          ahead of time.
        </p>

        <h2 className={H2}>What I don’t provide</h2>
        <p className={P}>
          I provide talk therapy only. So that you can refer with the right expectations, I don’t
          offer:
        </p>
        <ul className={UL}>
          <li>
            Custody evaluations, forensic evaluations, or reports or recommendations for court
          </li>
          <li>Expert witness services</li>
          <li>Psychological testing, assessments or evaluations</li>
          <li>Surgical clearance or “psychological readiness” letters</li>
          <li>Diagnosis, medication or prescriptions</li>
        </ul>
        <p className={P}>
          If a matter or procedure needs one of these, a psychologist, psychiatrist or forensic
          specialist is the right referral. Counseling records are confidential and are released
          only with the client’s written authorization or when the law requires it.
        </p>
        <p className={P}>
          I don’t pay or accept referral fees or anything of value for referrals, and I don’t make
          promises about outcomes. Because I’m an LPC Associate, I practice under the supervision of
          Don Zablosky, LPC-S, LMFT-S, NCC.{" "}
          <a href="/resources/what-is-an-lpc-associate/" className={A}>
            What an LPC Associate is
          </a>
          , or{" "}
          <a href={LICENSE_VERIFY_URL} className={A}>
            verify my license (#104391)
          </a>
          .
        </p>

        <section
          id="referral-form"
          aria-labelledby="referral-form-heading"
          className="mt-14 scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <h2
            id="referral-form-heading"
            className="font-serif text-2xl leading-snug text-foreground sm:text-3xl"
          >
            Introduce yourself
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Leave your details and I’ll call you to talk about how I work and whether I’m a good fit
            for the people you serve. This form is for professionals only. If you’re looking for
            counseling yourself,{" "}
            <a href="/" className={A}>
              start here
            </a>
            .
          </p>
          <ReferralForm />
        </section>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Learn more{" "}
          <a href="/about/" className={A}>
            about Sarah
          </a>
          , her{" "}
          <a href="/holistic-counseling/" className={A}>
            holistic, mind-body approach
          </a>
          , or{" "}
          <a href="/counseling-irving-tx/" className={A}>
            counseling in Irving
          </a>
          .
        </p>
        <p className="mt-6 text-sm text-muted-foreground">
          If someone is in crisis, they can call or text 988, call 911, or{" "}
          <a href="/crisis/" className={A}>
            find 24/7 help
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

const PROFESSIONS = ["Attorney", "Medical", "Other"] as const;

const CHOICE_CLASS =
  "flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-input bg-card px-2 text-center text-[1rem] leading-tight text-foreground transition-colors hover:border-foreground has-[:checked]:border-cta has-[:checked]:bg-primary has-[:checked]:font-semibold has-[:checked]:text-primary-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-cta/40";

/**
 * Asks only for the referrer's own contact details. There is deliberately no field for a client's
 * name or anything about a client. Saved to the same "Call Requests" Sheet as the consultation
 * form, marked "Referral partner" so the two are easy to tell apart.
 */
function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<{ field: string; message: string } | null>(null);
  const [ready, setReady] = useState(false);
  const turnstileBox = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | undefined>(undefined);
  const turnstileStarted = useRef(false);

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

  useEffect(() => {
    setReady(true);
    return () => {
      if (turnstileId.current) window.turnstile?.remove(turnstileId.current);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const name = get("name");
    const organization = get("organization");
    const profession = get("profession");
    const phone = get("phone");
    const email = get("email");
    setFieldError(null);
    const fail = (field: string, message: string) => {
      setFieldError({ field, message });
      form.querySelector<HTMLInputElement>(`input[name="${field}"]`)?.focus();
    };

    if (phone.replace(/\D/g, "").length < 10)
      return fail("phone", "Please enter a 10-digit phone number.");
    if (!isValidEmail(email)) return fail("email", "Please check your email address.");

    const turnstileToken = data.get("cf-turnstile-response");
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      startSpamCheck();
      setError("The spam check is still finishing. Please wait a moment and try again.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(CALL_REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          // Uses the Sheet's existing columns, so nothing on the Sheet side needs to change.
          name: `Referral partner: ${name}`,
          phone,
          email,
          contact_method: "Call",
          session_type: "",
          best_time: get("best_time"),
          reason: [
            "Referral partner",
            profession && `Profession: ${profession}`,
            organization && `Firm or practice: ${organization}`,
          ]
            .filter(Boolean)
            .join(". "),
          _gotcha: data.get("_gotcha"),
          turnstile_token: turnstileToken,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) throw new Error(result.error ?? "Submission failed.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      if (turnstileId.current) window.turnstile?.reset(turnstileId.current);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-6 rounded-2xl bg-secondary/50 p-6 text-center" role="status">
        <p className="font-serif text-2xl text-foreground">Thank you.</p>
        <p className="mt-2 text-base text-muted-foreground">
          I’ll call you at the time you suggested, usually within one business day.
        </p>
      </div>
    );
  }

  const errorFor = (field: string) =>
    fieldError?.field === field ? (
      <span
        id={`ref-${field}-error`}
        role="alert"
        className="mt-1.5 block text-sm text-destructive"
      >
        {fieldError.message}
      </span>
    ) : null;
  const describedBy = (field: string) =>
    fieldError?.field === field ? `ref-${field}-error` : undefined;

  return (
    <form
      method="post"
      action={CALL_REQUEST_ENDPOINT}
      onSubmit={handleSubmit}
      onFocusCapture={startSpamCheck}
      className="mt-6 space-y-4"
    >
      <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm leading-relaxed text-foreground">
        Please don’t include client or patient names or any details about a client here. Just your
        own contact information.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Your name">
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            className="ds-input"
          />
        </Field>
        <Field label="Firm or practice" optional>
          <input
            name="organization"
            type="text"
            autoComplete="organization"
            maxLength={100}
            className="ds-input"
          />
        </Field>
      </div>
      <fieldset>
        <legend className="mb-1.5 text-sm font-medium text-foreground">Your field</legend>
        <div className="grid grid-cols-3 gap-2">
          {PROFESSIONS.map((profession) => (
            <label key={profession} className={CHOICE_CLASS}>
              <input
                type="radio"
                name="profession"
                value={profession}
                required
                className="sr-only"
              />
              {profession}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Field label="Phone">
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-invalid={fieldError?.field === "phone" ? true : undefined}
              aria-describedby={describedBy("phone")}
              onInput={() => setFieldError(null)}
              className="ds-input"
            />
          </Field>
          {errorFor("phone")}
        </div>
        <div>
          <Field label="Email" optional>
            <input
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              maxLength={254}
              aria-invalid={fieldError?.field === "email" ? true : undefined}
              aria-describedby={describedBy("email")}
              onInput={() => setFieldError(null)}
              className="ds-input"
            />
          </Field>
          {errorFor("email")}
        </div>
      </div>
      <Field label="Best time to call">
        <input
          name="best_time"
          type="text"
          maxLength={100}
          placeholder="Weekdays after 4 pm…"
          required
          className="ds-input"
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
      <button
        type="submit"
        disabled={!ready || submitting}
        className={`${BUTTON.soft} w-full disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {submitting ? "Sending…" : "Send"}
      </button>
      {error && (
        <p role="alert" className="text-center text-sm text-destructive">
          {error} You can also call{" "}
          <a href={PHONE_HREF} className="underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        Used only to call you back about referrals.
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
