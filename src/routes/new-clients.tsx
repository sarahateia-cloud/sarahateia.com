import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { FileText } from "lucide-react";
import {
  NoticeToClients,
  PHONE_DISPLAY,
  PHONE_HREF,
  SiteFooter,
  SiteHeader,
} from "@/components/site-header";

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
    body: "If we decide to work together, I’ll send your forms through a secure client portal so you can read and sign them online. Please don’t email or text completed forms.",
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
    document.title =
      "New Client Forms | Sarah Ateia Khattab, LPC Associate, supervised by Don Zablosky, LPC-S";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-4xl px-6 pt-32 max-[340px]:pt-36 pb-24 sm:pt-40">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">New clients</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Before your first session.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Here’s what to expect, and every form you’ll be asked to sign, so you can read them at
          your own pace beforehand.
        </p>

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
