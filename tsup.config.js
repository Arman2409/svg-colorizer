import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ["./index.ts"],
    outDir: "./dist",
    splitting: true,
    dts: true,
    clean: true,
    format: ["cjs", "esm"]
})