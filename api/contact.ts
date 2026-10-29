// Vercel serverless function (Node.js runtime, zero extra config/dependencies).
// Receives form submissions from the Contact page and the Project Estimation
// flow and relays them to the team's inbox via the Resend email API.
//
// This file only runs server-side on Vercel (or under `vercel dev` locally) --
// it never ships to the browser, so it is the only safe place to hold the
// Resend API key.
//
// Required environment variable (set in Vercel Project Settings -> Environment
// Variables, and in a local .env.local for `vercel dev` -- NEVER commit it):
//   RESEND_API_KEY     Your Resend API key (keep secret, server-side only).
//
// Optional environment variables:
//   RESEND_FROM_EMAIL  Verified sender, e.g. "Zemprolabs <noreply@zemprolabs.com>".
//                       Defaults to Resend's shared test sender, which can only
//                       deliver to the email address on your Resend account
//                       until you verify your own sending domain.
//   CONTACT_TO_EMAIL   Receiving inbox. Defaults to info@zemprolabs.com.

interface IncomingRequest {
  method?: string;
  body?: unknown;
}

interface OutgoingResponse {
  status: (code: number) => OutgoingResponse;
  json: (body: unknown) => void;
}

export default async function handler(req: IncomingRequest, res: OutgoingResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ message: 'Email service is not configured yet.' });
    return;
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@zemprolabs.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Zemprolabs Website <onboarding@resend.dev>';

  const data = (typeof req.body === 'object' && req.body !== null ? req.body : {}) as Record<string, unknown>;

  const rows = Object.entries(data)
    .filter(([key]) => Boolean(key))
    .map(
      ([key, value]) =>
        `<tr><td style="padding:4px 10px;font-weight:600;border-bottom:1px solid #eee;">${escapeHtml(key)}</td><td style="padding:4px 10px;border-bottom:1px solid #eee;">${escapeHtml(String(value ?? ''))}</td></tr>`
    )
    .join('');

  const submitterName = typeof data.name === 'string' && data.name.trim() ? data.name.trim() : 'Website visitor';
  const submitterEmail = typeof data.email === 'string' && data.email.trim() ? data.email.trim() : undefined;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: submitterEmail,
        subject: `New website submission from ${submitterName}`,
        html: `<table style="font-family:sans-serif;font-size:14px;">${rows}</table>`
      })
    });

    if (!resendResponse.ok) {
      const errorBody = (await resendResponse.json().catch(() => ({}))) as { message?: string };
      res.status(502).json({ message: errorBody.message || 'Resend rejected the request.' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(502).json({ message: 'Could not reach the email service.' });
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return char;
    }
  });
}
