import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  BedDouble,
  Coffee,
  Footprints,
  Heart,
  Lamp,
  Layers,
  Mail,
  Mountain,
  PenLine,
  PhoneOff,
  Sunrise,
  type LucideIcon,
} from "lucide-react";
import { BUTTON } from "@/components/ds/buttons";
import { ConsultationButton } from "@/components/consultation-dialog";
import { useScrollReveal } from "@/components/motion";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import {
  GIFT_GUIDE_UPDATED,
  GIFT_SECTIONS,
  HAS_AFFILIATE_LINKS,
  type GiftIdea,
} from "@/content/gift-guide";

export const Route = createFileRoute("/resources/calming-gift-guide")({
  component: GiftGuide,
});

const ICONS: Record<GiftIdea["icon"], LucideIcon> = {
  pen: PenLine,
  cup: Coffee,
  sock: Heart,
  cards: Layers,
  blanket: BedDouble,
  shoe: Mountain,
  sun: Sunrise,
  lamp: Lamp,
  walk: Footprints,
  letter: Mail,
  phone: PhoneOff,
};

const LINK = "underline underline-offset-4 hover:text-foreground";
const STAGGER_MS = [0, 60, 110, 150];

const updatedLabel = new Date(`${GIFT_GUIDE_UPDATED}T12:00:00Z`).toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

// General signs, not a checklist for diagnosis.
const SIGNS = [
  "Stress, worry or sadness that hangs on for weeks, not days",
  "Sleep, appetite or energy that has changed and isn’t bouncing back",
  "Pulling away from people or things they used to enjoy",
  "Work, school or family life feeling harder to manage than usual",
  "Leaning more on alcohol, scrolling or staying busy to avoid feelings",
  "Grief, a move, a breakup or another big change that still feels raw",
];

