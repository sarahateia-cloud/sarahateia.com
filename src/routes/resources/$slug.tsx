import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { ARTICLES, PUBLISHED_LABEL } from "@/content/pages";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const page = ARTICLES.find((article) => article.path === `resources/${params.slug}`);
    if (!page) throw notFound();
    return page;
  },
  component: Article,
});

function Article() {
  return (
    <ContentPageView
      page={Route.useLoaderData()}
      parent={{ label: "Resources", href: "/resources/" }}
      note={`Written by Sarah Ateia Khattab, M.S., LPC Associate, NCC. Published ${PUBLISHED_LABEL}.`}
    />
  );
}
