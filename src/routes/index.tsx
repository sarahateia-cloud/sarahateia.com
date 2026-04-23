import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import sarahPortrait from "@/assets/sarah-ateia.jpeg";
import chicoPortrait from "@/assets/chico.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzdvlop";

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
  "Interest in future support services",
  "Interest in genetics-informed psychoeducation",
];

const WAITLIST_PERKS = [
  {
    title: "Priority access",
    body: "You hear first when I open the door.",
  },
  {
    title: "Introductory rates",
    body: "Waitlist members get locked-in launch pricing.",
  },
  {
    title: "Free consultation",
    body: "A real conversation first — no pressure, no commitment.",
  },
];

const DISCLOSURES = [
  "Not currently providing therapy services — joining this list doesn’t create a therapist–client relationship.",
  "Services launch in Texas once licensure is complete: DFW in-person, telehealth statewide.",
  "Your information is used only for waitlist communication.",
  "Any genetic or biological discussion is educational only — never medical advice, diagnosis, or treatment. I don’t prescribe or interpret labs; I refer to physicians for medical concerns.",
];

const FORM_INTERESTS = [
  "Anxiety / stress",
  "Depression / low mood",
  "Nervous system regulation",
  "Mood concerns",
  "Relationship patterns",
  "Burnout / exhaustion",
  "Identity / self-understanding",
  "Self-esteem",
  "ADHD / focus",
  "Trauma / PTSD",
  "Genetic psychoeducation",
  "Other",
];

function Index() {
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      interests: interests.join(", "),
      _subject: "New waitlist signup",
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
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:py-8">
          <a href="#top" className="font-serif text-xl tracking-tight text-foreground">
            Sarah Ateia
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition hover:text-foreground">
              About
            </a>
            <a href="#approach" className="transition hover:text-foreground">
              Approach
            </a>
            <a href="#support" className="transition hover:text-foreground">
              Support
            </a>
            <a
              href="#waitlist"
              className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition hover:opacity-90"
            >
              Join the Waitlist
            </a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground sm:hidden"
          >
            Waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 20%, color-mix(in oklab, var(--sage) 32%, transparent), transparent 70%), radial-gradient(50% 60% at 10% 80%, color-mix(in oklab, var(--sage) 28%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Something different is coming to Dallas
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
              You’ve tried managing it. What if you could finally{" "}
              <em className="text-taupe">understand</em> it?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              There’s a reason your mind works the way it does — your stress response, your
              attention, your emotional patterns. I’m building a practice rooted in that belief,
              in-person in Dallas–Fort Worth and telehealth across Texas once licensed.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:opacity-90"
              >
                Join the Waitlist
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm text-foreground/80 transition hover:text-foreground"
              >
                Meet Sarah
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Dallas–Fort Worth · In-person</span>
              <span className="hidden h-4 w-px bg-border sm:inline-block" />
              <span>Texas · Telehealth (post-licensure)</span>
            </div>
          </div>

          <div className="relative lg:col-span-5">
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
                  alt="Portrait of Sarah Ateia"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-background/90 px-5 py-3 backdrop-blur">
                <p className="font-serif text-lg leading-tight text-foreground">Sarah Ateia</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  M.S. Counseling Candidate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              A relational, considered approach.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8 sm:text-lg">
            <p>
              I’m a counselor in training, currently completing licensure requirements in Texas,
              with a background in healthcare. I grew up in a multicultural environment, which
              shaped how I connect with people and how naturally I hold space for different
              backgrounds and lived experiences.
            </p>
            <p>
              I believe everyone has a blueprint — most people just haven’t been given the tools to
              read it. Mood, sleep, stress, focus, emotional patterns — it’s all connected. The work
              I want to do is about learning to move <em className="text-taupe">with</em> your
              biology instead of against it, so the change you’re trying to make actually sticks.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Graduate Study
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  M.S., Human Development &amp; Counseling
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
            </div>
          </div>
        </div>
      </section>

      {/* Meet Chico — character section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-5 sm:gap-14">
            <div className="sm:col-span-2">
              <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[0_20px_60px_-30px_rgba(80,60,40,0.3)]">
                <img
                  src={chicoPortrait}
                  alt="Chico, the orange therapy-support cat"
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
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Who I hope to support
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              If any of this sounds like you, you’re in the right place.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Some of the areas I’m building this practice around.
            </p>
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Approach</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              A thoughtful, emerging approach to emotional wellness.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’m drawn to the <em className="text-taupe">why</em> behind how you feel. Most therapy
              hands you a toolkit — here, you get both the tools and the self-understanding that
              makes those tools actually stick. When you know why your nervous system responds the
              way it does, something shifts in how you relate to yourself.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              My practice pairs traditional counseling foundations with genetics-informed
              psychoeducation and emerging research in neurobiology — held as an educational lens
              for noticing patterns in mood, stress, attention, and regulation. Not diagnosis, not
              medical advice, always alongside the relational work itself.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {["MTHFR", "COMT", "BDNF", "Neurobiology"].map((tag) => (
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
              Awareness isn’t just the first step — for the nervous system, it is the intervention.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Waitlist</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-5xl">Join the list.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              When I open, this list hears first — and waitlist members get a few perks along the
              way.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {WAITLIST_PERKS.map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-serif text-lg text-foreground">{perk.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(80,60,40,0.25)] sm:p-10">
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
                <h3 className="mt-6 font-serif text-2xl text-foreground">You’re on the list.</h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  I’ll be in touch as services become available. You’re in the right place.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" optional />
                  <Field label="City" name="location" type="text" optional />
                </div>

                <div>
                  <p className="mb-1 text-sm font-medium text-foreground">What brings you here?</p>
                  <p className="mb-4 text-xs text-muted-foreground">
                    Select any that feel relevant.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FORM_INTERESTS.map((item) => {
                      const checked = interests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggle(item)}
                          aria-pressed={checked}
                          className={`rounded-full border px-4 py-2 text-sm transition ${
                            checked
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background text-foreground/80 hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Join the Waitlist"}
                  </button>
                  {error && <p className="mt-3 text-center text-sm text-destructive">{error}</p>}
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    No spam. Used only for waitlist communication.
                  </p>
                </div>
              </form>
            )}
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
                Crisis Lifeline) or go to your nearest emergency room.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl text-foreground">Sarah Ateia</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Dallas–Fort Worth, Texas · Future telehealth across Texas
            </p>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p>For waitlist inquiries: hello@sarahateia.com</p>
            <p className="mt-2 text-xs">
              © {new Date().getFullYear()} Sarah Ateia. Not currently providing clinical services.
            </p>
          </div>
        </div>
      </footer>
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
