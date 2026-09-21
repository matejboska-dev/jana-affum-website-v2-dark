import { NextResponse } from 'next/server';

const clip = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const esc = (v: string) => v.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));

/** Delivers website enquiries by email through Resend. Without RESEND_API_KEY it answers 501 and the forms fall back to a mailto draft. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'invalid' }, { status: 400 }); }
  if (clip(body.website, 100)) return NextResponse.json({ ok: true }); // honeypot: silently accept bots
  const name = clip(body.name, 120), email = clip(body.email, 254), message = clip(body.message, 3000);
  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'invalid' }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: 'not_configured' }, { status: 501 });

  const topic = clip(body.topic, 80), language = clip(body.language, 20), company = clip(body.company, 160), source = clip(body.source, 40);
  const lines = [['Name', name], ['Email', email], ['Company', company], ['Topic', topic], ['Language', language], ['Page', source]].filter(([, v]) => v);
  const html = `<p>${lines.map(([k, v]) => `<b>${k}:</b> ${esc(v)}`).join('<br>')}</p><p style="white-space:pre-wrap">${esc(message)}</p>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Jana Affum Website <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO || 'janaaffum@gmail.com'],
      reply_to: email,
      subject: `Website enquiry${topic ? `: ${topic}` : ''} — ${name}`,
      html,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
