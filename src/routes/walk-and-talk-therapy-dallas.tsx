import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Footprints, ShieldCheck } from "lucide-react";
import { Inline } from "@/components/content-page";
import { BookingActions, StickyCallBar } from "@/components/ds/booking";
import { LogoMark } from "@/components/logo";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { TrailScene } from "@/components/trail-scene";
import { TOPICS } from "@/content/pages";
import { PRIVACY_POINTS, RESEARCH, WALK_STEPS, WEATHER_TIPS } from "@/content/walk-and-talk";

const page = TOPICS.find((topic) => topic.path === "walk-and-talk-therapy-dallas")!;

export const Route = createFileRoute("/walk-and-talk-therapy-dallas")({
  component: WalkAndTalkPage,
});

const H2 = "font-serif text-[2rem] leading-[1.12] text-foreground sm:text-[2.6rem]";
const BODY = "text-base leading-relaxed text-muted-foreground";

function Block({ heading }: { heading: string }) {
  const block = page.blocks.find((b) => b.heading === heading);
  if (!block) return null;
  return (
    <section className="mt-16">
      <h2 className={H2}>{block.heading}</h2>
      {block.paragraphs?.map((p) => (
        <p key={p} className={`mt-4 ${BODY}`}>
          <Inline text={p} />
        </p>
      ))}
    </section>
  );
}

function WalkAndTalkPage() {
  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <SiteHeader />
      <main id="main">
        {/* Hero: the trail itself, then the heading on a card that rests on the path. */}
        <div id="top">
          <div className="relative h-[62vh] min-h-[24rem] max-h-[44rem] overflow-hidden">
            <TrailScene className="absolute inset-0" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
          </div>
          <div className="relative mx-auto -mt-28 max-w-3xl px-6 sm:-mt-36">
            <div className="ds-card px-6 py-8 sm:px-10 sm:py-10">
              <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
                <a
                  href="/"
                  className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
                >
                  Home
                </a>
              </nav>
              <p className="text-sm font-semibold text-clay">{page.eyebrow}</p>
              <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl">
                {page.heading}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                <Inline text={page.intro} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers walk and talk
                counseling across Dallas–Fort Worth, and telehealth anywhere in Texas.
              </p>
              <BookingActions className="mt-8" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-20">
          {/* How a session works: a real sequence, so it's numbered. */}
          <section aria-labelledby="how-it-works" className="mt-20">
            <h2 id="how-it-works" className={H2}>
              How a walk and talk session works
            </h2>
            <ol className="relative mt-10 space-y-10 border-s-2 border-dashed border-sage/60 ps-10">
              {WALK_STEPS.map((step, i) => (
                <li key={step.title} className="relative">
                  <span
                    className="absolute -start-[3.4rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-cta font-serif text-lg text-cta-foreground"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className={`mt-2 ${BODY}`}>{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <Block heading="Where can I find walk and talk therapy in Dallas?" />

          {/* Confidentiality outdoors. */}
          <section aria-labelledby="privacy" className="ds-card-quiet mt-16 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-primary-foreground" aria-hidden />
              <h2
                id="privacy"
                className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-3xl"
              >
                Is walk and talk therapy private?
              </h2>
            </div>
            <p className={`mt-4 ${BODY}`}>
              Walk and talk therapy is confidential like any counseling. Here’s how we look after
              your privacy on the trail:
            </p>
            <ul className="mt-4 space-y-3">
              {PRIVACY_POINTS.map((point) => (
                <li key={point} className={`flex gap-3 ${BODY}`}>
                  <Footprints className="mt-1 h-4 w-4 flex-shrink-0 text-clay" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Weather and what to wear. */}
          <section aria-labelledby="weather" className="mt-16">
            <h2 id="weather" className={H2}>
              Weather and what to wear
            </h2>
            <p className={`mt-4 ${BODY}`}>
              North Texas weather changes quickly, so a little planning keeps sessions comfortable
              all year.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {WEATHER_TIPS.map((tip) => (
                <div key={tip.title} className="ds-card p-5">
                  <dt className="font-serif text-xl text-foreground">{tip.title}</dt>
                  <dd className={`mt-1 ${BODY}`}>{tip.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Research, each claim linked to its source. */}
          <section aria-labelledby="research" className="mt-16">
            <h2 id="research" className={H2}>
              What does the research say?
            </h2>
            <p className={`mt-4 ${BODY}`}>
              Some people find that talking side by side feels less intense than sitting face to
              face, and that words come more easily while moving. Movement and nature both have
              research behind them:
            </p>
            <ul className="mt-6 space-y-4">
              {RESEARCH.map((r) => (
                <li key={r.url} className="border-s-[3px] border-sage ps-5">
                  <p className={BODY}>
                    {r.text}{" "}
                    <a
                      href={r.url}
                      rel="noopener"
                      className="text-foreground underline underline-offset-4"
                    >
                      ({r.cite})
                    </a>
                  </p>
                </li>
              ))}
            </ul>
            <p className={`mt-6 ${BODY}`}>
              Studies on walk and talk therapy itself are still small, so think of it as a different
              setting for counseling rather than a different treatment. Read more about the{" "}
              <a
                href="/resources/walk-and-talk-therapy-benefits/"
                className="text-foreground underline underline-offset-4"
              >
                benefits of walk and talk therapy
              </a>
              .
            </p>
          </section>

          <Block heading="Who is walk and talk therapy for?" />
          <Block heading="How much does walk and talk therapy cost in Dallas?" />
          <Block heading="When might online therapy be a better fit than walking outdoors?" />

          {page.faqs && (
            <section aria-labelledby="faq" className="mt-16">
              <h2 id="faq" className={H2}>
                Common questions
              </h2>
              <div className="ds-card mt-6 divide-y divide-border">
                {page.faqs.map((faq) => (
                  <div key={faq.q} className="px-6 py-5 sm:px-8">
                    <h3 className="font-serif text-xl text-foreground">{faq.q}</h3>
                    <p className={`mt-2 ${BODY}`}>
                      <Inline text={faq.a} />
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {page.related && (
            <nav aria-labelledby="keep-reading" className="mt-16">
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

          <section id="consult" className="ds-card mt-16 px-6 py-10 text-center sm:px-10">
            <LogoMark className="mx-auto mb-4 h-11 w-11" />
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              Start with a free 15-minute consultation.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              A short call to see if walking together suits you, with no pressure and no commitment.
            </p>
            <BookingActions center className="mt-8" />
          </section>

          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            This page shares general information and isn’t counseling, medical advice, or a
            diagnosis. If you’re in crisis, call or text 988, or{" "}
            <a href="/crisis/" className="underline underline-offset-4">
              see local 24/7 crisis lines
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
      <StickyCallBar bookLabel="Book a walk" />
    </div>
  );
}
