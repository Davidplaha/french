import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import Services from './pages/Services';
import ProcessSection from './components/ProcessSection';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <IntroSection />
            <Services />
            <ProcessSection />
            <WhyUs />
            <FAQ />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
