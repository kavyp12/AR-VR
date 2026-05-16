import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json({ limit: '100kb' }));

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM_NAME = 'ARVR',
  MAIL_TO,
  SERVER_PORT = '3001',
} = process.env;

if (!SMTP_USER || !SMTP_PASS) {
  console.error('[server] Missing SMTP_USER or SMTP_PASS in .env');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST || 'smtp.gmail.com',
  port: Number(SMTP_PORT || 465),
  secure: String(SMTP_SECURE || 'true') === 'true',
  auth: { user: SMTP_USER, pass: SMTP_PASS.replace(/\s+/g, '') },
});

transporter.verify().then(
  () => console.log('[server] SMTP transporter ready'),
  (err) => console.error('[server] SMTP verify failed:', err.message)
);

const escape = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

app.post('/api/contact', async (req, res) => {
  const { name, email, company, projectType, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }
  if (String(name).length > 200 || String(email).length > 200 || String(message).length > 5000) {
    return res.status(400).json({ ok: false, error: 'Field too long.' });
  }

  const subject = `[ARVR] New enquiry — ${name}${projectType ? ` · ${projectType}` : ''}`;

  const html = `
    <div style="font-family:'Helvetica Neue',Arial,sans-serif;color:#0a0a0a;max-width:640px">
      <h2 style="margin:0 0 16px;font-size:20px;letter-spacing:-0.01em">New ARVR contact submission</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:8px 12px;background:#f5f5f5;width:160px"><strong>Name</strong></td>
            <td style="padding:8px 12px;background:#fff">${escape(name)}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5"><strong>Email</strong></td>
            <td style="padding:8px 12px;background:#fff">
              <a href="mailto:${escape(email)}" style="color:#0a0a0a">${escape(email)}</a>
            </td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5"><strong>Company</strong></td>
            <td style="padding:8px 12px;background:#fff">${escape(company || '—')}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5"><strong>Project Type</strong></td>
            <td style="padding:8px 12px;background:#fff">${escape(projectType || '—')}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f5f5;vertical-align:top"><strong>Project Brief</strong></td>
            <td style="padding:8px 12px;background:#fff;white-space:pre-wrap">${escape(message)}</td></tr>
      </table>
      <p style="margin-top:20px;color:#666;font-size:12px">
        Submitted via ARVR contact form · Reply directly to this email to respond.
      </p>
    </div>`;

  const text =
    `New ARVR contact submission\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Company: ${company || '—'}\n` +
    `Project Type: ${projectType || '—'}\n\n` +
    `Project Brief:\n${message}\n`;

  try {
    const info = await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });
    console.log('[server] mail sent:', info.messageId);
    res.json({ ok: true });
  } catch (err) {
    console.error('[server] sendMail failed:', err.message);
    res.status(500).json({ ok: false, error: 'Failed to send message. Please try again.' });
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true }));

const port = Number(SERVER_PORT);
app.listen(port, () => {
  console.log(`[server] listening on http://localhost:${port}`);
});