function GiftCard({ idea, index }: { idea: GiftIdea; index: number }) {
  const Icon = ICONS[idea.icon];
  return (
    <li
      id={idea.id}
      className="reveal flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
      style={{ transitionDelay: `${STAGGER_MS[index % STAGGER_MS.length]}ms` }}
    >
      <div className="flex h-24 items-center justify-center bg-primary/60" aria-hidden>
        <Icon className="h-10 w-10 text-primary-foreground/80" strokeWidth={1.4} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl leading-snug text-foreground">{idea.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {idea.blurb}
          {idea.source && (
            <>
              {" "}
              (
              <a href={idea.source.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                {idea.source.label}
              </a>
              )
            </>
          )}
        </p>
        <div className="mt-4 rounded-xl border-l-4 border-sage bg-primary/40 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground">
            Try this with it
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{idea.tryThis}</p>
        </div>
        {idea.note && (
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{idea.note}</p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
          {idea.shopUrl && (
            <a
              href={idea.shopUrl}
              target="_blank"
              rel={idea.affiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
              className={`${BUTTON.secondary} nudge-link min-h-11 px-5 text-sm`}
            >
              Shop now
              <ArrowUpRight className="nudge-icon h-4 w-4" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          {idea.shopUrl && idea.affiliate && (
            <span className="text-xs text-muted-foreground">Affiliate link</span>
          )}
          {idea.related && (
            <a href={idea.related.href} className={`${LINK} text-sm text-muted-foreground`}>
              {idea.related.label}
            </a>
          )}
          <span className="ml-auto text-xs text-muted-foreground">{idea.range}</span>
        </div>
      </div>
    </li>
  );
}

function GiftGuide() {
  useScrollReveal();

  useEffect(() => {
    document.title = "A Counselor's Gift Guide for Stress & Anxiety";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-4xl px-6 pt-44 max-[340px]:pt-48 pb-24 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
            Home
          </a>
          {" / "}
          <a href="/resources/" className="inline-flex min-h-11 items-center hover:text-foreground">
            Resources
          </a>
        </nav>
        <p className="mt-4 text-sm font-semibold text-clay">A counselor’s holiday guide</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Gifts that teach coping skills, for someone who’s stressed
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          By Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S · Updated {updatedLabel}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The holidays can be a heavy season. In counseling, we practice small skills that help with
          stress: grounding, naming feelings, rest, movement and connection. Each gift below goes
          with one of those skills, plus a simple way to use it. And if someone you love is
          struggling more than a gift can help with, the end of this guide covers when counseling
          may be worth a look and how to bring it up gently.
        </p>

        <p
          role="note"
          className="mt-8 rounded-2xl border border-border bg-secondary/50 px-6 py-4 text-sm leading-relaxed text-muted-foreground"
        >
          {HAS_AFFILIATE_LINKS
            ? "Some links on this page are affiliate links. If you buy through them, I may earn a small commission at no extra cost to you. No company paid to be included."
            : "No sponsored picks and no affiliate links. Price ranges are typical, not quotes. These are coping supports, not treatments for any condition."}
        </p>

        <nav aria-label="Jump to a skill" className="mt-8 flex flex-wrap gap-2">
          {GIFT_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm text-foreground hover:border-cta/50"
            >
              {section.short}
            </a>
          ))}
          <a
            href="#when-to-consider-counseling"
            className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm text-foreground hover:border-cta/50"
          >
            When to consider counseling
          </a>
        </nav>

        {GIFT_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-h`}
            className="mt-14 scroll-mt-40"
          >
            <h2 id={`${section.id}-h`} className="font-serif text-3xl leading-snug text-foreground">
              {section.heading}
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {section.intro}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {section.ideas.map((idea, i) => (
                <GiftCard key={idea.id} idea={idea} index={i} />
              ))}
            </ul>
          </section>
        ))}

        <section
          id="when-to-consider-counseling"
          aria-labelledby="when-h"
          className="mt-16 scroll-mt-40 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          <h2 id="when-h" className="font-serif text-3xl leading-snug text-foreground">
            When stress needs more than a gift
          </h2>
          <p>
            Cozy things help, but they don’t replace support. Talking with a counselor may be worth
            considering when you notice:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {SIGNS.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>
          <p>
            These aren’t a diagnosis, just signs that it could help to talk. If you’re not sure,
            free{" "}
            <a href="/screening-tools/" className={LINK}>
              screening questionnaires
            </a>{" "}
            can be a starting point, or read{" "}
            <a href="/resources/stress-management/" className={LINK}>
              how to manage stress and when to see a counselor
            </a>
            .
          </p>

          <h3 className="pt-4 font-serif text-2xl leading-snug text-foreground">
            How to bring up counseling gently
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Choose a quiet, private moment, not a family dinner. A walk side by side often feels
              easier than face to face.
            </li>
            <li>
              Lead with care, not a fix: “I’ve noticed you seem worn down lately. I care about you.”
            </li>
            <li>
              Offer, don’t push. Adults choose their own counseling. You can offer to sit with them
              while they request a free 15-minute call.
            </li>
            <li>Take care of yourself too. Supporting someone you love is tiring.</li>
          </ul>

          <h3 className="pt-4 font-serif text-2xl leading-snug text-foreground">
            Support in Arabic, too
          </h3>
          <p>
            For many families, the holidays bring together different generations and languages. Some
            people find it easier to talk about feelings in the language they grew up with. I offer
            counseling in English and Arabic, with respect for culture and family.{" "}
            <a href="/arabic-counseling/" className={LINK}>
              Learn about counseling in Arabic
            </a>
            .
          </p>
        </section>

        <section
          aria-labelledby="gift-of-support"
          className="mt-14 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-10"
        >
          <h2 id="gift-of-support" className="font-serif text-2xl text-foreground sm:text-3xl">
            Ready to talk it through?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I offer walk and talk counseling on park trails in Irving and Dallas, and telehealth
            anywhere in Texas. The first step is a free 15-minute call.
          </p>
          <ConsultationButton className={`${BUTTON.cta} mt-8`}>
            Request a free 15-minute call
          </ConsultationButton>
        </section>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          More free coping tools:{" "}
          <a href="/tools/" className={LINK}>
            calming tools
          </a>
          ,{" "}
          <a href="/self-care-toolkit/" className={LINK}>
            a free self-care toolkit
          </a>
          ,{" "}
          <a href="/resources/grounding-techniques-for-anxiety/" className={LINK}>
            grounding techniques for anxiety
          </a>
          , and{" "}
          <a href="/resources/self-care-for-mental-health/" className={LINK}>
            what self-care for mental health looks like
          </a>
          .
        </p>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          This page shares general information and isn’t counseling, medical advice, or a diagnosis.
          The items here aren’t treatments for any condition. If you’re in crisis, call or text 988,
          or{" "}
          <a href="/crisis/" className="underline underline-offset-4">
            see local 24/7 crisis lines
          </a>
          .
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Sarah Ateia Khattab, M.S., NCC · Licensed Professional Counselor Associate #104391 ·
          Supervised by Don Zablosky, LPC-S, LMFT-S, NCC
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
