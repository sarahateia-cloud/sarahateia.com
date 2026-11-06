import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ARTICLES, TOPICS } from "@/content/pages";

export const Route = createFileRoute("/resources/")({
  component: Resources,
});

const LINK_CARD =
  "block rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary";

function Resources() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:pt-40">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Resources</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Guides for starting counseling.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Plain-language answers to common questions about counseling in Texas.
        </p>

        <h2 className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">Guides</h2>
        <div className="mt-6 space-y-4">
          {ARTICLES.map((article) => (
            <a key={article.path} href={`/${article.path}/`} className={LINK_CARD}>
              <span className="block font-serif text-xl text-foreground">{article.heading}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {article.description}
              </span>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">Ways to meet</h2>
        <div className="mt-6 space-y-4">
          {TOPICS.map((topic) => (
            <a key={topic.path} href={`/${topic.path}/`} className={LINK_CARD}>
              <span className="block font-serif text-xl text-foreground">{topic.eyebrow}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {topic.intro}
              </span>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
