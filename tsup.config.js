import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["./index.ts"],
    outDir: "./dist",
    splitting: false,
    dts: true,
    format: ["cjs", "esm"]
})