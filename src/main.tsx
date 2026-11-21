import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { captureEarlyInput } from "./lib/early-input";
// Fonts are served from this site, not Google, so pages load faster and visitors aren't sent to a third party.
// Fraunces (soft axis) for headings, Atkinson Hyperlegible Next for reading, Noto Naskh for Arabic.
import "@fontsource-variable/fraunces/soft.css";
import "@fontsource-variable/fraunces/soft-italic.css";
import "@fontsource-variable/atkinson-hyperlegible-next/wght.css";
import "@fontsource-variable/atkinson-hyperlegible-next/wght-italic.css";
import "@fontsource/noto-naskh-arabic/arabic-400.css";
import "@fontsource/noto-naskh-arabic/arabic-600.css";
import "./styles.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

const router = getRouter();
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Built pages arrive with their text already in place. Once the route is ready, React takes over
// that same page instead of drawing it again, which keeps phones from stalling on load. Anything
// typed into the booking form meanwhile is copied first, in case React has to redraw part of it.
router.load().then(() => {
  captureEarlyInput();
  if (rootEl.hasChildNodes()) {
    // Tells the router this page was built ahead of time, so it renders the same wrappers as the
    // build did and React can reuse the page as is.
    router.ssr = { manifest: undefined };
    hydrateRoot(rootEl, app);
  } else createRoot(rootEl).render(app);
});
