import { useEffect, useState } from "react";

// Light, dark or "Auto" (follow the device). The choice is kept only on this device
// (localStorage "sa-theme") and is never sent anywhere. index.html applies it before the first
// paint, so the page doesn't flash the wrong colors.
export const THEME_KEY = "sa-theme";
type Theme = "auto" | "light" | "dark";
const OPTIONS: { value: Theme; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "light" || stored === "dark" ? stored : "auto";
  } catch {
    return "auto";
  }
}

export function ThemeSwitch() {
  // Server render and first client render both show "Auto"; the real choice loads after mount.
  const [theme, setTheme] = useState<Theme>("auto");
  useEffect(() => setTheme(readTheme()), []);

  const choose = (next: Theme) => {
    setTheme(next);
    const root = document.documentElement;
    if (next === "auto") delete root.dataset.theme;
    else root.dataset.theme = next;
    try {
      if (next === "auto") localStorage.removeItem(THEME_KEY);
      else localStorage.setItem(THEME_KEY, next);
    } catch {
      // Private mode or blocked storage: the choice still applies to this page.
    }
  };

  return (
    <fieldset className="mt-4">
      <legend className="text-xs">Colors</legend>
      <div className="theme-switch mt-2" role="radiogroup" aria-label="Colors">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={theme === option.value}
            onClick={() => choose(option.value)}
            onKeyDown={(event) => {
              if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
              event.preventDefault();
              const step = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
              const index = OPTIONS.findIndex((o) => o.value === theme);
              const next = OPTIONS[(index + step + OPTIONS.length) % OPTIONS.length].value;
              choose(next);
              const group = event.currentTarget.parentElement;
              (group?.querySelector(`[data-value="${next}"]`) as HTMLButtonElement | null)?.focus();
            }}
            tabIndex={theme === option.value ? 0 : -1}
            data-value={option.value}
            className="theme-switch-option"
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
