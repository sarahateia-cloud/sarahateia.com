import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { CITY_PAGES } from "@/content/pages";

const page = CITY_PAGES.find((city) => city.path === "counseling-las-colinas-tx")!;

export const Route = createFileRoute("/counseling-las-colinas-tx")({
  component: () => <ContentPageView page={page} />,
});
