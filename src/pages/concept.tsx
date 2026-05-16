import { useEffect, useRef } from "react";

const Concept = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Share your drawings",
      subtitle: "Plans, elevations and details.",
      image: "/floor plan 1.png",
      icons: ["✦", "✦", "✦"],
    },
    {
      number: "02",
      title: "We build your 3D model",
      subtitle: "High-fidelity digital twin of your project.",
      image: "/floorpplan 2.png",
      icons: ["✦", "✦", "✦"],
    },
    {
      number: "03",
      title: "Go live & start selling",
      subtitle: "Buyers explore before you build.",
      image: "/floor plan 3.png",
      icons: ["✦", "✦", "✦"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        /* ── SECTION ── */
        .cp {
          width: 100%;
          background: #efefef;
          position: relative;
        }

        /* ── STICKY WRAPPER ── */
        /* The sticky container holds the background headings fixed */
        .cp-sticky-zone {
          position: relative;
        }

        /* ── STICKY HEADINGS ── */
        .cp-sticky-head {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 6rem;
          pointer-events: none;
          z-index: 1;
        }

        .cp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          margin-bottom: 3rem;
        }

        .cp-eyebrow-star { font-size: 14px; color: #000; }

        .cp-headings {
          width: 100%;
          max-width: 900px;
          padding: 0 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .cp-h-left {
          font-size: clamp(1.6rem, 2.8vw, 2.8rem);
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #000;
          margin: 0;
        }

        .cp-h-serif {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          display: block;
        }

        .cp-h-sans {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          display: block;
        }

        .cp-h-right {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.5rem, 2.6vw, 2.6rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.0;
          color: #000;
          margin: 0;
          text-align: right;
        }

        /* ── CARDS SCROLL LAYER ── */
        /* Sits on top of sticky, pulled up to overlap */
        .cp-cards-layer {
          position: relative;
          z-index: 10;
          margin-top: -100vh; /* overlap the sticky head */
          padding-top: calc(100vh - 60px); /* first card starts near bottom of viewport */
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding-bottom: 6rem;
        }

        /* ── CARD ── */
        .cp-card {
          width: 100%;
          max-width: 480px;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 40px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.04);
          margin-bottom: 20px;
          position: relative;
        }

        .cp-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.1rem 0.7rem;
        }

        .cp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #000;
          letter-spacing: -0.01em;
        }

        .cp-card-icons {
          display: flex;
          gap: 5px;
        }

        .cp-card-icon {
          font-size: 9px;
          color: rgba(0,0,0,0.18);
          line-height: 1;
        }

        /* Image fills the card — no inner box, no background */
        .cp-card-img-wrap {
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cp-card-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .cp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 1.1rem 0.9rem;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .cp-card-subtitle {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 300;
          color: rgba(0,0,0,0.45);
        }

        .cp-card-num {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(0,0,0,0.2);
        }

        .cp-card-action {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1a73e8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .cp-sticky-head { padding-top: 5rem; }
          .cp-headings { flex-direction: column; gap: 0.5rem; padding: 0 1.25rem; }
          .cp-h-right { text-align: left; font-size: clamp(2.4rem, 8vw, 3.5rem); }
          .cp-h-left { font-size: clamp(2.4rem, 8vw, 3.5rem); }
          .cp-card { max-width: calc(100% - 2.5rem); }
          .cp-cards-layer { padding-top: calc(100vh - 40px); padding-bottom: 4rem; }
          .cp-card-img { height: 200px; }
        }
      `}</style>

      <section className="cp" ref={sectionRef}>
        <div className="cp-sticky-zone">

          {/* STICKY BACKGROUND HEADINGS */}
          <div className="cp-sticky-head">
            <p className="cp-eyebrow">
              <span className="cp-eyebrow-star">✦</span>
              From concept to launch
            </p>
            <div className="cp-headings">
              <h2 className="cp-h-left">
                <span className="cp-h-serif">Simple</span>
                <span className="cp-h-sans">&amp; Easy</span>
              </h2>
              <h2 className="cp-h-right">
                3 step<br />process
              </h2>
            </div>
          </div>

          {/* SCROLLING CARDS — flow over the sticky bg */}
          <div className="cp-cards-layer" ref={cardsRef}>
            {steps.map((step) => (
              <div className="cp-card" key={step.number}>
                <div className="cp-card-header">
                  <span className="cp-card-title">{step.title}</span>
                  <div className="cp-card-icons">
                    {step.icons.map((ic, i) => (
                      <span key={i} className="cp-card-icon">{ic}</span>
                    ))}
                  </div>
                </div>

                <div className="cp-card-img-wrap">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="cp-card-img"
                  />
                </div>

                <div className="cp-card-footer">
                  <span className="cp-card-subtitle">{step.subtitle}</span>
                  <span className="cp-card-num">{step.number}</span>
                  {step.number === "01" && (
                    <div className="cp-card-action">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Concept;