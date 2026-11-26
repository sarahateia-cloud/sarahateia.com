import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { ARTICLES, BLOG_POSTS, CITY_PAGES, TOPICS } from "@/content/pages";

export const Route = createFileRoute("/resources/")({
  component: Resources,
});

const LINK_CARD =
  "block rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-cta/50";

function Resources() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-44 max-[340px]:pt-48 pb-20 sm:pt-40">
        <p className="text-sm font-semibold text-clay">Resources</p>
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

        <h2 className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">From the blog</h2>
        <div className="mt-6 space-y-4">
          {BLOG_POSTS.map((post) => (
            <a key={post.path} href={`/${post.path}/`} className={LINK_CARD}>
              <span className="block font-serif text-xl text-foreground">{post.heading}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {post.description}
              </span>
            </a>
          ))}
        </div>

        <h2 className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">Glossary</h2>
        <div className="mt-6">
          <a href="/glossary/" className={LINK_CARD}>
            <span className="block font-serif text-xl text-foreground">
              Counseling words in English and Arabic
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
              Plain-language meanings of words you may hear in counseling.
            </span>
          </a>
        </div>

        <h2 className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">For reflection</h2>
        <div className="mt-6 space-y-4">
          <a href="/resources/calming-gift-guide/" className={LINK_CARD}>
            <span className="block font-serif text-xl text-foreground">
              A counselor’s holiday gift guide
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
              Gifts that go with coping skills, and when to consider counseling.
            </span>
          </a>
          <a href="/resources/self-reflection/" className={LINK_CARD}>
            <span className="block font-serif text-xl text-foreground">
              Quotes, personality types, and cognitive functions
            </span>
            <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
              Just for fun and curiosity. Not scientific and not a diagnosis.
            </span>
          </a>
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

        <h2 className="mt-12 font-serif text-2xl text-foreground sm:text-3xl">Areas I serve</h2>
        <div className="mt-6 space-y-4">
          {CITY_PAGES.map((topic) => (
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
