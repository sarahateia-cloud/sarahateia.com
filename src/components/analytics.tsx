import { useEffect, useRef, useState } from "react";

// Google Analytics measurement ID, like "G-XXXXXXXXXX". Nothing loads or shows while this is empty.
const ANALYTICS_ID: string = "";

const CHOICE_KEY = "analytics-choice";
const OPEN_CHOICE_EVENT = "analytics-choice-open";
const CHOICE_CHANGED_EVENT = "analytics-choice-changed";

type Choice = "allow" | "decline";

// Visiting these pages shouldn't be shared with an outside company.
const PRIVATE_PATHS = ["/crisis", "/new-clients", "/forms"];

// What visitors are told. Keep these matching what the code below actually allows through.
const COLLECTED =
  "the pages you view, how far you scroll and how long you stay, your device, browser, screen size and language setting, and your approximate location, which Google works out from your internet connection";

const CONSENT_TEXT = `With your permission, I’d use Google Analytics to count visits and see which pages are useful. If you accept, Google receives ${COLLECTED}. It also sets a cookie so it can recognize your browser on later visits. Google Analytics collects nothing unless you accept, and the site works the same either way.`;

// Only pages that are live belong here. When the New Clients page is published, change this to
// "Visits to the crisis and New Clients pages aren’t counted". Both are already excluded below.
const NOT_COUNTED = "Visits to the crisis page aren’t counted";

const FOOTER_TEXT = `This site uses Google Analytics only if you accept. If you do, Google receives ${COLLECTED}, and a cookie lets it recognize your browser on later visits. Advertising features are turned off, and clicks on links to other sites aren’t counted. ${NOT_COUNTED}, and analytics isn’t set up to collect what you type into the booking form.`;

// The only kinds of counts allowed to leave the browser. Anything else Google's tag tries to
// send, such as clicks on links to other sites, form use, downloads, or video, is dropped here.
const ALLOWED_EVENTS = new Set(["page_view", "scroll", "user_engagement"]);

// A plain in-page section link like "#fees". Anything else after "#" is never shown to Google.
const SECTION_HASH = /^#[A-Za-z0-9_-]{1,64}$/;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const isPrivatePath = (path: string) => PRIVATE_PATHS.some((p) => path.startsWith(p));

/**
 * What Google is told about the previous page: never anything after "?" or "#", only "this
 * site" when it was a private page, and only the site name when it was another website.
 */
function safeReferrer() {
  try {
    const from = new URL(document.referrer);
    if (from.origin !== window.location.origin) return `${from.origin}/`;
    if (isPrivatePath(from.pathname)) return from.origin;
    return from.origin + from.pathname;
  } catch {
    // No referrer, or one that isn't a web address.
    return undefined;
  }
}

const hasUnsafeExtras = (url: URL) =>
  url.search !== "" || (url.hash !== "" && !SECTION_HASH.test(url.hash));

/**
 * Removes anything after "?" (and any "#" part that isn't a section link) from the address
 * bar, before Google's script exists, so it can only ever read the plain page address.
 */
function cleanAddress() {
  const here = new URL(window.location.href);
  if (!hasUnsafeExtras(here)) return;
  const hash = SECTION_HASH.test(here.hash) ? here.hash : "";
  history.replaceState(history.state, "", here.pathname + hash);
}

// Google's documented off switch for an already loaded tag.
function setDisabled(disabled: boolean) {
  (window as unknown as Record<string, boolean>)[`ga-disable-${ANALYTICS_ID}`] = disabled;
}

