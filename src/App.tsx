import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import PlaylistShowcase from './components/PlaylistShowcase';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <PlaylistShowcase />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default App;
