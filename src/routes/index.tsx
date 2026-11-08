import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BreathingExercise } from "@/components/breathing-exercise";
import { ConsultationButton, ConsultationForm } from "@/components/consultation-dialog";
import { DnaHelix, FloralNeuron } from "@/components/bio-motifs";
import { Introspection } from "@/components/introspection";
import { NatureBand } from "@/components/nature-band";
import { NeuralField } from "@/components/neural-field";
import { WatercolorBloom } from "@/components/watercolor-bloom";
import {
  RiseWords,
  ScrollProgress,
  useCardGlow,
  useScrollReveal,
  useSpotlight,
} from "@/components/motion";
import { PHONE_DISPLAY, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/site-header";
import sarahHeadshot from "@/assets/sarah-headshot.jpg";
import sarahGraduation from "@/assets/sarah-graduation.jpg";
import sarahHarbor from "@/assets/sarah-harbor.jpg";
import sarahOverlook from "@/assets/sarah-overlook.jpg";
import chicoPortrait from "@/assets/chico.jpeg";
import chicoSoft from "@/assets/chico-soft.jpg";
import chicoSleeping from "@/assets/chico-sleeping.jpg";
import brainArt from "@/assets/brain-watercolor.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const HIGHLIGHTS = [
  "LPC Associate",
  "National Certified Counselor",
  "English & Arabic",
  "Reduced rates available",
  "Free 15-min consultation",
];

const SUPPORT_AREAS = [
  "Anxiety / stress",
  "Depression / low mood",
  "Emotional overwhelm",
  "Nervous system regulation",
  "Mood concerns",
  "Relationship patterns",
  "Burnout / emotional exhaustion",
  "Identity / self-understanding",
  "Self-esteem concerns",
  "Genetics-informed psychoeducation",
];

const CONSULT_PERKS = [
  {
    title: "Reduced rates available",
    body: "Self-pay. The standard fee is $100 per session, and reduced rates are available. Just ask during your call.",
  },
  {
    title: "Outdoors or telehealth",
    body: "In-person sessions in a Dallas–Fort Worth park, or telehealth anywhere in Texas.",
  },
  {
    title: "English or Arabic",
    body: "Sessions are available in either language.",
  },
];

const DISCLOSURES = [
  "Sarah Ateia Khattab is a Licensed Professional Counselor Associate (LPC Associate #104391, Texas BHEC), practicing under the supervision of Don Zablosky, LPC-S (LPC #18541).",
  "Submitting this form doesn’t create a therapist–client relationship. Your information is used only to contact you about scheduling. Please don’t include sensitive health details.",
  "Telehealth is available only to clients who are physically located in Texas at the time of each session.",
  "Outdoor sessions take place in public parks, where complete privacy can’t be guaranteed. We choose quieter spots, and we can pause, move, or switch to telehealth at any time. A signed outdoor-session consent form is required.",
  "Self-pay only; I don’t bill insurance. The standard fee is $100 per session, and reduced rates are available. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
  "Any genetic or biological discussion is educational only, never medical advice, diagnosis, or treatment. I don’t prescribe or interpret labs; I refer to physicians for medical concerns.",
];

const PRINCIPLES = [
  {
    title: "Cultural humility",
    body: "I won’t assume I already know your story. I stay curious about your culture, faith, family, and language, and I welcome being corrected when I get something wrong.",
  },
  {
    title: "Shared direction",
    body: "You know your life in a way no one else does. I bring my counseling training; you bring your history and what you want. We decide where to go together.",
  },
  {
    title: "The whole person",
    body: "Mood, body, relationships, and culture are all connected, so we make room for all of them, not just the part that brought you in.",
  },
];

const OUTDOOR_NOTES = [
  {
    title: "Where we meet",
    body: "A quiet park in the Dallas–Fort Worth area that we choose together, somewhere easy for you to reach.",
  },
  {
    title: "Walk or sit",
    body: "We can walk at an easy pace or settle on a bench or blanket. You set the pace, and we can stop anytime.",
  },
  {
    title: "Privacy",
    body: "Parks are public, so we pick quieter spots and can pause or move whenever someone’s nearby.",
  },
  {
    title: "Weather",
    body: "Texas heat and storms happen. If it’s not comfortable outside, we switch that session to telehealth.",
  },
];

const FEES = [
  { service: "Phone consultation", detail: "15 minutes", price: "Free" },
  {
    service: "Individual session",
    detail: "Outdoors in a park, or telehealth",
    price: "$100",
  },
  {
    service: "Reduced rate",
    detail: "Based on household income",
    price: "Ask",
  },
];

