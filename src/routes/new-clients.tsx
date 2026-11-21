import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight, CreditCard, FileText } from "lucide-react";
import {
  NoticeToClients,
  PHONE_DISPLAY,
  PHONE_HREF,
  SiteFooter,
  SiteHeader,
} from "@/components/site-header";
import { SCREENING_TOOLS } from "@/content/screening-tools";
import { CurrentClientBooking } from "@/components/ds/booking";
import { ACTIVE_PAYMENT_LINKS } from "@/lib/payments";

export const Route = createFileRoute("/new-clients")({
  component: NewClients,
});

const STEPS = [
  {
    title: "Free 15-minute consultation",
    body: "We talk by phone about what you’re looking for and whether we’re a good fit. No commitment.",
  },
  {
    title: "Your forms, signed securely",
    body: "If we decide to work together, I’ll explain how to complete and sign your forms securely before your first session. Please don’t email or text completed forms.",
  },
  {
    title: "Your first session",
    body: "We review the consent together, answer your questions, and begin. You’ll receive a Good Faith Estimate before services start.",
  },
];

const FORMS = [
  {
    file: "client-consent.pdf",
    title: "Client Information, Disclosure and Consent",
    body: "How counseling works, my supervision, fees and cancellation, your Good Faith Estimate, confidentiality and its limits, telehealth and outdoor sessions, and your rights.",
  },
  {
    file: "02-intake-questionnaire.pdf",
    title: "Client Intake Questionnaire",
    body: "Background, goals, and contact details, so I can understand you before we meet.",
  },
  {
    file: "06-privacy-notice.pdf",
    title: "Notice of Privacy Practices",
    body: "How your health information is protected, and your rights to access it.",
  },
  {
    file: "07-release-of-information.pdf",
    title: "Authorization to Release Information",
    body: "Only if you’d like me to talk with another provider or person about your care.",
  },
];

function NewClients() {
  useEffect(() => {
    document.title = "New Client Forms | Sarah Ateia, LPC Associate";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-4xl px-6 pt-44 max-[340px]:pt-48 pb-24 sm:pt-40">
        <p className="text-sm font-semibold text-clay">New clients</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Before your first session.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Here’s what to expect, and every form you’ll be asked to sign, so you can read them at
          your own pace beforehand.
        </p>

        <CurrentClientBooking className="mt-10" />

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-3xl text-taupe">{i + 1}</p>
              <p className="mt-2 font-serif text-lg text-foreground">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-serif text-3xl text-foreground">Your forms</h2>
        <ul className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {FORMS.map((form) => (
            <li key={form.file}>
              <a
                href={`/forms/${form.file}`}
                className="flex items-start gap-4 px-5 py-4 transition hover:bg-secondary/50"
              >
                <FileText className="mt-1 h-5 w-5 flex-shrink-0 text-taupe" aria-hidden />
                <span>
                  <span className="block font-medium text-foreground">{form.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{form.body}</span>
                </span>
                <span className="ml-auto flex-shrink-0 pt-1 text-xs text-muted-foreground">
                  PDF
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Questions about any form? Call{" "}
          <a href={PHONE_HREF} className="text-primary-foreground underline underline-offset-4">
            {PHONE_DISPLAY}
          </a>
          .
        </p>

        <h3 className="mt-10 font-serif text-2xl text-foreground">
          Optional screening questionnaires
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Free, widely used check-ins you can complete before or during our work together. They
          aren’t a diagnosis, and we’ll review the results together in session. Each one opens on
          its official site, and nothing is filled out here. Not for emergencies: call or text{" "}
          <a href="tel:988" className="underline underline-offset-4">
            988
          </a>{" "}
          or call{" "}
          <a href="tel:911" className="underline underline-offset-4">
            911
          </a>
          .
        </p>
        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {SCREENING_TOOLS.map((tool) => (
            <li key={tool.name}>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 px-5 py-4 transition hover:bg-secondary/50"
              >
                <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-taupe" aria-hidden />
                <span>
                  <span className="block font-medium text-foreground">{tool.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {tool.description}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground sm:hidden" aria-hidden>
                    {tool.source}
                  </span>
                  <span className="sr-only"> (opens {tool.source} in a new tab)</span>
                </span>
                <span
                  className="ml-auto hidden flex-shrink-0 pt-1 text-xs text-muted-foreground sm:block"
                  aria-hidden
                >
                  {tool.source}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          <a
            href="/screening-tools/"
            className="text-primary-foreground underline underline-offset-4"
          >
            More about these questionnaires
          </a>
        </p>

        {ACTIVE_PAYMENT_LINKS.length > 0 && (
          <section aria-labelledby="pay-heading" className="mt-12">
            <h2 id="pay-heading" className="font-serif text-3xl text-foreground">
              Paying for sessions
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Please pay only after we’ve agreed on your fee in the free consultation. Payment opens
              Stripe’s secure checkout in a new tab. Your card details never touch this site. Don’t
              include any health information in the payment form.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {ACTIVE_PAYMENT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 transition hover:bg-secondary/50"
                  >
                    <CreditCard className="mt-1 h-5 w-5 flex-shrink-0 text-taupe" aria-hidden />
                    <span>
                      <span className="block font-medium text-foreground">{link.label}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{link.price}</span>
                      <span className="sr-only"> (opens Stripe checkout in a new tab)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Sessions are provided by Sarah Ateia, LPC Associate, supervised by Don Zablosky,
              LPC-S. Using a reduced rate? Call{" "}
              <a href={PHONE_HREF} className="text-primary-foreground underline underline-offset-4">
                {PHONE_DISPLAY}
              </a>{" "}
              and I’ll send you the right payment link.
            </p>
          </section>
        )}

        <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-6">
          <p className="font-serif text-xl text-foreground">Your right to a Good Faith Estimate</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            You have the right to receive a Good Faith Estimate explaining how much your care will
            cost. Because my practice is self-pay, you’ll receive one in writing before services
            begin, and you can ask for one at any time. If you receive a bill that is at least $400
            more than your estimate, you can dispute it. Learn more at{" "}
            <a href="https://www.cms.gov/nosurprises" className="underline underline-offset-4">
              cms.gov/nosurprises
            </a>{" "}
            or call 1-800-985-3059.
          </p>
        </div>

        <NoticeToClients className="mt-6 text-sm" />

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Before you start, you might find these helpful:{" "}
          <a
            href="/resources/free-counseling-consultation/"
            className="underline underline-offset-4"
          >
            what happens in a free consultation
          </a>
          ,{" "}
          <a href="/resources/first-counseling-session/" className="underline underline-offset-4">
            what a first session is like
          </a>
          , and{" "}
          <a href="/resources/what-is-an-lpc-associate/" className="underline underline-offset-4">
            what an LPC Associate is
          </a>
          .
        </p>

        <p className="mt-10 text-sm text-muted-foreground">
          In crisis? Call or text 988, call 911, or{" "}
          <a href="/crisis/" className="underline underline-offset-4">
            find 24/7 help
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
