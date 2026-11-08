import { useId, type CSSProperties } from "react";

type Scene = "lake";

// Fixed-seed random numbers, so the server and the browser draw identical trees.
function seeded(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** One SVG path of tiered pines standing along a gently rolling ridge, filled down to the bottom. */
function pineRidge(seed: number, baseY: number, minH: number, maxH: number, gap: number) {
  const rand = seeded(seed);
  const ridge = (x: number) => baseY + Math.sin(x / 210 + seed) * 18 + Math.sin(x / 67) * 6;
  let d = `M0 ${ridge(0)}`;
  for (let x = 40; x <= 1600; x += 40) d += ` L${x} ${ridge(x).toFixed(1)}`;
  d += " L1600 800 L0 800 Z";
  for (let x = -20; x < 1640; x += gap * (0.6 + rand() * 0.8)) {
    const h = minH + rand() * (maxH - minH);
    const w = h * (0.32 + rand() * 0.1);
    const y = ridge(x) + 4;
    const p = (dx: number, dy: number) => `${(x + dx * w).toFixed(1)} ${(y - dy * h).toFixed(1)}`;
    d += ` M${p(0, 1)} L${p(0.22, 0.62)} L${p(0.12, 0.62)} L${p(0.36, 0.3)} L${p(0.2, 0.3)} L${p(0.5, 0)} L${p(-0.5, 0)} L${p(-0.2, 0.3)} L${p(-0.36, 0.3)} L${p(-0.12, 0.62)} L${p(-0.22, 0.62)} Z`;
  }
  return d;
}

function LakeScene({ id }: { id: string }) {
  const rand = seeded(17);
  const glints = Array.from({ length: 22 }, (_, i) => {
    const y = 548 + i * 11 + rand() * 6;
    const w = (260 - i * 9) * (0.5 + rand() * 0.7);
    return { x: 800 - w / 2 + (rand() - 0.5) * 90, y, w, o: 0.55 - i * 0.02 };
  });
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="0.66">
          <stop offset="0" stopColor="#4c5d70" />
          <stop offset="0.5" stopColor="#a99ba5" />
          <stop offset="0.82" stopColor="#e8c8a6" />
          <stop offset="1" stopColor="#f2dfc2" />
        </linearGradient>
        <linearGradient id={`${id}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a96a0" />
          <stop offset="0.3" stopColor="#4d5f6c" />
          <stop offset="1" stopColor="#25343d" />
        </linearGradient>
        <radialGradient id={`${id}-sun`}>
          <stop offset="0" stopColor="#fdebc6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fdebc6" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-cloud`} x="-30%" y="-80%" width="160%" height="260%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>
      <rect width="1600" height="540" fill={`url(#${id}-sky)`} />
      <circle cx="800" cy="520" r="380" fill={`url(#${id}-sun)`} />
      <g filter={`url(#${id}-cloud)`}>
        <ellipse cx="330" cy="150" rx="260" ry="46" fill="#7c8698" opacity="0.6" />
        <ellipse cx="560" cy="260" rx="220" ry="34" fill="#d9b0ab" opacity="0.6" />
        <ellipse cx="1150" cy="190" rx="300" ry="50" fill="#7c8698" opacity="0.55" />
        <ellipse cx="1050" cy="320" rx="240" ry="30" fill="#e3b9a9" opacity="0.6" />
        <ellipse cx="1420" cy="390" rx="200" ry="24" fill="#e7c4ae" opacity="0.5" />
        <ellipse cx="170" cy="380" rx="200" ry="26" fill="#d4ada8" opacity="0.5" />
      </g>
      <path d={pineRidge(5, 532, 10, 30, 14)} fill="#4a5658" />
      <rect y="536" width="1600" height="264" fill={`url(#${id}-water)`} />
      {glints.map((g, i) => (
        <rect
          key={i}
          x={g.x.toFixed(1)}
          y={g.y.toFixed(1)}
          width={g.w.toFixed(1)}
          height="2.4"
          rx="1.2"
          fill="#fbe6bf"
          opacity={g.o.toFixed(2)}
        />
      ))}
    </>
  );
}

const FOG: Record<Scene, { top: string; height: string; opacity: number }[]> = {
  lake: [{ top: "58%", height: "16%", opacity: 0.3 }],
};

/**
 * A wide, painted nature scene (original artwork drawn in code) with a few short lines over it.
 * Each line fades up in turn as the band scrolls into view.
 */
export function NatureBand({ scene, lines }: { scene: Scene; lines: string[] }) {
  const id = useId().replace(/:/g, "");
  return (
    <div className="mx-auto max-w-6xl px-3 sm:px-6">
      <div className="relative isolate h-[68vh] min-h-[22rem] max-h-[40rem] overflow-hidden rounded-[2rem] bg-[#3a4d48] shadow-[0_40px_90px_-50px_oklch(0.3_0.03_200_/_0.6)]">
        <svg
          viewBox="0 0 1600 800"
          preserveAspectRatio="xMidYMid slice"
          className="nature-scene absolute inset-0 -z-10 h-full w-full"
          aria-hidden
        >
          <LakeScene id={id} />
        </svg>
        {FOG[scene].map((fog, i) => (
          <div
            key={i}
            className="nature-fog pointer-events-none absolute -inset-x-1/4 -z-10"
            style={
              {
                top: fog.top,
                height: fog.height,
                opacity: fog.opacity,
                "--fog-delay": `${i * -9}s`,
              } as CSSProperties
            }
            aria-hidden
          />
        ))}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full bg-gradient-to-t from-[#16211f]/80 via-[#16211f]/40 to-transparent"
          aria-hidden
        />
        <p className="absolute inset-x-0 bottom-0 px-6 pb-10 font-serif text-[2.1rem] leading-[1.12] text-[#f8f4ec] [text-shadow:0_2px_24px_rgb(0_0_0_/_0.35)] sm:px-14 sm:pb-14 sm:text-6xl">
          {lines.map((line, i) => (
            <span key={line} className="reveal block" style={{ transitionDelay: `${i * 260}ms` }}>
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
