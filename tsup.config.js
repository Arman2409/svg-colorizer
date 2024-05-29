import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ["./index.ts"],
    outDir: "./",
    splitting: false,
    dts: true,
    format: ["cjs", "esm"]
})