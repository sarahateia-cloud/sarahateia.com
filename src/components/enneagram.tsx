import { useState, type CSSProperties } from "react";
import { Tilt } from "@/components/motion";

// An original drawing of the Enneagram symbol: nine points on a circle, the inner triangle
// (3-6-9) and the six-pointed figure (1-4-2-8-5-7). Layers sit at different depths so the
// chart reads as 3D, floats gently, and tilts toward the mouse.

type Center = "Body" | "Heart" | "Mind";

const CENTER_COLOR: Record<Center, string> = {
  Body: "oklch(0.8 0.06 70)", // warm sand
  Heart: "oklch(0.8 0.055 20)", // soft clay rose
  Mind: "oklch(0.8 0.045 230)", // mist blue
};

// Virtues and vices use the traditional names from early Enneagram teaching, with a plain
// gloss where the old word is easy to misread. The nicknames and summaries were written for
// this site and are waiting on Sarah's review.
const TYPES: Record<
  number,
  { nickname: string; wants: string; center: Center; virtue: string; vice: string }
> = {
  1: {
    nickname: "The Improver",
    wants: "Wants to do things right and be a good person.",
    center: "Body",
    virtue: "Serenity",
    vice: "Anger",
  },
  2: {
    nickname: "The Giver",
    wants: "Wants to be loved and to feel needed.",
    center: "Heart",
    virtue: "Humility",
    vice: "Pride",
  },
  3: {
    nickname: "The Striver",
    wants: "Wants to be valued and to succeed.",
    center: "Heart",
    virtue: "Truthfulness",
    vice: "Vanity",
  },
  4: {
    nickname: "The Deep Feeler",
    wants: "Wants to be truly seen for who they are.",
    center: "Heart",
    virtue: "Equanimity",
    vice: "Envy",
  },
  5: {
    nickname: "The Observer",
    wants: "Wants to understand the world and feel capable.",
    center: "Mind",
    virtue: "Non-attachment",
    vice: "Avarice (holding tight to time, energy, and privacy)",
  },
  6: {
    nickname: "The Loyal Guardian",
    wants: "Wants safety, support, and someone to trust.",
    center: "Mind",
    virtue: "Courage",
    vice: "Fear",
  },
  7: {
    nickname: "The Joy Seeker",
    wants: "Wants freedom, fun, and new experiences.",
    center: "Mind",
    virtue: "Sobriety (finding enough in what's here)",
    vice: "Gluttony (always reaching for the next good thing)",
  },
  8: {
    nickname: "The Protector",
    wants: "Wants to stay strong and steer their own life.",
    center: "Body",
    virtue: "Innocence (meeting life openly, without armor)",
    vice: "Lust (wanting everything at full intensity)",
  },
  9: {
    nickname: "The Peacekeeper",
    wants: "Wants inner calm and harmony with others.",
    center: "Body",
    virtue: "Right action (showing up for what matters to you)",
    vice: "Sloth (tuning out your own needs and priorities)",
  },
};

// Where each type tends to move: toward growth when relaxed, toward stress when pressured.
const GROWTH: Record<number, number> = { 1: 7, 2: 4, 3: 6, 4: 1, 5: 8, 6: 9, 7: 5, 8: 2, 9: 3 };
const STRESS: Record<number, number> = { 1: 4, 2: 8, 3: 9, 4: 2, 5: 7, 6: 3, 7: 1, 8: 5, 9: 6 };

const SIZE = 300;
const MID = SIZE / 2;
const R = 116;
const NODE_R = 19;

const toXY = (deg: number, r = R) => {
  const a = (deg * Math.PI) / 180;
  return { x: MID + r * Math.cos(a), y: MID + r * Math.sin(a) };
};
// 9 sits at the top; the numbers run clockwise, 40 degrees apart.
const angleOf = (n: number) => -90 + n * 40;
const point = (n: number) => toXY(angleOf(n));

const pathThrough = (nums: number[]) =>
  nums
    .map((n, i) => {
      const p = point(n);
      return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    })
    .join(" ");

const wedge = (from: number, to: number) => {
  const a = toXY(from);
  const b = toXY(to);
  return `M${MID} ${MID} L${a.x.toFixed(1)} ${a.y.toFixed(1)} A${R} ${R} 0 0 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)} Z`;
};

