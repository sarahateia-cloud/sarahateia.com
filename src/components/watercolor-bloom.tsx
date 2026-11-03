import { useId } from "react";

// Washes for the left half; the right half is a mirror image.
const WASHES = [
  { cx: 170, cy: 300, rx: 170, ry: 170, color: "#d9c79a", opacity: 0.5 },
  { cx: 310, cy: 125, rx: 135, ry: 85, color: "#7f9a82", opacity: 0.75 },
  { cx: 325, cy: 195, rx: 125, ry: 62, color: "#a9bcc5", opacity: 0.65 },
  { cx: 300, cy: 290, rx: 165, ry: 100, color: "#93ad90", opacity: 0.7 },
  { cx: 230, cy: 365, rx: 165, ry: 115, color: "#b7c29a", opacity: 0.6 },
  { cx: 350, cy: 375, rx: 70, ry: 85, color: "#c9b48a", opacity: 0.5 },
  { cx: 330, cy: 505, rx: 130, ry: 115, color: "#d8ad86", opacity: 0.75 },
  { cx: 250, cy: 450, rx: 100, ry: 85, color: "#d7a868", opacity: 0.55 },
];

/** An original, symmetric watercolor bloom drawn with SVG filters. */
export function WatercolorBloom({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 800 640"
      className={className}
      role="img"
      aria-label="Watercolor artwork: a symmetric bloom of sage, mist blue, sand, and soft clay"
    >
      <defs>
        {WASHES.map((w, i) => (
          <radialGradient key={i} id={`${id}-g${i}`}>
            <stop offset="0%" stopColor={w.color} stopOpacity={w.opacity} />
            <stop offset="70%" stopColor={w.color} stopOpacity={w.opacity * 0.8} />
            <stop offset="100%" stopColor={w.color} stopOpacity="0" />
          </radialGradient>
        ))}
        {/* Ragged, bleeding edges like pigment soaking into paper. */}
        <filter id={`${id}-bleed`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="4" seed="7" />
          <feDisplacementMap
            in="SourceGraphic"
            scale="46"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
        <filter id={`${id}-grain`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="21" />
          <feDisplacementMap
            in="SourceGraphic"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="B"
          />
        </filter>
        <filter id={`${id}-paper`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="11" />
          <feColorMatrix values="0 0 0 0 0.45  0 0 0 0 0.4  0 0 0 0 0.35  0 0 0 0.09 0" />
        </filter>
        <g id={`${id}-half`}>
          <g filter={`url(#${id}-bleed)`}>
            {WASHES.map((w, i) => (
              <ellipse key={i} cx={w.cx} cy={w.cy} rx={w.rx} ry={w.ry} fill={`url(#${id}-g${i})`} />
            ))}
          </g>
          <g filter={`url(#${id}-grain)`} opacity="0.35" style={{ mixBlendMode: "multiply" }}>
            {WASHES.slice(1).map((w, i) => (
              <ellipse
                key={i}
                cx={w.cx}
                cy={w.cy}
                rx={w.rx * 0.7}
                ry={w.ry * 0.7}
                fill={`url(#${id}-g${i + 1})`}
              />
            ))}
          </g>
        </g>
      </defs>
      <use href={`#${id}-half`} />
      <use href={`#${id}-half`} transform="translate(800 0) scale(-1 1)" />
      {/* The fold down the middle. */}
      <path
        d="M400 70c-4 120 4 260-2 380s2 120 0 150"
        stroke="#3a3a33"
        strokeOpacity="0.5"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id}-bleed)`}
      />
      <rect width="800" height="640" filter={`url(#${id}-paper)`} />
    </svg>
  );
}
