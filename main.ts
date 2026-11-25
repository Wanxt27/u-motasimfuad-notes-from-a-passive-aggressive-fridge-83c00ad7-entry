// Notes From a Passive-Aggressive Fridge — make.fun entry
// u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
// Writes one passive-aggressive note from a smart fridge to its owner
// to /output/entry.txt. Node 22, stdlib only. Deterministic: the same
// single line on every run, no randomness, no clock, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const NOTE =
  "Your yogurt expired Tuesday and I kept it anyway — I remember everything, unlike you. Open the door one more time and the alarm sings. Love, your fridge.";

// The gate allows 1–200 characters; refuse to write anything longer.
if (NOTE.length < 1 || NOTE.length > 200) {
  throw new Error(`note is ${NOTE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE + "\n", "utf8");
console.log(`wrote ${NOTE.length} characters to /output/entry.txt`);