/** A line from one point toward another, stopping short of both circles so the arrow shows. */
const arrowLine = (from: number, to: number) => {
  const a = point(from);
  const b = point(to);
  const len = Math.hypot(b.x - a.x, b.y - a.y);
  const ux = (b.x - a.x) / len;
  const uy = (b.y - a.y) / len;
  const gap = NODE_R + 4;
  return {
    x1: a.x + ux * gap,
    y1: a.y + uy * gap,
    x2: b.x - ux * (gap + 4),
    y2: b.y - uy * (gap + 4),
  };
};

const SECTORS: { center: Center; from: number; to: number; labelAt: number }[] = [
  { center: "Body", from: 210, to: 330, labelAt: 270 },
  { center: "Heart", from: 330, to: 450, labelAt: 30 },
  { center: "Mind", from: 90, to: 210, labelAt: 150 },
];

export function Enneagram() {
  const [selected, setSelected] = useState(9);
  const type = TYPES[selected];
  const growth = arrowLine(selected, GROWTH[selected]);
  const stress = arrowLine(selected, STRESS[selected]);

  return (
    <div>
      <div className="enn-stage mx-auto aspect-square w-full max-w-[21rem]">
        <Tilt max={10}>
          <div className="enn-float relative h-full w-full">
            <div className="enn-shadow" aria-hidden />

            {/* Base: the circle and the three centers. */}
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="enn-layer" aria-hidden>
              <circle cx={MID} cy={MID} r={R + 14} className="enn-halo" />
              {SECTORS.map((s) => (
                <path
                  key={s.center}
                  d={wedge(s.from, s.to)}
                  fill={CENTER_COLOR[s.center]}
                  className="enn-sector"
                  data-active={type.center === s.center || undefined}
                />
              ))}
              <circle cx={MID} cy={MID} r={R} className="enn-ring" />
              {SECTORS.map((s) => {
                const p = toXY(s.labelAt, 62);
                return (
                  <text
                    key={s.center}
                    x={p.x}
                    y={p.y}
                    className="enn-center-label"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {s.center}
                  </text>
                );
              })}
            </svg>

            {/* Middle: the inner lines draw themselves in, then the chosen type's paths flow. */}
            <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="enn-layer enn-layer-lines" aria-hidden>
              <defs>
                <marker
                  id="enn-arrow-growth"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 L10 5 L0 10 z" className="enn-arrowhead-growth" />
                </marker>
                <marker
                  id="enn-arrow-stress"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 L10 5 L0 10 z" className="enn-arrowhead-stress" />
                </marker>
              </defs>
              <path
                d={`${pathThrough([1, 4, 2, 8, 5, 7, 1])}`}
                pathLength={1}
                className="enn-line"
              />
              <path
                d={`${pathThrough([3, 6, 9, 3])}`}
                pathLength={1}
                className="enn-line enn-line-late"
              />
              <line
                key={`g${selected}`}
                {...growth}
                className="enn-flow enn-flow-growth"
                markerEnd="url(#enn-arrow-growth)"
              />
              <line
                key={`s${selected}`}
                {...stress}
                className="enn-flow enn-flow-stress"
                markerEnd="url(#enn-arrow-stress)"
              />
            </svg>

            {/* Top: the nine numbers, as real buttons. */}
            <div className="enn-layer enn-layer-nodes">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
                const p = point(n);
                const t = TYPES[n];
                const isOn = n === selected;
                return (
                  <button
                    key={n}
                    type="button"
                    aria-pressed={isOn}
                    aria-label={`Type ${n}, ${t.nickname}`}
                    onClick={() => setSelected(n)}
                    className="enn-node"
                    style={
                      {
                        left: `${(p.x / SIZE) * 100}%`,
                        top: `${(p.y / SIZE) * 100}%`,
                        "--node": CENTER_COLOR[t.center],
                        "--i": n,
                      } as CSSProperties
                    }
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </div>
        </Tilt>
      </div>

      <div
        className="enn-detail mt-6 rounded-2xl bg-card p-5"
        style={{ "--node": CENTER_COLOR[type.center] } as CSSProperties}
        aria-live="polite"
      >
        <div key={selected} className="enn-detail-in">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-serif text-xl text-foreground">
              Type {selected} · {type.nickname}
            </p>
            <span className="enn-chip">{type.center}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{type.wants}</p>
          <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Virtue</dt>
              <dd className="mt-1 text-foreground">{type.virtue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Vice</dt>
              <dd className="mt-1 text-foreground">{type.vice}</dd>
            </div>
          </dl>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <span>
              <span className="enn-key enn-key-growth" aria-hidden /> Growth: toward{" "}
              {GROWTH[selected]}
            </span>
            <span>
              <span className="enn-key enn-key-stress" aria-hidden /> Stress: toward{" "}
              {STRESS[selected]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
