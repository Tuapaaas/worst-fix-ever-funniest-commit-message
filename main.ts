// Worst Fix Ever: Funniest Commit Message
// Writes one commit message (<=100 chars) about a fix that made
// everything worse to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "fix: login loop gone — I deleted the login page";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const text = LINE.trim();
  if (text.length < 1 || text.length > 100) {
    throw new Error(`entry must be 1-100 chars, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

main();
