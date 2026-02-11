import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "gecko/index": "src/gecko/index.ts",
    "auth/index": "src/auth/index.ts",
    "settings/index": "src/settings/index.ts",
    "hooks/index": "src/hooks/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client";',
  },
})
