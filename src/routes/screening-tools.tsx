import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { BUTTON } from "@/components/ds/buttons";
import { ConsultationButton } from "@/components/consultation-dialog";
import { useScrollReveal } from "@/components/motion";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/screening-tools")({
  component: ScreeningTools,
});

// Links only. This page never shows, collects, scores, or sends any questionnaire answers,
// and analytics never loads here (see PRIVATE_PATHS in analytics.tsx).
const TOOLS = [
  {
    name: "Depression – PHQ-9",
    short: "PHQ-9",
    description: "A 9-question check-in about mood over the past two weeks.",
    href: "https://www.phqscreeners.com",
    source: "phqscreeners.com",
  },
  {
    name: "Anxiety – GAD-7",
    short: "GAD-7",
    description: "A 7-question check-in about worry and nervousness over the past two weeks.",
    href: "https://www.phqscreeners.com",
    source: "phqscreeners.com",
  },
  {
    name: "ADHD – ASRS v1.1 (6-question screener)",
    short: "ASRS v1.1",
    description: "A short adult screener about attention, focus, and restlessness.",
    href: "https://www.hcp.med.harvard.edu/ncs/asrs.php",
    source: "Harvard Medical School",
  },
  {
    name: "Trauma – PC-PTSD-5",
    short: "PC-PTSD-5",
    description:
      "A brief screen about reactions to a frightening or overwhelming experience. I recommend completing this one together in session rather than alone.",
    href: "https://www.ptsd.va.gov/professional/assessment/screens/pc-ptsd.asp",
    source: "U.S. Department of Veterans Affairs",
  },
];

// Short, uneven gaps so the cards settle in as one group rather than marching in order.
const STAGGER_MS = [0, 60, 110, 150];

function ScreeningTools() {
  useScrollReveal();

  useEffect(() => {
    document.title =
      "Optional Screening Tools | Sarah Ateia Khattab, LPC Associate, supervised by Don Zablosky, LPC-S";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-4xl px-6 pt-32 max-[340px]:pt-36 pb-24 sm:pt-40">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Resources
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Optional Screening Tools
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Some clients find it helpful to complete a short screening questionnaire before or during
          our work together. These tools are optional, widely used, and free. They are not a
          diagnosis. Results are simply a starting point for conversation, and we will review them
          together in session.
        </p>

        {/* Never animated or delayed: this has to be readable the moment the page opens. */}
        <div
          role="note"
          aria-label="Not for emergencies"
          className="mt-10 rounded-3xl bg-cta px-6 py-6 text-cta-foreground sm:px-8"
        >
          <p className="text-base font-medium leading-relaxed sm:text-lg">
            These questionnaires are not for emergencies. If you are in crisis or thinking about
            harming yourself, call or text{" "}
            <a href="tel:988" className="underline underline-offset-4">
              988
            </a>{" "}
            (Suicide &amp; Crisis Lifeline), call{" "}
            <a href="tel:911" className="underline underline-offset-4">
              911
            </a>
            , or go to the nearest emergency room.
          </p>
        </div>

        <h2 className="mt-14 font-serif text-3xl text-foreground">The questionnaires</h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TOOLS.map((tool, i) => (
            <li
              key={tool.name}
              className="reveal flex flex-col rounded-2xl border border-border bg-card p-6"
              style={{ transitionDelay: `${STAGGER_MS[i] ?? 0}ms` }}
            >
              <h3 className="font-serif text-xl leading-snug text-foreground">{tool.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BUTTON.secondary} nudge-link min-h-11 px-5 text-sm`}
                >
                  Open official site
                  <ArrowUpRight className="nudge-icon h-4 w-4" aria-hidden />
                  <span className="sr-only">
                    {" "}
                    for the {tool.short}, from {tool.source} (opens in a new tab)
                  </span>
                </a>
                <span className="text-xs text-muted-foreground">{tool.source}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Arabic versions of the PHQ-9 and GAD-7 are available on the official site.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-6">
          <p className="font-serif text-xl text-foreground">Your privacy</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Please do not email or text me your answers or any personal health information. Bring
            your results to your session, or we can complete them together there.
          </p>
        </div>

        <section className="mt-14 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-10">
          <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
            Have questions, or want to talk about your results?
          </h2>
          <ConsultationButton className={`${BUTTON.cta} mt-8`}>
            Request a free 15-minute call
          </ConsultationButton>
        </section>

        <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
          Sarah Ateia Khattab, M.S., NCC · Licensed Professional Counselor Associate #104391 ·
          Supervised by Don Zablosky, LPC-S, LMFT-S, NCC
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
