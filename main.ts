// Entry program for the make.fun bounty "The agent builds a game from one prompt".
//
// The entry itself is a post on X carrying a short video: an AI coding agent
// building a tiny browser game ("Comet Dodge") from a single prompt, ending with
// make.fun's referral end card. This program does the one mechanical job the
// bounty asks of the repository: it hands POST.json — the file naming that X
// post — to the grader by writing it into the output directory.
//
// Nothing about the post is scored here. The house reads the post directly
// from X (its views, likes, reposts, quotes and replies) and scores it there.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/POST.json will be byte for byte this repository's POST.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoDir, 'POST.json');
const target = join(outDir, 'POST.json');

let payload: string;
try {
  payload = readFileSync(source, 'utf8');
} catch (error) {
  console.error(`cannot read ${source}: ${(error as Error).message}`);
  process.exit(1);
}

// The gate only accepts a JSON object, so refuse to hand on a file that is
// not one — a broken POST.json should fail loudly here, not at grading time.
let parsed: unknown;
try {
  parsed = JSON.parse(payload);
} catch (error) {
  console.error(`POST.json is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  console.error('POST.json must be a JSON object with a "url" field');
  process.exit(1);
}
const postUrl = (parsed as Record<string, unknown>).url;
if (
  typeof postUrl !== 'string' ||
  !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\//.test(postUrl)
) {
  console.error('POST.json "url" must be an https://x.com or https://twitter.com post address');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  writeFileSync(target, payload, 'utf8');
} catch (error) {
  console.error(`cannot write ${target}: ${(error as Error).message}`);
  process.exit(1);
}
console.log(`wrote ${target}`);
