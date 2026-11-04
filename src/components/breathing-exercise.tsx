import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PHASES = [
  { label: "Breathe in", seconds: 4, scale: 1 },
  { label: "Hold", seconds: 4, scale: 1 },
  { label: "Breathe out", seconds: 6, scale: 0.55 },
] as const;

const CYCLE_SECONDS = PHASES.reduce((total, phase) => total + phase.seconds, 0);
const REST_SCALE = 0.55;
const REDUCED_MOTION_SCALE = 0.8;

// The two rings behind the circle grow a little further and follow slightly behind it.
const HALOS = [
  { size: 1.06, lag: 0.15, opacity: 0.32 },
  { size: 1.12, lag: 0.3, opacity: 0.18 },
];

// Where each phase starts on the outer ring, in degrees from the top.
const PHASE_MARKS = [0, (4 / CYCLE_SECONDS) * 360, (8 / CYCLE_SECONDS) * 360];

function phaseAt(time: number) {
  let start = 0;
  for (let index = 0; index < PHASES.length; index++) {
    const end = start + PHASES[index].seconds;
    if (time < end) return { index, count: Math.ceil(end - time) };
    start = end;
  }
  return { index: PHASES.length - 1, count: 1 };
}

export function BreathingExercise() {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [count, setCount] = useState<number>(PHASES[0].seconds);

  const circle = useRef<HTMLDivElement>(null);
  const halos = useRef<(HTMLDivElement | null)[]>([]);
  const glow = useRef<HTMLDivElement>(null);
  const orbit = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!running) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shapes = [circle.current, ...halos.current];
    gsap.killTweensOf([...shapes, glow.current, orbit.current]);

    let shownPhase = -1;
    const timeline = gsap.timeline({
      repeat: -1,
      onUpdate: () => {
        const { index, count } = phaseAt(timeline.time());
        setPhase(index);
        setCount(count);
        if (index !== shownPhase) {
          shownPhase = index;
          if (!reduced) {
            gsap.fromTo(
              label.current,
              { opacity: 0, y: 6 },
              { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            );
          }
        }
      },
    });

    if (reduced) {
      // No growing or orbiting. The words, the count, and a soft glow guide the breath instead.
      gsap.set(shapes, { scale: REDUCED_MOTION_SCALE });
    } else {
      gsap.set(shapes, { scale: REST_SCALE });
      gsap.to(orbit.current, { opacity: 1, duration: 0.6 });
      timeline.fromTo(
        orbit.current,
        { rotation: 0 },
        { rotation: 360, duration: CYCLE_SECONDS, ease: "none" },
        0,
      );
    }

    let start = 0;
    for (const { seconds, scale } of PHASES) {
      const ease = "sine.inOut";
      timeline.to(
        glow.current,
        { opacity: scale === 1 ? 0.75 : 0.4, duration: seconds, ease },
        start,
      );
      if (!reduced) {
        timeline.to(circle.current, { scale, duration: seconds, ease }, start);
        HALOS.forEach(({ size, lag }, i) => {
          timeline.to(
            halos.current[i],
            { scale: scale === 1 ? size : REST_SCALE, duration: seconds - lag, ease },
            start + lag,
          );
        });
      }
      start += seconds;
    }

    return () => {
      timeline.kill();
      // Settle back to rest instead of snapping when the exercise stops.
      const duration = reduced ? 0 : 0.9;
      gsap.to(shapes, { scale: REST_SCALE, duration, ease: "power2.out" });
      gsap.to(glow.current, { opacity: 0.4, duration });
      gsap.to(orbit.current, { opacity: 0, duration: duration / 2 });
      gsap.killTweensOf(label.current);
      gsap.set(label.current, { opacity: 1, y: 0 });
    };
  }, [running]);

  const toggle = () => {
    setPhase(0);
    setCount(PHASES[0].seconds);
    setRunning((r) => !r);
  };

  const restTransform = `scale(${REST_SCALE})`;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        <div
          ref={glow}
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--sage) 45%, transparent), transparent 70%)",
          }}
        />
        {/* The outer ring and the dot that travels once around it per breath. */}
        <div className="absolute inset-0 rounded-full border border-primary/40" aria-hidden />
        {PHASE_MARKS.map((degrees) => (
          <div
            key={degrees}
            className="absolute inset-0"
            style={{ transform: `rotate(${degrees}deg)` }}
            aria-hidden
          >
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage" />
          </div>
        ))}
        <div ref={orbit} className="absolute inset-0 opacity-0" aria-hidden>
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-taupe shadow-[0_0_12px_var(--sage)]" />
        </div>
        {HALOS.map((halo, i) => (
          <div
            key={halo.size}
            ref={(el) => {
              halos.current[i] = el;
            }}
            className="absolute inset-4 rounded-full"
            style={{
              transform: restTransform,
              background: `color-mix(in oklab, var(--sage) ${halo.opacity * 100}%, transparent)`,
            }}
            aria-hidden
          />
        ))}
        <div
          ref={circle}
          className="absolute inset-4 rounded-full border border-primary/20 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          style={{
            transform: restTransform,
            background:
              "radial-gradient(circle at 35% 30%, color-mix(in oklab, var(--sage) 55%, white), var(--primary))",
          }}
        />
        <div className="relative text-center text-primary-foreground">
          <p ref={label} className="font-serif text-2xl" aria-live="polite">
            {running ? PHASES[phase].label : "Ready"}
          </p>
          {running && (
            <p className="mt-1 text-sm opacity-80" aria-hidden>
              {count}
            </p>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        className="mt-8 rounded-full border border-primary/30 bg-background px-6 py-2.5 text-sm text-foreground transition hover:border-primary hover:bg-card"
      >
        {running ? "Stop" : "Start a breathing exercise"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">In for 4 · hold for 4 · out for 6</p>
    </div>
  );
}
