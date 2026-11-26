import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowRight,
  Droplet,
  Eye,
  FileText,
  Footprints,
  Gauge,
  MessageCircle,
  Moon,
  PenLine,
  Printer,
  Tag,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BookingActions, StickyCallBar } from "@/components/ds/booking";
import { BUTTON } from "@/components/ds/buttons";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { TOOLKIT, type ToolkitIcon, type ToolkitItem } from "@/content/self-care-toolkit";

export const Route = createFileRoute("/self-care-toolkit")({
  component: SelfCareToolkit,
});

export const TOOLKIT_TITLE = "Self-Care Toolkit: Free Ideas | Sarah Ateia, LPC Associate";

const ICONS: Record<ToolkitIcon, LucideIcon> = {
  wind: Wind,
  eye: Eye,
  tag: Tag,
  gauge: Gauge,
  pen: PenLine,
  droplet: Droplet,
  message: MessageCircle,
  footprints: Footprints,
  moon: Moon,
  file: FileText,
};

function ToolkitCard({ item }: { item: ToolkitItem }) {
  const Icon = ICONS[item.icon];
  return (
    <article
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className="ds-card toolkit-card flex scroll-mt-8 flex-col p-6"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h3 id={`${item.id}-title`} className="font-serif text-2xl leading-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="sr-only">Time: </span>
            {item.time}
            <span aria-hidden> · </span>
            <span className="font-semibold text-primary-foreground">Free</span>
          </p>
        </div>
      </div>
      <p className="mt-4 text-base leading-relaxed text-foreground">{item.summary}</p>

      <h4 className="mt-4 text-sm font-semibold text-clay">Try it</h4>
      <ul className="mt-1 list-disc space-y-1 ps-5 text-base leading-relaxed text-muted-foreground marker:text-sage">
        {item.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>

      {item.why && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Why it can help: </span>
          {item.why.text}
          {item.why.source && (
            <>
              {" "}
              <a
                href={item.why.source.url}
                rel="noopener"
                className="underline underline-offset-4 hover:text-foreground"
              >
                ({item.why.source.label})
              </a>
            </>
          )}
        </p>
      )}

      {item.action && (
        <a
          href={item.action.href}
          className="no-print nudge-link mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-base font-semibold text-primary-foreground underline-offset-4 hover:underline"
        >
          {item.action.label}
          <ArrowRight className="nudge-icon nudge-right h-4 w-4" aria-hidden />
        </a>
      )}
    </article>
  );
}

function SelfCareToolkit() {
  useEffect(() => {
    document.title = TOOLKIT_TITLE;
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-5xl px-6 pt-44 pb-20 max-[340px]:pt-48 sm:pt-40">
        <div id="top" className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="no-print text-sm text-muted-foreground">
            <a
              href="/"
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
            >
              Home
            </a>
            {" / "}
            <a
              href="/resources/"
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
            >
              Resources
            </a>
          </nav>
          <p className="mt-4 text-sm font-semibold text-clay">Self-care toolkit</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            A self-care toolkit for real life
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ten free things to try when stress is building, sorted by how much time you have.
            Nothing to buy and nothing to sign up for. Pick one that fits the moment, and skip
            anything that doesn’t feel right for you.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Put together by Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S. These are
            general wellness ideas, not therapy, medical advice, or a diagnosis.
          </p>

          <div className="no-print mt-8 flex flex-wrap items-center gap-3">
            <nav aria-label="Jump to a section">
              <ul className="flex flex-wrap gap-3">
                {TOOLKIT.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="inline-flex min-h-11 items-center rounded-full border border-input/60 bg-card px-5 text-base text-foreground transition-colors hover:border-foreground"
                    >
                      {group.title.replace("If you have ", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button type="button" onClick={() => window.print()} className={BUTTON.quiet}>
              <Printer className="h-4 w-4" aria-hidden />
              Print this toolkit
            </button>
          </div>
        </div>

        {TOOLKIT.map((group) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            className="toolkit-group mt-16 scroll-mt-8"
          >
            <h2
              id={`${group.id}-title`}
              className="font-serif text-[2rem] leading-tight text-foreground sm:text-[2.4rem]"
            >
              {group.title}
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {group.intro}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {group.items.map((item) => (
                <ToolkitCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}

        <section aria-labelledby="more-than-self-care" className="ds-card-quiet mt-16 p-6 sm:p-10">
          <h2
            id="more-than-self-care"
            className="font-serif text-[1.75rem] leading-tight text-foreground sm:text-3xl"
          >
            When self-care isn’t enough
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Self-care helps, but it isn’t meant to carry everything. If stress, worry or low mood
            has lasted more than two weeks, or it’s getting in the way of work, sleep or
            relationships, talking it through with a counselor can help. Sessions are{" "}
            <a
              href="/walk-and-talk-therapy-dallas/"
              className="text-foreground underline underline-offset-4"
            >
              outdoors in Dallas–Fort Worth
            </a>{" "}
            or{" "}
            <a
              href="/telehealth-counseling-texas/"
              className="text-foreground underline underline-offset-4"
            >
              online anywhere in Texas
            </a>
            , in English or Arabic.
          </p>
          <BookingActions className="no-print mt-6" />
          <p className="mt-6 text-base leading-relaxed text-foreground">
            In crisis? Call or text{" "}
            <a href="tel:988" className="font-semibold underline underline-offset-4">
              988
            </a>{" "}
            any time, or{" "}
            <a href="/crisis/" className="underline underline-offset-4">
              see local 24/7 crisis lines
            </a>
            .
          </p>
        </section>

        <nav aria-labelledby="keep-reading" className="no-print mt-14 max-w-3xl">
          <h2 id="keep-reading" className="font-serif text-2xl text-foreground sm:text-3xl">
            Keep reading
          </h2>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {[
              [
                "What does self-care for mental health actually look like?",
                "/resources/self-care-for-mental-health/",
              ],
              [
                "Nervous system regulation techniques",
                "/resources/nervous-system-regulation-techniques/",
              ],
              ["Grounding techniques for anxiety", "/resources/grounding-techniques-for-anxiety/"],
              ["Free calming tools", "/tools/"],
              [
                "A counselor’s gift guide: gifts that teach coping skills",
                "/resources/calming-gift-guide/",
              ],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="nudge-link flex min-h-14 items-center justify-between gap-4 py-3 text-foreground transition-colors hover:text-primary-foreground"
                >
                  <span>{label}</span>
                  <ArrowRight
                    className="nudge-icon nudge-right h-4 w-4 flex-shrink-0 text-taupe"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          This page shares general information and isn’t counseling, medical advice, or a diagnosis.
          Stop anything that makes you feel worse.
        </p>
      </main>
      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}
