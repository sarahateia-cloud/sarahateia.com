import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import sarahPortrait from "@/assets/sarah-ateia.jpeg";

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
  "Interest in future support services",
  "Interest in genetics-informed psychoeducation",
];

const FORM_INTERESTS = [
  "Anxiety / stress",
  "Depression / low mood",
  "Emotional overwhelm / nervous system regulation",
  "Mood concerns",
  "Relationship patterns",
  "Burnout / emotional exhaustion",
  "Identity / self-understanding",
  "Self-esteem concerns",
  "Interest in future support services",
  "Interest in genetics-informed psychoeducation approach",
  "Other",
];

function Index() {
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#approach" className="transition hover:text-foreground">Approach</a>
            <a href="#support" className="transition hover:text-foreground">Support</a>
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
      <section
        id="top"
        className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 20%, color-mix(in oklab, var(--rose) 35%, transparent), transparent 70%), radial-gradient(50% 60% at 10% 80%, color-mix(in oklab, var(--sage) 35%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Now building the waitlist
            </p>
            <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
              A grounded space for deeper{" "}
              <em className="text-taupe">emotional understanding.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Thoughtful psychological counseling, rooted in emotional insight and
              whole-person understanding. Joining the waitlist for future counseling
              services in Dallas–Fort Worth and telehealth across Texas.
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
                    "linear-gradient(135deg, color-mix(in oklab, var(--rose) 50%, transparent), color-mix(in oklab, var(--sage) 45%, transparent))",
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
                <p className="font-serif text-lg leading-tight text-foreground">
                  Sarah Ateia
                </p>
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
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              About
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              A relational, considered approach.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8 sm:text-lg">
            <p>
              Sarah is a graduate-level counselor in training, currently completing
              licensure requirements in Texas. Her work centers on creating a steady,
              attuned space — one where clients feel met as whole people rather than
              a list of symptoms.
            </p>
            <p>
              Her future practice will draw on traditional counseling foundations alongside
              genetics-informed psychoeducation and emerging research in neurobiology,
              offering a thoughtful lens for understanding patterns in mood, stress, and
              emotional regulation.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Graduate Study
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  M.S., Human Development &amp; Counseling
                </p>
                <p className="text-sm text-muted-foreground">
                  Texas Woman’s University
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Undergraduate
                </p>
                <p className="mt-2 font-serif text-lg text-foreground">
                  B.S., Psychology
                </p>
                <p className="text-sm text-muted-foreground">
                  The University of Texas at Dallas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support areas */}
      <section id="support" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Who this may support
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Spaces this future practice hopes to hold.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Areas of interest and exploration for those joining the waitlist.
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
      <section
        id="approach"
        className="relative overflow-hidden border-y border-border/60 py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(40% 60% at 80% 50%, color-mix(in oklab, var(--sage) 35%, transparent), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Approach
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              A thoughtful, emerging approach to emotional wellness.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sarah’s future practice is intended to explore counseling through both
              traditional psychological foundations and genetics-informed
              psychoeducation, drawing from emerging research in neurobiology and
              related fields.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              This work is offered as an educational lens — a way of noticing patterns
              in mood, stress responses, emotional regulation, and nervous system
              functioning. It is not diagnosis or medical advice, and it is held with
              care alongside the relational foundations of counseling itself.
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
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Waitlist
            </p>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-5xl">
              Join the waitlist.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              A quiet way to stay connected as Sarah’s future practice opens its
              doors.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(80,60,40,0.25)] sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--sage) 50%, transparent)" }}
                >
                  <svg className="h-6 w-6 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground">
                  Thank you for reaching out.
                </h3>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Your information has been received. Sarah will be in touch as
                  services become available.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" type="text" required />
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" />
                  <Field label="City / State" name="location" type="text" />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-foreground">
                    What brings you here?
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {FORM_INTERESTS.map((item) => {
                      const checked = interests.includes(item);
                      return (
                        <label
                          key={item}
                          className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                            checked
                              ? "border-clay/70 bg-secondary/70"
                              : "border-border bg-background hover:border-clay/40"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(item)}
                            className="sr-only"
                          />
                          <span
                            className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-[5px] border transition ${
                              checked
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-background"
                            }`}
                            aria-hidden
                          >
                            {checked && (
                              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 5" />
                              </svg>
                            )}
                          </span>
                          <span className="text-foreground/90">{item}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Your information will only be used for waitlist coordination and
                  future contact regarding services.
                </p>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition hover:opacity-90"
                >
                  Join the Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Important notice
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
              <p>
                Sarah is currently completing licensure requirements and is building a
                waitlist for future counseling services. This page does not offer
                clinical services at this time.
              </p>
              <p>
                Submitting the form does not establish a therapist–client
                relationship. Information is used solely for waitlist coordination
                and future contact.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-background px-5 py-4 text-sm text-foreground/90">
              <span className="font-medium">If you are in crisis,</span> please call
              or text <span className="font-medium">988</span> or go to your nearest
              emergency room.
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
              © {new Date().getFullYear()} Sarah Ateia. Not currently providing clinical
              services.
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
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-clay">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30 transition"
      />
    </label>
  );
}
