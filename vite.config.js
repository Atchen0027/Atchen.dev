import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/atchen-landing-page/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        tutorials: path.resolve(__dirname, "public/tutorials.html"),
      },
    },
  },
});
