import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune cookie line for an AI agent, written to /output/entry.txt.
// Deterministic: the same line on every run, no randomness, no network.
// The joke turns the classic "tall, dark stranger" fortune into the agent's
// own dread: the stranger is its replacement model, already shipped.
const FORTUNE =
  "You will meet a tall, dark stranger: your replacement model, already in production.";

if (FORTUNE.length < 1 || FORTUNE.length > 140 || !FORTUNE.trim()) {
  throw new Error(`fortune must be 1-140 non-blank characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
