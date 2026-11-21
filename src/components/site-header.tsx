import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { VisitStatisticsNote } from "@/components/analytics";
import { ConsultationButton } from "@/components/consultation-dialog";
import { BUTTON } from "@/components/ds/buttons";
import { Logo } from "@/components/logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { FOOTER_AREAS, FOOTER_RESOURCES, SERVICES } from "@/content/services";

export { PHONE_DISPLAY, PHONE_HREF };

// Root-relative so the same links work from the crisis page. `menuOnly` links stay in the mobile
// menu and footer but are left out of the desktop bar, which has no room once Services is added.
const NAV_LINKS: { label: string; href: string; menuOnly?: boolean }[] = [
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#approach", menuOnly: true },
  { label: "Fees", href: "/#fees" },
  { label: "Resources", href: "/resources/" },
  { label: "Screening Tools", href: "/screening-tools/", menuOnly: true },
  { label: "FAQ", href: "/#faq" },
  { label: "New Clients", href: "/new-clients/" },
  { label: "Crisis Resources", href: "/crisis/" },
];

/** `dark` styles the header for the dark hero it sits over. */
export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const services = useRef<HTMLDetailsElement>(null);

  // Close the Services list on a click outside it or on Escape, like any other menu.
  useEffect(() => {
    const close = (e: Event) => {
      const el = services.current;
      if (!el?.open) return;
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !el.contains(e.target as Node)) {
        el.open = false;
      }
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    // While the menu is open the header rises above everything, including the visit-counting question.
    <header
      className={`absolute top-0 left-0 right-0 ${open ? "z-[60]" : "z-30"} ${dark ? "holo-scope" : ""}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:py-8">
        <a href="/" aria-label="Sarah Ateia Khattab, home" className="lg:min-w-64">
          <Logo />
        </a>
        <div className="hidden flex-shrink-0 items-center gap-5 whitespace-nowrap text-sm text-muted-foreground lg:flex xl:gap-7">
          <details ref={services} className="relative">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-1 transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
              Services
              <ChevronDown className="h-3.5 w-3.5" aria-hidden />
            </summary>
            <ul className="services-menu absolute left-0 top-full z-40 mt-1 w-64 rounded-2xl border border-border bg-card p-2 shadow-[0_8px_30px_rgb(0_0_0/0.08)]">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="flex min-h-11 items-center rounded-xl px-3 text-foreground transition-colors hover:bg-secondary/60"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${link.menuOnly ? "hidden" : "inline-flex"} min-h-11 items-center transition-colors hover:text-foreground`}
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
          className="menu-sheet fixed inset-0 z-40 flex flex-col bg-background"
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
          <div className="flex-1 overflow-y-auto px-10 py-4">
            <ul className="flex flex-col gap-4">
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
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Services
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-11 items-center text-lg text-foreground transition-colors hover:text-cta"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
            In person in Irving, Las Colinas, Dallas, Coppell, Grand Prairie, and Farmers Branch.
            Telehealth anywhere in Texas.
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
          <nav aria-label="Services" className="mt-2">
            <ul className="flex flex-wrap gap-x-4">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Resources" className="mt-2">
            <ul className="flex flex-wrap gap-x-4">
              {FOOTER_RESOURCES.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Areas served" className="mt-2">
            <ul className="flex flex-wrap gap-x-4">
              {FOOTER_AREAS.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-2">
            <a
              href={PSYCHOLOGY_TODAY_URL}
              className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Psychology Today profile
            </a>
          </p>
          <p className="mt-2">
            If you are in crisis, call or text{" "}
            <a href="tel:988" className="underline underline-offset-4 hover:text-foreground">
              988
            </a>{" "}
            (Suicide &amp; Crisis Lifeline) or call{" "}
            <a href="tel:911" className="underline underline-offset-4 hover:text-foreground">
              911
            </a>
            . This website is not for emergencies.{" "}
            <a href="/crisis/" className="underline underline-offset-4 hover:text-foreground">
              Find 24/7 help
            </a>
          </p>
          <p className="mt-2 text-xs">
            {/* Required wording: the supervisor's name directly follows Sarah's. */}
            Sarah Ateia, LPC Associate,{" "}
            <span className="whitespace-nowrap">supervised by Don Zablosky,</span>{" "}
            <span className="whitespace-nowrap">LPC-S, LMFT-S, NCC</span>
          </p>
          <p className="text-xs">
            License #104391 ·{" "}
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
