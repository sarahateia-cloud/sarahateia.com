import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { captureEarlyInput } from "./lib/early-input";
// Fonts are served from this site, not Google, so pages load faster and visitors aren't sent to a third party.
import "@fontsource/cormorant-garamond/latin-300.css";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/cormorant-garamond/latin-300-italic.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
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
