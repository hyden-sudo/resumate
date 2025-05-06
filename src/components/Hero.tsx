
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 z-0"></div>
      <div className="absolute right-0 top-20 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
      <div className="absolute left-20 bottom-20 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fadeIn">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">AI-Powered Resume Analysis</span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <span className="block">Stay Smart, Stay Ahead</span>
            <span className="hero-gradient text-transparent bg-clip-text">with ResuMate™</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            Optimize your resume with AI-powered analysis. Get instant feedback,
            improve ATS compatibility, and land more interviews.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
            <Link to="/resume-upload">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                Upload Your Resume
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="group">
                Learn How It Works
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 text-center animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-gray-500 mb-3">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 w-auto object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
