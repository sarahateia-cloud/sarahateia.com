/** Button looks shared across the site. Every one is at least 44px tall. */
const BASE =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-colors duration-200";

export const BUTTON = {
  /** The booking color. Only for "Request a Call" and other booking actions. */
  cta: `${BASE} min-h-12 px-7 text-base bg-cta text-cta-foreground hover:bg-cta-hover`,
  /** Quieter partner to the booking button, such as "Call (972) 482-9526". */
  secondary: `${BASE} min-h-12 px-7 text-base border border-foreground/20 bg-card text-foreground hover:border-foreground/40`,
  /** Compact booking button for the header. */
  ctaSmall: `${BASE} min-h-11 px-5 text-sm bg-cta text-cta-foreground hover:bg-cta-hover`,
};
