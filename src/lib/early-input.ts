// The built page shows the booking form before the site's script has loaded. When the script
// starts, React draws the page fresh, which would wipe anything a visitor already typed.
// This copies what they typed just before that happens and hands it back to the new form.
// It is kept only in this page's memory: never saved in the browser, sent, or logged.

export const BOOKING_FORM_ATTR = "data-booking-form";

type EarlyInput = { values: Map<string, string>; focused?: string };

let captured: EarlyInput | null = null;

/** Called once, right before the page is redrawn. */
export function captureEarlyInput() {
  const form = document.querySelector<HTMLFormElement>(`form[${BOOKING_FORM_ATTR}]`);
  if (!form) return;
  const values = new Map<string, string>();
  for (const field of form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
    "input[name], textarea[name]",
  )) {
    if (field.type === "hidden" || field.name.startsWith("_")) continue;
    if (field.value) values.set(field.name, field.value);
  }
  const active = document.activeElement;
  const focused =
    active instanceof HTMLElement && form.contains(active)
      ? (active.getAttribute("name") ?? undefined)
      : undefined;
  if (values.size || focused) captured = { values, focused };
}

/** Fills the new form with what was typed early, once, then forgets it. */
export function restoreEarlyInput(form: HTMLFormElement | null) {
  if (!form || !captured) return;
  const { values, focused } = captured;
  captured = null;
  for (const [name, value] of values) {
    const field = form.elements.namedItem(name);
    if (
      (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) &&
      !field.value
    ) {
      field.value = value;
    }
  }
  if (focused) {
    const field = form.elements.namedItem(focused);
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.focus({ preventScroll: true });
      const end = field.value.length;
      field.setSelectionRange?.(end, end);
    }
  }
}
