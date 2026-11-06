import { Phone } from "lucide-react";
import { ConsultationButton } from "@/components/consultation-dialog";
import { PHONE_DISPLAY, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/site-header";
import type { ContentPage } from "@/content/pages";

export function ContentPageView({
  page,
  parent,
  note,
}: {
  page: ContentPage;
  parent?: { label: string; href: string };
  note?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a href="/" className="underline-offset-4 hover:text-foreground hover:underline">
            Home
          </a>
          {parent && (
            <>
              {" / "}
              <a
                href={parent.href}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {parent.label}
              </a>
            </>
          )}
        </nav>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {page.eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          {page.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.intro}</p>

        {page.blocks.map((block) => (
          <section key={block.heading} className="mt-12">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{block.heading}</h2>
            {block.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {block.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                {block.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {page.faqs && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">Common questions</h2>
            <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="px-6 py-5 sm:px-8">
                  <h3 className="font-serif text-lg text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-10">
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Start with a free 15-minute consultation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A short call to see if we’re a good fit, with no pressure and no commitment.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <ConsultationButton className="btn-shine inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-medium text-primary-foreground transition hover:-translate-y-0.5">
              <Phone className="h-4 w-4" aria-hidden />
              Request a Call
            </ConsultationButton>
            <a href={PHONE_HREF} className="font-serif text-xl text-foreground hover:opacity-80">
              Or call {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {note && <p className="mt-8 text-xs leading-relaxed text-muted-foreground">{note}</p>}
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          This page shares general information and isn’t counseling, medical advice, or a diagnosis.
          If you’re in crisis, call or text 988, or{" "}
          <a href="/crisis/" className="underline underline-offset-4">
            see local 24/7 crisis lines
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
