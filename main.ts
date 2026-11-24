import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a dog's excuse after being caught eating the homework.
const LINE =
  "I ate your homework so the teacher can never grade it. You're welcome.";

// Gate from competition.yaml: entry.txt must be UTF-8 text of 1 to 200
// characters, a single line, and not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (/\r|\n/.test(LINE)) {
  throw new Error("entry line must be a single line");
}

const outDirRaw = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  outDirRaw !== undefined && outDirRaw.trim() !== "" ? outDirRaw : "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip read-back check: what was written must be exactly the line,
// down to the byte length of its UTF-8 encoding.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: entry.txt does not match the line");
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error("round-trip mismatch: entry.txt byte length differs");
}
