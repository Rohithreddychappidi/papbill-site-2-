import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelfOrdering from './components/SelfOrdering';
import HowItWorks from './components/HowItWorks';
import PosShowcase from './components/PosShowcase';
import PhoneDemo from './components/PhoneDemo';
import FeatureTabs from './components/FeatureTabs';
import SocialProof from './components/SocialProof';
import HardwareCatalog from './components/HardwareCatalog';
import Pricing from './components/Pricing';
import About from './components/About';
import BottomCta from './components/BottomCta';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900 relative">
      <Navbar />
      <main id="top">
        <Hero />
        <SelfOrdering />
        <HowItWorks />
        <PosShowcase />
        <PhoneDemo />
        <FeatureTabs />
        <SocialProof />
        <HardwareCatalog />
        <Pricing />
        <About />
        <BottomCta />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
