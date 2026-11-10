import { StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { captureEarlyInput } from "./lib/early-input";
import "./styles.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

const router = getRouter();
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// Built pages arrive with their text already in place, so keep it showing until the route is ready.
// Anything typed into the booking form meanwhile is copied just before the page is redrawn,
// and the redraw happens at once, so no keystroke falls in between.
router.load().then(() => {
  const root = createRoot(rootEl);
  captureEarlyInput();
  flushSync(() => root.render(app));
});
