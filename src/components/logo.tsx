/**
 * The logo mark. "Attya" means a gift, or one who gives: two open, rooted hands hold a
 * stem that blossoms into an orchid.
 */
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <g fill="none" stroke="var(--taupe)" strokeLinecap="round">
        <path d="M24 41.5c-.4 2.4.4 4.4-.2 7.5" strokeWidth="1.5" />
        <path
          d="M23.9 43.4c-2.4.3-4.4 1.7-5.6 4.1M24.1 43.4c2.4.3 4.4 1.7 5.6 4.1"
          strokeWidth="1.3"
        />
        <path
          d="M20.4 45.3c-1.9-.4-3.7 0-5.2 1M27.6 45.3c1.9-.4 3.7 0 5.2 1M23.9 46.4c-1 .5-1.7 1.3-2 2.3"
          strokeWidth="1"
        />
        <path d="M24 34c0-7 .6-12.5 0-18" strokeWidth="1.8" />
      </g>
      <path d="M24 31c-5-.3-8-3.4-8-7.6 4.4 0 8 2.9 8 7.6Z" fill="var(--sage)" />
      <path d="M24 28.5c4.6-.4 7.4-3.7 7.4-7.9-4.4.1-7.4 3.3-7.4 7.9Z" fill="var(--taupe)" />
      <path
        d="M23.4 42.5C14 42.3 6.5 36.5 5 26c-.2-1.8 1.8-2.6 2.8-1.2l3.7 5.2c.7-1.8 2.1-2.6 3.5-2.2 1.2.4 1.4 1.8.8 3l-1.2 2.2c2.4 2 5.4 3 8.8 3.2Z"
        fill="var(--sage)"
      />
      <path
        d="M24.6 42.5C34 42.3 41.5 36.5 43 26c.2-1.8-1.8-2.6-2.8-1.2l-3.7 5.2c-.7-1.8-2.1-2.6-3.5-2.2-1.2.4-1.4 1.8-.8 3l1.2 2.2c-2.4 2-5.4 3-8.8 3.2Z"
        fill="var(--taupe)"
      />
      <g transform="translate(24 11) scale(1.2) translate(-24 -11)">
        <path
          d="M24 11c-1.3-2.4-1.4-5.4 0-7.6 1.4 2.2 1.3 5.2 0 7.6Z"
          transform="rotate(135 24 11)"
          fill="#fcf6ea"
          stroke="var(--terracotta)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 11c-1.3-2.4-1.4-5.4 0-7.6 1.4 2.2 1.3 5.2 0 7.6Z"
          transform="rotate(-135 24 11)"
          fill="#fcf6ea"
          stroke="var(--terracotta)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 11c-1.3-2.4-1.4-5.4 0-7.6 1.4 2.2 1.3 5.2 0 7.6Z"
          fill="#fcf6ea"
          stroke="var(--terracotta)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 11c-1.4-4.4-7.4-5.8-9.3-2.5-1.6 2.9 2.4 5.6 9.3 2.5Z"
          fill="#fcf6ea"
          stroke="var(--terracotta)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 11c1.4-4.4 7.4-5.8 9.3-2.5 1.6 2.9-2.4 5.6-9.3 2.5Z"
          fill="#fcf6ea"
          stroke="var(--terracotta)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 11c-1.2.2-2.6.9-3.2 2-.4.8.2 1.4.9 1.2.3 1.5 1.3 2.6 2.3 2.6s2-1.1 2.3-2.6c.7.2 1.3-.4.9-1.2-.6-1.1-2-1.8-3.2-2Z"
          fill="var(--terracotta)"
        />
        <circle cx="24" cy="10.8" r="0.9" fill="var(--taupe)" />
      </g>
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
