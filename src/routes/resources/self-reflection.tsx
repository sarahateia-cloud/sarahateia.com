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
      <main id="main" className="pt-44 max-[340px]:pt-48 sm:pt-40">
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
          <p className="mt-4 text-sm font-semibold text-clay">For reflection</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Quotes and self-reflection tools.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A few things to sit with: quotes that many people find steadying, and personality
            frameworks some people enjoy as a starting point for self-reflection. They’re for
            curiosity only. They aren’t scientific measures, a diagnosis, or a substitute for
            counseling.
          </p>

          <section
            aria-labelledby="reflect-well"
            className="mt-12 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <h2
              id="reflect-well"
              className="font-serif text-2xl leading-snug text-foreground sm:text-3xl"
            >
              Reflection that steadies you instead of spinning you
            </h2>
            <p>
              Self-reflection can help you understand your patterns, but it works best when it’s
              gentle and grounded. There’s a difference between reflecting and ruminating.
              Reflection is curious and moves toward understanding: what was I feeling, and what did
              I need? Rumination circles the same painful thoughts without landing anywhere. If you
              notice you’re replaying the same scene and feeling worse each time, that’s a cue to
              pause, not to dig harder.
            </p>

            <h3 className="pt-2 font-serif text-xl text-foreground">Start with your body</h3>
            <p>
              Emotions often show up in the body before we have words for them: a tight chest, a
              clenched jaw, shallow breathing, a heavy stomach. Before you reflect, take a minute to
              notice where you feel something and how strong it is. Slowing your exhale or feeling
              your feet on the floor can bring the intensity down enough to think clearly. You can
              try a guided version with the{" "}
              <a href="/#breathe" className="underline underline-offset-4">
                breathing exercise on the home page
              </a>{" "}
              or read more about{" "}
              <a
                href="/resources/nervous-system-regulation-techniques/"
                className="underline underline-offset-4"
              >
                nervous system regulation
              </a>
              .
            </p>

            <h3 className="pt-2 font-serif text-xl text-foreground">Name what you feel</h3>
            <p>
              Putting a simple label on an emotion, such as “I’m anxious” or “this is
              disappointment,” can take some of the edge off. In one brain imaging study, naming the
              emotion in a picture reduced activity in the amygdala, a region involved in threat
              responses (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17576282/"
                className="underline underline-offset-4"
              >
                Lieberman et al., 2007
              </a>
              ). It was a small lab study, so treat it as a reason to try naming feelings, not a
              promise of how you’ll feel.
            </p>

            <h3 className="pt-2 font-serif text-xl text-foreground">Write it down, briefly</h3>
            <p>
              Writing about stressful experiences has been tested in more than 140 randomized
              studies. Across them, the benefits were real but modest on average (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17073523/"
                className="underline underline-offset-4"
              >
                Frattaroli, 2006
              </a>
              ). A few minutes is enough: what happened, what you felt, and what you made of it.
              Stop if it starts to feel overwhelming.
            </p>

            <h3 className="pt-2 font-serif text-xl text-foreground">Be kind in the review</h3>
            <p>
              How you speak to yourself matters as much as what you notice. People who score higher
              in self-compassion tend to report less anxiety, depression, and stress (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/22796446/"
                className="underline underline-offset-4"
              >
                MacBeth &amp; Gumley, 2012
              </a>
              ). That’s a correlation, not proof that one causes the other, but talking to yourself
              the way you’d talk to a good friend is a reasonable place to start.
            </p>
            <p>
              The quotes and frameworks below are prompts for that kind of reflection. If reflecting
              keeps leading you back to the same painful places, talking it through with someone can
              help. Here’s{" "}
              <a
                href="/resources/first-counseling-session/"
                className="underline underline-offset-4"
              >
                what a first counseling session is like
              </a>
              .
            </p>
          </section>
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
