import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BUTTON } from "@/components/ds/buttons";

// Everything here runs in the browser only. Nothing is typed, stored, or sent anywhere.

/* ------------------------------------------------------------------------------------------
   Soft chime: two quiet sine tones with a slow fade, made in the browser (no audio file).
   ------------------------------------------------------------------------------------------ */
let audio: AudioContext | undefined;

function getAudio() {
  if (typeof window === "undefined") return undefined;
  const Ctx =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return undefined;
  audio ??= new Ctx();
  if (audio.state === "suspended") void audio.resume();
  return audio;
}

function playChime(low = false) {
  const ctx = getAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const base = low ? 392 : 523.25; // G4 for breathing out, C5 for breathing in
  for (const [freq, level] of [
    [base, 0.09],
    [base * 2, 0.025],
  ] as const) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(level, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1.7);
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  return reduced;
}

/* ------------------------------------------------------------------------------------------
   1. Box breathing, 4-4-4-4
   ------------------------------------------------------------------------------------------ */
const BOX_PHASES = [
  { label: "Breathe in", hint: "through your nose", from: 0.5, to: 1 },
  { label: "Hold", hint: "gently, lungs full", from: 1, to: 1 },
  { label: "Breathe out", hint: "slowly, through your mouth", from: 1, to: 0.5 },
  { label: "Hold", hint: "gently, lungs empty", from: 0.5, to: 0.5 },
] as const;
const PHASE_SECONDS = 4;
const CYCLE = PHASE_SECONDS * BOX_PHASES.length;

// Smooth in and out, like a breath, rather than a mechanical straight line.
const easeInOut = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

