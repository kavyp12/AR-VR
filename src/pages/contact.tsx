import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Residential Tower",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const projectTypes = [
    "Residential Tower",
    "Luxury Apartments",
    "Township",
    "Commercial",
    "Sales Gallery",
    "International Launch",
  ];

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        .cn-page {
          background: #ffffff;
          color: #000;
          min-height: 100vh;
          padding-top: 76px;
        }

        /* ── HERO ── */
        .cn-hero {
          position: relative;
          padding: 6rem 2.5rem 4rem;
          max-width: 1600px;
          margin: 0 auto;
          border-bottom: 2px solid #000;
        }

        .cn-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
          mask-image: linear-gradient(to bottom, #000 30%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, #000 30%, transparent 100%);
        }

        .cn-hero-tag {
          position: relative;
          z-index: 1;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #000;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
        }
        .cn-hero-tag::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: #000;
        }

        .cn-hero-h1 {
          position: relative;
          z-index: 1;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 8.5vw, 9rem);
          line-height: 0.9;
          letter-spacing: -0.035em;
          color: #000;
          text-transform: uppercase;
          margin: 0;
        }
        .cn-hero-h1-line2 {
          display: block;
          color: transparent;
          -webkit-text-stroke: 2px #000;
        }

        .cn-hero-sub {
          position: relative;
          z-index: 1;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.65;
          color: #000;
          max-width: 580px;
          margin-top: 2rem;
        }

        .cn-hero-meta {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }
        .cn-meta-pill {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fff;
          background: #000;
          padding: 8px 14px;
          font-weight: 700;
        }
        .cn-meta-pill-outline {
          color: #000;
          background: #fff;
          border: 1.5px solid #000;
        }

        /* ── BODY ── */
        .cn-body {
          max-width: 1600px;
          margin: 0 auto;
          padding: 5rem 2.5rem 7rem;
          display: grid;
          grid-template-columns: minmax(320px, 36%) 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* ── INFO COLUMN ── */
        .cn-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 100px;
        }

        .cn-info-head {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #000;
          font-weight: 700;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cn-info-head::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #000;
        }

        .cn-info-card {
          border: 1.5px solid #000;
          padding: 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          background: #fff;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
          color: #000;
        }
        a.cn-info-card:hover {
          background: #000;
          color: #fff;
        }

        .cn-info-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .cn-info-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        /* OFFICE CARDS */
        .cn-offices {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1.5px solid #000;
        }

        .cn-office {
          padding: 1.25rem;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          position: relative;
          transition: background 0.2s, color 0.2s;
        }
        .cn-office + .cn-office {
          border-left: 1.5px solid #000;
        }
        .cn-office:hover { background: #000; color: #fff; }

        .cn-office-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .cn-office-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .cn-office-addr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
        }

        .cn-socials {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .cn-social {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          color: #000;
          border: 1.5px solid #000;
          padding: 8px 14px;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .cn-social:hover {
          color: #fff;
          background: #000;
        }

        /* ── FORM ── */
        .cn-form {
          background: #fff;
          border: 1.5px solid #000;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          position: relative;
        }

        .cn-form-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 1.25rem;
          border-bottom: 2px solid #000;
        }

        .cn-form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.4rem, 2.4vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #000;
          line-height: 1;
          margin: 0;
        }

        .cn-form-step {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.28em;
          font-weight: 700;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: 1.5px solid #000;
          padding: 6px 12px;
          white-space: nowrap;
        }

        .cn-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .cn-field {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .cn-field-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
          color: #000;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cn-field-num {
          background: #000;
          color: #fff;
          padding: 3px 7px;
          font-size: 9px;
          letter-spacing: 0.15em;
        }

        .cn-input,
        .cn-textarea,
        .cn-select {
          all: unset;
          width: 100%;
          box-sizing: border-box;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #000;
          background: #fff;
          border: 1.5px solid #000;
          padding: 0.9rem 1rem;
          transition: background 0.15s, color 0.15s;
        }
        .cn-input::placeholder,
        .cn-textarea::placeholder {
          color: rgba(0,0,0,0.4);
          font-weight: 400;
        }
        .cn-input:focus,
        .cn-textarea:focus,
        .cn-select:focus {
          background: #000;
          color: #fff;
        }
        .cn-input:focus::placeholder,
        .cn-textarea:focus::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .cn-textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.6;
        }

        .cn-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background-image: linear-gradient(45deg, transparent 50%, #000 50%),
                            linear-gradient(135deg, #000 50%, transparent 50%);
          background-position: calc(100% - 18px) 1.15rem, calc(100% - 12px) 1.15rem;
          background-size: 6px 6px;
          background-repeat: no-repeat;
        }
        .cn-select:focus {
          background-image: linear-gradient(45deg, transparent 50%, #fff 50%),
                            linear-gradient(135deg, #fff 50%, transparent 50%);
          background-position: calc(100% - 18px) 1.15rem, calc(100% - 12px) 1.15rem;
          background-size: 6px 6px;
          background-repeat: no-repeat;
        }
        .cn-select option { background: #fff; color: #000; }

        /* ── SUBMIT ── */
        .cn-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-top: 0.5rem;
          padding-top: 1.5rem;
          border-top: 1.5px solid #000;
          flex-wrap: wrap;
        }

        .cn-disclaimer {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          font-weight: 700;
          max-width: 320px;
          line-height: 1.55;
        }

        .cn-submit {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #fff;
          background: #000;
          border: 1.5px solid #000;
          padding: 16px 32px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          gap: 12px;
          outline: none;
        }
        .cn-submit:hover {
          background: #fff;
          color: #000;
        }
        .cn-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
          background: #000;
          color: #fff;
        }
        .cn-submit:disabled:hover { background: #000; color: #fff; }

        .cn-error {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border: 1.5px solid #000;
          background: #fff;
          margin-top: -0.5rem;
        }
        .cn-error-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          font-weight: 700;
          color: #fff;
          background: #000;
          padding: 4px 8px;
          flex-shrink: 0;
        }
        .cn-error-msg {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #000;
        }

        .cn-submit-arrow {
          width: 16px;
          height: 16px;
          border-top: 2.2px solid currentColor;
          border-right: 2.2px solid currentColor;
          transform: rotate(45deg);
          transition: transform 0.25s;
          flex-shrink: 0;
        }
        .cn-submit:hover .cn-submit-arrow {
          transform: rotate(45deg) translate(3px, -3px);
        }

        /* ── SUCCESS ── */
        .cn-success {
          border: 2px solid #000;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: #fff;
        }
        .cn-success-tag {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #fff;
          background: #000;
          padding: 6px 12px;
          font-weight: 700;
          align-self: flex-start;
        }
        .cn-success-msg {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #000;
          margin: 0;
          text-transform: uppercase;
        }
        .cn-success-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #000;
          line-height: 1.65;
          margin: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .cn-body { grid-template-columns: 1fr; gap: 3rem; }
          .cn-info { position: relative; top: 0; }
        }
        @media (max-width: 600px) {
          .cn-hero { padding: 4rem 1.25rem 3rem; }
          .cn-body { padding: 3rem 1.25rem 4rem; }
          .cn-form { padding: 1.5rem; }
          .cn-form-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .cn-offices { grid-template-columns: 1fr; }
          .cn-office + .cn-office { border-left: none; border-top: 1.5px solid #000; }
          .cn-actions { flex-direction: column; align-items: stretch; }
          .cn-submit { justify-content: center; }
          .cn-form-head { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
        }
      `}</style>

      <Navbar />

      <main className="cn-page">
        {/* HERO */}
        <section className="cn-hero">
          <span className="cn-hero-tag">Contact — 01</span>
          <h1 className="cn-hero-h1">
            Let's build<br />
            <span className="cn-hero-h1-line2">Together.</span>
          </h1>
          <p className="cn-hero-sub">
            Tell us about your project. We'll send back a tailored demo of the
            digital twin within 48 hours.
          </p>
          <div className="cn-hero-meta">
            <span className="cn-meta-pill">Response in 48 hrs</span>
            <span className="cn-meta-pill cn-meta-pill-outline">Free Project Audit</span>
            <span className="cn-meta-pill cn-meta-pill-outline">No Obligation</span>
          </div>
        </section>

        {/* BODY */}
        <section className="cn-body">
          {/* INFO */}
          <aside className="cn-info">
            <p className="cn-info-head">Direct Contact</p>

            <a href="mailto:contact@enhc.tech" className="cn-info-card">
              <span className="cn-info-label">Email</span>
              <span className="cn-info-value">contact@enhc.tech</span>
            </a>

            <a href="tel:+919313153036" className="cn-info-card">
              <span className="cn-info-label">Phone</span>
              <span className="cn-info-value">+91 93131 53036</span>
            </a>

            <p className="cn-info-head" style={{ marginTop: "1rem" }}>Offices</p>

            <div className="cn-offices">
              <div className="cn-office">
                <span className="cn-office-tag">US HQ</span>
                <span className="cn-office-name">New Jersey</span>
                <p className="cn-office-addr">
                  New Jersey,<br />
                  United States
                </p>
              </div>

              <div className="cn-office">
                <span className="cn-office-tag">India</span>
                <span className="cn-office-name">Ahmedabad</span>
                <p className="cn-office-addr">
                  Ahmedabad,<br />
                  Gujarat, India
                </p>
              </div>
            </div>

            <p className="cn-info-head" style={{ marginTop: "1rem" }}>Follow</p>
            <div className="cn-socials">
              <a className="cn-social" href="#">Instagram</a>
              <a className="cn-social" href="#">LinkedIn</a>
              <a className="cn-social" href="#">Behance</a>
            </div>
          </aside>

          {/* FORM */}
          {submitted ? (
            <div className="cn-success">
              <span className="cn-success-tag">Message received — 002</span>
              <p className="cn-success-msg">Thanks, {form.name || "friend"}.</p>
              <p className="cn-success-sub">
                We'll get back at {form.email || "your inbox"} within 48 hours
                with a tailored walkthrough of how the digital twin would work
                for your {form.projectType.toLowerCase()}.
              </p>
            </div>
          ) : (
            <form className="cn-form" onSubmit={onSubmit}>
              <div className="cn-form-head">
                <h2 className="cn-form-title">
                  Tell us about<br />your project.
                </h2>
                <span className="cn-form-step">5 fields · 2 min</span>
              </div>

              <div className="cn-form-grid">
                <div className="cn-field">
                  <label className="cn-field-label" htmlFor="name">
                    <span className="cn-field-num">01</span> Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="cn-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="cn-field">
                  <label className="cn-field-label" htmlFor="email">
                    <span className="cn-field-num">02</span> Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="cn-input"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="cn-field">
                  <label className="cn-field-label" htmlFor="company">
                    <span className="cn-field-num">03</span> Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="cn-input"
                    placeholder="Developer / Agency"
                    value={form.company}
                    onChange={onChange}
                  />
                </div>

                <div className="cn-field">
                  <label className="cn-field-label" htmlFor="projectType">
                    <span className="cn-field-num">04</span> Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="cn-select"
                    value={form.projectType}
                    onChange={onChange}
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="cn-field">
                <label className="cn-field-label" htmlFor="message">
                  <span className="cn-field-num">05</span> Project Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="cn-textarea"
                  placeholder="Floor count, target launch date, scope, and anything else we should know."
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                />
              </div>

              {error && (
                <div className="cn-error" role="alert">
                  <span className="cn-error-tag">Error</span>
                  <span className="cn-error-msg">{error}</span>
                </div>
              )}

              <div className="cn-actions">
                <p className="cn-disclaimer">
                  Response within<br />48 hours · No spam
                </p>
                <button
                  type="submit"
                  className="cn-submit"
                  disabled={sending}
                  aria-busy={sending}
                >
                  {sending ? "Sending…" : "Send Brief"}
                  <span className="cn-submit-arrow" />
                </button>
              </div>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
