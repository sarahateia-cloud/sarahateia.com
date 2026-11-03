import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone } from "lucide-react";
import { BreathingExercise } from "@/components/breathing-exercise";
import { Tilt, useScrollReveal } from "@/components/motion";
import { PHONE_DISPLAY, PHONE_HREF, SiteFooter, SiteHeader } from "@/components/site-header";
import sarahPortrait from "@/assets/sarah-ateia.jpeg";
import chicoPortrait from "@/assets/chico.jpeg";

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
    body: "Self-pay, with sliding scale rates from $60 to $100 per hour — just ask during your call.",
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
  "Submitting this form doesn’t create a therapist–client relationship. Your information is used only to contact you about scheduling — please don’t include sensitive health details.",
  "Telehealth is available only to clients who are physically located in Texas at the time of each session.",
  "Outdoor sessions take place in public parks, where complete privacy can’t be guaranteed. We choose quieter spots, and we can pause, move, or switch to telehealth at any time. A signed outdoor-session consent form is required.",
  "Self-pay only; I don’t bill insurance. Sliding scale rates range from $60 to $100 per hour. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
  "Any genetic or biological discussion is educational only — never medical advice, diagnosis, or treatment. I don’t prescribe or interpret labs; I refer to physicians for medical concerns.",
];

const PRINCIPLES = [
  {
    title: "Cultural humility",
    body: "I won’t assume I already know your story. I stay curious about your culture, faith, family, and language — and I welcome being corrected when I get something wrong.",
  },
  {
    title: "Shared direction",
    body: "You know your life in a way no one else does. I bring my counseling training; you bring your history and what you want. We decide where to go together.",
  },
  {
    title: "The whole person",
    body: "Mood, body, relationships, and culture are all connected, so we make room for all of them — not just the part that brought you in.",
  },
];

const OUTDOOR_NOTES = [
  {
    title: "Where we meet",
    body: "A quiet park in the Dallas–Fort Worth area that we choose together — somewhere easy for you to reach.",
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
    body: "We talk about what you’re looking for and whether we’re a good fit — no commitment.",
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
    a: "No. My practice is self-pay only, and I don’t bill insurance. I offer a sliding scale from $60 to $100 per hour — we can talk about what fits during your free consultation.",
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
    a: "Yes. Sessions are available in English or Arabic.",
  },
  {
    q: "What is genetics-informed psychoeducation?",
    a: "It’s an educational way of talking about how biology may relate to patterns in mood, stress, and attention. It’s never medical advice, diagnosis, or treatment — I don’t order or interpret lab tests, and I refer to physicians for medical questions.",
  },
  {
    q: "What if I’m in crisis?",
    a: "This practice isn’t a crisis service. If you’re in crisis, call or text 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.",
  },
];