/** Removes Google Analytics' visitor cookies (_ga, _ga_XXXX) from this site and its parent domain. */
function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_"));
  const parts = window.location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join(".")).filter((d) => d.includes("."));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${d}`;
  }
}

/**
 * Google counts in-site page changes on its own. Before it can see a change to a private
 * page, or to an address with extras after "?" or "#", analytics is switched off and the
 * page is opened fresh. There, Google either never loads or loads after the address is cleaned.
 */
function guardPageChanges() {
  const needsFreshLoad = (url: URL) => isPrivatePath(url.pathname) || hasUnsafeExtras(url);
  const leaveIfUnsafe = (url?: string | URL | null) => {
    if (url == null) return false;
    const next = new URL(String(url), window.location.href);
    if (!needsFreshLoad(next)) return false;
    setDisabled(true);
    window.location.assign(next.href);
    return true;
  };
  for (const method of ["pushState", "replaceState"] as const) {
    const original = history[method];
    history[method] = function (data: unknown, unused: string, url?: string | URL | null) {
      if (leaveIfUnsafe(url)) return;
      return original.call(this, data, unused, url);
    };
  }
  // Registered before Google's script loads, so these run before Google sees the change.
  const onBrowserMove = () => {
    if (!needsFreshLoad(new URL(window.location.href))) return;
    setDisabled(true);
    window.location.reload();
  };
  window.addEventListener("popstate", onBrowserMove);
  window.addEventListener("hashchange", onBrowserMove);
}

const COLLECT_URL =
  /^https:\/\/([a-z0-9-]+\.)*(google-analytics\.com|analytics\.google\.com)\/g\/collect/;

/**
 * Takes out every count that isn't on the allowed list. Google sends one count in the
 * address, or several as separate lines in the body. Returns null when nothing is left.
 */
function keepAllowedCounts(url: string, body: unknown): { body?: string } | null {
  const single = new URL(url).searchParams.get("en");
  if (single && !ALLOWED_EVENTS.has(single)) return null;
  if (body == null || body === "") return single ? {} : null;
  if (typeof body !== "string") return null;
  const lines = body.split("\n").filter((line) => {
    const name = new URLSearchParams(line).get("en");
    return !name || ALLOWED_EVENTS.has(name);
  });
  if (!single && !lines.some((line) => line.trim())) return null;
  return { body: lines.join("\n") };
}

// True only while the visitor's Accept is in effect. After Withdraw, every count is dropped,
// including any Google's tag queued a moment earlier and tries to send afterwards.
let countsAllowed = false;

/** Puts the allowed-counts check in front of the two ways Google's tag sends counts. */
function filterOutgoingCounts() {
  const realFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (!COLLECT_URL.test(url)) return realFetch(input, init);
    const kept = countsAllowed ? keepAllowedCounts(url, init?.body) : null;
    if (!kept) return Promise.resolve(new Response(null, { status: 204 }));
    return realFetch(input, { ...init, body: kept.body });
  };
  if (navigator.sendBeacon) {
    const realBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = (url, data) => {
      const href = String(url);
      if (!COLLECT_URL.test(href)) return realBeacon(url, data);
      const kept = countsAllowed ? keepAllowedCounts(href, data) : null;
      return kept ? realBeacon(url, kept.body) : true;
    };
  }
}

function startAnalytics() {
  setDisabled(false);
  countsAllowed = true;
  if (window.dataLayer) return;
  cleanAddress();
  guardPageChanges();
  filterOutgoingCounts();
  const dataLayer = (window.dataLayer = [] as unknown[]);
  // Google's script only reads this exact arguments format.
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }
  const referrer = safeReferrer();
  // Visit counting only: never ads, ad cookies, or ad profiles.
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  // Never used for ads, and never linked to visitors' Google accounts.
  // (Google only honors these when set one at a time, in this form.)
  gtag("set", "allow_google_signals", false);
  gtag("set", "allow_ad_personalization_signals", false);
  if (referrer) {
    // Google's automatic page view ignores its own referrer settings, so the
    // page itself reports "this site" before Google's script can read it.
    Object.defineProperty(document, "referrer", { configurable: true, get: () => referrer });
  }
  gtag("config", ANALYTICS_ID);
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  script.async = true;
  document.head.appendChild(script);
}

function stopAnalytics() {
  countsAllowed = false;
  setDisabled(true);
  clearAnalyticsCookies();
}

function readChoice() {
  try {
    return localStorage.getItem(CHOICE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(CHOICE_KEY, choice);
  } catch {
    // Without storage the choice only lasts until the next page.
  }
}

function setChoice(choice: Choice) {
  saveChoice(choice);
  if (choice === "decline") stopAnalytics();
  else if (!isPrivatePath(window.location.pathname)) startAnalytics();
  window.dispatchEvent(new Event(CHOICE_CHANGED_EVENT));
}

/**
 * Asks first, and only loads Google Analytics after a visitor chooses Accept. The question
 * sits at the very top of the page, in the page itself, so it never covers the booking form
 * or anything else.
 */
export function Analytics() {
  const [asking, setAsking] = useState(false);
  const [reopened, setReopened] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  // Opened again from the footer: bring the question into view and move focus to it.
  useEffect(() => {
    if (!asking || !reopened || !box.current) return;
    box.current.scrollIntoView({ block: "start" });
    box.current.focus({ preventScroll: true });
  }, [asking, reopened]);

  useEffect(() => {
    if (!ANALYTICS_ID) return;
    const reopen = () => {
      setReopened(true);
      setAsking(true);
    };
    window.addEventListener(OPEN_CHOICE_EVENT, reopen);
    const choice = readChoice();
    if (choice === "decline") clearAnalyticsCookies();
    if (!isPrivatePath(window.location.pathname)) {
      if (choice === "allow") startAnalytics();
      else if (!choice) setAsking(true);
    }
    return () => window.removeEventListener(OPEN_CHOICE_EVENT, reopen);
  }, []);

  if (!asking) return null;

  const choose = (choice: Choice) => {
    setChoice(choice);
    setAsking(false);
    setReopened(false);
  };

  // Accept and Reject look exactly alike, so neither is nudged.
  const choiceButton =
    "min-h-11 flex-1 rounded-full border border-foreground/40 bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:w-32 sm:flex-none";

  return (
    <div
      ref={box}
      tabIndex={-1}
      role="region"
      aria-label="Visit counting choice"
      className="relative z-40 border-b border-border bg-card focus:outline-none"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 lg:flex lg:items-center lg:gap-8">
        <div className="lg:flex-1">
          <p className="font-medium text-foreground">Count your visit?</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{CONSENT_TEXT}</p>
        </div>
        <div className="mt-3 flex gap-3 lg:mt-0">
          <button type="button" onClick={() => choose("allow")} className={choiceButton}>
            Accept
          </button>
          <button type="button" onClick={() => choose("decline")} className={choiceButton}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

/** The footer notice on what's collected, with a way to withdraw or change the choice. */
export function VisitStatisticsNote({ className = "" }: { className?: string }) {
  const [choice, setChoiceState] = useState<string | null>(null);
  const [justWithdrew, setJustWithdrew] = useState(false);

  useEffect(() => {
    const sync = () => setChoiceState(readChoice());
    sync();
    window.addEventListener(CHOICE_CHANGED_EVENT, sync);
    return () => window.removeEventListener(CHOICE_CHANGED_EVENT, sync);
  }, []);

  if (!ANALYTICS_ID) return null;

  const accepted = choice === "allow";

  let status = "";
  if (accepted) status = "You’ve accepted on this browser.";
  else if (justWithdrew)
    status =
      "You’ve withdrawn consent. Counting has stopped, and this site’s Google Analytics cookies were removed from this browser. Visits already counted aren’t deleted.";
  else if (choice === "decline") status = "You’ve rejected visit counting on this browser.";

  const handleClick = () => {
    if (accepted) {
      setChoice("decline");
      setJustWithdrew(true);
    } else {
      setJustWithdrew(false);
      window.dispatchEvent(new Event(OPEN_CHOICE_EVENT));
    }
  };

  return (
    <p className={className}>
      <span className="font-medium text-foreground">Visit counting:</span> {FOOTER_TEXT}{" "}
      {status && <span role="status">{status} </span>}
      <button
        type="button"
        onClick={handleClick}
        className="underline underline-offset-4 transition hover:text-foreground"
      >
        {accepted ? "Withdraw consent" : "Change your choice"}
      </button>
    </p>
  );
}
