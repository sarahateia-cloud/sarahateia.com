import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowUpRight,
  BedDouble,
  Coffee,
  Footprints,
  HandHeart,
  Heart,
  Lamp,
  Layers,
  Mail,
  Mountain,
  PenLine,
  PhoneOff,
  Sprout,
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
  plant: Sprout,
  lamp: Lamp,
  hands: HandHeart,
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

function GiftCard({ idea, index }: { idea: GiftIdea; index: number }) {
  const Icon = ICONS[idea.icon];
  return (
    <li
      id={idea.id}
      className="reveal flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
      style={{ transitionDelay: `${STAGGER_MS[index % STAGGER_MS.length]}ms` }}
    >
      <div className="flex h-28 items-center justify-center bg-primary/60" aria-hidden>
        <Icon className="h-12 w-12 text-primary-foreground/80" strokeWidth={1.4} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-clay">{idea.range}</p>
        <h3 className="mt-1 font-serif text-xl leading-snug text-foreground">{idea.name}</h3>
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
        {idea.note && (
          <p className="mt-3 rounded-xl bg-secondary/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            {idea.note}
          </p>
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
        </div>
      </div>
    </li>
  );
}

function GiftGuide() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Calming Gift Ideas for Stress Relief | Holiday Guide";
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
        <p className="mt-4 text-sm font-semibold text-clay">Holiday gift guide</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Calming gift ideas for someone who’s stressed
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          By Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S · Updated {updatedLabel}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The holidays can be a heavy season. If someone you love is running on empty, a gift that
          says “slow down, I see you” can mean more than something flashy. Here are cozy, simple
          ideas at every budget, plus a few free ones that often matter most. None of these replace
          care, and none of them have to be perfect.
        </p>

        {HAS_AFFILIATE_LINKS ? (
          <p
            role="note"
            className="mt-8 rounded-2xl border border-border bg-secondary/50 px-6 py-4 text-sm leading-relaxed text-muted-foreground"
          >
            Some links on this page are affiliate links. If you buy through them, I may earn a small
            commission at no extra cost to you. I only list things I’d suggest anyway, and no
            company paid to be included.
          </p>
        ) : (
          <p
            role="note"
            className="mt-8 rounded-2xl border border-border bg-secondary/50 px-6 py-4 text-sm leading-relaxed text-muted-foreground"
          >
            No sponsored picks and no affiliate links. Prices are typical ranges, not quotes, so
            shop wherever you like.
          </p>
        )}

        <nav aria-label="Jump to a budget" className="mt-8 flex flex-wrap gap-2">
          {GIFT_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-border bg-card px-4 text-sm text-foreground hover:border-cta/50"
            >
              {section.short}
            </a>
          ))}
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
            <p className="mt-2 text-base text-muted-foreground">{section.intro}</p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {section.ideas.map((idea, i) => (
                <GiftCard key={idea.id} idea={idea} index={i} />
              ))}
            </ul>
          </section>
        ))}

        <section
          aria-labelledby="gift-of-support"
          className="mt-16 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-10"
        >
          <h2 id="gift-of-support" className="font-serif text-2xl text-foreground sm:text-3xl">
            When a gift isn’t enough
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Sometimes stress runs deeper than a cozy blanket can reach. If you or someone you love
            wants to talk it through, I offer walk and talk sessions in Irving and Dallas and
            telehealth anywhere in Texas, in English or Arabic.
          </p>
          <ConsultationButton className={`${BUTTON.cta} mt-8`}>
            Request a free 15-minute call
          </ConsultationButton>
        </section>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          More free ideas:{" "}
          <a href="/tools/" className={LINK}>
            calming tools
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
          This page shares general gift ideas and isn’t counseling, medical advice, or a diagnosis.
          These items aren’t treatments for any condition. If you’re in crisis, call or text 988, or{" "}
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
