import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { TOPICS } from "@/content/pages";

const page = TOPICS.find((topic) => topic.path === "trauma-therapy-dallas")!;

export const Route = createFileRoute("/trauma-therapy-dallas")({
  component: () => <ContentPageView page={page} />,
});
