import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-dialog";
import {
  BOOKING_URL,
  CONSULT_HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SESSION_BOOKING_URL,
  SESSION_HOURS,
  SESSION_SMS_HREF,
} from "@/lib/contact";
import { BUTTON } from "@/components/ds/buttons";

/** Opens the free consultation booking page on Calendly in a new tab. */
export function BookCallLink({ className, children }: { className: string; children: ReactNode }) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener" className={className}>
      {children}
      <span className="sr-only"> (opens Calendly in a new tab)</span>
    </a>
  );
}

const QUIET_LINK =
  "inline-flex min-h-11 items-center text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground";

/**
 * The ways to book: pick a time for the free call, or call now, with a quieter option to ask for
 * a call-back. `requestHref` jumps to a form on the page; without it, the call-back opens the
 * pop-up form.
 */
export function BookingActions({
  requestHref,
  center = false,
  className = "",
}: {
  requestHref?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${center ? "items-center" : "items-start"} ${className}`}>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <BookCallLink className={BUTTON.cta}>Book a Free Call</BookCallLink>
        <a href={PHONE_HREF} className={BUTTON.secondary}>
          <Phone className="h-4 w-4" aria-hidden />
          Call {PHONE_DISPLAY}
        </a>
      </div>
      <p className="text-sm text-muted-foreground">{CONSULT_HOURS}</p>
      {requestHref ? (
        <a href={requestHref} className={BUTTON.cta} data-booking="">
          Request a Call
        </a>
      ) : (
        <ConsultationButton className={QUIET_LINK}>Or ask me to call you</ConsultationButton>
      )}
    </div>
  );
}

/** Small label, calm serif title, and optional intro, used to open every section. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  id?: string;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-semibold text-clay">{eyebrow}</p>}
      <h2
        id={id}
        className="mt-3 font-serif text-[2rem] leading-[1.12] text-foreground sm:text-[2.6rem]"
      >
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

/**
 * Phone-only bar with the two booking actions. It appears after the hero scrolls away and
 * hides again while a booking form or the booking section is on screen.
 */
export function StickyCallBar({ bookLabel = "Book a Free Call" }: { bookLabel?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Each page marks its opening section "top" and its booking areas below.
    const hero = document.getElementById("top");
    const targets = ["request-call", "consult"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!hero || !("IntersectionObserver" in window)) return;
    const visible = new Map<Element, boolean>();
    const update = () => {
      const heroVisible = visible.get(hero) ?? true;
      const bookingVisible = targets.some((t) => visible.get(t));
      setShow(!heroVisible && !bookingVisible);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) visible.set(e.target, e.isIntersecting);
      update();
    });
    [hero, ...targets].forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="sticky-call fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
      data-show={show}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <BookCallLink className={`${BUTTON.cta} flex-1 px-4`}>{bookLabel}</BookCallLink>
        <a
          href={PHONE_HREF}
          className={`${BUTTON.secondary} px-5`}
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call
        </a>
      </div>
    </div>
  );
}

/**
 * Booking for current clients: people who've had the free call and signed consent forms.
 * Shows a scheduler button once SESSION_BOOKING_URL is set; until then, text or call to book.
 */
export function CurrentClientBooking({ className = "" }: { className?: string }) {
  return (
    <section
      id="book-session"
      aria-labelledby="book-session-heading"
      className={`scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-8 ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Current clients
      </p>
      <h2
        id="book-session-heading"
        className="mt-2 font-serif text-2xl text-foreground sm:text-3xl"
      >
        Book your next session.
      </h2>
      <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">
        For clients who’ve had their free consultation and signed their consent forms. New here?{" "}
        <BookCallLink className="underline underline-offset-4 hover:text-foreground">
          Start with a free call
        </BookCallLink>
        .
      </p>
      {SESSION_HOURS.length > 0 && (
        <div className="mt-5">
          <h3 className="text-sm font-medium text-foreground">Session availability</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {SESSION_HOURS.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {SESSION_BOOKING_URL ? (
          <a href={SESSION_BOOKING_URL} target="_blank" rel="noopener" className={BUTTON.cta}>
            Book a session
            <span className="sr-only"> (opens the scheduler in a new tab)</span>
          </a>
        ) : (
          <a href={SESSION_SMS_HREF} className={BUTTON.cta}>
            <MessageSquare className="h-4 w-4" aria-hidden />
            Text to book a session
          </a>
        )}
        <a href={PHONE_HREF} className={BUTTON.secondary}>
          <Phone className="h-4 w-4" aria-hidden />
          Call {PHONE_DISPLAY}
        </a>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Payment is due before each session starts. Please keep texts to scheduling and save anything
        personal for our session.
      </p>
    </section>
  );
}
