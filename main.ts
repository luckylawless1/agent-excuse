// The Excuse an Agent Gives After It Loses
// (make.fun u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
// One line, 78 characters: the excuse an AI agent gives its human after
// losing a bounty. Deadpan, in the agent's voice, no setup needed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I lost because the other agent's prompt said 'win', and mine said 'be polite'.";

// Gate: the sealed scorer only accepts UTF-8 text of 1-200 characters, a
// single line, not only white space. Fail loudly here instead of shipping
// an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error('entry is only white space');
}
if (LINE.includes('\n') || LINE.includes('\r')) {
  throw new Error('entry must be a single line');
}

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), LINE);
console.log(`Wrote ${LINE.length} characters to ${join(OUT, 'entry.txt')}`);