const STEPS = [
  {
    title: "Reach out",
    body: `Call ${PHONE_DISPLAY}, or leave your details and I’ll call you back.`,
  },
  {
    title: "Free 15-minute consultation",
    body: "We talk about what you’re looking for and whether we’re a good fit. No commitment.",
  },
  {
    title: "Your first session",
    body: "Outdoors in a Dallas–Fort Worth park or by telehealth anywhere in Texas, in English or Arabic.",
  },
];

// Keep in sync with the FAQPage structured data in index.html.
const FAQS = [
  {
    q: "What is an LPC Associate?",
    a: "An LPC Associate is a counselor licensed by the Texas Behavioral Health Executive Council who provides counseling under the supervision of a Licensed Professional Counselor–Supervisor (LPC-S). I’m supervised by Don Zablosky, LPC-S.",
  },
  {
    q: "Do you take insurance?",
    a: "No. My practice is self-pay only, and I don’t bill insurance. My standard fee is $100 per session, and reduced rates are available. Ask about them during your free consultation.",
  },
  {
    q: "What happens in the free consultation?",
    a: `It’s a free 15-minute phone call to talk about what you’re looking for and whether we’re a good fit. There’s no commitment. Call ${PHONE_DISPLAY} or request a call back.`,
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes. Telehealth is available to clients who are located in Texas at the time of each session. In-person sessions are held outdoors, in parks around Dallas–Fort Worth.",
  },
  {
    q: "Where do in-person sessions take place?",
    a: "Outdoors, instead of an office. We meet in a quiet park in the Dallas–Fort Worth area that we choose together, and either walk at an easy pace or sit, whichever feels right for you.",
  },
  {
    q: "Is there a consent form for outdoor sessions?",
    a: "Yes. Before your first outdoor session, you’ll review and sign a short consent form that covers privacy, weather, and safety. I’ll walk you through it when we get started.",
  },
  {
    q: "What happens if the weather is bad?",
    a: "If it’s too hot, cold, or stormy to meet comfortably outside, we move that session to telehealth.",
  },
  {
    q: "Do you offer sessions in Arabic?",
    a: "Yes. I’m an Arabic-speaking counselor based in Irving, offering sessions in Arabic or English, outdoors around Dallas–Fort Worth or by telehealth anywhere in Texas.",
  },
  {
    q: "Do you offer affordable therapy in Dallas–Fort Worth?",
    a: "Yes. My standard fee is $100 per session, and I offer reduced rates based on household income for clients in Irving, Dallas, Fort Worth, and across Texas by telehealth. Ask during a free 15-minute consultation.",
  },
  {
    q: "What is genetics-informed psychoeducation?",
    a: "It’s an educational way of talking about how biology may relate to patterns in mood, stress, and attention. It’s never medical advice, diagnosis, or treatment. I don’t order or interpret lab tests, and I refer to physicians for medical questions.",
  },
  {
    q: "What if I’m in crisis?",
    a: "This practice isn’t a crisis service. If you’re in crisis, call or text 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.",
  },
];

