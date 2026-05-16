import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // White-themed pages need the solid dark navbar at the top too,
  // otherwise the white-on-transparent links disappear.
  const forceSolid = location.pathname === "/contact";
  const dark = scrolled || forceSolid;
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  const goToAnchor = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      lenis?.scrollTo(hash, { offset: -60 });
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .nb {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          background: ${dark ? "rgba(0,0,0,0.97)" : "transparent"};
          border-bottom: 1px solid ${dark ? "rgba(255,255,255,0.07)" : "transparent"};
          backdrop-filter: ${dark ? "blur(20px)" : "none"};
          transition: background 0.45s, border-color 0.45s;
        }

        .nb-inner {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2.5rem;
          height: ${scrolled ? "58px" : "76px"};
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: height 0.4s;
        }

        /* Logo */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
        }
        .nb-logo-mark {
          width: 28px;
          height: 28px;
          border: 2px solid #fff;
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.4s;
        }
        .nb-logo:hover .nb-logo-mark { transform: rotate(90deg); }
        .nb-logo-mark-inner {
          width: 8px;
          height: 8px;
          background: #fff;
          transform: rotate(-45deg);
        }
        .nb-logo-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
        }

        /* Links */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nb-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.25s;
        }
        .nb-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 0;
          background: #fff;
          transition: width 0.3s;
        }
        .nb-link:hover { color: #fff; }
        .nb-link:hover::after { width: 100%; }
        .nb-link-active { color: #fff; }
        .nb-link-active::after { width: 100%; }

        /* CTA */
        .nb-cta {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: none;
          padding: 9px 20px;
          cursor: pointer;
          transition: background 0.25s, color 0.25s;
          border-radius: 0;
          outline: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .nb-cta:hover { background: #d4d4d4; }

        /* Separator */
        .nb-sep {
          width: 1px;
          height: 18px;
          background: rgba(255,255,255,0.12);
        }

        @media (max-width: 768px) {
          .nb-inner { padding: 0 1.25rem; }
          .nb-links { display: none; }
          .nb-sep { display: none; }
        }
      `}</style>

      <nav className="nb">
        <div className="nb-inner">
          <Link to="/" className="nb-logo">
            <div className="nb-logo-mark">
              <div className="nb-logo-mark-inner" />
            </div>
            <span className="nb-logo-text">Virtual Grid</span>
          </Link>

          <div className="nb-links">
            <Link
              to="/about"
              className={`nb-link${isAbout ? " nb-link-active" : ""}`}
            >
              About
            </Link>
            <a
              href="#projects"
              className="nb-link"
              onClick={(e) => goToAnchor(e, "#projects")}
            >
              Projects
            </a>
            <Link
              to="/contact"
              className={`nb-link${isContact ? " nb-link-active" : ""}`}
            >
              Contact
            </Link>
            <div className="nb-sep" />
            <Link to="/contact" className="nb-cta">Book Demo</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
