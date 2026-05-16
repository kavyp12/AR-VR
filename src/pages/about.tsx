import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const About = () => {
  const heritageRef = useRef<HTMLDivElement>(null);
  const [heritageProgress, setHeritageProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = heritageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const wh = window.innerHeight;
      if (r.top < wh && r.bottom > 0) {
        const p = 1 - r.top / wh;
        setHeritageProgress(Math.min(Math.max(p, 0), 1.2));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const problems = [
    {
      num: "01",
      title: "Pre-launch funds the project.",
      body: "In real estate development, everything depends on what happens before construction. Pre-launch bookings fund the project. Buyer confidence funds the bookings.",
    },
    {
      num: "02",
      title: "Buyers can't see what doesn't exist.",
      body: "For decades, that gap was filled by scale models, printed renders, and a salesperson's words. It worked. Until buyers got smarter and competition got fiercer.",
    },
    {
      num: "03",
      title: "And the cost is real.",
      body: "We watched projects stall. We watched channel partners struggle to close. We watched NRI investors hesitate because they couldn't walk through a flat 5,000 miles away.",
    },
  ];

  const values = [
    {
      num: "01",
      title: "Insider Knowledge",
      body: "We speak your language. No learning curve. No explaining basics.",
    },
    {
      num: "02",
      title: "Builder-First Thinking",
      body: "Every feature we build solves a real sales problem.",
    },
    {
      num: "03",
      title: "Trust Through Transparency",
      body: "We show buyers exactly what they're buying. No surprises at possession.",
    },
    {
      num: "04",
      title: "Results Over Demo",
      body: "We measure our success by your bookings, not our technology.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        /* ─────────────────────────────────
           PAGE BASE
        ───────────────────────────────── */
        .ab-page {
          background: #000;
          color: #fff;
          padding-top: 76px;
        }

        /* ═══════════════════════════════════════
           SECTION 01 — HERO
        ═══════════════════════════════════════ */
        .ab-hero {
          position: relative;
          padding: 7rem 2.5rem 6rem;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .ab-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
        }

        .ab-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1600px;
          margin: 0 auto;
        }

        .ab-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
        }
        .ab-tag::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.4);
        }

        .ab-hero-h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(3.2rem, 8.8vw, 9.5rem);
          line-height: 0.9;
          letter-spacing: -0.035em;
          color: #fff;
          text-transform: uppercase;
          margin: 2rem 0 0;
        }
        .ab-hero-h1-line2 {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.55);
        }

        .ab-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: end;
          margin-top: 3.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .ab-hero-lede {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          max-width: 560px;
          margin: 0;
        }
        .ab-hero-lede strong {
          color: #fff;
          font-weight: 600;
        }
        .ab-hero-lede + .ab-hero-lede { margin-top: 1.25rem; }

        .ab-hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .ab-stat {
          background: #000;
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ab-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.85rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.025em;
        }
        .ab-stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
        }

        /* ═══════════════════════════════════════
           SECTION 02 — THE PROBLEM (CREAM)
        ═══════════════════════════════════════ */
        .ab-problem {
          background: #f0ede6;
          color: #000;
          padding: 7rem 2.5rem;
          overflow: hidden;
          position: relative;
        }

        .ab-problem-inner {
          max-width: 1600px;
          margin: 0 auto;
        }

        .ab-problem-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.12);
          margin-bottom: 4rem;
        }
        .ab-problem-head .ab-tag { color: rgba(0,0,0,0.5); }
        .ab-problem-head .ab-tag::before { background: rgba(0,0,0,0.4); }

        .ab-problem-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4.6vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #000;
          text-align: right;
          margin: 0;
          text-transform: uppercase;
        }
        .ab-problem-h2 em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          color: #000;
          text-transform: none;
        }

        .ab-problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .ab-problem-card {
          background: #fff;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-height: 280px;
          position: relative;
        }

        .ab-problem-num {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          font-weight: 700;
          color: rgba(0,0,0,0.5);
        }

        .ab-problem-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #000;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin: 0;
          text-transform: uppercase;
        }

        .ab-problem-body {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;
          color: rgba(0,0,0,0.7);
          margin: 0;
        }

        .ab-problem-bracket {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 14px;
          height: 14px;
          border-bottom: 1.5px solid rgba(0,0,0,0.35);
          border-right: 1.5px solid rgba(0,0,0,0.35);
        }

        .ab-problem-foot {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(0,0,0,0.12);
        }

        .ab-problem-quote {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          font-size: clamp(1.5rem, 2.8vw, 2.2rem);
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: #000;
          margin: 0;
        }

        .ab-problem-foot-body {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;
          color: rgba(0,0,0,0.75);
          margin: 0;
        }
        .ab-problem-foot-body strong { color: #000; font-weight: 700; }

        /* connecting bar (kept from heritage pattern) */
        .ab-bridge {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .ab-bridge-line {
          flex: 1;
          height: 1px;
          background: rgba(0,0,0,0.18);
          position: relative;
          overflow: hidden;
        }
        .ab-bridge-fill {
          position: absolute;
          inset: 0;
          background: #000;
          transform-origin: left center;
          transition: transform 0.4s ease-out;
        }
        .ab-bridge-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.6);
          font-weight: 700;
        }

        /* ═══════════════════════════════════════
           SECTION 03 — THE ANSWER (BLACK)
        ═══════════════════════════════════════ */
        .ab-answer {
          background: #000;
          color: #fff;
          padding: 7rem 2.5rem 8rem;
          border-radius: 2rem 2rem 0 0;
          position: relative;
          overflow: hidden;
        }

        .ab-answer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
        }

        .ab-answer-inner {
          position: relative;
          z-index: 1;
          max-width: 1500px;
          margin: 0 auto;
        }

        .ab-answer-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 4rem;
        }

        .ab-answer-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 5vw, 5rem);
          line-height: 0.92;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          text-align: right;
          margin: 0;
          color: #fff;
        }
        .ab-answer-h2 em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1.2px rgba(255,255,255,0.6);
          text-transform: none;
        }

        .ab-answer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .ab-answer-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ab-answer-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-weight: 700;
        }

        .ab-answer-h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.4rem, 2.4vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #fff;
          text-transform: uppercase;
          margin: 0;
        }

        .ab-answer-body {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }
        .ab-answer-body strong { color: #fff; font-weight: 600; }

        .ab-pullquote {
          margin: 4.5rem auto 0;
          max-width: 1100px;
          padding: 3rem 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.12);
          position: relative;
        }
        .ab-pullquote-mark {
          position: absolute;
          top: 1rem;
          left: 0;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          font-size: 5rem;
          line-height: 0.5;
          color: rgba(255,255,255,0.2);
        }
        .ab-pullquote-text {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 3vw, 2.4rem);
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0;
          text-align: center;
        }
        .ab-pullquote-text em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.6);
        }

        /* ═══════════════════════════════════════
           SECTION 04 — MISSION + VALUES (CREAM)
        ═══════════════════════════════════════ */
        .ab-mission {
          background: #f0ede6;
          color: #000;
          padding: 7rem 2.5rem;
          position: relative;
        }

        .ab-mission-inner {
          max-width: 1600px;
          margin: 0 auto;
        }

        .ab-mission-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.12);
          margin-bottom: 4rem;
        }
        .ab-mission-head .ab-tag { color: rgba(0,0,0,0.5); }
        .ab-mission-head .ab-tag::before { background: rgba(0,0,0,0.4); }

        .ab-mission-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 5.5vw, 5.5rem);
          line-height: 0.92;
          letter-spacing: -0.035em;
          text-transform: uppercase;
          text-align: right;
          margin: 0;
          color: #000;
        }
        .ab-mission-h2 em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1.3px rgba(0,0,0,0.55);
          text-transform: none;
        }

        .ab-who {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(0,0,0,0.12);
          align-items: start;
        }

        .ab-who-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
          font-weight: 700;
        }

        .ab-who-h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 3.4vw, 2.8rem);
          font-weight: 800;
          color: #000;
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin: 1rem 0 0;
          text-transform: uppercase;
        }

        .ab-who-body {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(0,0,0,0.75);
          margin: 0;
        }
        .ab-who-body + .ab-who-body { margin-top: 1.25rem; }
        .ab-who-body strong { color: #000; font-weight: 700; }

        .ab-values-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.55);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.75rem;
        }
        .ab-values-eyebrow::before {
          content: '';
          width: 28px;
          height: 1px;
          background: rgba(0,0,0,0.4);
        }

        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.1);
        }

        .ab-value {
          background: #f0ede6;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          min-height: 240px;
          transition: background 0.3s;
          position: relative;
        }
        .ab-value:hover { background: #fff; }

        .ab-value-num {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          font-weight: 700;
          color: rgba(0,0,0,0.5);
        }

        .ab-value-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: #000;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          line-height: 1.05;
          margin: 0;
        }

        .ab-value-body {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;
          color: rgba(0,0,0,0.7);
          margin: 0;
        }

        .ab-value-bracket {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 14px;
          height: 14px;
          border-bottom: 1.5px solid rgba(0,0,0,0.35);
          border-right: 1.5px solid rgba(0,0,0,0.35);
        }

        /* ═══════════════════════════════════════
           SECTION 05 — CTA (BLACK)
        ═══════════════════════════════════════ */
        .ab-cta {
          background: #000;
          color: #fff;
          padding: 8rem 2.5rem;
          position: relative;
          overflow: hidden;
          border-radius: 2rem 2rem 0 0;
        }

        .ab-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
          z-index: 0;
        }

        .ab-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }

        .ab-cta-tag {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 8px 14px;
          font-weight: 700;
        }

        .ab-cta-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 7vw, 7rem);
          line-height: 0.92;
          letter-spacing: -0.035em;
          text-transform: uppercase;
          margin: 0;
          color: #fff;
        }
        .ab-cta-h2 em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.55);
          text-transform: none;
        }

        .ab-cta-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 540px;
          margin: 0;
        }

        .ab-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: none;
          padding: 17px 34px;
          cursor: pointer;
          transition: background 0.25s;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          outline: none;
          text-decoration: none;
          margin-top: 1rem;
        }
        .ab-cta-btn:hover { background: #e2e2e2; }
        .ab-cta-btn-arrow {
          width: 16px;
          height: 16px;
          border-top: 2.2px solid #000;
          border-right: 2.2px solid #000;
          transform: rotate(45deg);
          transition: transform 0.25s;
        }
        .ab-cta-btn:hover .ab-cta-btn-arrow {
          transform: rotate(45deg) translate(3px, -3px);
        }

        /* ═══════════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════════ */
        @media (max-width: 980px) {
          .ab-hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .ab-problem-head,
          .ab-answer-head,
          .ab-mission-head {
            flex-direction: column;
            align-items: flex-start;
          }
          .ab-problem-h2,
          .ab-answer-h2,
          .ab-mission-h2 { text-align: left; }
          .ab-problem-grid { grid-template-columns: 1fr; }
          .ab-problem-foot { grid-template-columns: 1fr; gap: 1.5rem; }
          .ab-answer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .ab-who { grid-template-columns: 1fr; gap: 1.5rem; }
          .ab-values-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .ab-hero { padding: 5rem 1.25rem 4rem; }
          .ab-problem,
          .ab-answer,
          .ab-mission,
          .ab-cta { padding-left: 1.25rem; padding-right: 1.25rem; }
          .ab-hero-stats { grid-template-columns: 1fr; }
          .ab-values-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <Navbar />

      <main className="ab-page">
        {/* ═══════════════════════════════════════
            01 — HERO
        ═══════════════════════════════════════ */}
        <section className="ab-hero">
          <div className="ab-hero-inner">
            <span className="ab-tag">About — 01</span>

            <h1 className="ab-hero-h1">
              We didn't build this<br />
              <span className="ab-hero-h1-line2">from the outside.</span>
            </h1>

            <div className="ab-hero-grid">
              <div>
                <p className="ab-hero-lede">
                  <strong>Two generations</strong> of our family have sold real
                  estate in Ahmedabad and Gandhinagar. We've sat across the
                  table from buyers who couldn't visualize an unbuilt floor.
                  We've watched builders struggle to hit booking targets before
                  a single brick was laid.
                </p>
                <p className="ab-hero-lede">
                  We've felt the pressure of pre-launch sales with nothing but
                  a brochure and a floor plan to show. <strong>That pain is
                  personal. It's ours.</strong>
                </p>
              </div>

              <div className="ab-hero-stats">
                <div className="ab-stat">
                  <span className="ab-stat-num">2 Gen</span>
                  <span className="ab-stat-label">In real estate<br />sales</span>
                </div>
                <div className="ab-stat">
                  <span className="ab-stat-num">AHM</span>
                  <span className="ab-stat-label">Ahmedabad–<br />Gandhinagar</span>
                </div>
                <div className="ab-stat">
                  <span className="ab-stat-num">100%</span>
                  <span className="ab-stat-label">Builder-first<br />methodology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            02 — THE PROBLEM WE LIVED
        ═══════════════════════════════════════ */}
        <section ref={heritageRef} className="ab-problem">
          <div className="ab-problem-inner">
            <div className="ab-problem-head">
              <span className="ab-tag">The Problem — 02</span>
              <h2 className="ab-problem-h2">
                The problem<br /><em>we lived.</em>
              </h2>
            </div>

            <div className="ab-problem-grid">
              {problems.map((p, i) => (
                <div key={i} className="ab-problem-card">
                  <span className="ab-problem-num">{p.num}</span>
                  <h3 className="ab-problem-title">{p.title}</h3>
                  <p className="ab-problem-body">{p.body}</p>
                  <span className="ab-problem-bracket" />
                </div>
              ))}
            </div>

            <div className="ab-problem-foot">
              <p className="ab-problem-quote">
                "Buyer confidence requires one thing — the ability to see what
                doesn't exist yet."
              </p>
              <p className="ab-problem-foot-body">
                We knew this problem better than most. We saw the gap every
                day — between what the project would become and what the buyer
                could imagine. <strong>So we decided to solve it.</strong>
              </p>
            </div>

            <div className="ab-bridge">
              <span className="ab-bridge-label">The Pain</span>
              <div className="ab-bridge-line">
                <div
                  className="ab-bridge-fill"
                  style={{ transform: `scaleX(${Math.min(heritageProgress, 1)})` }}
                />
              </div>
              <span className="ab-bridge-label">The Answer →</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            03 — WHY WE BUILT VIRTUALGRID
        ═══════════════════════════════════════ */}
        <section className="ab-answer">
          <div className="ab-answer-inner">
            <div className="ab-answer-head">
              <span className="ab-tag">The Answer — 03</span>
              <h2 className="ab-answer-h2">
                Why we built<br /><em>VirtualGrid.</em>
              </h2>
            </div>

            <div className="ab-answer-grid">
              <div className="ab-answer-col">
                <span className="ab-answer-eyebrow">Our Answer</span>
                <h3 className="ab-answer-h3">
                  Built by people who<br />grew up in this industry.
                </h3>
                <p className="ab-answer-body">
                  VirtualGrid is our answer — built by people who grew up in
                  this industry, not consultants who studied it. We combine
                  <strong> interactive 3D models, virtual sample flats, and
                  immersive walkthroughs</strong> so buyers can experience a
                  project before it exists.
                </p>
              </div>

              <div className="ab-answer-col">
                <span className="ab-answer-eyebrow">What It Means For You</span>
                <h3 className="ab-answer-h3">
                  Developers close faster.<br />Channel partners convert.
                </h3>
                <p className="ab-answer-body">
                  Developers close faster. Channel partners convert better.
                  <strong> NRI buyers commit from anywhere in the world</strong> —
                  because they can finally walk through the flat they're
                  considering, no matter where they sit.
                </p>
              </div>
            </div>

            <div className="ab-pullquote">
              <span className="ab-pullquote-mark">"</span>
              <p className="ab-pullquote-text">
                We're not a tech company that stumbled into real estate.<br />
                We're <em>a real estate family</em> that built the technology
                our industry was missing.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            04 — WHO WE ARE + MISSION + VALUES
        ═══════════════════════════════════════ */}
        <section className="ab-mission">
          <div className="ab-mission-inner">
            <div className="ab-mission-head">
              <span className="ab-tag">Mission — 04</span>
              <h2 className="ab-mission-h2">
                Sell the vision.<br /><em>Before the foundation.</em>
              </h2>
            </div>

            {/* WHO WE ARE */}
            <div className="ab-who">
              <div>
                <span className="ab-who-eyebrow">Who We Are</span>
                <h3 className="ab-who-h3">
                  Based in Ahmedabad.<br />Rooted in the corridor.
                </h3>
              </div>
              <div>
                <p className="ab-who-body">
                  Rooted in the <strong>Ahmedabad–Gandhinagar corridor</strong> —
                  one of India's fastest-growing real estate markets. We work
                  with developers, builders, and sales teams who want to move
                  inventory before possession.
                </p>
                <p className="ab-who-body">
                  Our clients don't just get a product. They get a team that
                  understands <strong>site visits, pre-launch pressure,
                  channel partner commissions, and buyer psychology</strong> —
                  because we've lived all of it.
                </p>
              </div>
            </div>

            {/* VALUES */}
            <span className="ab-values-eyebrow">Our Values</span>
            <div className="ab-values-grid">
              {values.map((v, i) => (
                <div key={i} className="ab-value">
                  <span className="ab-value-num">{v.num}</span>
                  <h3 className="ab-value-title">{v.title}</h3>
                  <p className="ab-value-body">{v.body}</p>
                  <span className="ab-value-bracket" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            05 — CTA
        ═══════════════════════════════════════ */}
        <section className="ab-cta">
          <div className="ab-cta-inner">
            <span className="ab-cta-tag">VirtualGrid — 05</span>
            <h2 className="ab-cta-h2">
              Born from real estate.<br /><em>Built for it.</em>
            </h2>
            <p className="ab-cta-sub">
              If you're a developer or builder ready to sell the vision before
              the foundation, we'd love to show you what your project could
              look like — fully explorable, before it exists.
            </p>
            <Link to="/contact" className="ab-cta-btn">
              Start a Conversation
              <span className="ab-cta-btn-arrow" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
