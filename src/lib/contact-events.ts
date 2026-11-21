// Vercel Web Analytics plus four contact counts. Only an event's name is ever sent: never what
// someone typed, which number or address they tapped, or anything else about them.
//
// It runs only when the site is built on Vercel (previews today). The live site is on GitHub
// Pages, which can't serve Vercel's script, so there it never loads. Wherever it runs, it waits
// for the same Accept as Google Analytics and never counts the private pages.
import { inject, track } from "@vercel/analytics";
import { PHONE_HREF } from "@/lib/contact";

declare const __VERCEL_ANALYTICS__: boolean;

export type ContactEvent =
  | "consult_request_submitted"
  | "phone_click"
  | "email_click"
  | "booking_click";

let started = false;

/** Counts one contact event by name only, if Vercel Web Analytics is running. */
export function countEvent(name: ContactEvent) {
  if (started) track(name);
}

/** Starts Vercel Web Analytics once. `allowed` is checked again before every send. */
export function startVercelAnalytics({
  allowed,
  isPrivatePath,
}: {
  allowed: () => boolean;
  isPrivatePath: (path: string) => boolean;
}) {
  if (!__VERCEL_ANALYTICS__ || started || typeof window === "undefined") return;
  started = true;
  inject({
    framework: "react",
    // The page address only: nothing after "?" or "#", and nothing at all from private pages.
    beforeSend: (event) => {
      if (!allowed()) return null;
      const url = new URL(event.url);
      if (isPrivatePath(url.pathname)) return null;
      return { ...event, url: url.origin + url.pathname };
    },
  });
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target instanceof Element ? e.target : null;
      // Booking buttons open the request form, or jump to it on the home page.
      if (target?.closest("[data-booking]")) return countEvent("booking_click");
      const href = target?.closest("a[href]")?.getAttribute("href") ?? "";
      // Only Sarah's own number. Taps on 988, 911 and other crisis lines are never counted.
      if (href === PHONE_HREF) countEvent("phone_click");
      else if (href.startsWith("mailto:")) countEvent("email_click");
    },
    { capture: true },
  );
}
