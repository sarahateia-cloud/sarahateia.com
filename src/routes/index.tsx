import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { BreathingExercise } from "@/components/breathing-exercise";
import { ConsultationForm } from "@/components/consultation-dialog";
import { BookingActions, SectionHeading, StickyCallBar } from "@/components/ds/booking";
import { Introspection } from "@/components/introspection";
import { NatureBand } from "@/components/nature-band";
import { WatercolorBloom } from "@/components/watercolor-bloom";
import { useScrollReveal } from "@/components/motion";
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

/** Card surface used for every small panel on the page. */
const CARD = "rounded-2xl border border-border bg-card p-6";

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background pb-24 text-foreground md:pb-0">
      <SiteHeader dark />

      <main id="main">
        {/* 1. Hero: who, what, and both ways to book, with the form in reach. */}
        <section
          id="top"
          className="holo-scope holo-bg overflow-hidden pt-28 pb-16 max-[380px]:pt-36 sm:pt-36 sm:pb-24"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-7 lg:pt-4">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-cta" aria-hidden />
                Now accepting new clients
              </p>
              <h1 className="font-serif text-[2.6rem] font-light leading-[1.05] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[4.5rem]">
                You’ve tried managing it. What if you could finally{" "}
                <em className="text-taupe">understand</em> it?
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                There’s a reason your mind works the way it does: your stress response, your
                attention, your emotional patterns. My practice is rooted in that belief, with
                sessions outdoors in Dallas–Fort Worth parks and by telehealth across Texas.
              </p>
              <BookingActions
                requestHref="#request-call"
                className="mt-8 lg:[&>a:first-child]:hidden"
              />
              <dl className="mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 border-t border-border pt-6 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-muted-foreground">Licensed in Texas</dt>
                  <dd className="text-foreground">Sarah Ateia Khattab, M.S., LPC Associate, NCC</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Supervised by</dt>
                  <dd className="text-foreground">Don Zablosky, LPC-S</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Fees</dt>
                  <dd className="text-foreground">$100 per session · Reduced rates available</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Sessions</dt>
                  <dd className="text-foreground">Dallas–Fort Worth outdoors · Texas telehealth</dd>
                </div>
              </dl>
            </div>

            <div
              id="request-call"
              className="scroll-mt-6 rounded-3xl border border-border bg-card p-5 shadow-[0_30px_80px_-40px_oklch(0.35_0.04_70_/_0.4)] sm:p-7 lg:col-span-5"
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
                className="mt-4 flex min-h-12 items-center justify-center gap-2 border-t border-border pt-4 text-sm text-foreground transition-colors hover:text-cta"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Or call <span className="font-medium">{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. At a glance: the facts people check before booking. */}
        <section aria-label="At a glance" className="border-y border-border bg-card">
          <ul className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            <li className="py-6 sm:pr-6">
              <p className="font-serif text-xl text-foreground">Free 15-minute consultation</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{STEPS[1].body}</p>
            </li>
            {CONSULT_PERKS.map((perk) => (
              <li key={perk.title} className="py-6 sm:pr-6">
                <p className="font-serif text-xl text-foreground">{perk.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{perk.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. The photo headline. */}
        <section className="ds-section">
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

        {/* 4. How it works, early, so booking feels simple. */}
        <section className="ds-section border-t border-border/60 bg-secondary/50">
          <div className="reveal mx-auto max-w-5xl px-6">
            <SectionHeading eyebrow="How it works" title="Three steps. No pressure." center />
            <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className={CARD}>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-cta font-serif text-lg text-cta-foreground"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="mt-4 font-serif text-xl text-foreground">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
            <BookingActions className="mt-10 justify-center" />
          </div>
        </section>

        {/* 5. About and credentials. */}
        <section id="about" className="ds-section">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="About" title="A relational, considered approach." />
              <figure className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4 lg:max-w-none lg:grid-cols-1 lg:gap-6">
                <img
                  src={sarahGraduation}
                  width={800}
                  height={1000}
                  alt="Sarah at her graduate commencement, holding flowers"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[1.75rem] border border-border object-cover"
                />
                <img
                  src={sarahHarbor}
                  width={800}
                  height={1000}
                  alt="Sarah in a blue hijab, sitting at a table by the water"
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-[1.75rem] border border-border object-cover"
                />
              </figure>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-8">
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
              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  [
                    "Graduate Study",
                    "M.S., Psychology (Counseling & Human Development)",
                    "Texas Woman’s University",
                  ],
                  ["Undergraduate", "B.S., Psychology", "The University of Texas at Dallas"],
                  [
                    "License",
                    "LPC Associate #104391",
                    "Texas BHEC · Supervised by Don Zablosky, LPC-S",
                  ],
                  ["Certification", "National Certified Counselor", "NBCC · NCC #1746909"],
                ].map(([label, title, detail]) => (
                  <div key={label} className="rounded-2xl border border-border bg-card p-5">
                    <dt className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-2 font-serif text-lg text-foreground">{title}</dd>
                    <dd className="text-sm text-muted-foreground">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* 6. Who I support. */}
        <section id="support" className="ds-section border-t border-border/60 bg-secondary/50">
          <div className="reveal mx-auto max-w-4xl px-6 text-center">
            <SectionHeading title="Who I support" center>
              <p>Some of the areas I focus on.</p>
            </SectionHeading>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {SUPPORT_AREAS.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Everyone is welcome here</span>,
              whatever your culture, language, faith or lack of one, gender, sexual orientation,
              age, body, ability, or background.
            </p>
          </div>
        </section>

        {/* 7. Approach and the three principles. */}
        <section id="approach" className="ds-section relative isolate overflow-hidden">
          <img
            src={brainArt}
            width={192}
            height={336}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute top-24 -right-16 -z-10 h-[28rem] w-auto max-w-none opacity-20 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_72%)] sm:right-0 lg:right-auto lg:left-[-3rem]"
          />
          <div className="reveal mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SectionHeading eyebrow="Approach" title="Understand yourself, gently." />
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
                  for noticing patterns in mood, stress, attention, and regulation. Not diagnosis,
                  not medical advice, always alongside the relational work itself.
                </p>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {["Grounding", "Mind–body", "Nature-based", "Relational"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-2 border-cta/40 pl-5 font-serif text-lg italic leading-relaxed text-foreground/85">
                  Understanding why you feel the way you do can be a meaningful part of change.
                </blockquote>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                What I bring
              </p>
              <h3 className="mt-3 max-w-2xl font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                Three things I hold in every session.
              </h3>
              <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {PRINCIPLES.map((item, i) => (
                  <li key={item.title} className={CARD}>
                    <span className="font-serif text-3xl font-light text-taupe" aria-hidden>
                      0{i + 1}
                    </span>
                    <h4 className="mt-3 font-serif text-xl text-foreground">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 8. Outdoor sessions. */}
        <section id="outdoors" className="ds-section">
          <div className="reveal mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Sessions outdoors"
                  title={
                    <>
                      Therapy under open sky, <em className="text-taupe">not</em> in an office.
                    </>
                  }
                />
              </div>
              <div className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-7">
                <p>
                  In-person sessions happen outside, in a park. Many people find it easier to talk
                  side by side, with fresh air, trees, and room to move, than across a desk.
                </p>
                <p className="mt-4">
                  Nature becomes a gentle part of the work: noticing your breath, your feet on the
                  ground, the sounds around you. These are simple grounding practices you can take
                  home with you.
                </p>
              </div>
            </div>
            <figure className="mt-10 overflow-hidden rounded-[1.75rem] border border-border">
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

        {/* 9. A pause: watercolor and Chico. */}
        <section className="ds-section border-t border-border/60 bg-secondary/50">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12">
            <figure className="lg:col-span-7">
              <div className="rounded-[1.75rem] border border-border bg-[#fbf8f1] p-4 sm:p-6">
                <WatercolorBloom className="block h-auto w-full" />
              </div>
            </figure>
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="A pause" title="Feelings rarely stay inside the lines.">
                <p>
                  They bleed into each other, like watercolor: worry into tiredness, grief into
                  anger, hope into fear. Therapy can be a place to notice the colors without needing
                  to tidy them up first.
                </p>
              </SectionHeading>
            </div>
          </div>
        </section>

        <section className="ds-section relative isolate overflow-hidden">
          <img
            src={chicoSoft}
            width={900}
            height={1200}
            alt=""
            aria-hidden
            loading="lazy"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover object-[60%_45%] opacity-25"
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="reveal mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-5 sm:gap-14">
              <div className="sm:col-span-2">
                <div className="relative mx-auto w-full max-w-xs">
                  <div className="aspect-square w-full overflow-hidden rounded-[1.75rem] border border-border bg-secondary">
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
                    className="absolute -right-4 -bottom-6 w-32 rotate-3 rounded-2xl border-4 border-card object-cover sm:-right-8 sm:w-36"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <SectionHeading eyebrow="A warm presence" title="Meet Chico.">
                  <p>
                    My orange cat is calm, loving, and surprisingly good at just being present. For
                    clients who’d like a little extra comfort, he’s available to join sessions on
                    request. No agenda, no opinions, just a quiet warmth when you need it.
                  </p>
                </SectionHeading>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Breathing. */}
        <NatureBand scene="lake" lines={["Slow down.", "Breathe.", "One moment at a time."]} />
        <section id="breathe" className="ds-section">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="A moment for you" title="Take one slow breath with me.">
                <p>
                  Slow, steady breathing is one simple way many people find to settle when things
                  feel like a lot. Follow the circle. Breathe in as it grows, hold, and breathe out
                  as it softens.
                </p>
              </SectionHeading>
              <p className="mt-4 text-xs text-muted-foreground">
                A general wellness exercise, not treatment. Stop if you feel lightheaded.
              </p>
            </div>
            <BreathingExercise />
          </div>
        </section>

        <Introspection />

        {/* 11. Fees. */}
        <section id="fees" className="ds-section border-t border-border/60 bg-secondary/50">
          <div className="reveal mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Services & fees"
                title="Clear rates. Reduced rates available."
              >
                <p>
                  My practice is self-pay, and I don’t bill insurance. I offer reduced rates so that
                  cost is less of a barrier to getting support.
                </p>
                <p className="mt-4">
                  I’m licensed in Texas. If you live outside Texas, I’m glad to help point you
                  toward other options.
                </p>
              </SectionHeading>
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

        {/* 12. Book. */}
        <section id="consult" className="ds-section">
          <div className="reveal mx-auto max-w-3xl px-6">
            <div className="rounded-3xl border border-border bg-card px-6 py-12 text-center sm:px-12">
              <SectionHeading eyebrow="Get started" title="A free 15-minute consultation." center>
                <p>
                  No pressure. No commitment. Just a short call to see if we’re a good fit. Leave
                  your details and I’ll call you, or call me directly.
                </p>
              </SectionHeading>
              <BookingActions className="mt-8 justify-center" />
              <p className="mt-6 text-sm text-muted-foreground">
                Standard fee $100 per session. Reduced rates available.
              </p>
            </div>
          </div>
        </section>

        {/* 13. FAQ. */}
        <section id="faq" className="pb-[var(--section-y)]">
          <div className="reveal mx-auto max-w-3xl px-6">
            <SectionHeading eyebrow="FAQ" title="Common questions." center />
            <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
              {FAQS.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-serif text-lg text-foreground sm:px-8 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg">{item.q}</h3>
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Disclosures and crisis help. */}
        <section className="pb-[var(--section-y)]">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground [font-family:var(--font-sans)]">
                Disclosures
              </h2>
              <ul className="mt-5 divide-y divide-border/60 text-sm leading-relaxed text-muted-foreground">
                {DISCLOSURES.map((item) => (
                  <li key={item} className="py-3 first:pt-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-background px-5 py-4 text-sm text-foreground">
                In crisis? Call or text <span className="font-medium">988</span> (Suicide &amp;
                Crisis Lifeline) or go to your nearest emergency room.{" "}
                <a href="/crisis/" className="font-medium text-cta underline underline-offset-4">
                  See Dallas–Fort Worth crisis resources →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCallBar />
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
      className={`inline-block h-[0.9em] w-[1.55em] overflow-hidden rounded-full border-2 border-card align-[-0.12em] shadow-[0_10px_24px_-12px_oklch(0.35_0.04_70_/_0.6)] ${tilt}`}
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
