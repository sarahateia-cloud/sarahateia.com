import { useEffect } from "react";
import { Phone } from "lucide-react";
import { BUTTON } from "@/components/ds/buttons";
import { LogoMark } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";
import { SiteFooter } from "@/components/site-header";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { AR_DRAFT, AR_UI, SUPERVISION_AR, SUPERVISION_EN, type ArabicPage } from "@/content/arabic";

function DraftBanner() {
  if (!AR_DRAFT) return null;
  return (
    <aside aria-label="Draft notice" className="bg-clay px-6 py-2 text-center text-sm text-card">
      <span className="font-semibold">{AR_UI.draftBanner}</span>{" "}
      <span lang="en" dir="ltr" className="whitespace-nowrap">
        {AR_UI.draftBannerEn}
      </span>
    </aside>
  );
}

/** A right-to-left page in Arabic. The footer stays in English: it holds the required notices. */
export function ArabicPageView({ page }: { page: ArabicPage }) {
  // Built pages already arrive with lang="ar" dir="rtl" on <html>; this keeps it right if the
  // page is reached without a full load, and puts English back when leaving.
  useEffect(() => {
    const html = document.documentElement;
    const before = { lang: html.lang, dir: html.dir };
    html.lang = "ar";
    html.dir = "rtl";
    document.title = page.title;
    return () => {
      html.lang = before.lang || "en";
      html.dir = before.dir || "ltr";
    };
  }, [page.title]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div lang="ar" dir="rtl">
        <DraftBanner />
        <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-6">
          <a
            href="/ar/"
            className="inline-flex items-center gap-3"
            aria-label="سارة عطية خطاب، الصفحة الرئيسية"
          >
            <LogoMark className="h-10 w-10 flex-shrink-0" />
            <span className="flex flex-col">
              <span className="font-serif text-xl text-foreground">سارة عطية خطاب</span>
              <span lang="en" dir="ltr" className="text-xs text-muted-foreground">
                Sarah Ateia Khattab
              </span>
            </span>
          </a>
          <LanguageToggle href={page.englishPath} to="en" />
        </header>

        <main id="main" className="mx-auto max-w-3xl px-6 pt-6 pb-20 sm:pt-10">
          <nav aria-label="مسار التنقل" className="text-sm text-muted-foreground">
            <a
              href="/ar/"
              className="inline-flex min-h-11 items-center hover:text-foreground hover:underline"
            >
              {AR_UI.home}
            </a>
          </nav>
          <p className="mt-2 text-base font-semibold text-clay">{page.eyebrow}</p>
          <h1 className="mt-3 font-serif text-[2.25rem] leading-[1.4] text-foreground sm:text-5xl sm:leading-[1.35]">
            {page.heading}
          </h1>
          <p className="mt-6 text-xl leading-loose text-muted-foreground">{page.intro}</p>

          {/* Required disclosure: Arabic, then the exact English wording. */}
          <div className="mt-6 text-base leading-relaxed text-muted-foreground">
            <p>{SUPERVISION_AR}</p>
            <p lang="en" dir="ltr" className="mt-1 text-start text-sm">
              {SUPERVISION_EN}
            </p>
          </div>

          <BookingRow className="mt-8" />

          {page.sections.map((section) => (
            <section key={section.heading} id={section.id} className="mt-14 scroll-mt-8">
              <h2 className="font-serif text-[1.85rem] leading-snug text-foreground sm:text-[2.1rem]">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-lg leading-loose text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="ds-card mt-5 divide-y divide-border px-6 text-lg leading-loose text-muted-foreground">
                  {section.list.map((item) => (
                    <li key={item} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.faqs && (
            <section className="mt-14">
              <h2 className="font-serif text-[1.85rem] text-foreground">{AR_UI.faq}</h2>
              <div className="ds-card mt-6 divide-y divide-border">
                {page.faqs.map((faq) => (
                  <div key={faq.q} className="px-6 py-5 sm:px-8">
                    <h3 className="font-serif text-xl text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-lg leading-loose text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section id="consult" className="ds-card mt-14 px-6 py-10 text-center sm:px-10">
            <LogoMark className="mx-auto mb-4 h-11 w-11" />
            <h2 className="font-serif text-[1.75rem] text-foreground">{AR_UI.consultTitle}</h2>
            <p className="mx-auto mt-3 max-w-md text-lg leading-loose text-muted-foreground">
              {AR_UI.consultBody}
            </p>
            <BookingRow center className="mt-8" />
            <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
              {AR_UI.healthNote}
            </p>
          </section>

          <div className="ds-note mt-10 text-base leading-loose text-foreground">
            <p>
              {AR_UI.crisis}{" "}
              <a href="/crisis/" className="underline underline-offset-4">
                {AR_UI.crisisLink}
              </a>
            </p>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{AR_UI.disclaimer}</p>
        </main>
      </div>
      <div lang="en" dir="ltr">
        <SiteFooter />
      </div>
    </div>
  );
}

function BookingRow({ center = false, className = "" }: { center?: boolean; className?: string }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${center ? "sm:justify-center" : ""} ${className}`}
    >
      <a href={BOOKING_URL} target="_blank" rel="noopener" className={BUTTON.cta}>
        {AR_UI.book}
        <span className="sr-only"> {AR_UI.bookSr}</span>
      </a>
      <a href={PHONE_HREF} className={BUTTON.secondary}>
        <Phone className="h-4 w-4" aria-hidden />
        {AR_UI.call} <bdi dir="ltr">{PHONE_DISPLAY}</bdi>
      </a>
    </div>
  );
}
