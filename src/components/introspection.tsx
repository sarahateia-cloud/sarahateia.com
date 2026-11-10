import {
  ArrowUpRight,
  Archive,
  Compass,
  Eye,
  HeartHandshake,
  ListChecks,
  Mountain,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { useState, type CSSProperties } from "react";
import { Enneagram } from "@/components/enneagram";

const TESTS = [
  {
    name: "16Personalities",
    href: "https://www.16personalities.com/",
    body: "A free test that sorts answers into 16 personality types.",
  },
  {
    name: "Enneagram test",
    href: "https://www.truity.com/test/enneagram-personality-test",
    body: "A free test from Truity based on nine types and what tends to motivate each one.",
  },
];

const FAMILIES = [
  {
    name: "Intuition",
    question: "How do you see what could be?",
    color: "var(--gold)",
    functions: [
      {
        code: "Ni",
        title: "Introverted Intuition",
        nickname: "The Visionary",
        icon: Eye,
        body: "Connects the dots into one big picture of where things are heading.",
        quote: "I have a feeling about where this is going.",
      },
      {
        code: "Ne",
        title: "Extraverted Intuition",
        nickname: "The Explorer",
        icon: Sparkles,
        body: "Spots patterns and possibilities everywhere, and loves a new idea.",
        quote: "What if we tried it this way?",
      },
    ],
  },
  {
    name: "Sensing",
    question: "How do you take in what's real?",
    color: "var(--sage)",
    functions: [
      {
        code: "Si",
        title: "Introverted Sensing",
        nickname: "The Archivist",
        icon: Archive,
        body: "Compares today with past experience, and values what has worked before.",
        quote: "Last time this happened, here's what helped.",
      },
      {
        code: "Se",
        title: "Extraverted Sensing",
        nickname: "The Adventurer",
        icon: Mountain,
        body: "Tunes in to the sights, sounds, and action of the present moment.",
        quote: "Let's go see it for ourselves.",
      },
    ],
  },
  {
    name: "Thinking",
    question: "How do you make sense of things?",
    color: "var(--taupe)",
    functions: [
      {
        code: "Ti",
        title: "Introverted Thinking",
        nickname: "The Analyst",
        icon: Puzzle,
        body: "Builds an inner framework and wants every piece to fit logically.",
        quote: "Wait, that doesn't add up.",
      },
      {
        code: "Te",
        title: "Extraverted Thinking",
        nickname: "The Organizer",
        icon: ListChecks,
        body: "Uses facts, goals, and systems to get things done.",
        quote: "What's the plan, and who's doing what?",
      },
    ],
  },
  {
    name: "Feeling",
    question: "How do you decide what matters?",
    color: "var(--primary)",
    functions: [
      {
        code: "Fi",
        title: "Introverted Feeling",
        nickname: "The Compass",
        icon: Compass,
        body: "Checks decisions against personal values and what feels true.",
        quote: "Does this feel right to me?",
      },
      {
        code: "Fe",
        title: "Extraverted Feeling",
        nickname: "The Harmonizer",
        icon: HeartHandshake,
        body: "Tunes in to how others feel and what the group needs.",
        quote: "How is everyone doing?",
      },
    ],
  },
];

const ALL = FAMILIES.flatMap((family) => family.functions.map((fn) => ({ ...fn, family })));

/** The eight functions as a compact picker: tap a badge to read about it. */
function CognitiveFunctions() {
  const [code, setCode] = useState("Ni");
  const fn = ALL.find((f) => f.code === code) ?? ALL[0];
  // Introverted functions draw rings flowing in; extraverted ones send them out.
  const ring = fn.code.endsWith("i") ? "cf-ring cf-ring-in" : "cf-ring cf-ring-out";

  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        {FAMILIES.map((family) => (
          <div key={family.name} className="text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
              {family.name}
            </p>
            <div className="mt-2 flex flex-col items-center gap-2">
              {family.functions.map((f) => (
                <button
                  key={f.code}
                  type="button"
                  aria-pressed={f.code === code}
                  aria-label={`${f.title}, ${f.nickname}`}
                  onClick={() => setCode(f.code)}
                  className="cf-pick"
                  style={{ "--fam": family.color } as CSSProperties}
                >
                  {f.code}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="cf-card mt-6 rounded-2xl bg-card p-5"
        style={{ "--fam": fn.family.color } as CSSProperties}
        aria-live="polite"
      >
        <div key={fn.code} className="enn-detail-in flex gap-4">
          <span
            className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-serif text-lg text-foreground"
            style={{ background: `color-mix(in oklab, ${fn.family.color} 40%, transparent)` }}
          >
            <span className={ring} aria-hidden />
            <span className={ring} aria-hidden />
            {fn.code}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-serif text-xl text-foreground">{fn.nickname}</p>
              <fn.icon className="cf-icon h-4 w-4 text-muted-foreground" aria-hidden />
            </div>
            <p className="text-xs text-muted-foreground">
              {fn.title} · {fn.family.question}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fn.body}</p>
            <p className="mt-2 text-sm italic text-foreground/80">“{fn.quote}”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Introspection() {
  return (
    <section id="introspection" className="border-t border-border/60 py-16 sm:py-20">
      <div className="reveal mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            For fun and introspection
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            Curious how your mind works?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I’m a fan of personality tests. They won’t tell you who you are, but they can be a fun
            way to notice how you think, decide, and recharge.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {TESTS.map((test) => (
            <a
              key={test.name}
              href={test.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition hover:-translate-y-0.5 hover:border-primary"
            >
              <span>
                <span className="block font-serif text-lg text-foreground">{test.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {test.body}
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 flex-shrink-0 text-muted-foreground transition group-hover:text-foreground"
                aria-hidden
              />
            </a>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <div className="reveal reveal-3d rounded-3xl border border-border bg-secondary/40 p-5 sm:p-7">
            <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
              The eight cognitive functions
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              From personality type theory, which grew out of Carl Jung’s work. Each pair is the
              same mental skill pointed inward (i) or outward (e). Tap one to see if it sounds like
              you. The nicknames are just my own for fun.
            </p>
            <div className="mt-6">
              <CognitiveFunctions />
            </div>
          </div>

          <div
            className="reveal reveal-3d rounded-3xl border border-border bg-secondary/40 p-5 sm:p-7"
            style={{ transitionDelay: "140ms" }}
          >
            <h3 className="font-serif text-2xl text-foreground sm:text-3xl">The Enneagram</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nine types, each with its own core motivation, grouped into body, heart, and mind. The
              arrows show where each type is said to move in growth and under stress. Tap a number
              to explore. The nicknames are just my own for fun.
            </p>
            <div className="mt-6">
              <Enneagram />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Just for fun. These tests, the functions, and the Enneagram chart aren’t scientific
          assessments or diagnoses, and they aren’t part of my counseling services. Both tests are
          on outside websites that I’m not affiliated with, and each has its own privacy policy.
          16Personalities uses its own model, so its results won’t list these eight functions.
        </p>
      </div>
    </section>
  );
}
