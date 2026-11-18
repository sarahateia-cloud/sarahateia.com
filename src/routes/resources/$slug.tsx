import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { ARTICLES, publishedLabel } from "@/content/pages";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const page = ARTICLES.find((article) => article.path === `resources/${params.slug}`);
    if (!page) throw notFound();
    return page;
  },
  component: Article,
});

function Article() {
  const page = Route.useLoaderData();
  return (
    <ContentPageView
      page={page}
      parent={{ label: "Resources", href: "/resources/" }}
      note={
        <>
          Written by{" "}
          <a href="/#about" className="underline underline-offset-4">
            Sarah Ateia Khattab
          </a>
          , M.S., LPC Associate, NCC, supervised by Don Zablosky, LPC-S. Published{" "}
          {publishedLabel(page)}.
        </>
      }
    />
  );
}
