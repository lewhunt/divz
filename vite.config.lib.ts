/// <reference types="vitest" />
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  publicDir: false,
  plugins: [
    cssInjectedByJsPlugin(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "Divz",
      // the proper extensions will be added
      fileName: "divz",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
