import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { BoxBreathing, GroundingExercise, StressCheckIn } from "@/components/calming-tools";
import { BookCallLink } from "@/components/ds/booking";
import { BUTTON } from "@/components/ds/buttons";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/tools")({
  component: ToolsPage,
});

// No login, nothing typed, nothing saved or sent. Analytics never loads here (PRIVATE_PATHS).
export const TOOLS_TITLE = "Box Breathing & Grounding | Sarah Ateia, LPC Associate";

const Source = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-foreground underline underline-offset-4" rel="noopener">
    {children}
  </a>
);

function ToolSection({
  id,
  title,
  intro,
  why,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  why: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 pt-14">
      <h2
        id={`${id}-title`}
        className="font-serif text-[2rem] leading-tight text-foreground sm:text-[2.4rem]"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>

      <div className="ds-card mt-6 p-6 sm:p-8">{children}</div>

      <h3 className="mt-8 font-serif text-xl text-foreground">Why this works</h3>
      <div className="mt-2 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
        {why}
      </div>

      {/* Each tool ends the same way: a way to talk to someone, and the crisis line. */}
      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <BookCallLink className={BUTTON.cta}>Book a free 15-minute call</BookCallLink>
        <p className="text-sm text-muted-foreground">
          In crisis? Call or text{" "}
          <a href="tel:988" className="font-semibold text-foreground underline underline-offset-4">
            988
          </a>
          , any time.
        </p>
      </div>
    </section>
  );
}

function ToolsPage() {
  useEffect(() => {
    document.title = TOOLS_TITLE;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-3xl px-6 pt-36 pb-24 max-[340px]:pt-40 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a
            href="/"
            className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
          >
            Home
          </a>
          {" / "}
          <a
            href="/resources/"
            className="inline-flex min-h-11 items-center underline-offset-4 hover:text-foreground hover:underline"
          >
            Resources
          </a>
        </nav>
        <p className="mt-4 text-sm font-semibold text-clay">Calming tools</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Three small tools for a hard moment
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A box breathing guide, the 5-4-3-2-1 grounding exercise, and a quick stress check-in. No
          login and nothing to download. Nothing you do here is saved, sent, or counted.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Made by Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S. These are general
          wellness exercises, not therapy or a diagnosis.
        </p>

        <nav aria-label="Tools on this page" className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {[
              ["#box-breathing", "Box breathing"],
              ["#grounding", "5-4-3-2-1 grounding"],
              ["#check-in", "Stress check-in"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center rounded-full border border-input/60 bg-card px-5 text-base text-foreground transition-colors hover:border-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ToolSection
          id="box-breathing"
          title="Box breathing"
          intro="Breathe in for 4, hold for 4, out for 4, hold for 4. Follow the circle, or close your eyes and turn on the chime. Sit or stand however is comfortable."
          why={
            <>
              <p>
                Slow, even breathing is one of the quickest ways to send your body a “you’re safe”
                signal. A review of studies on slow breathing linked it with feeling more relaxed
                and less anxious, along with heart-rhythm changes that go with a calmer nervous
                system (
                <Source href="https://doi.org/10.3389/fnhum.2018.00353">
                  Zaccaro et al., 2018
                </Source>
                ).
              </p>
              <p>
                In a month-long study, people who practiced five minutes a day of structured
                breathing, box breathing among them, reported a better mood (
                <Source href="https://doi.org/10.1016/j.xcrm.2022.100895">
                  Balban et al., 2023
                </Source>
                ). If holding your breath feels uncomfortable, skip the holds and just breathe in
                and out slowly.
              </p>
            </>
          }
        >
          <BoxBreathing />
        </ToolSection>

        <ToolSection
          id="grounding"
          title="5-4-3-2-1 grounding"
          intro="When your mind is racing ahead or stuck in a loop, this walks you back to what is around you, one sense at a time."
          why={
            <p>
              Anxiety pulls attention toward what might happen next. Naming what you can see, feel,
              hear, smell and taste gives your attention a concrete job in the present moment, which
              can make a wave of worry easier to ride out. It’s a widely used grounding exercise,
              though it hasn’t been tested much on its own in research. Think of it as a simple way
              to pause, not a treatment.
            </p>
          }
        >
          <GroundingExercise />
        </ToolSection>

        <ToolSection
          id="check-in"
          title="Stress check-in"
          intro="Three quick sliders for sleep, stress and energy. Move them to where you are today, and you’ll get a few general ideas to try."
          why={
            <p>
              Sleep, stress and energy feed into each other, so a small change in one can ease the
              others. Most adults need 7 or more hours of sleep a night (
              <Source href="https://doi.org/10.5664/jcsm.4758">Watson et al., 2015</Source>), and a
              large review of 97 earlier reviews found physical activity was linked with lower
              symptoms of depression and anxiety (
              <Source href="https://doi.org/10.1136/bjsports-2022-106195">
                Singh et al., 2023
              </Source>
              ). The tips here are general and the same for everyone. They don’t measure or diagnose
              anything.
            </p>
          }
        >
          <StressCheckIn />
        </ToolSection>

        <section className="ds-card-quiet mt-16 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-foreground">Want to keep going?</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            For more ways to settle your body, read{" "}
            <a
              href="/resources/nervous-system-regulation-techniques/"
              className="text-foreground underline underline-offset-4"
            >
              nervous system regulation techniques
            </a>{" "}
            or learn about{" "}
            <a
              href="/anxiety-therapy-dallas/"
              className="text-foreground underline underline-offset-4"
            >
              anxiety therapy in Dallas
            </a>
            . If you’d like to talk it through, sessions are held{" "}
            <a
              href="/walk-and-talk-therapy-dallas/"
              className="text-foreground underline underline-offset-4"
            >
              outdoors in Dallas–Fort Worth
            </a>{" "}
            or{" "}
            <a
              href="/telehealth-counseling-texas/"
              className="text-foreground underline underline-offset-4"
            >
              online anywhere in Texas
            </a>
            .
          </p>
        </section>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          These exercises share general information and aren’t counseling, medical advice, or a
          diagnosis. Stop any exercise that makes you dizzy or more distressed. If you’re in crisis,
          call or text{" "}
          <a href="tel:988" className="underline underline-offset-4">
            988
          </a>
          , or{" "}
          <a href="/crisis/" className="underline underline-offset-4">
            see local 24/7 crisis lines
          </a>
          .
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
