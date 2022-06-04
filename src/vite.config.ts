import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
import dts from "vite-plugin-dts";
import depsExternal from "rollup-plugin-node-externals";

export default defineConfig({
  plugins: [solidPlugin(), dts()],
  build: {
    outDir: path.resolve(__dirname, "../dist/lib"),
    lib: {
      entry: path.resolve(__dirname, "/index.ts"),
      name: "Solid Monaco",
      fileName: (format) => `index.${format}.js`,
    },
    target: "esnext",
    polyfillDynamicImport: false,
    emptyOutDir: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      plugins: [
        depsExternal({
          devDeps: false,
          peerDeps: false,
          builtins: false,
          exclude: ["monaco-editor"],
        }),
      ],
      external: ["monaco-editor", "solid-js"],
      treeshake: true,
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "monaco-editor": "monaco",
          "solid-js": "solid",
        },
      },
    },
  },
});
