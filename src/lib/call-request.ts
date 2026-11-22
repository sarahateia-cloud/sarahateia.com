// Shared by the consultation form and the referral partner form.

// Google Apps Script web app that saves each request to the "Call Requests" Sheet.
export const CALL_REQUEST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxX5Nf0xY_yfHNPQuIbxQ12k9ugFAJbCcNNS_DABaqw4CXt_vH9Mc6R3UnePhyukbHk/exec";

// Cloudflare Turnstile's public site key. The form runs without the spam check while this is empty.
export const TURNSTILE_SITE_KEY: string = "0x4AAAAAAF1wDbU0Wz_KgOYl";
const TURNSTILE_SCRIPT = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

let turnstileLoading: Promise<void> | undefined;

export function loadTurnstile() {
  turnstileLoading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      turnstileLoading = undefined;
      script.remove();
      reject(new Error("The spam check couldn't load."));
    };
    document.head.appendChild(script);
  });
  return turnstileLoading;
}

/** Blank is fine. Anything typed must look like name@example.com, matching what the browser checks. */
export function isValidEmail(value: string) {
  return value === "" || (value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}
