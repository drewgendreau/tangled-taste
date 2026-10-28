// Receives the Feedback form (POST /api/feedback), keeps it in the D1 database and, when the secrets are set,
// emails a notification. Nothing about the visitor's network address is stored.
const CATEGORIES = ['bug', 'idea', 'other'];
const LIMITS = { name: 100, email: 200, message: 5000 };
const MAX_PER_MINUTE = 30; // a global flood guard, on top of Cloudflare's own protections

const json = (body, status, headers) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...headers } });

function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim());
  const ok = allowed.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  return ok ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' } : { Vary: 'Origin' };
}

const clean = (v, max) => (typeof v === 'string' ? v.replace(/\r\n/g, '\n').trim().slice(0, max) : '');

async function notify(env, row) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_TO || !env.NOTIFY_FROM) return;
  const lines = [`Category: ${row.category}`, `Name: ${row.name || '(none)'}`, `Email: ${row.email || '(none)'}`, '', row.message];
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.NOTIFY_FROM, to: [env.NOTIFY_TO], reply_to: row.email || undefined, subject: `Tangled Taste feedback (${row.category})`, text: lines.join('\n') }),
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);
    if (url.pathname !== '/api/feedback') return json({ error: 'Not found' }, 404, cors);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'Use POST' }, 405, cors);
    if (!cors['Access-Control-Allow-Origin']) return json({ error: 'Origin not allowed' }, 403, cors);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'That did not look like a feedback form.' }, 400, cors); }
    if (clean(body.website, 200)) return json({ ok: true }, 200, cors); // the hidden honeypot field: a bot filled it in, so pretend it worked

    const row = {
      category: CATEGORIES.includes(body.category) ? body.category : 'other',
      name: clean(body.name, LIMITS.name),
      email: clean(body.email, LIMITS.email),
      message: clean(body.message, LIMITS.message),
      user_agent: (request.headers.get('User-Agent') || '').slice(0, 300),
    };
    if (!row.message) return json({ error: 'Please write some feedback first.' }, 400, cors);
    if (row.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) return json({ error: 'That email address does not look right (or leave it blank).' }, 400, cors);

    const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM feedback WHERE created_at > strftime('%Y-%m-%dT%H:%M:%SZ', 'now', '-1 minute')").first();
    if (recent && recent.n >= MAX_PER_MINUTE) return json({ error: 'Lots of feedback right now. Please try again in a minute.' }, 429, cors);

    await env.DB.prepare('INSERT INTO feedback (category, name, email, message, user_agent) VALUES (?, ?, ?, ?, ?)')
      .bind(row.category, row.name || null, row.email || null, row.message, row.user_agent).run();
    ctx.waitUntil(notify(env, row).catch(() => {})); // the feedback is already saved; a failed email changes nothing
    return json({ ok: true }, 200, cors);
  },
};
