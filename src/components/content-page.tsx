import type { ReactNode } from "react";
import { BookingActions, StickyCallBar } from "@/components/ds/booking";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import type { ContentPage } from "@/content/pages";

export function ContentPageView({
  page,
  parent,
  note,
}: {
  page: ContentPage;
  parent?: { label: string; href: string };
  note?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-32 max-[340px]:pt-36 pb-20 sm:pt-40">
        <div id="top">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <a
              href="/"
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
            >
              Home
            </a>
            {parent && (
              <>
                {" / "}
                <a
                  href={parent.href}
                  className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
                >
                  {parent.label}
                </a>
              </>
            )}
          </nav>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {page.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {page.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{page.intro}</p>
          <BookingActions className="mt-8" />
        </div>

        {page.blocks.map((block) => (
          <section key={block.heading} className="mt-12">
            <h2 className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-3xl">
              {block.heading}
            </h2>
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

        <section
          id="consult"
          className="mt-14 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-10"
        >
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Start with a free 15-minute consultation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A short call to see if we’re a good fit, with no pressure and no commitment.
          </p>
          <BookingActions className="mt-8 justify-center" />
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
      <StickyCallBar />
    </div>
  );
}
