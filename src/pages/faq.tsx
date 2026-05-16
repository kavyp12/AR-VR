import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is an interactive 3D digital twin for real estate?",
      a: "An interactive 3D digital twin is a fully navigable, photorealistic copy of your real estate project — towers, apartments, amenities, masterplan and surroundings — that buyers can explore on a browser, phone, tablet or VR headset. Virtual Grid builds these from your floor plans, elevations and BIM data so buyers experience the project long before construction is complete.",
    },
    {
      q: "How does a virtual sample flat help pre-launch sales?",
      a: "A virtual sample flat replaces or supplements a physical mock-up unit. Buyers walk through every room, check the view from each window, measure spaces and switch finishes — all online. Developers using interactive 3D walkthroughs typically see 30–40% faster booking decisions and pre-sell a larger share of inventory before construction.",
    },
    {
      q: "How long does it take to build a 3D model of my project?",
      a: "Most residential towers and townships go live in 3 to 8 weeks depending on size, number of unit types and level of detail. Share your floor plans, elevations and masterplan and we deliver a first review-ready 3D model within weeks, not months.",
    },
    {
      q: "Do buyers need a VR headset to view the project?",
      a: "No. The 3D walkthrough runs on any modern web browser — desktop, laptop, tablet or smartphone. VR headsets are optional for sales galleries and international roadshows where an immersive experience adds value.",
    },
    {
      q: "Can you build 3D walkthroughs for under-construction apartments?",
      a: "Yes — under-construction and pre-launch projects are exactly where Virtual Grid delivers the highest return. Since the physical site isn't ready, the interactive 3D model becomes your primary sales tool for events, channel partner meets and NRI investor showcases.",
    },
    {
      q: "Do you work with developers in India, UAE and the GCC?",
      a: "Yes. Virtual Grid has offices in Ahmedabad (India) and Ras Al Khaimah (UAE) and delivers 3D digital twins, virtual sales galleries and interactive walkthroughs for developers across India, the UAE, Saudi Arabia and the wider GCC.",
    },
    {
      q: "How is an interactive 3D walkthrough different from a 3D render or video?",
      a: "Static 3D renders and walkthrough videos are passive — buyers watch. An interactive 3D experience is active — buyers choose where to walk, which unit to enter, which view to check and which finish to compare. That control is what converts hesitant buyers into bookings.",
    },
    {
      q: "Can the 3D model be updated when design changes?",
      a: "Yes. The interactive 3D model is built to evolve with the project. Layout changes, new amenities, finish updates and live unit-availability data can all be synced into the same digital twin so your sales team always presents the latest version.",
    },
    {
      q: "Which types of real estate projects do you work with?",
      a: "Residential towers, luxury apartments, villas, plotted townships, commercial projects, mixed-use developments, sales galleries and international launches. If buyers need to understand the space before it exists, an interactive 3D experience helps you sell it.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .fq {
          width: 100%;
          background: #f5f5f5;
          padding: 7rem 0 6rem;
        }

        .fq-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2.5rem;
        }

        .fq-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3.5rem;
          border-bottom: 1px solid rgba(0,0,0,0.08);
          padding-bottom: 2rem;
        }

        .fq-tag {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }

        .fq-h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4vw, 3.6rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #000;
          text-align: right;
          text-transform: uppercase;
          margin: 0;
        }

        .fq-h2-serif {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 700;
          text-transform: none;
        }

        .fq-list {
          display: flex;
          flex-direction: column;
        }

        .fq-item {
          border-bottom: 1px solid rgba(0,0,0,0.1);
          cursor: pointer;
        }

        .fq-q {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem 0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 600;
          color: #000;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }

        .fq-item:hover .fq-q { color: rgba(0,0,0,0.65); }

        .fq-toggle {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          position: relative;
        }
        .fq-toggle::before,
        .fq-toggle::after {
          content: "";
          position: absolute;
          background: #000;
          transition: transform 0.3s;
        }
        .fq-toggle::before {
          top: 50%; left: 0; right: 0;
          height: 1.5px;
          transform: translateY(-50%);
        }
        .fq-toggle::after {
          left: 50%; top: 0; bottom: 0;
          width: 1.5px;
          transform: translateX(-50%);
        }
        .fq-item-open .fq-toggle::after { transform: translateX(-50%) rotate(90deg); opacity: 0; }

        .fq-a-wrap {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fq-item-open .fq-a-wrap { max-height: 400px; }

        .fq-a {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(0,0,0,0.6);
          padding: 0 0 1.75rem;
          max-width: 760px;
        }

        @media (max-width: 768px) {
          .fq-inner { padding: 0 1.25rem; }
          .fq-header { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
          .fq-h2 { text-align: left; font-size: 2rem; }
          .fq-q { font-size: 15px; }
        }
      `}</style>

      <section className="fq" id="faq">
        <div className="fq-inner">
          <div className="fq-header">
            <span className="fq-tag">FAQ — 03</span>
            <h2 className="fq-h2">
              <span className="fq-h2-serif">Questions</span> about 3D<br />
              real estate visualization
            </h2>
          </div>

          <div className="fq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`fq-item${openIndex === i ? " fq-item-open" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="fq-q">
                  <span>{item.q}</span>
                  <span className="fq-toggle" />
                </div>
                <div className="fq-a-wrap">
                  <p className="fq-a">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>
    </>
  );
};

export default FAQ;
