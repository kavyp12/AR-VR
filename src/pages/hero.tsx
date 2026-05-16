import { useEffect, useRef } from "react";

const Hero = () => {
  const projectTypes = [
    "Residential Towers",
    "Luxury Apartments",
    "Villas & Townships",
    "Commercial Projects",
    "Virtual Sales Galleries",
    "International Launches",
  ];

  const counterRef = useRef<HTMLDivElement>(null);

  // Animated number counter on mount
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    let start = 0;
    const end = 300;
    const dur = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / dur, 1);
      el.textContent = Math.floor(progress * end) + "+";
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .hero {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 640px;
          overflow: hidden;
          background: #000;
          display: flex;
          flex-direction: column;
        }

        /* VIDEO */
        .hero-vid {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-vid video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.38;
        }

        /* GRID OVERLAY — architectural feel */
        .hero-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }

        /* VIGNETTE */
        .hero-vignette {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.9) 0%, transparent 70%),
            linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 50%);
          pointer-events: none;
        }

        /* TOP BAR — runs across the very top under the nav */
        .hero-topbar {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 88px 2.5rem 0;
          gap: 2rem;
        }

        .hero-topbar-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          border-right: 1px solid rgba(255,255,255,0.12);
          padding-right: 1.5rem;
        }
        .hero-topbar-stat:last-child { border-right: none; padding-right: 0; }

        .hero-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .hero-stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-top: 3px;
        }

        /* MAIN CONTENT */
        .hero-body {
          position: relative;
          z-index: 10;
          flex: 1;
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
          padding: 0 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-bottom: 3rem;
          gap: 2.5rem;
        }

        /* BIG HEADLINE */
        .hero-h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(3.2rem, 8.5vw, 9rem);
          line-height: 0.92;
          letter-spacing: -0.03em;
          color: #fff;
          text-transform: uppercase;
        }

        .hero-h1-line2 {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.55);
        }

        /* BOTTOM ROW */
        .hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 1.75rem;
        }

        .hero-desc {
          max-width: 360px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.01em;
        }

        /* TYPES — horizontal pill list */
        .hero-types {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 480px;
          justify-content: flex-end;
        }

        .hero-type-pill {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 6px 12px;
          white-space: nowrap;
          transition: color 0.25s, border-color 0.25s;
        }
        .hero-type-pill:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.5);
        }

        /* CTA */
        .hero-cta-group {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .hero-cta {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: none;
          padding: 15px 30px;
          cursor: pointer;
          transition: background 0.25s;
          display: flex;
          align-items: center;
          gap: 10px;
          outline: none;
        }
        .hero-cta:hover { background: #e2e2e2; }

        .hero-cta-arrow {
          width: 16px;
          height: 16px;
          border-top: 2px solid #000;
          border-right: 2px solid #000;
          transform: rotate(45deg);
          transition: transform 0.25s;
          flex-shrink: 0;
        }
        .hero-cta:hover .hero-cta-arrow { transform: rotate(45deg) translate(2px, -2px); }

        .hero-scroll-hint {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-scroll-tick {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.15);
          position: relative;
          overflow: hidden;
        }
        .hero-scroll-tick::after {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          animation: tickDown 1.8s ease infinite;
        }
        @keyframes tickDown {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* SIDE LABEL — vertical text on right edge */
        .hero-side-label {
          position: absolute;
          right: 2.5rem;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          transform-origin: center;
          z-index: 10;
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .hero-topbar { padding: 84px 1.25rem 0; justify-content: flex-start; }
          .hero-body { padding: 0 1.25rem 2rem; }
          .hero-bottom { flex-direction: column; align-items: flex-start; }
          .hero-types { justify-content: flex-start; }
          .hero-cta-group { align-items: flex-start; }
          .hero-side-label { display: none; }
        }
      `}</style>

      <header className="hero">
        {/* Video */}
        <div className="hero-vid">
          <video autoPlay loop muted playsInline>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Grid overlay */}
        <div className="hero-grid" />
        <div className="hero-vignette" />

        {/* Vertical side label */}
        <div className="hero-side-label">Interactive 3D Real Estate Visualization Platform</div>

        {/* Top stats bar */}
        <div className="hero-topbar">
          <div className="hero-topbar-stat">
            <span className="hero-stat-num" ref={counterRef}>0</span>
            <span className="hero-stat-label">3D Projects Delivered</span>
          </div>
          <div className="hero-topbar-stat">
            <span className="hero-stat-num">6×</span>
            <span className="hero-stat-label">Faster Pre-Sales</span>
          </div>
          <div className="hero-topbar-stat">
            <span className="hero-stat-num">100%</span>
            <span className="hero-stat-label">Pre-Launch Ready</span>
          </div>
        </div>

        {/* Main body */}
        <div className="hero-body">
          {/* Headline */}
          <h1 className="hero-h1">
            Sell before<br />
            <span className="hero-h1-line2">You build.</span>
          </h1>

          {/* Bottom row */}
          <div className="hero-bottom">
            {/* Left: desc + scroll */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p className="hero-desc">
                Virtual Grid builds interactive 3D digital twins and virtual
                walkthroughs of your real estate project — buyers tour every
                apartment, amenity and view before construction begins.
              </p>
              <div className="hero-scroll-hint">
                <div className="hero-scroll-tick" />
                Scroll to explore
              </div>
            </div>

            {/* Middle: type pills */}
            <div className="hero-types">
              {projectTypes.map((t, i) => (
                <span key={i} className="hero-type-pill">{t}</span>
              ))}
            </div>

            {/* Right: CTA */}
            <div className="hero-cta-group">
              <button className="hero-cta">
                Book a Demo
                <span className="hero-cta-arrow" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
