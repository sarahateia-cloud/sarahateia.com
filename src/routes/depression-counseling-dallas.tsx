import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { TOPICS } from "@/content/pages";

const page = TOPICS.find((topic) => topic.path === "depression-counseling-dallas")!;

export const Route = createFileRoute("/depression-counseling-dallas")({
  component: () => <ContentPageView page={page} />,
});
