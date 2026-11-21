/**
 * Switches between the English and Arabic version of the same page. `lang` and `hrefLang` tell
 * browsers and search engines which language the link leads to.
 */
export function LanguageToggle({
  href,
  to,
  className = "",
  compact = false,
}: {
  href: string;
  to: "en" | "ar";
  className?: string;
  /** Phones: a round 44px button showing only the first letter. */
  compact?: boolean;
}) {
  const label = to === "ar" ? "العربية" : "English";
  if (compact) {
    return (
      <a
        href={href}
        lang={to}
        hrefLang={to}
        aria-label={
          to === "ar" ? "العربية (Arabic version of this page)" : "English (النسخة الإنجليزية)"
        }
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card font-serif text-lg text-foreground ${className}`}
      >
        {to === "ar" ? "ع" : "En"}
      </a>
    );
  }
  return (
    <a
      href={href}
      lang={to}
      hrefLang={to}
      className={`inline-flex min-h-11 items-center rounded-full border border-input/60 bg-card px-4 text-base text-foreground transition-colors hover:border-foreground ${className}`}
    >
      {label}
      <span className="sr-only">
        {to === "ar" ? " (Arabic version of this page)" : " (النسخة الإنجليزية)"}
      </span>
    </a>
  );
}
