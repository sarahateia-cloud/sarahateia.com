import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { Pause, Play } from "lucide-react";

// Sarah's quotes, word for word as she sent them. Keep it to 20 at most, so each spot's
// buttons fit on a phone. The two quote spots on the home page share them (the first spot gets
// the 1st, 3rd, 5th… and the second gets the 2nd, 4th, 6th…), so the same quote never shows in
// both places. Each spot gently takes turns through its own quotes.
const QUOTES: { text: string; author?: string }[] = [
  {
    text: "Humility is not thinking less of yourself; it’s thinking of yourself less.",
    author: "C. S. Lewis",
  },
  {
    text: "The faculty of voluntarily bringing back a wandering attention, over and over again, is the very root of judgment, character, and will. No one is compos sui [master of himself] if he have it not. An education which should improve this faculty would be the education par excellence.",
    author: "William James, Principles of Psychology",
  },
  {
    text: "Between stimulus and response, there is a space. In the space there is the power to choose our response. In our response lies our growth and our freedom.",
    author: "Victor Frankl",
  },
  {
    text: "Freedom is not worth having if it does not include the freedom to make mistakes.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The only lies for which we are truly punished are those we tell ourselves.",
    author: "V. S. Naipaul",
  },
  {
    text: "To get what you love, you must first be patient with what you hate.",
    author: "Al-Ghazali",
  },
  {
    text: "Those who look for seashells will find seashells; those who open them will find pearls.",
    author: "Al-Ghazali",
  },
  {
    text: "Never have I dealt with anything more difficult than my own soul, which sometimes helps me and sometimes opposes me.",
    author: "Al-Ghazali",
  },
  {
    text: "A real man is one who fears the death of his heart, not of his body.",
    author: "Ibn Qayyim Al-Jawziyya",
  },
  {
    text: "A person’s tongue can give you the taste of his heart.",
    author: "Ibn Qayyim Al-Jawziyya",
  },
  {
    text: "Women are one half of society which gives birth to the other half so it is as if they are the entire society.",
    author: "Ibn Qayyim Al-Jawziyya",
  },
  {
    text: "Beware of every hour and how it passes, and only spend it in the best possible way, do not neglect yourself, but render it accustomed to the noblest and best of actions, and send to your grave that which will please you when you arrive to it.",
    author: "Ibn Qayyim Al-Jawziyya",
  },
  {
    text: "Don’t grieve. Anything you lose comes round in another form.",
    author: "Rumi",
  },
  {
    text: "If you are irritated by every rub, how will your mirror be polished?",
    author: "Rumi",
  },
  {
    text: "Who looks outside, dreams; who looks inside, awakes.",
    author: "Carl Jung",
  },
  {
    text: "There is no coming to consciousness without pain.",
    author: "Carl Jung",
  },
  {
    text: "We should not pretend to understand the world only by the intellect. The judgement of the intellect is only part of the truth.",
    author: "Carl Jung",
  },
  {
    text: "We cannot change anything until we accept it. Condemnation does not liberate, it oppresses.",
    author: "Carl Jung",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Type size by length. Long quotes step down only a little and get roomier line spacing, so
 * they stay easy to read on a phone. Everything stays smaller than the page headings, so the
 * quotes sit quietly behind booking a consultation.
 */
const sizeFor = (text: string) =>
  text.length > 160
    ? "text-[1.5rem] leading-[1.55] sm:text-[1.875rem] sm:leading-[1.5]"
    : text.length > 90
      ? "text-[1.625rem] leading-[1.45] sm:text-[2.125rem] sm:leading-[1.4]"
      : "text-[1.875rem] leading-[1.35] sm:text-[2.5rem] sm:leading-[1.3]";

/**
 * A quote band: a hand-drawn quotation mark, words that drift into focus, and a slowly moving
 * glow. When a spot has more than one quote it moves to the next one on its own while it's on
 * screen, with time to read each. A labeled Pause/Resume button comes first, then one button
 * per quote (arrow keys move between them). It holds while the mouse is over it, pauses when
 * keyboard focus comes in, and never starts on its own for people who prefer less motion.
 */
export function QuoteFeature({
  slot,
  align = "center",
}: {
  slot: 0 | 1;
  align?: "center" | "left";
}) {
  const pool = QUOTES.filter((_, i) => i % 2 === slot);
  const count = pool.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const band = useRef<HTMLElement>(null);
  const dots = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) setPaused(true);
  }, []);

  // Only change quotes while this band is on screen, so nobody misses one scrolling past.
  useEffect(() => {
    const el = band.current;
    if (!el || count < 2 || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      threshold: 0.5,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  const rotating = count > 1 && !paused && onScreen && !hovering;

  useEffect(() => {
    if (!rotating) return;
    // About half a second per word, plus a few seconds, so even the long ones can be read.
    const words = pool[current].text.split(/\s+/).length;
    const wait = Math.max(10000, words * 450 + 6000);
    const timer = window.setTimeout(() => setCurrent((c) => (c + 1) % count), wait);
    return () => window.clearTimeout(timer);
  }, [rotating, current, count, pool]);

  if (!count) return null;
  const centered = align === "center";

  const choose = (k: number, moveFocus = false) => {
    setCurrent(k);
    setPaused(true);
    if (moveFocus) dots.current[k]?.focus();
  };

  const onDotKey = (e: KeyboardEvent<HTMLButtonElement>, k: number) => {
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? (k + 1) % count
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? (k - 1 + count) % count
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? count - 1
              : null;
    if (next === null) return;
    e.preventDefault();
    choose(next, true);
  };

  return (
    <section
      ref={band}
      aria-roledescription="carousel"
      aria-label="Quotes"
      className="quote-band relative isolate overflow-hidden"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      // Keyboard focus coming in pauses for good (Resume restarts it); a tap or click doesn't.
      onFocus={(e) => {
        if (e.target.matches(":focus-visible")) setPaused(true);
      }}
    >
      <div className="quote-glow" aria-hidden />
      <figure
        className={`reveal quote-feature mx-auto max-w-3xl px-6 py-14 sm:py-20 ${
          centered ? "text-center" : "text-left"
        }`}
      >
        <svg
          viewBox="0 0 64 48"
          className={`quote-mark h-9 w-12 sm:h-11 sm:w-16 ${centered ? "mx-auto" : ""}`}
          aria-hidden
        >
          <path
            pathLength={1}
            d="M26 6 C14 10 6 19 6 30 C6 37 10 42 16 42 C22 42 26 38 26 32 C26 26 22 22 16 22 C14 22 12 23 11 24 C12 17 18 11 26 8 M58 6 C46 10 38 19 38 30 C38 37 42 42 48 42 C54 42 58 38 58 32 C58 26 54 22 48 22 C46 22 44 23 43 24 C44 17 50 11 58 8"
          />
        </svg>

        {/* All of this spot's quotes share one space, sized to the longest, so the page never
            jumps when they change. Screen readers hear a new quote only when someone picks it. */}
        <div className="mt-5 grid items-center" aria-live={rotating ? "off" : "polite"}>
          {pool.map((quote, k) => {
            const words = quote.text.split(/\s+/);
            // Long quotes arrive a little faster, word by word.
            const step = Math.min(80, Math.round(2400 / words.length));
            const isCurrent = k === current;
            return (
              <div
                key={k}
                role="group"
                aria-roledescription="slide"
                aria-label={`${k + 1} of ${count}`}
                aria-hidden={!isCurrent}
                className={`quote-slide [grid-area:1/1] ${isCurrent ? "is-current" : ""}`}
                style={{ "--step": `${step}ms` } as CSSProperties}
              >
                <blockquote
                  className={`font-serif font-normal italic text-foreground/85 ${sizeFor(quote.text)}`}
                >
                  {words.map((word, i) => (
                    <Fragment key={i}>
                      <span className="quote-word" style={{ "--i": i } as CSSProperties}>
                        {word}
                      </span>{" "}
                    </Fragment>
                  ))}
                </blockquote>
                {quote.author && (
                  <figcaption
                    className={`quote-author mt-6 text-sm uppercase leading-relaxed tracking-[0.18em] text-muted-foreground ${
                      centered ? "justify-center" : ""
                    }`}
                    style={{ "--i": words.length } as CSSProperties}
                  >
                    {quote.author}
                  </figcaption>
                )}
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <div
            className={`mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 ${
              centered ? "justify-center" : "-ml-1"
            }`}
          >
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="quote-toggle inline-flex min-h-11 min-w-[7.5rem] items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-4 text-sm font-medium text-foreground transition hover:bg-card"
            >
              {paused ? (
                <Play className="h-4 w-4" aria-hidden />
              ) : (
                <Pause className="h-4 w-4" aria-hidden />
              )}
              {paused ? "Resume" : "Pause"}
              <span className="sr-only"> quotes</span>
            </button>
            <div role="group" aria-label="Choose a quote" className="flex items-center">
              {pool.map((quote, k) => (
                <button
                  key={k}
                  ref={(el) => {
                    dots.current[k] = el;
                  }}
                  type="button"
                  aria-label={`Quote ${k + 1} of ${count}${quote.author ? `, ${quote.author}` : ""}`}
                  aria-current={k === current || undefined}
                  tabIndex={k === current ? 0 : -1}
                  onClick={() => choose(k)}
                  onKeyDown={(e) => onDotKey(e, k)}
                  className="quote-dot"
                >
                  <span aria-hidden />
                </button>
              ))}
            </div>
          </div>
        )}
      </figure>
    </section>
  );
}
