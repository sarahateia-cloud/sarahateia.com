/** Button looks shared across the site. Every one is at least 44px tall and presses in slightly when tapped. */
const BASE =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[0.005em] transition-[color,background-color,border-color,transform] duration-200 ease-[var(--ease-out)] active:scale-[0.97] motion-reduce:active:scale-100";

export const BUTTON = {
  /** The booking color. Only for "Book a Free Call" and other booking actions. */
  cta: `${BASE} min-h-12 px-7 text-base bg-cta text-cta-foreground hover:bg-cta-hover`,
  /** Quieter partner to the booking button, such as "Call (972) 482-9526". */
  secondary: `${BASE} min-h-12 px-7 text-base border border-input/70 bg-card text-foreground shadow-[var(--edge-light)] hover:border-foreground hover:bg-background`,
  /** Soft sage pill for non-booking actions inside tools and cards, such as "Start" or "Next". */
  soft: `${BASE} min-h-12 px-6 text-base border border-transparent bg-primary text-primary-foreground hover:border-primary-foreground/30`,
  /** Text-only action, for "Back" or "Start over". Still 44px tall. */
  quiet: `${BASE} min-h-11 px-3 text-base font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground`,
  /** Compact booking button for the header. */
  ctaSmall: `${BASE} min-h-11 px-5 text-sm bg-cta text-cta-foreground hover:bg-cta-hover`,
};
