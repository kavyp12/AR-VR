import React, { useEffect, useState, useRef } from "react";

/*
  SCROLL LOGIC EXPLANATION:
  - The horizontal section has height = slideCount * 100vh + 100vh
  - As the user scrolls through those "extra" vh units, scrollProgress goes 0→1
  - The sticky div locks at top:0 and shows one screen-height always
  - translateX moves the track by scrollProgress * maxTranslate
  - maxTranslate = trackScrollWidth - viewportWidth (exact, no overshoot)
*/

const Features = () => {
  // ── Section 1: parallax cards ──
  const [cardsProgress, setCardsProgress] = useState(0);
  const cardsSectionRef = useRef<HTMLElement>(null);

  // ── Section 2: horizontal scroll ──
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const horizontalContainerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Measure how far the track extends beyond the viewport
    const measure = () => {
      if (trackRef.current) {
        const trackW = trackRef.current.scrollWidth;
        const vw = window.innerWidth;
        setMaxTranslate(Math.max(0, trackW - vw));
      }
    };

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    // Delay so images have rendered
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);

    const onScroll = () => {
      const wh = window.innerHeight;

      // ── Cards parallax ──
      if (cardsSectionRef.current) {
        const r = cardsSectionRef.current.getBoundingClientRect();
        if (r.top < wh && r.bottom > 0) {
          const p = 1 - r.top / wh;
          setCardsProgress(Math.min(Math.max(p, 0), 1.5));
        }
      }

      // ── Horizontal scroll progress ──
      if (horizontalContainerRef.current) {
        const { top, height } = horizontalContainerRef.current.getBoundingClientRect();
        // totalScrollDistance = height of section minus 1 screen
        // (the 1 screen is what's always visible as the sticky frame)
        const totalScrollDistance = height - wh;
        const scrolled = -top; // positive when scrolled into section

        if (scrolled <= 0) {
          setScrollProgress(0);
        } else if (scrolled >= totalScrollDistance) {
          setScrollProgress(1);
        } else {
          setScrollProgress(scrolled / totalScrollDistance);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // ── Data ──
  const topCards = [
    {
      num: "01",
      subtitle: "Clear Understanding",
      title: "Buyers see everything. No imagination needed.",
      image: "/3D img1_logo.png",
    },
    {
      num: "02",
      subtitle: "Clear Confidence",
      title: "Every space, amenity and view is fully explorable.",
      image: "/3D image2_logo_r.png",
    },
    {
      num: "03",
      subtitle: "Clear Decisions",
      title: "When buyers understand the project, they decide faster.",
      image: "/3D image3_logo.png",
    },
  ];

  const horizontalSlides = [
    {
      num: "01",
      title: "Full Exterior View",
      desc: "See the complete building from every angle — facade, rooftop, landscaping.",
      image: "/3D image4_logo.png",
    },
    {
      num: "02",
      title: "Nearby Connectivity",
      desc: "Metro, roads, malls, schools — all mapped and measured for instant clarity.",
      image: "/3D image5_logo.png",
    },
    {
      num: "03",
      title: "Day & Night Mode",
      desc: "Realistic lighting at sunrise, noon and dusk. Buyers fall in love twice.",
      image: "/3D image6_logo.png",
    },
    {
      num: "04",
      title: "Unit-Level Walk-through",
      desc: "Step into any unit on any floor. Open doors. Measure rooms. Feel the space.",
      image: "/3D img1_logo.png",
    },
    {
      num: "05",
      title: "Amenity Showcase",
      desc: "Pool, gym, sky-lounge — all fully explorable. No guesswork, only experience.",
      image: "/3D image2_logo_r.png",
    },
    {
      num: "06",
      title: "Live Sales Dashboard",
      desc: "Availability, pricing and floor plans updated instantly. One source of truth.",
      image: "/3D image3_logo.png",
    },
  ];

  const slideCount = horizontalSlides.length;
  const activeIndex = Math.min(
    Math.floor(scrollProgress * slideCount),
    slideCount - 1
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        /* ─────────────────────────────────
           SHARED / ROOT
        ───────────────────────────────── */
        .ft-root {
          width: 100%;
          /* White background behind the cards section */
          background: #f5f5f5;
        }

        /* ─────────────────────────────────
           SECTION 1 — CARDS
        ───────────────────────────────── */
        .ft-cards-section {
          background: #f5f5f5;
          padding: 7rem 0 6rem;
          overflow: hidden;
        }

        .ft-cards-inner {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* Header row: number tag left, headline right */
        .ft-cards-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding-bottom: 2rem;
        }

        .ft-section-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        .ft-cards-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #000;
          text-align: right;
          text-transform: uppercase;
        }

        /* Grid */
        .ft-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.08);
        }

        @media (max-width: 900px) {
          .ft-cards-grid { grid-template-columns: 1fr; }
          .ft-cards-h2 { font-size: 2rem; }
        }

        .ft-card {
          position: relative;
          overflow: hidden;
          background: #000;
          height: 460px;
        }

        /* Card number — top right */
        .ft-card-num {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          z-index: 10;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.4);
        }

        /* White top-left corner bracket */
        .ft-card-bracket {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          z-index: 10;
          width: 16px;
          height: 16px;
          border-top: 1.5px solid rgba(255,255,255,0.35);
          border-left: 1.5px solid rgba(255,255,255,0.35);
        }

        .ft-card-img-wrap {
          position: absolute;
          inset: 0;
          will-change: transform;
        }
        .ft-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.55;
          filter: grayscale(20%);
        }

        .ft-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.3) 55%,
            transparent 100%
          );
          pointer-events: none;
        }

        .ft-card-body {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%;
          padding: 1.75rem;
          z-index: 10;
        }

        .ft-card-sub {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 0.6rem;
        }

        .ft-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.1rem, 1.8vw, 1.45rem);
          font-weight: 600;
          line-height: 1.25;
          color: #fff;
          letter-spacing: -0.01em;
        }

        /* White line at bottom of each card */
        .ft-card-line {
          position: absolute;
          bottom: 0; left: 0;
          width: 0;
          height: 2px;
          background: #fff;
          transition: width 0.5s ease;
        }
        .ft-card:hover .ft-card-line { width: 100%; }

        /* ─────────────────────────────────
           SECTION 2 — HORIZONTAL SCROLL
        ───────────────────────────────── */

        /* 
          The section is tall enough to drive the scroll.
          It sits directly below the cards section (black bg,
          rounded top corners create the visual "lift" off white).
        */
        .ft-h-section {
          position: relative;
          background: #000;
          border-radius: 2rem 2rem 0 0;
          /* overflow: hidden is intentionally NOT set here —
             border-radius clips visually, sticky works inside */
        }

        /*
          The sticky frame: exactly 1 viewport tall, sticks at top.
          All the "sliding" content lives inside it.
        */
        .ft-h-sticky {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── TOP BAR ── */
        .ft-h-topbar {
          flex-shrink: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 2.5rem 2.5rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .ft-h-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ft-h-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: rgba(255,255,255,0.25);
        }

        .ft-h-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.4rem, 2.8vw, 2.6rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #fff;
          text-align: right;
          line-height: 1;
        }

        /* ── TRACK ── */
        .ft-h-track-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .ft-h-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0 2.5rem;
          width: max-content;
          will-change: transform;
        }

        /* Each slide card */
        .ft-h-slide {
          flex-shrink: 0;
          width: min(70vw, 660px);
          display: grid;
          grid-template-rows: auto 1fr;
          gap: 1rem;
          will-change: opacity, transform;
        }

        .ft-h-slide-top {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .ft-h-slide-num {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
          padding-top: 3px;
        }

        .ft-h-slide-copy { flex: 1; }

        .ft-h-slide-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1rem, 1.8vw, 1.35rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.015em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }

        .ft-h-slide-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          line-height: 1.65;
        }

        /* Image */
        .ft-h-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #111;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .ft-h-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(15%);
          transition: filter 0.5s;
        }

        /* Active slide: slightly more colour */
        .ft-h-slide-active .ft-h-img img { filter: grayscale(0%); }

        /* White line at bottom of active image */
        .ft-h-img-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          background: #fff;
          transition: width 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        /* ── BOTTOM BAR ── */
        .ft-h-bottombar {
          flex-shrink: 0;
          padding: 1rem 2.5rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .ft-h-counter {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.25);
          flex-shrink: 0;
          min-width: 60px;
        }

        .ft-h-bar-track {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
        }

        .ft-h-bar-fill {
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          background: #fff;
          transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
        }

        .ft-h-pct {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
          flex-shrink: 0;
          min-width: 40px;
          text-align: right;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .ft-cards-inner { padding: 0 1.25rem; }
          .ft-h-topbar, .ft-h-track, .ft-h-bottombar { padding-left: 1.25rem; padding-right: 1.25rem; }
          .ft-h-track { gap: 1rem; }
          .ft-cards-header { flex-direction: column; align-items: flex-start; }
          .ft-cards-h2 { text-align: left; font-size: 2rem; }
          .ft-card { height: 360px; }
        }
      `}</style>

      <div className="ft-root">

        {/* ════════════════════════════════════
            SECTION 1 — TOP CARDS
        ════════════════════════════════════ */}
        <section ref={cardsSectionRef} className="ft-cards-section">
          <div className="ft-cards-inner">

            {/* Header */}
            <div className="ft-cards-header">
              <span className="ft-section-tag">Features — 01</span>
              <h2 className="ft-cards-h2">
                Clear Sales.<br />Clear Commitments.
              </h2>
            </div>

            {/* Cards */}
            <div className="ft-cards-grid">
              {topCards.map((card, i) => {
                const dir = i % 2 === 0 ? -1 : 1;
                const move = (1 - cardsProgress) * 65 * dir;
                return (
                  <div key={i} className="ft-card">
                    <div className="ft-card-bracket" />
                    <span className="ft-card-num">{card.num}</span>

                    <div
                      className="ft-card-img-wrap"
                      style={{
                        transform: `scale(1.14) translateX(${move}px)`,
                        transition: "transform 0.12s ease-out",
                      }}
                    >
                      <img src={card.image} alt={card.subtitle} />
                    </div>

                    <div className="ft-card-overlay" />

                    <div className="ft-card-body">
                      <p className="ft-card-sub">{card.subtitle}</p>
                      <h3 className="ft-card-title">{card.title}</h3>
                    </div>

                    <div className="ft-card-line" />
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════
            SECTION 2 — HORIZONTAL SCROLL
            Height = slideCount * 100vh + 100vh
            The extra 100vh is the "frame" itself.
            scrollProgress goes 0→1 over the extra height.
        ════════════════════════════════════ */}
        <section
          ref={horizontalContainerRef}
          className="ft-h-section"
          style={{ height: `${(slideCount + 1) * 100}vh` }}
        >
          <div className="ft-h-sticky">

            {/* Top bar */}
            <div className="ft-h-topbar">
              <span className="ft-h-label">Features — 02</span>
              <h2 className="ft-h-headline">
                See how buyers<br />explore your project
              </h2>
            </div>

            {/* Horizontal track */}
            <div className="ft-h-track-wrap">
              <div
                ref={trackRef}
                className="ft-h-track"
                style={{
                  transform: `translateX(-${scrollProgress * maxTranslate}px)`,
                  transition: "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {horizontalSlides.map((slide, i) => {
                  const dist = Math.abs(i - activeIndex);
                  const isActive = dist === 0;
                  const opacity = isActive ? 1 : dist === 1 ? 0.4 : 0.18;
                  const scale = isActive ? 1 : 0.97;
                  const ty = isActive ? 0 : 10;
                  // White line inside active image expands
                  const lineW = isActive ? "100%" : "0%";

                  return (
                    <div
                      key={i}
                      className={`ft-h-slide${isActive ? " ft-h-slide-active" : ""}`}
                      style={{
                        opacity,
                        transform: `scale(${scale}) translateY(${ty}px)`,
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                      }}
                    >
                      {/* Slide top: number + copy */}
                      <div className="ft-h-slide-top">
                        <span className="ft-h-slide-num">{slide.num}</span>
                        <div className="ft-h-slide-copy">
                          <h3 className="ft-h-slide-title">{slide.title}</h3>
                          <p className="ft-h-slide-desc">{slide.desc}</p>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="ft-h-img">
                        <img src={slide.image} alt={slide.title} />
                        <div
                          className="ft-h-img-line"
                          style={{ width: lineW }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="ft-h-bottombar">
              <span className="ft-h-counter">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
              </span>
              <div className="ft-h-bar-track">
                <div
                  className="ft-h-bar-fill"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
              <span className="ft-h-pct">{Math.round(scrollProgress * 100)}%</span>
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Features;