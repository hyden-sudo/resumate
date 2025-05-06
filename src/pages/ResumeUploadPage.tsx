
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ResumeUploader from '@/components/ResumeUploader';
import AnalysisResults from '@/components/AnalysisResults';
import AiChat from '@/components/AiChat';
import Footer from '@/components/Footer';

const ResumeUploadPage = () => {
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  useEffect(() => {
    // Apply fade-in animation when the component mounts
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) {
      uploadSection.classList.add('animate-fadeIn');
    }
  }, []);
  
  const handleAnalysisComplete = (results: any) => {
    setAnalysisResults(results);
    setShowResults(true);
    
    // Scroll to results after a short delay
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="upload-section" className="opacity-0 transition-opacity duration-500 pt-24">
        <ResumeUploader onAnalysisComplete={handleAnalysisComplete} />
        <div id="results">
          <AnalysisResults results={analysisResults} isVisible={showResults} />
          <AiChat resumeResults={analysisResults} isVisible={showResults} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeUploadPage;
