import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  // build: {
  //   rollupOptions: {
  //     external: [
  //       "chart.js",
  //       "react-chartjs-2",
  //       "chartjs-adapter-date-fns",
  //       "date-fns",
  //     ], // Externalize chart.js to prevent bundling
  //   },
  // },
});
