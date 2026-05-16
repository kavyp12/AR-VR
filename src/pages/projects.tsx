import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      num: "01",
      tag: "Residential Tower",
      title: "Skyline Heights",
      location: "Mumbai, India",
      desc: "44 floors of luxury residences with a fully interactive digital twin. Pre-sold 87% of units before foundation work began.",
      image: "/3D img1.png",
      stats: [
        { label: "Units", value: "320" },
        { label: "Floors", value: "44" },
        { label: "Sold-out", value: "8 wks" },
      ],
    },
    {
      num: "02",
      tag: "Luxury Apartments",
      title: "Marina Bay Residences",
      location: "Dubai, UAE",
      desc: "Waterfront luxury redefined. Buyers walked through the penthouse and felt the marina view before the slab was cast.",
      image: "/3D image2.png",
      stats: [
        { label: "Units", value: "180" },
        { label: "Floors", value: "32" },
        { label: "Launch", value: "2025" },
      ],
    },
    {
      num: "03",
      tag: "Township",
      title: "Greenfield Estate",
      location: "Pune, India",
      desc: "A 120-acre integrated township modelled end-to-end. Plot buyers explored neighbourhood views before roads were laid.",
      image: "/3D image3.png",
      stats: [
        { label: "Acres", value: "120" },
        { label: "Plots", value: "640" },
        { label: "Phase", value: "II" },
      ],
    },
    {
      num: "04",
      tag: "Commercial",
      title: "Tech Park One",
      location: "Bengaluru, India",
      desc: "A 1.2M sq.ft. campus modelled floor-by-floor. Anchor tenants signed leases after a single 30-minute virtual walkthrough.",
      image: "/3D image4.png",
      stats: [
        { label: "Sq.ft", value: "1.2M" },
        { label: "Towers", value: "3" },
        { label: "Leased", value: "92%" },
      ],
    },
    {
      num: "05",
      tag: "Sales Gallery",
      title: "Visitor Pavilion",
      location: "Goa, India",
      desc: "An on-site experience centre powered by a synchronised 3D model. Walk-in to booking dropped from 6 weeks to 9 days.",
      image: "/3D image5.png",
      stats: [
        { label: "Visitors", value: "12K" },
        { label: "Booking", value: "9 days" },
        { label: "Closure", value: "41%" },
      ],
    },
    {
      num: "06",
      tag: "International",
      title: "Riverside Towers",
      location: "London, UK",
      desc: "Cross-border launch. Indian and UK buyers explored the same model simultaneously — sold-out in three weekends.",
      image: "/3D image6.png",
      stats: [
        { label: "Units", value: "210" },
        { label: "Floors", value: "38" },
        { label: "Closure", value: "3 wks" },
      ],
    },
  ];

  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .pj {
          position: relative;
          background: #0a0a0a;
          padding: 7rem 0 8rem;
          overflow: hidden;
        }

        .pj::before {
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

        .pj-inner {
          position: relative;
          z-index: 1;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        /* HEADER */
        .pj-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 2rem;
        }

        .pj-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .pj-tag::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: rgba(255,255,255,0.25);
        }

        .pj-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #fff;
          text-align: right;
          text-transform: uppercase;
          margin: 0;
        }

        /* GRID */
        .pj-grid {
          display: grid;
          grid-template-columns: minmax(320px, 38%) 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        /* ── SIDEBAR ── */
        .pj-sidebar {
          display: flex;
          flex-direction: column;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .pj-item {
          all: unset;
          cursor: pointer;
          display: grid;
          grid-template-columns: 32px 1fr auto;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 0.25rem 1.5rem 0.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          position: relative;
          transition: padding 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .pj-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0;
          background: rgba(255,255,255,0.04);
          transition: width 0.45s cubic-bezier(0.16,1,0.3,1);
          z-index: -1;
        }
        .pj-item:hover::before,
        .pj-item-active::before { width: 100%; }
        .pj-item:hover,
        .pj-item-active { padding-left: 1.25rem; }

        .pj-item-num {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.3);
          transition: color 0.3s;
        }
        .pj-item-active .pj-item-num { color: #fff; }

        .pj-item-text {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          min-width: 0;
        }

        .pj-item-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .pj-item-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          letter-spacing: -0.01em;
          line-height: 1.15;
          transition: color 0.3s;
        }
        .pj-item-active .pj-item-title { color: #fff; }

        .pj-item-arrow {
          width: 12px;
          height: 12px;
          border-top: 1.5px solid rgba(255,255,255,0.3);
          border-right: 1.5px solid rgba(255,255,255,0.3);
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.3s, border-color 0.3s, transform 0.3s;
        }
        .pj-item:hover .pj-item-arrow,
        .pj-item-active .pj-item-arrow {
          opacity: 1;
          border-color: #fff;
          transform: rotate(45deg) translate(2px, -2px);
        }

        /* ── DISPLAY ── */
        .pj-display {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          position: sticky;
          top: 100px;
        }

        .pj-image-stack {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #000;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .pj-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.04);
          filter: grayscale(15%);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
                      transform 1.4s cubic-bezier(0.16,1,0.3,1);
        }
        .pj-image-active {
          opacity: 1;
          transform: scale(1);
        }

        .pj-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%),
            linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 35%);
          pointer-events: none;
          z-index: 2;
        }

        .pj-image-bracket {
          position: absolute;
          z-index: 3;
          width: 18px;
          height: 18px;
        }
        .pj-image-bracket-tl {
          top: 1.25rem;
          left: 1.25rem;
          border-top: 1.5px solid rgba(255,255,255,0.5);
          border-left: 1.5px solid rgba(255,255,255,0.5);
        }
        .pj-image-bracket-br {
          bottom: 1.25rem;
          right: 1.25rem;
          border-bottom: 1.5px solid rgba(255,255,255,0.5);
          border-right: 1.5px solid rgba(255,255,255,0.5);
        }

        .pj-image-counter {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          z-index: 3;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.55);
        }

        /* DETAILS */
        .pj-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .pj-details-head {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pj-details-loc {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .pj-details-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 2.6vw, 2.4rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.05;
          text-transform: uppercase;
          margin: 0;
        }

        .pj-details-desc {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.55);
          max-width: 560px;
          margin: 0;
        }

        .pj-details-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.08);
          margin-top: 0.5rem;
        }

        .pj-stat {
          background: #0a0a0a;
          padding: 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .pj-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .pj-stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        @media (max-width: 980px) {
          .pj-grid { grid-template-columns: 1fr; gap: 2rem; }
          .pj-display { position: relative; top: 0; }
          .pj-h2 { text-align: left; }
          .pj-header { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 600px) {
          .pj-inner { padding: 0 1.25rem; }
          .pj-details-stats { grid-template-columns: repeat(3, 1fr); }
          .pj-stat { padding: 1rem 0.75rem; }
          .pj-stat-value { font-size: 1.2rem; }
        }
      `}</style>

      <section id="projects" className="pj">
        <div className="pj-inner">
          <div className="pj-header">
            <span className="pj-tag">Projects — 03</span>
            <h2 className="pj-h2">
              Selected work<br />across markets.
            </h2>
          </div>

          <div className="pj-grid">
            {/* Sidebar */}
            <div className="pj-sidebar">
              {projects.map((p, i) => (
                <button
                  key={i}
                  className={`pj-item${i === active ? " pj-item-active" : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="pj-item-num">{p.num}</span>
                  <span className="pj-item-text">
                    <span className="pj-item-tag">{p.tag}</span>
                    <span className="pj-item-title">{p.title}</span>
                  </span>
                  <span className="pj-item-arrow" />
                </button>
              ))}
            </div>

            {/* Display */}
            <div className="pj-display">
              <div className="pj-image-stack">
                {projects.map((p, i) => (
                  <img
                    key={i}
                    src={p.image}
                    alt={p.title}
                    className={`pj-image${i === active ? " pj-image-active" : ""}`}
                  />
                ))}
                <div className="pj-image-overlay" />
                <div className="pj-image-bracket pj-image-bracket-tl" />
                <div className="pj-image-bracket pj-image-bracket-br" />
                <span className="pj-image-counter">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              <div className="pj-details">
                <div className="pj-details-head">
                  <span className="pj-details-loc">{current.location}</span>
                  <h3 className="pj-details-title">{current.title}</h3>
                </div>
                <p className="pj-details-desc">{current.desc}</p>
                <div className="pj-details-stats">
                  {current.stats.map((s, i) => (
                    <div key={i} className="pj-stat">
                      <span className="pj-stat-value">{s.value}</span>
                      <span className="pj-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