function Index() {
  useScrollReveal();
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
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 20%, color-mix(in oklab, var(--sage) 32%, transparent), transparent 70%), radial-gradient(50% 60% at 10% 80%, color-mix(in oklab, var(--sage) 28%, transparent), transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
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
              background: "color-mix(in oklab, var(--sage) 22%, transparent)",
            }}
          />
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Now accepting new clients
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
              You’ve tried managing it. What if you could finally{" "}
              <em className="text-taupe">understand</em> it?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              There’s a reason your mind works the way it does — your stress response, your
              attention, your emotional patterns. My practice is rooted in that belief, with
              sessions outdoors in Dallas–Fort Worth parks and by telehealth across Texas.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:opacity-90"
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
                <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(80,60,40,0.35)]">
                  <img
                    src={sarahPortrait}
                    alt="Portrait of Sarah Ateia Khattab"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-background/90 px-5 py-3 backdrop-blur">
                  <p className="font-serif text-lg leading-tight text-foreground">
                    Sarah Ateia Khattab
                  </p>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    M.S., LPC Associate, NCC
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <div className="border-t border-border/60 bg-card/50">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-secondary/40 py-24">
        <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              A relational, considered approach.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8 sm:text-lg">
            <p>
              I’m a Licensed Professional Counselor Associate in Texas and a National Certified
              Counselor, with a background in healthcare. I grew up in a multicultural environment,
              which shaped how I connect with people and how I hold space for different backgrounds
              and lived experiences. I offer sessions in English and Arabic.
            </p>
            <p>
              I believe everyone has a blueprint — most people just haven’t been given the tools to
              read it. Mood, sleep, stress, focus, emotional patterns — it’s all connected. The work
              I want to do is about learning to move <em className="text-taupe">with</em> your
              biology instead of against it, as you work toward the changes that matter to you.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Graduate Study
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  M.S., Psychology – Counseling &amp; Human Development
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

      {/* Meet Chico — character section */}
      <section className="relative py-20">
        <div className="reveal mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-5 sm:gap-14">
            <div className="sm:col-span-2">
              <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[0_20px_60px_-30px_rgba(80,60,40,0.3)]">
                <img
                  src={chicoPortrait}
                  alt="Chico, Sarah’s orange cat"
                  className="h-full w-full object-cover object-top"
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
                request — no agenda, no opinions, just a quiet warmth when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support areas */}
      <section id="support" className="py-24">
        <div className="reveal mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Who I support
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              If any of this sounds familiar, you’re welcome here.
            </h2>
            <p className="mt-4 text-muted-foreground">Some of the areas I focus on.</p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORT_AREAS.map((item) => (
              <li
                key={item}
                className="group flex items-start gap-3 rounded-2xl border border-border bg-card/60 px-5 py-4 transition hover:border-clay/60 hover:bg-card"
              >
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay"
                  aria-hidden
                />
                <span className="text-sm text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="relative overflow-hidden border-y border-border/60 py-24">
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
              work on practical tools alongside a deeper understanding of yourself — why your
              nervous system responds the way it does, and how that can shape the way you relate to
              yourself.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              My practice pairs traditional counseling foundations with genetics-informed
              psychoeducation and emerging research in neurobiology — held as an educational lens
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

      {/* Outdoor sessions */}
      <section id="outdoors" className="py-24">
        <div className="reveal mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Sessions outdoors
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
                Therapy under open sky, <em className="text-taupe">not</em> in an office.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                In-person sessions happen outside, in a park. Many people find it easier to talk
                side by side, with fresh air, trees, and room to move, than across a desk.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Nature becomes a gentle part of the work: noticing your breath, your feet on the
                ground, the sounds around you. These are simple grounding practices you can take
                home with you.
              </p>
            </div>
            <NatureScene />
          </div>
          <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTDOOR_NOTES.map((note) => (
              <li key={note.title} className="rounded-2xl border border-border bg-card p-5">
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
      <section className="relative bg-primary text-primary-foreground">
        <Wave className="text-background" />
        <div className="reveal mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
            What I bring
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
            Three things I hold in every session.
          </h2>
          <ol className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {PRINCIPLES.map((item, i) => (
              <li key={item.title} className="border-t border-primary-foreground/25 pt-6">
                <span className="font-serif text-5xl text-primary-foreground/50">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <Wave className="text-background" flip />
      </section>

      {/* Breathing exercise */}
      <section id="breathe" className="py-24">
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
              like a lot. Follow the circle — breathe in as it grows, hold, and breathe out as it
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
      <section className="border-t border-border/60 bg-secondary/40 py-24">
        <div className="reveal mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Getting started is simple.
            </h2>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(80,60,40,0.35)]"
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
      <section id="fees" className="py-24">
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
      <section id="consult" className="py-24">
        <div className="reveal mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get started</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-5xl">
              A free 15-minute consultation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              A short call to see if we’re a good fit — no pressure, no commitment. Call me
              directly, or leave your details below and I’ll reach out.
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)] sm:px-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(50% 80% at 85% 0%, color-mix(in oklab, var(--sage) 70%, transparent), transparent 70%), radial-gradient(40% 70% at 0% 100%, color-mix(in oklab, var(--sage) 50%, transparent), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/75">
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
                className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-medium text-primary transition hover:opacity-90"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </a>
              <p className="mt-4 text-sm text-primary-foreground/75">
                Sliding scale from $60 to $100 per hour — ask on the call.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CONSULT_PERKS.map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-serif text-lg text-foreground">{perk.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
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
      <section id="faq" className="pb-24">
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
      <section className="pb-24">
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
                className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
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
                  className="font-medium text-primary underline-offset-4 hover:underline"
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

/** A calm illustrated park scene for the outdoor sessions section. */
function NatureScene() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border shadow-[0_30px_80px_-40px_rgba(80,60,40,0.4)]">
      <svg
        viewBox="0 0 480 360"
        className="block h-auto w-full"
        role="img"
        aria-label="Illustration of a quiet park with trees, rolling hills, and a path"
      >
        <rect width="480" height="360" fill="var(--secondary)" />
        <circle cx="350" cy="96" r="38" fill="var(--terracotta)" opacity="0.55" />
        <path d="M0 220c70-40 150-52 240-30s170 20 240-10v180H0Z" fill="var(--accent)" />
        <path
          d="M0 262c90-34 190-38 280-14s150 18 200 0v112H0Z"
          fill="var(--sage)"
          opacity="0.85"
        />
        <path
          d="M0 300c110-24 230-22 330-6s120 10 150 4v62H0Z"
          fill="var(--primary)"
          opacity="0.9"
        />
        <path
          d="M250 360c-10-40 6-70 40-96s46-44 40-62"
          fill="none"
          stroke="var(--background)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.7"
        />
        <g fill="var(--primary)">
          <rect x="92" y="170" width="7" height="70" rx="3" />
          <circle cx="95" cy="158" r="34" />
          <circle cx="74" cy="178" r="22" />
          <circle cx="118" cy="180" r="24" />
        </g>
        <g fill="var(--taupe)" opacity="0.85">
          <rect x="398" y="196" width="6" height="56" rx="3" />
          <circle cx="401" cy="186" r="26" />
          <circle cx="384" cy="200" r="16" />
        </g>
        <path
          d="M150 120c10-8 20-8 30 0M174 108c8-6 16-6 24 0"
          fill="none"
          stroke="var(--taupe)"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
