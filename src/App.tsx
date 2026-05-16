import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import Navbar from './pages/navbar';
import Hero from './pages/hero';
import Features from './pages/feature';
import Projects from './pages/projects';
import Developers from './pages/devlopers';
import Concept from './pages/concept';
import FAQ from './pages/faq';
import Footer from './pages/footer';
import Contact from './pages/contact';
import About from './pages/about';

const Landing = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (location.hash) {
      const id = location.hash;
      const t = setTimeout(() => {
        lenis.scrollTo(id, { offset: -60 });
      }, 80);
      return () => clearTimeout(t);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash, lenis]);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Developers />
      <Concept />
      <FAQ />
      <Footer />
    </>
  );
};

const VirtualGridLanding = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <div className="relative min-h-screen font-sans bg-black">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default VirtualGridLanding;
