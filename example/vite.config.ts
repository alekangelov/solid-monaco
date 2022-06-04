import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: path.resolve(__dirname, "../dist/app"),
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
