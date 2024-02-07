// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import HybridConsensusSection from './components/HybridConsensusSection';
import ResourcePoolingSection from './components/ResourcePoolingSection';
import UserExperienceSection from './components/UserExperienceSection';
import SecurityTrustSection from './components/SecurityTrustSection';
import InnovationGrowthSection from './components/InnovationGrowthSection';
import ProductRenderSection from './components/ProductRenderSection';
import Donations from './components/DonationsSection';

const seperatorDiv = () => (
  <div>
    <Header />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <HybridConsensusSection />
    <ResourcePoolingSection />
    <ContactSection />
  </div>
);
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HybridConsensusSection />
      <ResourcePoolingSection />
      <InnovationGrowthSection />
      <UserExperienceSection />
      <SecurityTrustSection />
      <ProductRenderSection />
      {/* <Donations /> */}
      {/* <ContactSection /> */}
    </div>
  );
}

export default App;
