import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { CITY_PAGES } from "@/content/pages";

const page = CITY_PAGES.find((city) => city.path === "counseling-coppell-tx")!;

export const Route = createFileRoute("/counseling-coppell-tx")({
  component: () => <ContentPageView page={page} />,
});
