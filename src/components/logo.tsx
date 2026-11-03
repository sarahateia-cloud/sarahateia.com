/** The logo mark: a sprout growing inside an open arch, with a small warm sun. */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M11 41V23a13 13 0 0 1 26 0v18"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M7 41h34" stroke="var(--primary)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="30.5" cy="17" r="2.6" fill="var(--terracotta)" />
      <path d="M24 41V27" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 33c-5.5-.3-8.5-3.6-8.5-8 4.6 0 8.5 3 8.5 8Z" fill="var(--sage)" />
      <path d="M24 29.5c5-.4 8-4 8-8.5-4.8.1-8 3.6-8 8.5Z" fill="var(--primary)" />
    </svg>
  );
}

/** Mark plus wordmark, used in the header and footer. */
export function Logo({ tagline = true }: { tagline?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark className="h-10 w-10 flex-shrink-0 sm:h-11 sm:w-11" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-tight text-foreground sm:text-[1.35rem]">
          Sarah Ateia Khattab
        </span>
        {tagline && (
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground">
            Counseling · LPC Associate
          </span>
        )}
      </span>
    </span>
  );
}
