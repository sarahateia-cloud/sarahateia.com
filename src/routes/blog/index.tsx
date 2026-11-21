import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { BLOG_POSTS } from "@/content/pages";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});

const LINK_CARD =
  "block rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-cta/50";

function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-32 max-[340px]:pt-36 pb-20 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
            Home
          </a>
        </nav>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Blog
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Your genes aren’t your destiny.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Plain-language articles on how genes, stress and the body shape mental health, and what
          helps no matter what your DNA says. Written by Sarah Ateia, LPC Associate, supervised by
          Don Zablosky, LPC-S. For education only, not medical advice.
        </p>

        <div className="mt-10 space-y-4">
          {BLOG_POSTS.map((post) => (
            <a key={post.path} href={`/${post.path}/`} className={LINK_CARD}>
              <span className="block font-serif text-xl text-foreground">{post.heading}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
          Looking for practical guides on starting counseling? See{" "}
          <a href="/resources/" className="underline underline-offset-4">
            all resources
          </a>
          ,{" "}
          <a href="/anxiety-therapy-dallas/" className="underline underline-offset-4">
            anxiety therapy in Dallas
          </a>
          , and{" "}
          <a href="/depression-counseling-dallas/" className="underline underline-offset-4">
            depression counseling in Dallas
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
