import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Introspection } from "@/components/introspection";
import { useScrollReveal } from "@/components/motion";
import { QuoteFeature } from "@/components/quote-feature";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/resources/self-reflection")({
  component: SelfReflection,
});

// The quotes and personality tools moved here from the home page, so the home page stays about
// counseling. They're for curiosity only, not assessment.
function SelfReflection() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Self-Reflection Tools | Sarah Ateia, LPC Associate";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="pt-32 max-[340px]:pt-36 sm:pt-40">
        <div className="mx-auto max-w-3xl px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <a href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
              Home
            </a>
            {" / "}
            <a
              href="/resources/"
              className="inline-flex min-h-11 items-center hover:text-foreground"
            >
              Resources
            </a>
          </nav>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            For reflection
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Quotes and self-reflection tools.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A few things to sit with: quotes that many people find steadying, and personality
            frameworks some people enjoy as a starting point for self-reflection. They’re for
            curiosity only. They aren’t scientific measures, a diagnosis, or a substitute for
            counseling.
          </p>
        </div>

        <QuoteFeature slot={0} />
        <Introspection />
        <QuoteFeature slot={1} align="left" />

        <div className="mx-auto max-w-3xl px-6 pb-20">
          <p className="text-xs leading-relaxed text-muted-foreground">
            This page shares general information and isn’t counseling, medical advice, or a
            diagnosis. If you’re in crisis, call or text 988, or{" "}
            <a href="/crisis/" className="underline underline-offset-4">
              see local 24/7 crisis lines
            </a>
            . To talk with Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S,{" "}
            <a href="/#consult" className="underline underline-offset-4">
              request a free 15-minute call
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
