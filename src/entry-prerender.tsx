import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

export { SITE_PAGES } from "./content/pages";

/** Renders one route to HTML at build time, so tools that don't run JavaScript can read the page. */
export async function render(path: string) {
  const router = getRouter();
  router.update({ history: createMemoryHistory({ initialEntries: [path] }) });
  await router.load();
  return renderToString(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
