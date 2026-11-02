import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone } from "lucide-react";
import sarahPortrait from "@/assets/sarah-ateia.jpeg";
import chicoPortrait from "@/assets/chico.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzdvlop";

const PHONE_DISPLAY = "(972) 482-9526";
const PHONE_HREF = "tel:+19724829526";

const HIGHLIGHTS = [
  "LPC Associate",
  "National Certified Counselor",
  "English & Arabic",
  "Sliding fee scale",
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
    body: "Self-pay with sliding fee scale options available — just ask during your call.",
  },
  {
    title: "In-person or telehealth",
    body: "In-person in Dallas–Fort Worth, or telehealth anywhere in Texas.",
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
  "Self-pay only; I don’t bill insurance. Sliding fee scale options are available. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
  "Any genetic or biological discussion is educational only — never medical advice, diagnosis, or treatment. I don’t prescribe or interpret labs; I refer to physicians for medical concerns.",
];

function Index() {
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
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:py-8">
          <a href="#top" className="font-serif text-xl tracking-tight text-foreground">
            Sarah Ateia Khattab
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
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 transition hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <a
              href="#consult"
              className="rounded-full bg-primary px-5 py-2 text-primary-foreground transition hover:opacity-90"
            >
              Free 15-min Consultation
            </a>
          </div>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground sm:hidden"
          >
            <Phone className="h-3 w-3" aria-hidden />
            Call
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
              Now accepting new clients
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
              You’ve tried managing it. What if you could finally{" "}
              <em className="text-taupe">understand</em> it?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              There’s a reason your mind works the way it does — your stress response, your
              attention, your emotional patterns. My practice is rooted in that belief, with
              sessions in-person in Dallas–Fort Worth and by telehealth across Texas.
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
              · Sliding fee scale options available
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Dallas–Fort Worth · In-person</span>
              <span className="hidden h-4 w-px bg-border sm:inline-block" />
              <span>Texas · Telehealth</span>
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16">
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
              which shaped how I connect with people and how I hold space for different
              backgrounds and lived experiences. I offer sessions in English and Arabic.
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
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  License
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  LPC Associate #104391
                </p>
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
        <div className="mx-auto max-w-5xl px-6">
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
        <div className="mx-auto max-w-5xl px-6">
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
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
              {["Psychoeducation", "Mind–body", "Self-awareness", "Relational"].map((tag) => (
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

      {/* Consultation Form */}
      <section id="consult" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Get started
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-5xl">
              A free 15-minute consultation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              A short call to see if we’re a good fit — no pressure, no commitment. Call me
              directly, or leave your details below and I’ll reach out.
            </p>
          </div>

          <div
            className="relative mt-10 overflow-hidden rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)] sm:px-10"
          >
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
                Sliding fee scale options available — ask on the call.
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
            <p className="font-serif text-2xl text-foreground">Sarah Ateia Khattab</p>
            <p className="mt-1 text-sm text-muted-foreground">M.S., LPC Associate, NCC</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Irving, Texas · In-person in Dallas–Fort Worth · Telehealth across Texas
            </p>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p>
              <a href="mailto:attya.llc@gmail.com" className="transition hover:text-foreground">
                attya.llc@gmail.com
              </a>
              {" · "}
              <a href={PHONE_HREF} className="transition hover:text-foreground">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-2 text-xs">
              LPC Associate #104391 · Supervised by Don Zablosky, LPC-S
            </p>
            <p className="mt-1 text-xs">© {new Date().getFullYear()} Attya LLC.</p>
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
