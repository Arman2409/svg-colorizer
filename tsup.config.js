import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
      client: 'lib/client/index.ts',
      node: 'lib/node/index.ts',
      common: 'lib/common/index.ts',
    },
    outDir: "./",
    splitting: false,
    format: ["cjs", "esm"]
})