// Saves the feedback from the live database as a dated CSV and SQL backup in feedback-export/ (git-ignored),
// so it can be read offline. Needs `npx wrangler login` once.  Usage: pnpm feedback:export
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(ROOT, 'feedback-export');
fs.mkdirSync(out, { recursive: true });
const stamp = new Date().toISOString().slice(0, 10);
const wrangler = (args) => execFileSync('npx', ['-y', 'wrangler@4', ...args], { cwd: path.join(ROOT, 'worker'), encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

const raw = wrangler(['d1', 'execute', 'tangled-feedback', '--remote', '--json', '--command', 'SELECT id, created_at, category, name, email, message FROM feedback ORDER BY id']);
const rows = JSON.parse(raw)[0].results;
const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const cols = ['id', 'created_at', 'category', 'name', 'email', 'message'];
fs.writeFileSync(path.join(out, `feedback-${stamp}.csv`), [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\n'));
wrangler(['d1', 'export', 'tangled-feedback', '--remote', '--output', path.join(out, `feedback-${stamp}.sql`)]);
console.log(`${rows.length} feedback entries saved in feedback-export/ (feedback-${stamp}.csv and .sql)`);
