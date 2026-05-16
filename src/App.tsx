import React from 'react';
import Navbar from './pages/navbar';
import Hero from './pages/hero';
import Features from './pages/feature';
import Developers from './pages/devlopers';
import Concept from './pages/concept';
import Footer from './pages/footer';


const VirtualGridLanding = () => {
  return (
    <div className="relative min-h-screen font-sans bg-black">
      {/* 1. Navbar */}
      <Navbar />
      
      {/* 2. Hero Section (Video) */}
      <Hero />
      
      {/* 3. New Features Section (Scroll Parallax) */}
      <Features />
      
      {/* 4. Developers Section */}
      <Developers />

      <Concept />

      <Footer />
      

      
      
    </div>
  );
};

export default VirtualGridLanding;