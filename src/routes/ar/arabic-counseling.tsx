import { createFileRoute } from "@tanstack/react-router";
import { ArabicPageView } from "@/components/arabic-page";
import { AR_ARABIC_COUNSELING } from "@/content/arabic";

// Arabic version of /arabic-counseling/. DRAFT until Sarah approves (see AR_DRAFT).
export const Route = createFileRoute("/ar/arabic-counseling")({
  component: () => <ArabicPageView page={AR_ARABIC_COUNSELING} />,
});
