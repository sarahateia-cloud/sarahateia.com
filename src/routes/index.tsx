import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone } from "lucide-react";
import { BreathingExercise } from "@/components/breathing-exercise";
import { DnaHelix, FloralNeuron } from "@/components/bio-motifs";
import { NeuralField } from "@/components/neural-field";
import { WatercolorBloom } from "@/components/watercolor-bloom";
import {
  RiseWords,
  ScrollProgress,
  Tilt,
  useCardGlow,
  useScrollReveal,
  useSpotlight,
} from "@/components/motion";
import { PHONE_DISPLAY, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/site-header";
import sarahPortrait from "@/assets/sarah-harbor.jpg";
import sarahHeadshot from "@/assets/sarah-ateia.jpeg";
import sarahGraduation from "@/assets/sarah-graduation.jpg";
import sarahOverlook from "@/assets/sarah-overlook.jpg";
import chicoPortrait from "@/assets/chico.jpeg";
import chicoSoft from "@/assets/chico-soft.jpg";
import chicoSleeping from "@/assets/chico-sleeping.jpg";
import brainArt from "@/assets/brain-watercolor.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzdvlop";

const HIGHLIGHTS = [
  "LPC Associate",
  "National Certified Counselor",
  "English & Arabic",
  "Sliding scale $60–$100/hour",
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
    title: "Sliding fee scale",
    body: "Self-pay, with sliding scale rates from $60 to $100 per hour. Just ask during your call.",
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
  "Self-pay only; I don’t bill insurance. Sliding scale rates range from $60 to $100 per hour. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
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
    price: "$60–$100 / hour",
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
    a: "No. My practice is self-pay only, and I don’t bill insurance. I offer a sliding scale from $60 to $100 per hour, and we can talk about what fits during your free consultation.",
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
    a: "Yes. I offer a sliding scale from $60 to $100 per hour, set together during a free 15-minute consultation, for clients in Irving, Dallas, Fort Worth, and across Texas by telehealth.",
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      best_time: formData.get("best_time"),
      _subject: "New consultation request",
    };

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message ?? "Submission failed.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader dark />

      {/* Hero */}
      <section
        id="top"
        ref={heroRef}
        className="holo-scope holo-bg holo-grid spotlight overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
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
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
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
            <p
              style={{ "--i": 13 } as React.CSSProperties}
              className="rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              There’s a reason your mind works the way it does: your stress response, your
              attention, your emotional patterns. My practice is rooted in that belief, with
              sessions outdoors in Dallas–Fort Worth parks and by telehealth across Texas.
            </p>
            <div
              style={{ "--i": 15 } as React.CSSProperties}
              className="rise mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={PHONE_HREF}
                className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call for a Free 15-Min Consultation
              </a>
              <a
                href="#consult"
                className="inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground"
              >
                Or request a call back
                <span aria-hidden>→</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href={PHONE_HREF} className="font-medium text-foreground/80 hover:text-foreground">
                {PHONE_DISPLAY}
              </a>{" "}
              · Sliding scale $60–$100 per hour
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Dallas–Fort Worth · Outdoor sessions</span>
              <span className="hidden h-4 w-px bg-border sm:inline-block" />
              <span>Texas · Telehealth</span>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <Tilt>
              <div className="relative mx-auto w-full max-w-md">
                <div
                  className="absolute -inset-4 -z-10 rounded-[2rem] opacity-70 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--sage) 55%, transparent), color-mix(in oklab, var(--sage) 25%, transparent))",
                  }}
                />
                <div className="overflow-hidden rounded-[2rem] border border-[color:color-mix(in_oklab,var(--gold)_35%,transparent)] bg-card p-1.5 shadow-[0_40px_100px_-40px_oklch(0.35_0.04_70_/_0.45)]">
                  <img
                    src={sarahPortrait}
                    alt="Portrait of Sarah Ateia Khattab"
                    className="aspect-[4/5] h-full w-full rounded-[1.6rem] object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-night/85 px-5 py-3 backdrop-blur-md">
                  <p className="font-serif text-lg leading-tight text-foreground">
                    Sarah Ateia Khattab
                  </p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    M.S., LPC Associate, NCC
                  </p>
                </div>
                <img
                  src={sarahHeadshot}
                  alt="Sarah Ateia Khattab smiling"
                  className="absolute -top-6 -right-4 aspect-square w-28 rounded-full border-4 border-card object-cover shadow-[0_20px_50px_-20px_oklch(0.35_0.04_70_/_0.5)] sm:-right-6 sm:w-32"
                />
              </div>
            </Tilt>
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

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-secondary/40 py-16 sm:py-20">
        <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              A relational, considered approach.
            </h2>
            <figure className="mx-auto mt-8 max-w-xs lg:max-w-none">
              <img
                src={sarahGraduation}
                alt="Sarah at her graduate commencement, holding flowers"
                loading="lazy"
                className="aspect-[4/5] w-full rotate-1 rounded-[2rem] border border-border object-cover shadow-[0_30px_70px_-40px_oklch(0.35_0.04_70_/_0.5)]"
              />
            </figure>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8 sm:text-lg">
            <p>
              I am a Licensed Professional Counselor Associate (LPC Associate) in Texas and a
              National Certified Counselor (NCC), with a background in healthcare. I grew up in a
              multicultural environment, which shaped how I connect with people and how I hold space
              for different backgrounds and lived experiences. I offer sessions in English and
              Arabic.
            </p>
            <p>
              I believe everyone has a blueprint, but most people have not been given the tools to
              read it. Mood, sleep, stress, focus, and emotional patterns are all connected. The
              work I want to do is about learning to move <em className="text-taupe">with</em> your
              biology instead of against it, as you work toward the changes that matter to you.
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
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">License</p>
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
                    alt="Chico, Sarah’s orange cat"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <img
                  src={chicoSleeping}
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
            <span className="font-medium text-foreground">Everyone is welcome here</span>, whatever
            your culture, language, faith or lack of one, gender, sexual orientation, age, body,
            ability, or background.
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
              A thoughtful, emerging approach to emotional wellness.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’m drawn to the <em className="text-taupe">why</em> behind how you feel. Together we
              work on practical tools alongside a deeper understanding of yourself: why your nervous
              system responds the way it does, and how that can shape the way you relate to
              yourself.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              My practice pairs traditional counseling foundations with genetics-informed
              psychoeducation and emerging research in neurobiology, held as an educational lens for
              noticing patterns in mood, stress, attention, and regulation. Not diagnosis, not
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
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <Wave className="text-cream" flip />
      </section>

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

      {/* How it works */}
      <section className="border-t border-border/60 bg-secondary/40 py-16 sm:py-20">
        <div className="reveal mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Getting started is simple.
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
              Clear, flexible rates.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              My practice is self-pay, and I don’t bill insurance. I keep a sliding scale so that
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
                <p className="font-serif text-lg text-foreground">How the sliding scale works</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We settle on your rate together during the free consultation, based on what’s
                  manageable for you. It stays private, and we can revisit it if your circumstances
                  change.
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

      {/* Consultation Form */}
      <section id="consult" className="py-16 sm:py-20">
        <div className="reveal mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get started</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-5xl">
              A free 15-minute consultation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              A short call to see if we’re a good fit, with no pressure and no commitment. Call me
              directly, or leave your details below and I’ll reach out.
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
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                Call for your free 15-minute consultation
              </p>
              <a
                href={PHONE_HREF}
                className="mt-3 block font-serif text-4xl tracking-tight transition hover:opacity-90 sm:text-5xl"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={PHONE_HREF}
                className="btn-shine mt-6 inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Sliding scale from $60 to $100 per hour. Ask on the call.
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

          <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            Prefer to write? Request a call back
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(80,60,40,0.25)] sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--sage) 50%, transparent)" }}
                >
                  <svg
                    className="h-6 w-6 text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">Thank you.</h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  I’ll call you soon for your free 15-minute consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="City" name="location" type="text" optional />
                  <div className="sm:col-span-2">
                    <Field label="Best time to call" name="best_time" type="text" optional />
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Request a Call Back"}
                  </button>
                  {error && <p className="mt-3 text-center text-sm text-destructive">{error}</p>}
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Used only to contact you about scheduling. Please don’t include sensitive health
                    details.
                  </p>
                </div>
              </form>
            )}
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
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Disclosures</p>
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

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  optional,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between text-sm font-medium text-foreground">
        <span>{label}</span>
        {optional && <span className="text-xs font-normal text-muted-foreground">optional</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
      />
    </label>
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
