import { useEffect, useState } from "react";

// Google Analytics measurement ID, like "G-XXXXXXXXXX". Nothing loads or shows while this is empty.
const ANALYTICS_ID: string = "";

const CHOICE_KEY = "analytics-choice";

// Visiting these pages shouldn't be shared with an outside company.
const PRIVATE_PATHS = ["/crisis"];

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function startAnalytics() {
  const dataLayer = (window.dataLayer ??= []);
  // Google's script only reads this exact arguments format.
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", ANALYTICS_ID);
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  script.async = true;
  document.head.appendChild(script);
}

function readChoice() {
  try {
    return localStorage.getItem(CHOICE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(choice: "allow" | "decline") {
  try {
    localStorage.setItem(CHOICE_KEY, choice);
  } catch {
    // Without storage the question simply comes back on the next page.
  }
}

/** Asks first, and only loads Google Analytics after a visitor says yes. */
export function Analytics() {
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    if (!ANALYTICS_ID) return;
    if (PRIVATE_PATHS.some((path) => window.location.pathname.startsWith(path))) return;
    const choice = readChoice();
    if (choice === "allow") startAnalytics();
    else if (!choice) setAsking(true);
  }, []);

  if (!asking) return null;

  const choose = (choice: "allow" | "decline") => {
    saveChoice(choice);
    if (choice === "allow") startAnalytics();
    setAsking(false);
  };

  return (
    <div
      role="region"
      aria-label="Visit statistics choice"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-lg rounded-2xl border border-border bg-card p-5 shadow-lg"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        May I use Google Analytics to count visits and see which pages are useful? Your visit would
        be shared with Google. It’s optional, and the site works the same either way.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose("allow")}
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
        >
          Allow
        </button>
        <button
          type="button"
          onClick={() => choose("decline")}
          className="rounded-full border border-border px-5 py-2 text-sm text-foreground"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