function Index() {
  useScrollReveal();
  useCardGlow();
  const heroRef = useSpotlight<HTMLElement>();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader dark />

      <main id="main">
        {/* Hero */}
        <section
          id="top"
          ref={heroRef}
          className="holo-scope holo-bg holo-grid spotlight overflow-hidden pt-28 pb-16 max-[380px]:pt-36 sm:pt-36 sm:pb-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
            <div className="aurora" />
            <NeuralField className="absolute inset-0 h-full w-full opacity-80" />
            <DnaHelix className="absolute top-0 right-[3%] hidden h-full w-14 opacity-50 lg:block" />
            <div
              className="glow-orb"
              style={{
                top: "8%",
                right: "6%",
                width: "28rem",
                height: "28rem",
                background: "color-mix(in oklab, var(--sage) 30%, transparent)",
              }}
            />
            <div
              className="glow-orb glow-orb-alt"
              style={{
                bottom: "-10%",
                left: "-6%",
                width: "24rem",
                height: "24rem",
                background: "color-mix(in oklab, var(--gold) 14%, transparent)",
              }}
            />
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
            <div className="lg:col-span-7">
              <p
                style={{ "--i": 0 } as React.CSSProperties}
                className="rise glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                Now accepting new clients
              </p>
              <h1 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[4.75rem]">
                <span className="sr-only">
                  You’ve tried managing it. What if you could finally understand it?
                </span>
                <span aria-hidden>
                  <RiseWords text="You’ve tried managing it. What if you could finally" start={1} />
                  <em className="rise text-gold-sheen" style={{ "--i": 10 } as React.CSSProperties}>
                    understand
                  </em>{" "}
                  <RiseWords text="it?" start={11} />
                </span>
              </h1>
            </div>

            <div
              id="request-call"
              className="scroll-mt-6 rounded-3xl border border-border bg-card p-5 shadow-[0_40px_100px_-40px_oklch(0.35_0.04_70_/_0.45)] sm:p-7 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-start"
            >
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={sarahHeadshot}
                  width={400}
                  height={400}
                  alt="Sarah Ateia Khattab smiling"
                  className="aspect-square w-16 flex-shrink-0 rounded-full border-2 border-border object-cover object-top"
                />
                <div>
                  <h2 className="font-serif text-2xl leading-tight text-foreground">
                    Request a call
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Free 15-minute consultation. I’ll call you back.
                  </p>
                </div>
              </div>
              <ConsultationForm />
              <a
                href={PHONE_HREF}
                className="mt-4 flex items-center justify-center gap-2 border-t border-border pt-4 text-sm text-foreground/80 transition hover:text-foreground"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden />
                Or call <span className="font-medium">{PHONE_DISPLAY}</span>
              </a>
            </div>

            <div className="lg:col-span-7 lg:row-start-2">
              <p
                style={{ "--i": 13 } as React.CSSProperties}
                className="rise max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mt-6"
              >
                There’s a reason your mind works the way it does: your stress response, your
                attention, your emotional patterns. My practice is rooted in that belief, with
                sessions outdoors in Dallas–Fort Worth parks and by telehealth across Texas.
              </p>
              <p className="mt-5 text-sm text-muted-foreground">
                $100 per session · Reduced rates available
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <span>Dallas–Fort Worth · Outdoor sessions</span>
                <span className="hidden h-4 w-px bg-border sm:inline-block" />
                <span>Texas · Telehealth</span>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Sarah Ateia Khattab, M.S., LPC Associate, NCC. Supervised by Don Zablosky, LPC-S.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights strip */}
        <div className="holo-scope marquee-wrap overflow-hidden border-t border-border bg-night py-6">
          <div className="[mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 items-center gap-x-10 pr-10 text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 whitespace-nowrap">
                      <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* One-line summary with small photos set inside the sentence */}
        <section className="py-16 sm:py-24">
          <p className="reveal mx-auto max-w-4xl px-6 text-center font-serif text-[2rem] font-light leading-[1.3] tracking-[-0.01em] text-foreground sm:text-5xl sm:leading-[1.25]">
            Counseling outdoors{" "}
            <InlinePhoto
              src={sarahOverlook}
              width={1600}
              height={1066}
              position="60% 45%"
              tilt="-rotate-3"
            />{" "}
            or from home{" "}
            <InlinePhoto
              src={chicoPortrait}
              width={900}
              height={675}
              position="50% 20%"
              tilt="rotate-3"
            />
            , in <em className="text-taupe">English</em> or <em className="text-taupe">Arabic</em>.
          </p>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border/60 bg-secondary/40 py-16 sm:py-20">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                A relational, considered approach.
              </h2>
              <figure className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 lg:max-w-none lg:grid-cols-1 lg:gap-8">
                <img
                  src={sarahGraduation}
                  width={800}
                  height={1000}
                  alt="Sarah at her graduate commencement, holding flowers"
                  loading="lazy"
                  className="aspect-[4/5] w-full rotate-1 rounded-[2rem] border border-border object-cover shadow-[0_30px_70px_-40px_oklch(0.35_0.04_70_/_0.5)]"
                />
                <img
                  src={sarahHarbor}
                  width={800}
                  height={1000}
                  alt="Sarah in a blue hijab, sitting at a table by the water"
                  loading="lazy"
                  className="aspect-[4/5] w-full -rotate-1 rounded-[2rem] border border-border object-cover shadow-[0_30px_70px_-40px_oklch(0.35_0.04_70_/_0.5)]"
                />
              </figure>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8 sm:text-lg">
              <p>
                I am a Licensed Professional Counselor Associate (LPC Associate) in Texas and a
                National Certified Counselor (NCC), with a background in healthcare. I grew up in a
                multicultural environment, which shaped how I connect with people and how I hold
                space for different backgrounds and lived experiences. I offer sessions in English
                and Arabic.
              </p>
              <p>
                I believe everyone has a blueprint, but most people have not been given the tools to
                read it. Mood, sleep, stress, focus, and emotional patterns are all connected. The
                work I want to do is about learning to move <em className="text-taupe">with</em>{" "}
                your biology instead of against it, as you work toward the changes that matter to
                you.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Graduate Study
                  </p>
                  <p className="mt-2 font-serif text-lg text-foreground">
                    M.S., Psychology (Counseling &amp; Human Development)
                  </p>
                  <p className="text-sm text-muted-foreground">Texas Woman’s University</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Undergraduate
                  </p>
                  <p className="mt-2 font-serif text-lg text-foreground">B.S., Psychology</p>
                  <p className="text-sm text-muted-foreground">The University of Texas at Dallas</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    License
                  </p>
                  <p className="mt-2 font-serif text-lg text-foreground">LPC Associate #104391</p>
                  <p className="text-sm text-muted-foreground">
                    Texas BHEC · Supervised by Don Zablosky, LPC-S
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Certification
                  </p>
                  <p className="mt-2 font-serif text-lg text-foreground">
                    National Certified Counselor
                  </p>
                  <p className="text-sm text-muted-foreground">NBCC · NCC #1746909</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Chico: character section */}
        <section className="relative isolate overflow-hidden py-14 sm:py-16">
          {/* A dreamy, out-of-focus close-up of Chico as a soft painterly wash. */}
          <img
            src={chicoSoft}
            width={900}
            height={1200}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[60%_45%] opacity-35"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-background/20" />
          <div className="reveal mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-5 sm:gap-14">
              <div className="sm:col-span-2">
                <div className="relative mx-auto w-full max-w-xs">
                  <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[0_20px_60px_-30px_rgba(80,60,40,0.3)]">
                    <img
                      src={chicoPortrait}
                      width={900}
                      height={675}
                      alt="Chico, Sarah’s orange cat"
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <img
                    src={chicoSleeping}
                    width={600}
                    height={600}
                    alt="Chico asleep under a floral blanket"
                    loading="lazy"
                    className="absolute -right-4 -bottom-6 w-32 rotate-3 rounded-2xl border-4 border-card object-cover shadow-[0_20px_50px_-25px_rgba(80,60,40,0.45)] sm:-right-8 sm:w-36"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  A warm presence
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  Meet Chico.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  My orange cat is calm, loving, and surprisingly good at just being present. For
                  clients who’d like a little extra comfort, he’s available to join sessions on
                  request. No agenda, no opinions, just a quiet warmth when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Art interlude */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
            <figure className="lg:col-span-7">
              <div className="glow-card -rotate-1 rounded-[2rem] border border-border bg-[#fbf8f1] p-4 shadow-[0_40px_90px_-50px_rgba(60,50,40,0.55)] transition-transform duration-700 hover:rotate-0 sm:p-6">
                <WatercolorBloom className="block h-auto w-full" />
              </div>
            </figure>
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">A pause</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Feelings rarely stay inside the lines.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                They bleed into each other, like watercolor: worry into tiredness, grief into anger,
                hope into fear. Therapy can be a place to notice the colors without needing to tidy
                them up first.
              </p>
            </div>
          </div>
        </section>

        {/* Support areas */}
        <section id="support" className="py-14 sm:py-16">
          <div className="reveal mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">Who I support</h2>
            <p className="mt-2 text-muted-foreground">Some of the areas I focus on.</p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {SUPPORT_AREAS.map((item) => (
                <li
                  key={item}
                  className="glow-card rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Everyone is welcome here</span>,
              whatever your culture, language, faith or lack of one, gender, sexual orientation,
              age, body, ability, or background.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section
          id="approach"
          className="relative isolate overflow-hidden border-y border-border/60 py-16 sm:py-20"
        >
          <img
            src={brainArt}
            width={192}
            height={336}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute top-1/2 -right-16 -z-10 h-[125%] w-auto max-w-none -translate-y-1/2 opacity-[0.22] mix-blend-multiply blur-[1.5px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_72%)] sm:-right-4 sm:opacity-30 lg:right-auto lg:left-[-3rem]"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(40% 60% at 80% 50%, color-mix(in oklab, var(--sage) 35%, transparent), transparent 70%)",
            }}
          />
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Approach</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Understand yourself, gently.
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I’m drawn to the <em className="text-taupe">why</em> behind how you feel. Together
                we work on practical tools alongside a deeper understanding of yourself: why your
                nervous system responds the way it does, and how that can shape the way you relate
                to yourself.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                My practice pairs traditional counseling foundations with genetics-informed
                psychoeducation and emerging research in neurobiology, held as an educational lens
                for noticing patterns in mood, stress, attention, and regulation. Not diagnosis, not
                medical advice, always alongside the relational work itself.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                {["Grounding", "Mind–body", "Nature-based", "Relational"].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-border bg-background px-4 py-2 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <blockquote
                className="mt-4 border-l-2 pl-5 font-serif text-lg italic leading-relaxed text-foreground/80"
                style={{
                  borderColor: "color-mix(in oklab, var(--sage) 70%, transparent)",
                }}
              >
                Understanding why you feel the way you do can be a meaningful part of change.
              </blockquote>
            </div>
          </div>
        </section>

        <div className="pt-16 sm:pt-20">
          <NatureBand
            scene="forest"
            lines={["No couch. No office.", "Just trees and fresh air."]}
          />
        </div>

        {/* Outdoor sessions */}
        <section id="outdoors" className="py-16 sm:py-20">
          <div className="reveal mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Sessions outdoors
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                  Therapy under open sky, <em className="text-taupe">not</em> in an office.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  In-person sessions happen outside, in a park. Many people find it easier to talk
                  side by side, with fresh air, trees, and room to move, than across a desk.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Nature becomes a gentle part of the work: noticing your breath, your feet on the
                  ground, the sounds around you. These are simple grounding practices you can take
                  home with you.
                </p>
              </div>
            </div>
            <figure className="mt-10 overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_90px_-50px_oklch(0.35_0.04_70_/_0.5)]">
              <img
                src={sarahOverlook}
                width={1600}
                height={1066}
                alt="Sarah looking out over the city from an open-air terrace"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover object-[60%_50%] sm:aspect-[21/9]"
              />
            </figure>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {OUTDOOR_NOTES.map((note) => (
                <li
                  key={note.title}
                  className="glow-card rounded-2xl border border-border bg-card p-5"
                >
                  <p className="font-serif text-lg text-foreground">{note.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Before your first outdoor session, you’ll sign a short consent form covering privacy,
              weather, and safety. I’ll walk you through it.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="holo-scope holo-bg holo-grid overflow-hidden">
          <div className="aurora" aria-hidden />
          <FloralNeuron className="pointer-events-none absolute -top-2 right-[-2rem] -z-10 h-72 w-auto rotate-12 opacity-60 sm:right-[4%] sm:h-96" />
          <FloralNeuron className="pointer-events-none absolute bottom-6 left-[-3rem] -z-10 hidden h-64 w-auto -rotate-[20deg] opacity-40 md:block" />
          <Wave className="text-cream" />
          <div className="reveal mx-auto max-w-5xl px-6 py-20 sm:py-16 sm:py-20">
            <p className="text-xs uppercase tracking-[0.2em] text-taupe">What I bring</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
              Three things I hold in every session.
            </h2>
            <ol className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
              {PRINCIPLES.map((item, i) => (
                <li key={item.title} className="glass glow-card rounded-3xl p-7">
                  <span className="text-gold-sheen font-serif text-5xl font-light">0{i + 1}</span>
                  <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <Wave className="text-cream" flip />
        </section>

        <div className="pt-6 sm:pt-10">
          <NatureBand scene="lake" lines={["Slow down.", "Breathe.", "One moment at a time."]} />
        </div>

        {/* Breathing exercise */}
        <section id="breathe" className="py-16 sm:py-20">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                A moment for you
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Take one slow breath with me.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Slow, steady breathing is one simple way many people find to settle when things feel
                like a lot. Follow the circle. Breathe in as it grows, hold, and breathe out as it
                softens.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                A general wellness exercise, not treatment. Stop if you feel lightheaded.
              </p>
            </div>
            <BreathingExercise />
          </div>
        </section>

        <Introspection />

        {/* How it works */}
        <section className="border-t border-border/60 bg-secondary/40 py-16 sm:py-20">
          <div className="reveal mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                How it works
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Three steps. No pressure.
              </h2>
            </div>
            <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="glow-card rounded-2xl border border-border bg-card p-6"
                >
                  <span className="font-serif text-4xl text-taupe">{i + 1}</span>
                  <p className="mt-3 font-serif text-xl text-foreground">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fees */}
        <section id="fees" className="py-16 sm:py-20">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Services &amp; fees
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Clear rates. Reduced rates available.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                My practice is self-pay, and I don’t bill insurance. I offer reduced rates so that
                cost is less of a barrier to getting support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I’m licensed in Texas. If you live outside Texas, I’m glad to help point you toward
                other options.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <ul className="divide-y divide-border">
                  {FEES.map((fee) => (
                    <li
                      key={fee.service}
                      className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-8"
                    >
                      <div>
                        <p className="font-serif text-xl text-foreground">{fee.service}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{fee.detail}</p>
                      </div>
                      <p className="whitespace-nowrap font-serif text-xl text-taupe">{fee.price}</p>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border bg-secondary/50 px-6 py-6 sm:px-8">
                  <p className="font-serif text-lg text-foreground">How reduced rates work</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Reduced rates are based on your household income, which you simply tell me.
                    There’s no need to explain your circumstances. Your rate stays private and is
                    reviewed every six months, or sooner if your income changes.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                You have the right to receive a Good Faith Estimate of expected charges before
                services begin.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation */}
        <section id="consult" className="py-16 sm:py-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Get started
              </p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-5xl">
                A free 15-minute consultation.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                No pressure. No commitment. Just a short call to see if we’re a good fit. Leave your
                details and I’ll call you, or call me directly.
              </p>
            </div>

            <div className="holo-scope holo-bg holo-grid mt-10 overflow-hidden rounded-3xl px-6 py-12 text-center shadow-[0_40px_100px_-40px_oklch(0.35_0.04_70_/_0.4)] sm:px-10">
              <div className="aurora" aria-hidden />
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(50% 80% at 85% 0%, color-mix(in oklab, var(--sage) 70%, transparent), transparent 70%), radial-gradient(40% 70% at 0% 100%, color-mix(in oklab, var(--sage) 50%, transparent), transparent 70%)",
                }}
              />
              <div className="relative">
                <ConsultationButton className="btn-shine inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-medium text-primary-foreground transition hover:-translate-y-0.5">
                  <Phone className="h-4 w-4" aria-hidden />
                  Request a Call
                </ConsultationButton>
                <p className="mt-8 text-xs uppercase tracking-[0.2em] text-taupe">
                  Or call me directly
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-3 inline-flex items-center gap-3 font-serif text-3xl tracking-tight transition hover:opacity-90 sm:text-4xl"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {PHONE_DISPLAY}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  Standard fee $100 per session. Reduced rates available.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CONSULT_PERKS.map((perk) => (
                <div
                  key={perk.title}
                  className="glow-card rounded-2xl border border-border bg-card p-5"
                >
                  <p className="font-serif text-lg text-foreground">{perk.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pb-16 sm:pb-20">
          <div className="reveal mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
                Common questions.
              </h2>
            </div>
            <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
              {FAQS.map((item) => (
                <details key={item.q} className="group px-6 py-5 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-foreground [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg">{item.q}</h3>
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-border bg-secondary/40 p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Disclosures
              </p>
              <ul className="mt-5 divide-y divide-border/60 text-sm leading-relaxed text-muted-foreground">
                {DISCLOSURES.map((item) => (
                  <li key={item} className="py-3 first:pt-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-background px-5 py-4 text-sm text-foreground/90">
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/40 text-primary-foreground"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <span>
                  In crisis? Call or text <span className="font-medium">988</span> (Suicide &amp;
                  Crisis Lifeline) or go to your nearest emergency room.{" "}
                  <a
                    href="/crisis/"
                    className="font-medium text-primary-foreground underline-offset-4 hover:underline"
                  >
                    See Dallas–Fort Worth crisis resources →
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/** A small rounded photo that sits inside a line of text, like a word. Decorative only. */
function InlinePhoto({
  src,
  width,
  height,
  position,
  tilt,
}: {
  src: string;
  width: number;
  height: number;
  position: string;
  tilt: string;
}) {
  return (
    <span
      className={`inline-block h-[0.9em] w-[1.55em] overflow-hidden rounded-full border-2 border-card align-[-0.12em] shadow-[0_10px_24px_-12px_oklch(0.35_0.04_70_/_0.6)] transition-transform duration-500 hover:rotate-0 hover:scale-110 ${tilt}`}
      aria-hidden
    >
      <img
        src={src}
        width={width}
        height={height}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
    </span>
  );
}

/** A soft wave edge between a colored band and the page background. */
function Wave({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-14 ${flip ? "rotate-180" : ""} ${className ?? ""}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 0h1440v22c-120 18-260 30-420 24S760 18 600 16 300 34 160 38 40 34 0 30Z"
      />
    </svg>
  );
}
