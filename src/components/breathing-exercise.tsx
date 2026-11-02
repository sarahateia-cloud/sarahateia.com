import { useEffect, useState } from "react";

const PHASES = [
  { label: "Breathe in", seconds: 4, scale: 1 },
  { label: "Hold", seconds: 4, scale: 1 },
  { label: "Breathe out", seconds: 6, scale: 0.55 },
] as const;

export function BreathingExercise() {
  const [running, setRunning] = useState(false);
  const [{ phase, count }, setTick] = useState<{ phase: number; count: number }>({
    phase: 0,
    count: PHASES[0].seconds,
  });

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setTick(({ phase, count }) => {
        if (count > 1) return { phase, count: count - 1 };
        const next = (phase + 1) % PHASES.length;
        return { phase: next, count: PHASES[next].seconds };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const toggle = () => {
    if (running) setTick({ phase: 0, count: PHASES[0].seconds });
    setRunning((r) => !r);
  };

  const current = PHASES[phase];
  const scale = running ? current.scale : 0.55;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        <div
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--sage) 45%, transparent), transparent 70%)",
          }}
        />
        <div
          className="breath-circle absolute inset-4 rounded-full border border-primary/20 shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          style={
            {
              transform: `scale(${scale})`,
              background:
                "radial-gradient(circle at 35% 30%, color-mix(in oklab, var(--sage) 55%, white), var(--primary))",
              "--breath-duration": `${running ? current.seconds : 1}s`,
            } as React.CSSProperties
          }
        />
        <div className="relative text-center text-primary-foreground" aria-live="polite">
          <p className="font-serif text-2xl">{running ? current.label : "Ready"}</p>
          {running && <p className="mt-1 text-sm opacity-80">{count}</p>}
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
