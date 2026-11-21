import { createFileRoute } from "@tanstack/react-router";
import { ArabicPageView } from "@/components/arabic-page";
import { AR_ABOUT } from "@/content/arabic";

// Arabic version of /about/. DRAFT until Sarah approves (see AR_DRAFT).
export const Route = createFileRoute("/ar/about")({
  component: () => <ArabicPageView page={AR_ABOUT} />,
});
