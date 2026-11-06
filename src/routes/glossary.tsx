import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { GLOSSARY } from "@/content/glossary";

export const Route = createFileRoute("/glossary")({
  component: Glossary,
});

function Glossary() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a href="/" className="underline-offset-4 hover:text-foreground hover:underline">
            Home
          </a>
          {" / "}
          <a
            href="/resources/"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Resources
          </a>
        </nav>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">Glossary</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Counseling words in English and Arabic.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Plain-language meanings of words you may hear in counseling, each with its Arabic term.
        </p>
        <dl className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {GLOSSARY.map(({ term, arabic, definition }) => (
            <div key={term} className="px-6 py-5 sm:px-8">
              <dt className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="font-serif text-xl text-foreground">{term}</span>
                <span lang="ar" dir="rtl" className="text-lg text-taupe">
                  {arabic}
                </span>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{definition}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          These are general explanations, not medical advice or a diagnosis. If you’re in crisis,
          call or text 988, or{" "}
          <a href="/crisis/" className="underline underline-offset-4">
            see local 24/7 crisis lines
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
