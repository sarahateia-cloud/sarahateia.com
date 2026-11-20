import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { TOPICS } from "@/content/pages";

const page = TOPICS.find((topic) => topic.path === "telehealth-counseling-texas")!;

export const Route = createFileRoute("/telehealth-counseling-texas")({
  component: () => <ContentPageView page={page} />,
});