export function BoxBreathing() {
  const [running, setRunning] = useState(false);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState(PHASE_SECONDS);
  const [rounds, setRounds] = useState(0);
  const [chime, setChime] = useState(false);
  const reduced = usePrefersReducedMotion();
  const chimeId = useId();

  const circle = useRef<HTMLDivElement>(null);
  const elapsed = useRef(0);
  const shown = useRef({ phase: 0, count: PHASE_SECONDS, rounds: 0 });
  const chimeOn = useRef(chime);
  chimeOn.current = chime;

  const paint = useCallback(
    (time: number) => {
      const inCycle = time % CYCLE;
      const index = Math.floor(inCycle / PHASE_SECONDS);
      const progress = (inCycle - index * PHASE_SECONDS) / PHASE_SECONDS;
      const { from, to } = BOX_PHASES[index];
      const size = from + (to - from) * easeInOut(progress);
      const el = circle.current;
      if (el) {
        // Reduced motion: the circle stays still and only brightens and dims.
        if (reduced) {
          el.style.transform = "scale(0.8)";
          el.style.opacity = String(0.35 + (size - 0.5) * 1.3);
        } else {
          el.style.transform = `scale(${size})`;
          el.style.opacity = "1";
        }
      }
      const nextCount = PHASE_SECONDS - Math.floor(progress * PHASE_SECONDS);
      const nextRounds = Math.floor(time / CYCLE);
      const s = shown.current;
      if (index !== s.phase) {
        s.phase = index;
        setPhase(index);
        if (chimeOn.current) playChime(index >= 2);
      }
      if (nextCount !== s.count) {
        s.count = nextCount;
        setCount(nextCount);
      }
      if (nextRounds !== s.rounds) {
        s.rounds = nextRounds;
        setRounds(nextRounds);
      }
    },
    [reduced],
  );

  useEffect(() => {
    paint(elapsed.current);
    if (!running) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsed.current += (now - last) / 1000;
      last = now;
      paint(elapsed.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running, paint]);

  const toggle = () => {
    if (!running && chime) getAudio();
    if (!started && chime) playChime();
    setStarted(true);
    setRunning((r) => !r);
  };

  const reset = () => {
    setRunning(false);
    setStarted(false);
    elapsed.current = 0;
    shown.current = { phase: 0, count: PHASE_SECONDS, rounds: 0 };
    setPhase(0);
    setCount(PHASE_SECONDS);
    setRounds(0);
    paint(0);
  };

  const current = BOX_PHASES[phase];

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex aspect-square w-full max-w-[18rem] items-center justify-center"
        aria-hidden="true"
      >
        {/* The square path the breath travels around: four equal sides, four equal counts. */}
        <div className="absolute inset-[6%] rounded-[2.5rem] border border-dashed border-sage/70" />
        <div
          ref={circle}
          className="breath-orb absolute inset-[12%] rounded-full"
          style={{ transform: "scale(0.5)" }}
        />
        <div className="relative text-center">
          <p className="font-serif text-2xl text-foreground sm:text-[1.75rem]">
            {started ? current.label : "Ready"}
          </p>
          <p className="mt-1 text-4xl font-semibold tabular-nums text-primary-foreground">
            {started ? count : PHASE_SECONDS}
          </p>
        </div>
      </div>

      {/* Announced once per change, so screen reader users can follow without the circle. */}
      <p className="sr-only" aria-live="polite">
        {started ? `${current.label}, ${current.hint}, for 4 counts` : ""}
      </p>
      <p className="mt-4 min-h-7 text-center text-base text-muted-foreground" aria-hidden="true">
        {started ? current.hint : "In for 4, hold for 4, out for 4, hold for 4."}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={toggle} className={BUTTON.soft}>
          {running ? "Pause" : started ? "Resume" : "Start breathing"}
        </button>
        {started && (
          <button type="button" onClick={reset} className={BUTTON.quiet}>
            Start over
          </button>
        )}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <input
          id={chimeId}
          type="checkbox"
          checked={chime}
          onChange={(e) => {
            setChime(e.target.checked);
            if (e.target.checked) getAudio();
          }}
          className="h-5 w-5 accent-[var(--cta)]"
        />
        <label htmlFor={chimeId} className="min-h-11 content-center text-base text-foreground">
          Soft chime when the step changes
        </label>
      </div>

      <p className="mt-2 text-sm text-muted-foreground" aria-live="off">
        {rounds > 0
          ? `${rounds} ${rounds === 1 ? "round" : "rounds"} done. Four rounds take about a minute.`
          : "Four rounds take about a minute. Stop anytime you feel lightheaded."}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------------------------------
   2. 5-4-3-2-1 grounding
   ------------------------------------------------------------------------------------------ */
export const GROUNDING_STEPS = [
  {
    count: 5,
    sense: "see",
    prompt: "Name 5 things you can see.",
    detail:
      "Look around slowly. A color on the wall, the shape of a leaf, light on a surface. Say them quietly or in your head.",
  },
  {
    count: 4,
    sense: "feel",
    prompt: "Name 4 things you can feel.",
    detail:
      "Your feet on the floor, the chair under you, the fabric of your sleeve, the air on your skin.",
  },
  {
    count: 3,
    sense: "hear",
    prompt: "Name 3 things you can hear.",
    detail: "A fan, traffic far away, a bird, your own breathing. Let quiet sounds count too.",
  },
  {
    count: 2,
    sense: "smell",
    prompt: "Name 2 things you can smell.",
    detail:
      "Coffee, soap on your hands, fresh air. If nothing stands out, name two smells you like.",
  },
  {
    count: 1,
    sense: "taste",
    prompt: "Name 1 thing you can taste.",
    detail: "The last thing you ate or drank, or simply notice the taste in your mouth right now.",
  },
] as const;

export function GroundingExercise() {
  const [step, setStep] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);
  const done = step === GROUNDING_STEPS.length;

  // After Next or Back, move focus to the new step so keyboard and screen reader users land on it.
  useEffect(() => {
    if (moved.current) heading.current?.focus();
  }, [step]);

  const go = (next: number) => {
    moved.current = true;
    setStep(next);
  };

  const current = GROUNDING_STEPS[Math.min(step, GROUNDING_STEPS.length - 1)];

  return (
    <div>
      {/* Progress: five marks, filled as you go. Also stated in words below. */}
      <ol className="flex gap-2" aria-label="Progress">
        {GROUNDING_STEPS.map((s, i) => (
          <li
            key={s.sense}
            className={`h-1.5 flex-1 rounded-full ${i < step || done ? "bg-cta" : i === step ? "bg-sage" : "bg-foreground/10"}`}
          >
            <span className="sr-only">
              {s.count} things you can {s.sense}:{" "}
              {i < step || done ? "done" : i === step ? "current" : "not yet"}
            </span>
          </li>
        ))}
      </ol>

      <div key={step} className="tool-fade mt-6 min-h-[13rem]">
        {done ? (
          <>
            <h3 ref={heading} tabIndex={-1} className="font-serif text-3xl text-foreground">
              You’re here, right now.
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Take one slow breath and notice how your body feels compared with a few minutes ago.
              Any change counts, even a small one. You can run through it again whenever you need
              to.
            </p>
          </>
        ) : (
          <div className="flex items-start gap-5">
            <span
              className="font-serif text-[4.5rem] leading-none text-clay tabular-nums"
              aria-hidden="true"
            >
              {current.count}
            </span>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">
                Step {step + 1} of {GROUNDING_STEPS.length}
              </p>
              <h3
                ref={heading}
                tabIndex={-1}
                className="mt-1 font-serif text-2xl text-foreground sm:text-3xl"
              >
                {current.prompt}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {current.detail}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {done ? (
          <button type="button" onClick={() => go(0)} className={BUTTON.soft}>
            Start again
          </button>
        ) : (
          <>
            <button type="button" onClick={() => go(step + 1)} className={BUTTON.soft}>
              {step === GROUNDING_STEPS.length - 1 ? "Finish" : "Next"}
            </button>
            {step > 0 && (
              <button type="button" onClick={() => go(step - 1)} className={BUTTON.quiet}>
                Back
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------------------------
   3. Stress check-in: three sliders, general tips only. No score and no result.
   ------------------------------------------------------------------------------------------ */
type Levels = { sleep: number; stress: number; energy: number };

const SLIDERS: {
  key: keyof Levels;
  label: string;
  low: string;
  high: string;
}[] = [
  {
    key: "sleep",
    label: "How has your sleep been the last few nights?",
    low: "Poor",
    high: "Restful",
  },
  { key: "stress", label: "How stressed do you feel today?", low: "Calm", high: "Overwhelmed" },
  { key: "energy", label: "How is your energy today?", low: "Drained", high: "Full" },
];

type Tip = {
  title: string;
  body: string;
  link?: { label: string; href: string };
  source?: { label: string; url: string };
};

function tipsFor({ sleep, stress, energy }: Levels): Tip[] {
  const tips: Tip[] = [];
  if (stress >= 6) {
    tips.push({
      title: "Give your body a slower rhythm",
      body: "A few minutes of slow breathing, like the box breathing guide above, is a simple way to take the edge off. Then pick one small thing that is in your control today and do just that.",
      link: { label: "Go to box breathing", href: "#box-breathing" },
    });
    tips.push({
      title: "Come back to the room",
      body: "When thoughts are racing, the 5-4-3-2-1 exercise gives your attention something concrete to hold for a moment.",
      link: { label: "Go to 5-4-3-2-1", href: "#grounding" },
    });
  }
  if (sleep <= 4) {
    tips.push({
      title: "Protect tonight’s sleep",
      body: "Keep the same wake-up time, dim screens and lights for the last half hour before bed, and save caffeine for the morning. Most adults need 7 or more hours a night.",
      source: {
        label: "Watson et al., 2015",
        url: "https://doi.org/10.5664/jcsm.4758",
      },
    });
  }
  if (energy <= 4) {
    tips.push({
      title: "Small movement, some daylight",
      body: "A 10-minute walk outside, a glass of water, and a real snack can lift a flat afternoon more than you would expect. Keep it small enough that it feels doable.",
    });
  }
  if (stress >= 6 && energy <= 4) {
    tips.push({
      title: "Lower the bar for today",
      body: "When stress is high and energy is low, cross one thing off the list or move it to tomorrow. Rest is part of getting through, not a reward for it.",
    });
  }
  if (tips.length === 0) {
    tips.push({
      title: "Keep what is working",
      body: "Things look fairly steady right now. Notice what helped this week, like sleep, movement, people or time outside, and keep a little room for it.",
    });
  }
  return tips;
}

export function StressCheckIn() {
  const [levels, setLevels] = useState<Levels>({ sleep: 5, stress: 5, energy: 5 });
  const [showTips, setShowTips] = useState(false);
  const tipsHeading = useRef<HTMLHeadingElement>(null);
  const baseId = useId();

  const reveal = () => {
    setShowTips(true);
    requestAnimationFrame(() => tipsHeading.current?.focus());
  };

  const tips = tipsFor(levels);

  return (
    <div>
      <div className="ds-note text-base leading-relaxed text-foreground">
        <p>
          <strong className="font-semibold">This is not a screening test or a diagnosis.</strong>{" "}
          There’s no score. It only points to general self-care ideas. Your answers stay on this
          screen: nothing is saved or sent anywhere, and they’re gone when you leave the page.
        </p>
      </div>

      <div className="mt-6 space-y-7">
        {SLIDERS.map((s) => {
          const id = `${baseId}-${s.key}`;
          const value = levels[s.key];
          return (
            <div key={s.key}>
              <div className="flex items-baseline justify-between gap-4">
                <label htmlFor={id} className="ds-label text-base">
                  {s.label}
                </label>
                <span
                  className="font-serif text-2xl tabular-nums text-primary-foreground"
                  aria-hidden="true"
                >
                  {value}
                </span>
              </div>
              <input
                id={id}
                type="range"
                min={0}
                max={10}
                step={1}
                value={value}
                aria-valuetext={`${value} out of 10, where 0 is ${s.low.toLowerCase()} and 10 is ${s.high.toLowerCase()}`}
                onChange={(e) => setLevels((l) => ({ ...l, [s.key]: Number(e.target.value) }))}
                className="ds-range mt-1"
              />
              <div
                className="flex justify-between text-sm text-muted-foreground"
                aria-hidden="true"
              >
                <span>0 · {s.low}</span>
                <span>10 · {s.high}</span>
              </div>
            </div>
          );
        })}
      </div>

      {!showTips ? (
        <button type="button" onClick={reveal} className={`${BUTTON.soft} mt-8`}>
          Show general tips
        </button>
      ) : (
        <section className="tool-fade mt-8" aria-labelledby={`${baseId}-tips`}>
          <h3
            id={`${baseId}-tips`}
            ref={tipsHeading}
            tabIndex={-1}
            className="font-serif text-2xl text-foreground"
          >
            A few general ideas
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            These change as you move the sliders.
          </p>
          <ul className="mt-4 space-y-3">
            {tips.map((tip) => (
              <li key={tip.title} className="ds-card-quiet p-5">
                <p className="font-semibold text-foreground">{tip.title}</p>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">{tip.body}</p>
                {tip.source && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Source:{" "}
                    <a
                      href={tip.source.url}
                      className="underline underline-offset-4"
                      rel="noopener"
                    >
                      {tip.source.label}
                    </a>
                  </p>
                )}
                {tip.link && (
                  <a
                    href={tip.link.href}
                    className="mt-2 inline-flex min-h-11 items-center text-base font-medium text-primary-foreground underline underline-offset-4"
                  >
                    {tip.link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            If stress, low mood or poor sleep has lasted more than two weeks, or it’s getting in the
            way of work, school or relationships, it’s worth talking it through with a counselor or
            your doctor.
          </p>
        </section>
      )}
    </div>
  );
}
