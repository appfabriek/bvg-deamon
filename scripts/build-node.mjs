import { build } from "esbuild";
import { mkdir, readFile } from "node:fs/promises";

const outDir = "dist";
await mkdir(outDir, { recursive: true });

// Versie uit package.json halen en inlinen via --define BVG_VERSION,
// zodat de gebundelde exe kan reageren op `--version`. De self-updater
// gebruikt die output om na een swap te verifiëren dat de upgrade
// daadwerkelijk geactiveerd is.
const pkg = JSON.parse(await readFile("package.json", "utf8"));

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
  define: { BVG_VERSION: JSON.stringify(pkg.version) },
});

console.log(`built ${outDir}/bvg-deamon.js (version ${pkg.version})`);
