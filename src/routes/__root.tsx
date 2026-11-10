import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Analytics } from "@/components/analytics";

function NotFoundComponent() {
  return (
    <main id="main" className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-cta px-6 text-sm font-medium text-cta-foreground transition-colors hover:bg-cta-hover"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      {/* The visit counting question sits above the page, never on top of it. The page is
          wrapped so its floating header starts below the question instead of covering it. */}
      <Analytics />
      <div className="relative">
        <Outlet />
      </div>
    </>
  );
}
