import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";

export const PHONE_DISPLAY = "(972) 482-9526";
export const PHONE_HREF = "tel:+19724829526";

// Root-relative so the same links work from the crisis page.
const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach" },
  { label: "Fees", href: "/#fees" },
  { label: "FAQ", href: "/#faq" },
  { label: "Crisis Resources", href: "/crisis/" },
];

/** `dark` styles the header for the dark hero it sits over. */
export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`absolute top-0 left-0 right-0 z-30 ${dark ? "holo-scope" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:py-8">
        <a href="/" aria-label="Sarah Ateia Khattab, home">
          <Logo />
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a
            href="/#consult"
            className="btn-shine rounded-full bg-primary px-5 py-2 text-primary-foreground transition hover:-translate-y-0.5"
          >
            Free 15-min Consultation
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground"
          >
            <Phone className="h-3 w-3" aria-hidden />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground"
          >
            <Menu className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="holo-scope holo-bg holo-grid fixed inset-0 z-40 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex justify-end px-6 py-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="glass flex h-10 w-10 items-center justify-center rounded-full"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-6 px-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl font-light transition hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3 px-10 pb-12">
            <a
              href={PHONE_HREF}
              className="btn-shine inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <p className="text-sm text-muted-foreground">
              Free 15-minute consultation · Sliding scale $60–$100 per hour
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="holo-scope holo-bg">
      <div className="gold-rule" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo tagline={false} />
          <p className="mt-3 text-sm text-muted-foreground">M.S., LPC Associate, NCC</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Irving, Texas · Outdoor sessions in Dallas–Fort Worth · Telehealth across Texas
          </p>
          <p className="mt-2 max-w-md text-xs text-muted-foreground">
            Serving Irving, Las Colinas, Coppell, Grand Prairie, Carrollton, Farmers Branch, Dallas,
            Fort Worth, Arlington, Garland, Mesquite, and Wilmer.
          </p>
        </div>
        <div className="text-sm text-muted-foreground sm:text-right">
          <p>
            <a href="mailto:attya.llc@gmail.com" className="transition hover:text-foreground">
              attya.llc@gmail.com
            </a>
            {" · "}
            <a href={PHONE_HREF} className="transition hover:text-foreground">
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">
            <a
              href="/crisis/"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              In crisis? Find 24/7 help
            </a>
          </p>
          <p className="mt-2 text-xs">LPC Associate #104391 · Supervised by Don Zablosky, LPC-S</p>
          <p className="mt-1 text-xs">© {new Date().getFullYear()} Attya LLC.</p>
        </div>
      </div>
    </footer>
  );
}
