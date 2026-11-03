const PERIOD = 80; // one full twist of the helix, in SVG units

/** A slowly twisting DNA double helix, drawn vertically. */
export function DnaHelix({ className }: { className?: string }) {
  const turns = 8;
  const height = PERIOD * turns;
  const strand = (phase: number) => {
    let d = "";
    for (let y = 0; y <= height; y += 4) {
      const x = 30 + 22 * Math.sin((y / PERIOD) * Math.PI * 2 + phase);
      d += `${y === 0 ? "M" : "L"}${x.toFixed(1)} ${y}`;
    }
    return d;
  };
  const rungs = Array.from({ length: turns * 4 }, (_, i) => {
    const y = (i + 0.5) * (PERIOD / 4);
    const a = 30 + 22 * Math.sin((y / PERIOD) * Math.PI * 2);
    const b = 30 + 22 * Math.sin((y / PERIOD) * Math.PI * 2 + Math.PI);
    return { y, x1: Math.min(a, b), x2: Math.max(a, b) };
  });
  return (
    <svg viewBox={`0 0 60 ${height - PERIOD}`} className={className} aria-hidden>
      <g
        className="helix-scroll"
        style={{ "--helix-period": `${PERIOD}px` } as React.CSSProperties}
      >
        {rungs.map((r) => (
          <line
            key={r.y}
            x1={r.x1}
            x2={r.x2}
            y1={r.y}
            y2={r.y}
            stroke="#d8c29a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
        ))}
        <path d={strand(0)} fill="none" stroke="#8fa58c" strokeWidth="3" strokeLinecap="round" />
        <path
          d={strand(Math.PI)}
          fill="none"
          stroke="#a9bcc5"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

/** Line-art flower whose stem branches into dendrites and synapse buds, like a neuron. */
export function FloralNeuron({ className }: { className?: string }) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <svg viewBox="0 0 220 300" className={className} aria-hidden fill="none" strokeLinecap="round">
      <g transform="translate(110 78)">
        {petals.map((deg) => (
          <path
            key={deg}
            d="M0 0C-14 -16 -14 -40 0 -54C14 -40 14 -16 0 0Z"
            transform={`rotate(${deg})`}
            fill="#f6efe2"
            fillOpacity="0.55"
            stroke="#a9bcc5"
            strokeWidth="1.6"
          />
        ))}
        <circle r="10" fill="#d8c29a" fillOpacity="0.8" />
        <circle r="4" fill="#fff" />
      </g>
      {/* Axon-like stem with branching dendrites */}
      <path
        d="M110 132C108 170 116 205 104 240S112 280 110 296"
        stroke="#8fa58c"
        strokeWidth="2.4"
      />
      <path
        d="M109 168C92 172 80 164 70 150M70 150c-6-4-14-4-20 0M70 150c-2-8 0-15 6-20"
        stroke="#8fa58c"
        strokeWidth="1.6"
      />
      <path
        d="M111 205c18 0 30-8 38-22M149 183c6-3 13-2 18 2M149 183c1-8-2-14-8-19"
        stroke="#8fa58c"
        strokeWidth="1.6"
      />
      <path
        d="M106 246c-14 4-26 0-34-10M72 236c-6 0-11 3-14 8"
        stroke="#8fa58c"
        strokeWidth="1.4"
      />
      {/* Synapse buds */}
      {[
        [50, 150],
        [76, 130],
        [167, 185],
        [141, 164],
        [58, 244],
      ].map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="4"
          fill="#f6efe2"
          stroke="#a9bcc5"
          strokeWidth="1"
        />
      ))}
      <path d="M150 96c10-2 18 4 20 14" stroke="#d8c29a" strokeWidth="1.4" />
      <circle cx="172" cy="114" r="3" fill="#d8c29a" />
    </svg>
  );
}
