import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-dialog";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { BUTTON } from "@/components/ds/buttons";

/**
 * The two ways to book, side by side: request a call-back, or call now.
 * `requestHref` jumps to a form on the page; without it, the request opens the pop-up form.
 */
export function BookingActions({
  requestHref,
  className = "",
}: {
  requestHref?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      {requestHref ? (
        <a href={requestHref} className={BUTTON.cta}>
          Request a Call
        </a>
      ) : (
        <ConsultationButton className={BUTTON.cta}>Request a Call</ConsultationButton>
      )}
      <a href={PHONE_HREF} className={BUTTON.secondary}>
        <Phone className="h-4 w-4" aria-hidden />
        Call {PHONE_DISPLAY}
      </a>
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
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-3 font-serif text-[2rem] leading-[1.15] text-foreground sm:text-[2.6rem]"
      >
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}

/**
 * Phone-only bar with the two booking actions. It appears after the hero scrolls away and
 * hides again while a booking form or the booking section is on screen.
 */
export function StickyCallBar() {
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
        <ConsultationButton className={`${BUTTON.cta} flex-1 px-4`}>
          Request a Call
        </ConsultationButton>
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
