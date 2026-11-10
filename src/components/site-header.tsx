import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { VisitStatisticsNote } from "@/components/analytics";
import { ConsultationButton } from "@/components/consultation-dialog";
import { BUTTON } from "@/components/ds/buttons";
import { Logo } from "@/components/logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export { PHONE_DISPLAY, PHONE_HREF };

// Root-relative so the same links work from the crisis page.
const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach" },
  { label: "Fees", href: "/#fees" },
  { label: "Resources", href: "/resources/" },
  { label: "FAQ", href: "/#faq" },
  { label: "New Clients", href: "/new-clients/" },
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
        <div className="hidden flex-shrink-0 items-center gap-5 whitespace-nowrap text-sm text-muted-foreground lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <ConsultationButton className={BUTTON.ctaSmall}>Request a Call</ConsultationButton>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={PHONE_HREF}
            className={`${BUTTON.ctaSmall} px-4`}
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-background"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex justify-end px-6 py-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card"
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
                  className="inline-flex min-h-12 items-center font-serif text-4xl font-light transition-colors hover:text-cta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-3 px-10 pb-12">
            <ConsultationButton className={BUTTON.cta}>Request a Call</ConsultationButton>
            <a
              href={PHONE_HREF}
              className="flex min-h-11 items-center gap-2.5 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <p className="text-sm text-muted-foreground">
              Free 15-minute consultation · $100 per session · Reduced rates available
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
            <a
              href="mailto:attya.llc@gmail.com"
              className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
            >
              attya.llc@gmail.com
            </a>
            {" · "}
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="mt-2">
            <a
              href="/arabic-counseling/"
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Counseling in Arabic
            </a>
            {" · "}
            <a
              href="/outdoor-counseling/"
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Outdoor sessions
            </a>
            {" · "}
            <a
              href="/telehealth-counseling/"
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Telehealth
            </a>
          </p>
          <p className="mt-2">
            <a
              href={PSYCHOLOGY_TODAY_URL}
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Psychology Today profile
            </a>
          </p>
          <p className="mt-2">
            <a
              href="/crisis/"
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              In crisis? Find 24/7 help
            </a>
          </p>
          <p className="mt-2 text-xs">
            LPC Associate #104391 · Supervised by Don Zablosky, LPC-S ·{" "}
            <a
              href={LICENSE_VERIFY_URL}
              className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Verify license
            </a>
          </p>
          <p className="mt-1 text-xs">© {new Date().getFullYear()} Attya LLC.</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <NoticeToClients className="text-xs" />
        <VisitStatisticsNote className="mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground" />
      </div>
    </footer>
  );
}

export const PSYCHOLOGY_TODAY_URL =
  "https://www.psychologytoday.com/us/therapists/sarah-ateia-khattab-supervised-by-don-zablosky-l-irving-tx/1869085";

export const LICENSE_VERIFY_URL = "https://vo.licensing.hpc.texas.gov/datamart/selSearchType.do";

/** Complaint-process notice required by 22 TAC §884.31, with the Council's contact details. */
export function NoticeToClients({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card/60 p-5 leading-relaxed text-muted-foreground ${className}`}
    >
      <p className="font-medium uppercase tracking-[0.16em] text-foreground">Notice to clients</p>
      <p className="mt-2">
        The Texas Behavioral Health Executive Council investigates and prosecutes professional
        misconduct committed by marriage and family therapists, professional counselors,
        psychologists, psychological associates, social workers, and licensed specialists in school
        psychology. Although not every complaint against or dispute with a licensee involves
        professional misconduct, the Executive Council will provide you with information about how
        to file a complaint. Please call{" "}
        <a href="tel:+18008213205" className="underline underline-offset-4">
          1-800-821-3205
        </a>{" "}
        for more information.
      </p>
      <p className="mt-2">
        Texas Behavioral Health Executive Council · 1801 Congress Ave., Ste. 7.300, Austin, Texas
        78701 · (512) 305-7700 ·{" "}
        <a href="https://bhec.texas.gov/" className="underline underline-offset-4">
          bhec.texas.gov
        </a>
      </p>
    </div>
  );
}
