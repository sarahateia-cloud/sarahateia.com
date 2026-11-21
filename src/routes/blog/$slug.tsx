import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPageView } from "@/components/content-page";
import { publishedLabel } from "@/content/pages";

export const Route = createFileRoute("/blog/$slug")({
  // Post text loads on its own, so other pages don't download every post.
  loader: async ({ params }) => {
    const { BLOG_POSTS } = await import("@/content/pages");
    const page = BLOG_POSTS.find((post) => post.path === `blog/${params.slug}`);
    if (!page) throw notFound();
    return page;
  },
  component: BlogPost,
});

function BlogPost() {
  const page = Route.useLoaderData();
  return (
    <ContentPageView
      page={page}
      parent={{ label: "Blog", href: "/blog/" }}
      note={<>Published {publishedLabel(page)}.</>}
    />
  );
}
