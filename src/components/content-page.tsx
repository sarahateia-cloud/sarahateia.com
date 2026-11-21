import { useEffect, useRef, type ReactNode } from "react";

/** Turns [label](url) in page text into links. External links (sources) open in the same tab. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s]+)\)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 3 === 0) return part;
        if (i % 3 === 2) return null;
        const href = parts[i + 1];
        const external = href.startsWith("http");
        return (
          <a
            key={i}
            href={href}
            className="text-foreground underline underline-offset-4 hover:text-primary-foreground"
            {...(external ? { rel: "noopener" } : {})}
          >
            {part}
          </a>
        );
      })}
    </>
  );
}
import { ArrowRight } from "lucide-react";
import { BookingActions, StickyCallBar } from "@/components/ds/booking";
import { LogoMark } from "@/components/logo";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import type { ContentPage } from "@/content/pages";

/** Anchor id for a section heading, e.g. "What is LPC?" -> "what-is-lpc". */
const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Minutes to read the page's main text at an unhurried 200 words a minute. */
function readingMinutes(page: ContentPage) {
  const text = [
    page.intro,
    ...(page.takeaways ?? []),
    ...page.blocks.flatMap((b) => [b.heading, ...(b.paragraphs ?? []), ...(b.list ?? [])]),
    ...(page.faqs ?? []).flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

/** A thin line at the top that fills as you read. Decorative, so screen readers skip it. */
function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return <div ref={bar} className="reading-progress" aria-hidden="true" />;
}

export function ContentPageView({
  page,
  parent,
  note,
  arabicHref,
}: {
  page: ContentPage;
  arabicHref?: string;
  parent?: { label: string; href: string };
  note?: ReactNode;
}) {
  // Longer guides get a contents list, reading time and a progress line.
  const isGuide = page.blocks.length >= 4;
  const minutes = readingMinutes(page);
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      {isGuide && <ReadingProgress />}
      <SiteHeader arabicHref={arabicHref} />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-44 max-[340px]:pt-48 pb-20 sm:pt-40">
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
          <p className="mt-4 text-sm font-semibold text-clay">{page.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {page.heading}
          </h1>
          {page.byline && <p className="mt-4 text-sm font-medium text-foreground">{page.byline}</p>}
          {isGuide && <p className="mt-3 text-sm text-muted-foreground">{minutes} min read</p>}
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <Inline text={page.intro} />
          </p>
          {/* Who, what and where, stated plainly near the top of every page. */}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Sarah Ateia, LPC Associate (supervised by Don Zablosky, LPC-S), offers counseling in
            Irving and across Dallas–Fort Worth, and telehealth anywhere in Texas.
          </p>
          {page.arabicIntro && (
            <p lang="ar" dir="rtl" className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {page.arabicIntro}
            </p>
          )}
          {page.takeaways && (
            <section aria-labelledby="key-takeaways" className="ds-card mt-8 p-6">
              <h2 id="key-takeaways" className="font-serif text-xl text-foreground">
                Key takeaways
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-taupe">
                {page.takeaways.map((item) => (
                  <li key={item}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            </section>
          )}
          {isGuide && (
            <nav aria-labelledby="on-this-page" className="ds-card-quiet mt-8 px-6 py-5">
              <h2 id="on-this-page" className="text-sm font-semibold text-clay">
                On this page
              </h2>
              <ol className="toc-list mt-2 divide-y divide-border">
                {page.blocks.map((block) => (
                  <li key={block.heading}>
                    <a
                      href={`#${sectionId(block.heading)}`}
                      className="flex min-h-11 items-center py-2 text-base leading-snug text-foreground underline-offset-4 hover:underline"
                    >
                      {block.heading}
                    </a>
                  </li>
                ))}
                {page.faqs && (
                  <li>
                    <a
                      href="#common-questions"
                      className="flex min-h-11 items-center py-2 text-base leading-snug text-foreground underline-offset-4 hover:underline"
                    >
                      Common questions
                    </a>
                  </li>
                )}
              </ol>
            </nav>
          )}
          <BookingActions className="mt-8" />
        </div>

        {page.blocks.map((block) => (
          <section key={block.heading} id={sectionId(block.heading)} className="mt-12 scroll-mt-40">
            <h2 className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-3xl">
              {block.heading}
            </h2>
            {block.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground">
                <Inline text={paragraph} />
              </p>
            ))}
            {block.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-taupe">
                {block.list.map((item) => (
                  <li key={item}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {page.faqs && (
          <section id="common-questions" className="mt-14 scroll-mt-40">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">Common questions</h2>
            <div className="ds-card mt-6 divide-y divide-border">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="px-6 py-5 sm:px-8">
                  <h3 className="font-serif text-xl text-foreground">{faq.q}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    <Inline text={faq.a} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {page.sources && (
          <section aria-labelledby="sources" className="mt-14">
            <h2 id="sources" className="font-serif text-2xl text-foreground sm:text-3xl">
              Sources
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {page.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {page.disclaimer && (
          <p className="ds-card-quiet mt-8 px-6 py-4 text-sm leading-relaxed text-muted-foreground">
            {page.disclaimer}
          </p>
        )}

        {page.related && page.related.length > 0 && (
          <nav aria-labelledby="keep-reading" className="mt-14">
            <h2 id="keep-reading" className="font-serif text-2xl text-foreground sm:text-3xl">
              Keep reading
            </h2>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {page.related.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nudge-link flex min-h-14 items-center justify-between gap-4 py-3 text-foreground transition-colors hover:text-primary-foreground"
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      className="nudge-icon nudge-right h-4 w-4 flex-shrink-0 text-taupe"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <section id="consult" className="ds-card mt-14 px-6 py-10 text-center sm:px-10">
          <LogoMark className="mx-auto mb-4 h-11 w-11" />
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Start with a free 15-minute consultation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            A short call to see if we’re a good fit, with no pressure and no commitment.
          </p>
          <BookingActions center className="mt-8" />
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
