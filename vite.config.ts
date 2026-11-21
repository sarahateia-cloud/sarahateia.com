import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  // Vercel Web Analytics only works on Vercel, which sets VERCEL=1 while it builds. The live
  // site on GitHub Pages is built without it, so the script never loads there.
  define: {
    __VERCEL_ANALYTICS__: JSON.stringify(process.env.VERCEL === "1"),
  },
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 8080,
    strictPort: false,
    host: true,
  },
});
