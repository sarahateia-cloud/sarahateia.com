import { Fragment, useEffect } from "react";

/**
 * Scroll-linked motion built on GSAP ScrollTrigger. It loads only when the visitor scrolls near
 * an animated section, so it never slows the first paint, and it only moves transform and
 * opacity. Nothing pins or takes over scrolling. Visitors who ask for reduced motion get none of it, and the page reads fully
 * without it.
 *
 * Hooks into markup with data attributes:
 * - `data-scroll-words`: the `.scroll-word` spans inside brighten one after another while you
 *   scroll; `[data-scroll-pop]` children grow in alongside.
 * - `data-stagger`: direct children rise in one after another the first time it comes into view.
 * - `data-parallax="40"`: drifts up to that many pixels as it passes (wider screens only).
 */
export function useScrollScenes() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let revert: (() => void) | undefined;

    const start = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        for (const el of document.querySelectorAll<HTMLElement>("[data-scroll-words]")) {
          gsap.fromTo(
            el.querySelectorAll(".scroll-word"),
            { opacity: 0.18 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.12,
              scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 50%", scrub: 0.6 },
            },
          );
          gsap.fromTo(
            el.querySelectorAll("[data-scroll-pop]"),
            { scale: 0.6 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 90%", end: "center 55%", scrub: 0.6 },
            },
          );
        }

        for (const el of document.querySelectorAll<HTMLElement>("[data-stagger]")) {
          gsap.from(el.children, {
            y: 18,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        }

        gsap.matchMedia().add("(min-width: 768px)", () => {
          for (const el of document.querySelectorAll<HTMLElement>("[data-parallax]")) {
            const amount = Number(el.dataset.parallax) || 40;
            gsap.fromTo(
              el,
              { y: amount },
              {
                y: -amount,
                ease: "none",
                scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          }
        });
      });
      revert = () => ctx.revert();
    };

    // Load GSAP only once the visitor scrolls near the first animated section, so the first
    // paint and the page's startup work are exactly as they'd be without it.
    const targets = document.querySelectorAll(
      "[data-scroll-words], [data-stagger], [data-parallax]",
    );
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        void start();
      },
      { rootMargin: "600px 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => {
      cancelled = true;
      observer.disconnect();
      revert?.();
    };
  }, []);
}

/** Splits text into `.scroll-word` spans for a `data-scroll-words` block. */
export function ScrollWords({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="scroll-word">{word}</span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
