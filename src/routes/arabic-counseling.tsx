import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { TOPICS } from "@/content/pages";

const page = TOPICS.find((topic) => topic.path === "arabic-counseling")!;

export const Route = createFileRoute("/arabic-counseling")({
  component: () => <ContentPageView page={page} />,
});
