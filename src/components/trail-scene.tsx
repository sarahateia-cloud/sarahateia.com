import type { CSSProperties } from "react";

// An original illustration of a North Texas trail at golden hour: rolling prairie, live oaks,
// tall grass and a dirt path curving away. Drawn in code, so there's no photo to license or
// credit, it's light to load, and its colors follow light and dark mode. Each layer drifts at its
// own speed while the page scrolls (CSS only, transform only, off for reduced motion).

function seeded(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** A rolling hill line across the scene, filled down to the bottom. */
function hill(seed: number, baseY: number, amp: number, period: number) {
  const y = (x: number) =>
    baseY + Math.sin(x / period + seed) * amp + Math.sin(x / (period / 3) + seed * 2) * (amp / 4);
  let d = `M0 ${y(0).toFixed(1)}`;
  for (let x = 40; x <= 1600; x += 40) d += ` L${x} ${y(x).toFixed(1)}`;
  return `${d} L1600 900 L0 900 Z`;
}

/** A live oak: short trunk, wide low crown built from overlapping rounded clumps. */
function LiveOak({ x, y, s, seed }: { x: number; y: number; s: number; seed: number }) {
  const rand = seeded(seed);
  const clumps = Array.from({ length: 9 }, (_, i) => {
    const t = i / 8;
    return {
      cx: x + (t - 0.5) * 180 * s + (rand() - 0.5) * 20 * s,
      cy: y - 70 * s - Math.sin(t * Math.PI) * 38 * s + (rand() - 0.5) * 12 * s,
      r: (30 + rand() * 22) * s,
    };
  });
  return (
    <g>
      <path
        d={`M${x - 6 * s} ${y} C${x - 4 * s} ${y - 30 * s} ${x - 22 * s} ${y - 48 * s} ${x - 60 * s} ${y - 66 * s} M${x + 4 * s} ${y} C${x + 6 * s} ${y - 34 * s} ${x + 28 * s} ${y - 52 * s} ${x + 64 * s} ${y - 62 * s}`}
        className="trail-trunk"
        strokeWidth={9 * s}
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x={x - 7 * s}
        y={y - 40 * s}
        width={14 * s}
        height={40 * s}
        rx={5 * s}
        className="trail-trunk-fill"
      />
      {clumps.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} className="trail-canopy" />
      ))}
    </g>
  );
}

function grassBlades(seed: number, count: number, y0: number, y1: number) {
  const rand = seeded(seed);
  let d = "";
  for (let i = 0; i < count; i++) {
    const x = rand() * 1600;
    const y = y0 + rand() * (y1 - y0);
    const h = 10 + rand() * 30 * ((y - y0) / (y1 - y0) + 0.4);
    const lean = (rand() - 0.5) * 26;
    d += `M${x.toFixed(1)} ${y.toFixed(1)} q${(lean / 2).toFixed(1)} ${(-h / 2).toFixed(1)} ${lean.toFixed(1)} ${(-h).toFixed(1)} `;
  }
  return d;
}

export function TrailScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMax slice"
      className={`trail-scene ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="trail-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="trail-sky-top" />
          <stop offset="0.7" className="trail-sky-mid" />
          <stop offset="1" className="trail-sky-low" />
        </linearGradient>
        <radialGradient id="trail-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" className="trail-sun-core" />
          <stop offset="1" className="trail-sun-core" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="trail-path" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="trail-path-far" />
          <stop offset="1" className="trail-path-near" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#trail-sky)" />
      <g className="trail-layer" style={{ "--depth": "40px" } as CSSProperties}>
        <circle cx="960" cy="455" r="260" fill="url(#trail-sun)" opacity="0.9" />
        <circle cx="960" cy="455" r="58" className="trail-sun-disc" />
      </g>
      <g className="trail-layer" style={{ "--depth": "30px" } as CSSProperties}>
        <path d={hill(3, 520, 22, 260)} className="trail-hill-far" />
      </g>
      <g className="trail-layer" style={{ "--depth": "20px" } as CSSProperties}>
        <path d={hill(7, 580, 26, 200)} className="trail-hill-mid" />
        <LiveOak x={260} y={600} s={0.7} seed={4} />
        <LiveOak x={1290} y={585} s={0.6} seed={9} />
        <LiveOak x={820} y={592} s={0.45} seed={12} />
      </g>
      <g className="trail-layer" style={{ "--depth": "10px" } as CSSProperties}>
        <path d={hill(11, 650, 18, 300)} className="trail-field" />
        {/* The path, narrowing as it curves toward the horizon. */}
        <path
          d="M690 900 C760 820 700 760 790 712 C850 680 905 668 880 646 L900 646 C935 668 900 700 860 730 C800 772 900 830 1010 900 Z"
          fill="url(#trail-path)"
        />
        <path d={grassBlades(21, 620, 650, 900)} className="trail-grass" fill="none" />
      </g>
      <g className="trail-layer" style={{ "--depth": "0px" } as CSSProperties}>
        <LiveOak x={-10} y={930} s={1.6} seed={31} />
        <path d={grassBlades(41, 260, 800, 920)} className="trail-grass-near" fill="none" />
      </g>
    </svg>
  );
}
