const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .ft {
          width: 100%;
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .ft-bg {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .ft-content {
          position: relative;
          z-index: 1;
          max-width: 1500px;
          margin: 0 auto;
          padding: 5rem 2.5rem 0;
        }

        .ft-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .ft-section-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          margin-bottom: 1.25rem;
        }

        .ft-connect-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }

        .ft-connect-email {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.38);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .ft-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: none;
          border-radius: 100px;
          padding: 9px 14px 9px 20px;
          cursor: pointer;
          transition: background 0.2s;
          text-decoration: none;
          margin-bottom: 2.5rem;
        }
        .ft-btn:hover { background: #ddd; }

        .ft-btn-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .ft-btn:hover .ft-btn-circle { transform: translateX(2px); }

        .ft-socials {
          display: flex;
          gap: 12px;
        }

        .ft-soc {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .ft-soc:hover {
          border-color: rgba(255,255,255,0.45);
          color: #fff;
          background: rgba(255,255,255,0.04);
        }

        .ft-offices {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .ft-office-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 0.7rem;
        }

        .ft-office-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          margin-bottom: 0.65rem;
        }

        .ft-office-addr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.32);
          line-height: 1.7;
          margin-bottom: 0.7rem;
        }

        .ft-office-phone {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          margin-bottom: 1.1rem;
        }

        /* ══════════════════════════════════════
           WORDMARK — WATER WAVE FILL EFFECT
           Each letter has two layers:
           [bottom] thin outlined (rest state)
           [top]    bold white solid (clipped by a wave mask that sweeps left→right)
           On hover, a pseudo-element wave sweeps across revealing bold letters
        ══════════════════════════════════════ */

        .ft-wordmark-section {
          padding: 2.5rem 0 0;
          overflow: hidden;
          user-select: none;
          -webkit-user-select: none;
          position: relative;
        }

        .ft-word-row {
          display: flex;
          align-items: baseline;
          line-height: 1;
          position: relative;
        }

        /* Shared font sizing */
        .ft-ltr-bottom,
        .ft-ltr-top {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(5rem, 10.5vw, 13.5rem);
          letter-spacing: -0.035em;
          line-height: 0.88;
          white-space: pre;
        }

        /* LETTER WRAPPER */
        .ft-ltr {
          position: relative;
          display: inline-block;
          line-height: 0.88;
          cursor: default;
        }

        /* REST layer — thin outlined */
        .ft-ltr-bottom {
          display: block;
          font-weight: 300;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
        }

        /* FILL layer — bold solid, sits on top, clipped via clip-path */
        .ft-ltr-top {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          font-weight: 800;
          color: #fff;
          -webkit-text-stroke: 0px transparent;
          /* clip from right: hidden at rest, revealed on hover */
          clip-path: inset(0 100% 0 0);
          transition: clip-path 0.65s cubic-bezier(0.77, 0, 0.18, 1);
        }

        /* Each letter gets a staggered transition-delay so wave sweeps left→right */
        .ft-ltr:nth-child(1)  .ft-ltr-top { transition-delay: 0.00s; }
        .ft-ltr:nth-child(2)  .ft-ltr-top { transition-delay: 0.045s; }
        .ft-ltr:nth-child(3)  .ft-ltr-top { transition-delay: 0.09s; }
        .ft-ltr:nth-child(4)  .ft-ltr-top { transition-delay: 0.135s; }
        .ft-ltr:nth-child(5)  .ft-ltr-top { transition-delay: 0.18s; }
        .ft-ltr:nth-child(6)  .ft-ltr-top { transition-delay: 0.225s; }
        .ft-ltr:nth-child(7)  .ft-ltr-top { transition-delay: 0.27s; }
        .ft-ltr:nth-child(8)  .ft-ltr-top { transition-delay: 0.315s; }
        .ft-ltr:nth-child(9)  .ft-ltr-top { transition-delay: 0.36s; }
        .ft-ltr:nth-child(10) .ft-ltr-top { transition-delay: 0.405s; }
        .ft-ltr:nth-child(11) .ft-ltr-top { transition-delay: 0.45s; }

        /* Also stagger the bottom outline fading out */
        .ft-ltr-bottom {
          transition: opacity 0.4s ease;
        }
        .ft-ltr:nth-child(1)  .ft-ltr-bottom { transition-delay: 0.00s; }
        .ft-ltr:nth-child(2)  .ft-ltr-bottom { transition-delay: 0.045s; }
        .ft-ltr:nth-child(3)  .ft-ltr-bottom { transition-delay: 0.09s; }
        .ft-ltr:nth-child(4)  .ft-ltr-bottom { transition-delay: 0.135s; }
        .ft-ltr:nth-child(5)  .ft-ltr-bottom { transition-delay: 0.18s; }
        .ft-ltr:nth-child(6)  .ft-ltr-bottom { transition-delay: 0.225s; }
        .ft-ltr:nth-child(7)  .ft-ltr-bottom { transition-delay: 0.27s; }
        .ft-ltr:nth-child(8)  .ft-ltr-bottom { transition-delay: 0.315s; }
        .ft-ltr:nth-child(9)  .ft-ltr-bottom { transition-delay: 0.36s; }
        .ft-ltr:nth-child(10) .ft-ltr-bottom { transition-delay: 0.405s; }
        .ft-ltr:nth-child(11) .ft-ltr-bottom { transition-delay: 0.45s; }

        /* ON HOVER — wave sweeps: clip-path goes from "100% right" to "0% right" = fully revealed */
        .ft-wordmark-section:hover .ft-ltr-top {
          clip-path: inset(0 0% 0 0);
        }

        /* outline letters fade slightly as fill comes in */
        .ft-wordmark-section:hover .ft-ltr-bottom {
          opacity: 0.08;
        }

        /* gap between the two words */
        .ft-word-gap { display: inline-block; width: 0.22em; }

        /* ── BOTTOM BAR ── */
        .ft-bar {
          position: relative;
          z-index: 1;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0.75rem 2.5rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ft-bar-copy {
          font-family: 'Space Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.18);
        }

        .ft-bar-privacy {
          font-family: 'Space Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.18);
          text-decoration: none;
          transition: color 0.2s;
        }
        .ft-bar-privacy:hover { color: rgba(255,255,255,0.5); }

        @media (max-width: 900px) {
          .ft-top { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 640px) {
          .ft-content { padding: 4rem 1.25rem 0; }
          .ft-offices { grid-template-columns: 1fr; gap: 2rem; }
          .ft-bar { padding: 0.75rem 1.25rem 1.5rem; flex-direction: column; gap: 0.4rem; }
          .ft-ltr-bottom, .ft-ltr-top { font-size: clamp(2.8rem, 10vw, 5rem); }
        }
      `}</style>

      <footer className="ft">
        <div className="ft-bg" />

        <div className="ft-content">
          <div className="ft-top">

            {/* LEFT */}
            <div>

              <a href="mailto:contact@enhc.tech" className="ft-btn">
                Email Us
                <span className="ft-btn-circle">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>

              <div className="ft-socials">
                <a href="#" className="ft-soc" aria-label="YouTube">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
                  </svg>
                </a>
                <a href="#" className="ft-soc" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="#" className="ft-soc" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="ft-offices">
              <div>
                <p className="ft-office-tag">Headquarters</p>
                <p className="ft-office-name">US Headquarters</p>
                <p className="ft-office-addr">
                  New Jersey,<br />
                  United States
                </p>
                <a href="mailto:contact@enhc.tech" className="ft-btn">
                  Email US Office
                  <span className="ft-btn-circle">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>

              <div>
                <p className="ft-office-tag">Offline</p>
                <p className="ft-office-name">India Office</p>
                <p className="ft-office-addr">
                  Ahmedabad,<br />
                  Gujarat, India
                </p>
                <p className="ft-office-phone">Phone: +91 93131 53036</p>
                <a href="tel:+919313153036" className="ft-btn">
                  Call India Office
                  <span className="ft-btn-circle">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* ── WORDMARK WITH WATER WAVE EFFECT ── */}
          <div className="ft-wordmark-section">
            <div className="ft-word-row">
              {"VIRTUAL".split("").map((char, i) => (
                <span className="ft-ltr" key={`v-${i}`}>
                  <span className="ft-ltr-bottom">{char}</span>
                  <span className="ft-ltr-top">{char}</span>
                </span>
              ))}
              <span className="ft-word-gap" />
              {"GRID".split("").map((char, i) => (
                <span className="ft-ltr" key={`g-${i}`}>
                  <span className="ft-ltr-bottom">{char}</span>
                  <span className="ft-ltr-top">{char}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="ft-bar">
          <span className="ft-bar-copy">© 2026 Virtual Grid. All rights reserved</span>
          <a href="#" className="ft-bar-privacy">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
