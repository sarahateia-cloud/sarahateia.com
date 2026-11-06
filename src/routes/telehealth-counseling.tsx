import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { TOPICS } from "@/content/pages";

const page = TOPICS.find((topic) => topic.path === "telehealth-counseling")!;

export const Route = createFileRoute("/telehealth-counseling")({
  component: () => <ContentPageView page={page} />,
});
