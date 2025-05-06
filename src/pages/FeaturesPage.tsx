
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const FeaturesPage = () => {
  useEffect(() => {
    // Apply fade-in animation when the component mounts
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.classList.add('animate-fadeIn');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="features-section" className="opacity-0 transition-opacity duration-500">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
