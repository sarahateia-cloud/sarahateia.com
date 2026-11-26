import { createFileRoute } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { TOPICS } from "@/content/pages";

const page = TOPICS.find((topic) => topic.path === "narcissistic-abuse-recovery")!;

export const Route = createFileRoute("/narcissistic-abuse-recovery")({
  component: () => <ContentPageView page={page} />,
});
