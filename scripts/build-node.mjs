import { build } from "esbuild";
import { mkdir } from "node:fs/promises";

const outDir = "dist";
await mkdir(outDir, { recursive: true });

await build({
  entryPoints: ["src/cli/index.ts"],
  outfile: `${outDir}/bvg-deamon.js`,
  bundle: true,
  platform: "node",
  target: "node20",
  format: "cjs",
  minify: false,
  sourcemap: "inline",
  legalComments: "none",
  logLevel: "info",
});

console.log(`built ${outDir}/bvg-deamon.js`);
