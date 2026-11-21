import { createFileRoute } from "@tanstack/react-router";
import { ArabicPageView } from "@/components/arabic-page";
import { AR_HOME } from "@/content/arabic";

// Arabic home page, including About and Contact. DRAFT until Sarah approves (see AR_DRAFT).
export const Route = createFileRoute("/ar/")({
  component: () => <ArabicPageView page={AR_HOME} />,
});
