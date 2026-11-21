import { createFileRoute, redirect } from "@tanstack/react-router";

// Old address. The built site serves a redirect page here (see scripts/postbuild.mjs); this
// covers in-app navigation to the old link.
export const Route = createFileRoute("/telehealth-counseling")({
  beforeLoad: () => {
    throw redirect({ to: "/telehealth-counseling-texas", statusCode: 301 });
  },
});
