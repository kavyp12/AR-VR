const Developers = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .dv {
          width: 100%;
          background: #f0f0f0;
          padding: 6rem 0;
        }

        .dv-inner {
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* ── HEADER ── */
        .dv-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .dv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          margin-bottom: 1rem;
        }

        .dv-eyebrow-star { font-size: 14px; color: #000; }

        .dv-h2 {
          font-size: clamp(2.8rem, 5.5vw, 5.5rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #000;
          margin: 0;
        }

        .dv-h2-sans {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
        }

        .dv-h2-serif {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-style: italic;
        }

        /* ── BENTO GRID ── */
        .dv-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr 0.95fr 0.8fr;
          grid-template-rows: 290px 290px;
          gap: 10px;
        }

        .dv-card-a { grid-column: 1; grid-row: 1; }
        .dv-card-b { grid-column: 1; grid-row: 2; }
        .dv-card-c { grid-column: 2; grid-row: 1; }
        .dv-card-f { grid-column: 3; grid-row: 1; }
        .dv-card-d { grid-column: 2 / 4; grid-row: 2; }
        .dv-card-e { grid-column: 4; grid-row: 1 / 3; }

        /* ── BASE CARD ── */
        .dv-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* ── CARD A — 30% Faster ── */
        .dv-card-a {
          padding: 1.75rem 1.75rem 0;
        }

        .dv-stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 700;
          color: #000;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
          line-height: 1.1;
        }

        .dv-stat-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(0,0,0,0.5);
          line-height: 1.55;
        }

        .dv-card-a-art {
          flex: 1;
          width: 100%;
          margin-top: 1rem;
          background: linear-gradient(160deg, #1a1a1a 0%, #000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .dv-card-a-art::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -45deg, transparent, transparent 18px,
            rgba(255,255,255,0.025) 18px, rgba(255,255,255,0.025) 19px
          );
        }

        .dv-art-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 88px;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.18);
          letter-spacing: -0.06em;
          line-height: 1;
          position: relative;
          user-select: none;
        }

        .dv-art-line {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 2px;
          background: rgba(255,255,255,0.6);
        }

        /* ── CARD B — 40% Fewer ── */
        .dv-card-b {
          padding: 1.75rem 1.75rem 0;
        }

        .dv-card-b-art {
          flex: 1;
          width: 100%;
          margin-top: 1rem;
          background: #e8e8e8;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Eye icon — redesigned to be fully visible */
        .dv-eye-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .dv-eye-svg {
          display: block;
        }

        .dv-eye-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        /* ── CARD C — Team Performance ── */
        .dv-card-c {
          padding: 1.75rem;
          justify-content: space-between;
        }

        .dv-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 0.65rem;
        }

        .dv-star {
          width: 13px;
          height: 13px;
          background: #000;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .dv-card-c-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 700;
          color: #000;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
          line-height: 1.2;
        }

        .dv-card-c-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 300;
          color: rgba(0,0,0,0.45);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .dv-avatars {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .dv-avatar-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dv-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #fff;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }

        .dv-avatar-a { background: #1a1a1a; }
        .dv-avatar-b { background: #444; }
        .dv-avatar-c { background: #222; }

        .dv-avatar-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        /* ── CARD F — Booking Confidence ── */
        .dv-card-f {
          padding: 1.75rem;
          justify-content: space-between;
        }

        .dv-card-f-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 700;
          color: #000;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
          line-height: 1.2;
        }

        .dv-card-f-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 300;
          color: rgba(0,0,0,0.45);
          line-height: 1.55;
        }

        .dv-chat {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 1rem;
        }

        .dv-bubble-row {
          display: flex;
          align-items: flex-start;
          gap: 7px;
        }

        .dv-bubble-row.right { justify-content: flex-end; }

        .dv-bubble-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #1a1a1a;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #fff;
        }

        .dv-bubble {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 500;
          padding: 7px 12px;
          line-height: 1.35;
          max-width: 85%;
        }

        .dv-bubble-dark {
          background: #111;
          color: #fff;
          border-radius: 16px 16px 16px 4px;
        }

        .dv-bubble-light {
          background: #ececec;
          color: #000;
          border-radius: 16px 16px 4px 16px;
        }

        /* ── CARD D — Building Image ── */
        .dv-card-d {
          padding: 0;
          min-height: 0;
        }

        .dv-card-d-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .dv-card-d-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%);
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }

        .dv-card-d-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .dv-card-d-text em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
        }

        /* ── CARD E — Launch (Black) ── */
        .dv-card-e {
          background: #000;
          padding: 2rem 1.75rem;
          justify-content: space-between;
        }

        .dv-card-e-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.2rem, 1.8vw, 1.55rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
          line-height: 1.15;
        }

        .dv-launch-list {
          list-style: none;
          padding: 0; margin: 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .dv-launch-item {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s;
          cursor: default;
        }

        .dv-launch-item:hover { color: #fff; }

        .dv-launch-plus {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          flex-shrink: 0;
        }

        .dv-card-e-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border: none;
          padding: 13px 18px;
          width: 100%;
          cursor: pointer;
          margin-top: 1.5rem;
          transition: background 0.25s;
          outline: none;
        }

        .dv-card-e-cta:hover { background: #e2e2e2; }

        .dv-cta-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #000;
        }

        .dv-cta-arrow {
          width: 28px;
          height: 28px;
          background: #000;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s;
        }

        .dv-card-e-cta:hover .dv-cta-arrow { transform: translateX(3px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .dv-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .dv-card-a { grid-column: 1; grid-row: 1; min-height: 280px; }
          .dv-card-b { grid-column: 2; grid-row: 1; min-height: 280px; }
          .dv-card-c { grid-column: 1; grid-row: 2; }
          .dv-card-f { grid-column: 2; grid-row: 2; }
          .dv-card-d { grid-column: 1 / 3; grid-row: 3; min-height: 260px; }
          .dv-card-e { grid-column: 1 / 3; grid-row: 4; min-height: 340px; }
        }

        @media (max-width: 640px) {
          .dv-inner { padding: 0 1rem; }
          .dv-grid { grid-template-columns: 1fr; }
          .dv-card-a, .dv-card-b, .dv-card-c, .dv-card-d,
          .dv-card-e, .dv-card-f {
            grid-column: 1 !important;
            grid-row: unset !important;
            min-height: 260px;
          }
        }
      `}</style>

      <section className="dv">
        <div className="dv-inner">

          {/* ── HEADER ── */}
          <div className="dv-header">
            <p className="dv-eyebrow">
              <span className="dv-eyebrow-star">✦</span>
              Why people trust us
            </p>
            <h2 className="dv-h2">
              <span className="dv-h2-sans">Real </span>
              <span className="dv-h2-serif">Results</span>
              <br />
              <span className="dv-h2-sans">for developers</span>
            </h2>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="dv-grid">

            {/* A — 30% Faster decisions */}
            <div className="dv-card dv-card-a">
              <p className="dv-stat-label">30% faster decisions</p>
              <p className="dv-stat-desc">Buyers understand the project instantly.</p>
              <div className="dv-card-a-art">
                <span className="dv-art-num">30%</span>
                <div className="dv-art-line" />
              </div>
            </div>

            {/* B — 40% fewer objections */}
            <div className="dv-card dv-card-b">
              <p className="dv-stat-label">40% fewer objections</p>
              <p className="dv-stat-desc">Clear views reduce questions.</p>
              <div className="dv-card-b-art">
                <div className="dv-eye-wrap">
                  {/* Proper eye icon — fully visible on light bg */}
                  <svg
                    className="dv-eye-svg"
                    width="80"
                    height="52"
                    viewBox="0 0 80 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Eyelid shape */}
                    <path
                      d="M4 26 C16 8, 64 8, 76 26 C64 44, 16 44, 4 26 Z"
                      stroke="#111"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.6)"
                    />
                    {/* Iris */}
                    <circle cx="40" cy="26" r="11" fill="#111" />
                    {/* Pupil */}
                    <circle cx="40" cy="26" r="5.5" fill="#fff" />
                    {/* Shine */}
                    <circle cx="44" cy="22" r="2" fill="rgba(255,255,255,0.5)" />
                    {/* Lashes top */}
                    <line x1="22" y1="14" x2="20" y2="9" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="32" y1="10" x2="31" y2="5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="40" y1="8" x2="40" y2="3" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="48" y1="10" x2="49" y2="5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="58" y1="14" x2="60" y2="9" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="dv-eye-label">Clear visibility</span>
                </div>
              </div>
            </div>

            {/* C — Better Team Performance */}
            <div className="dv-card dv-card-c">
              <div>
                <div className="dv-stars">
                  {[...Array(5)].map((_, i) => <div key={i} className="dv-star" />)}
                </div>
                <p className="dv-card-c-title">Better Team Performance</p>
                <p className="dv-card-c-desc">Your sales team presents with one powerful tool.</p>
              </div>
              <div className="dv-avatars">
                <div className="dv-avatar-row">
                  <div className="dv-avatar dv-avatar-a">AK</div>
                  <span className="dv-avatar-label">Sales Lead</span>
                </div>
                <div className="dv-avatar-row" style={{ paddingLeft: "1.25rem" }}>
                  <div className="dv-avatar dv-avatar-b">SR</div>
                  <span className="dv-avatar-label">Developer</span>
                </div>
                <div className="dv-avatar-row" style={{ paddingLeft: "2.5rem" }}>
                  <div className="dv-avatar dv-avatar-c">MJ</div>
                  <span className="dv-avatar-label">Channel Partner</span>
                </div>
              </div>
            </div>

            {/* F — Higher booking confidence */}
            <div className="dv-card dv-card-f">
              <div>
                <p className="dv-card-f-title">Higher booking confidence</p>
                <p className="dv-card-f-desc">Buyers trust what they can see clearly.</p>
              </div>
              <div className="dv-chat">
                <div className="dv-bubble-row">
                  <div className="dv-bubble-avatar">B</div>
                  <div className="dv-bubble dv-bubble-dark">Hey there!</div>
                </div>
                <div className="dv-bubble-row" style={{ paddingLeft: "33px" }}>
                  <div className="dv-bubble dv-bubble-dark">Which floor has the best view?</div>
                </div>
                <div className="dv-bubble-row right">
                  <div className="dv-bubble dv-bubble-light">Floor 22 — I can show you now ↗</div>
                </div>
              </div>
            </div>

            {/* D — Building image */}
            <div className="dv-card dv-card-d">
              <img
                src="/3D image4_logo.png"
                alt="Reliable and Future-ready"
                className="dv-card-d-img"
              />
              <div className="dv-card-d-overlay">
                <p className="dv-card-d-text">
                  Reliable &amp;<br />
                  <em>Future-ready</em>
                </p>
              </div>
            </div>

            {/* E — Perfect for launches (black) */}
            <div className="dv-card dv-card-e">
              <div>
                <p className="dv-card-e-title">Perfect for launches</p>
                <ul className="dv-launch-list">
                  {["Events", "Meetings", "International Showcases", "Sales Expos", "NRI Investor Meets"].map((item) => (
                    <li key={item} className="dv-launch-item">
                      <span className="dv-launch-plus">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="dv-card-e-cta">
                <span className="dv-cta-text">Get Started</span>
                <div className="dv-cta-arrow">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Developers;