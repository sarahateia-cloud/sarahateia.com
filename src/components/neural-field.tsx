import { useEffect, useRef } from "react";

const COLORS = ["#8fa58c", "#a9bcc5", "#cdb795"]; // sage, mist blue, sand
const LINK_DISTANCE = 130;

type Node = { x: number; y: number; vx: number; vy: number; r: number; color: string };
type Pulse = { from: number; to: number; t: number };

/** A softly drifting network of neurons, with impulses travelling along nearby connections. */
export function NeuralField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const pulses: Pulse[] = [];
    let frame = 0;
    let visible = true;

    const seed = () => {
      const count = Math.round(Math.min(70, (width * height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.2 + Math.random() * 2.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (still) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK_DISTANCE) continue;
          ctx.strokeStyle = `rgba(90, 80, 60, ${0.2 * (1 - d / LINK_DISTANCE)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        glow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        glow.addColorStop(1, "rgba(169, 188, 197, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      for (const n of nodes) {
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      frame = requestAnimationFrame(step);
      if (!visible) return;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      if (pulses.length < 6 && Math.random() < 0.04 && nodes.length > 1) {
        const from = Math.floor(Math.random() * nodes.length);
        let to = -1;
        let best = LINK_DISTANCE;
        nodes.forEach((n, i) => {
          const d = Math.hypot(n.x - nodes[from].x, n.y - nodes[from].y);
          if (i !== from && d < best) {
            best = d;
            to = i;
          }
        });
        if (to >= 0) pulses.push({ from, to, t: 0 });
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        pulses[i].t += 0.02;
        if (pulses[i].t >= 1) pulses.splice(i, 1);
      }
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    visibility.observe(canvas);
    resize();
    if (!still) frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
