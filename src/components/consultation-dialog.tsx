import { useState } from "react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

// Google Apps Script web app that saves each request to the "Call Requests" Sheet.
const CALL_REQUEST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxX5Nf0xY_yfHNPQuIbxQ12k9ugFAJbCcNNS_DABaqw4CXt_vH9Mc6R3UnePhyukbHk/exec";

const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground transition placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 sm:text-sm";

/** The call-back request form, used at the top of the home page and in the pop-up. */
export function ConsultationForm({ onSent }: { onSent?: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = String(formData.get("phone") ?? "");
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a 10-digit phone number so I can call you back.");
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
          name: formData.get("name"),
          phone,
          best_time: formData.get("best_time"),
          reason: formData.get("reason"),
          _gotcha: formData.get("_gotcha"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Submission failed.");
      setSubmitted(true);
      onSent?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "color-mix(in oklab, var(--sage) 50%, transparent)" }}
        >
          <svg
            className="h-6 w-6 text-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-6 font-serif text-2xl text-foreground">Thank you.</p>
        <p className="mx-auto mt-3 max-w-sm text-base text-muted-foreground">
          I’ll call you soon for your free 15-minute consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" type="text" autoComplete="name" required className={INPUT_CLASS} />
        </Field>
        <Field label="Phone number">
          <input name="phone" type="tel" autoComplete="tel" required className={INPUT_CLASS} />
        </Field>
      </div>
      <Field label="Best time to call">
        <input
          name="best_time"
          type="text"
          placeholder="Weekday mornings, after 5 pm…"
          required
          className={INPUT_CLASS}
        />
      </Field>
      <Field label="Reason for reaching out" optional>
        <textarea
          name="reason"
          rows={2}
          maxLength={200}
          placeholder="A few words is plenty."
          className={`${INPUT_CLASS} resize-none`}
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

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request a Call"}
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
        Used only to contact you about scheduling. Please save private health details for our call.
        This form isn’t watched around the clock. If you’re in crisis, call or text 988, or call
        911.
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
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border-border bg-card p-6 sm:rounded-3xl sm:p-8">
        <div className={sent ? "sr-only" : "pr-6"}>
          <DialogTitle className="font-serif text-2xl font-normal leading-tight text-foreground sm:text-3xl">
            Request a call
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Leave your details and I’ll call you back for a free 15-minute consultation. No pressure
            and no commitment.
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
        {optional && <span className="text-xs font-normal text-muted-foreground">optional</span>}
      </span>
      {children}
    </label>
  );
}
