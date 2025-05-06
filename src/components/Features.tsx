
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Search, ClipboardCheck, Star, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-blue-500" />,
    title: "AI Resume Analysis",
    description: "Our AI examines your resume in seconds, identifying strengths and improvement areas faster than traditional methods."
  },
  {
    icon: <Check className="h-6 w-6 text-green-500" />,
    title: "Keyword Optimization",
    description: "We analyze job descriptions and suggest keywords to include in your resume to pass ATS filters."
  },
  {
    icon: <ClipboardCheck className="h-6 w-6 text-purple-500" />,
    title: "ATS Compatibility Score",
    description: "Get a clear score showing how well your resume works with Applicant Tracking Systems used by employers."
  },
  {
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    title: "Real-Time Feedback",
    description: "Receive instant suggestions to improve content, formatting, and overall impact of your resume."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-cyan-500" />,
    title: "AI Improvement Suggestions",
    description: "Get personalized recommendations to strengthen your resume's impact and relevance."
  }
];

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.feature-card').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful AI Features to <span className="text-blue-600">Optimize Your Resume</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our cutting-edge AI tools analyze every aspect of your resume to help you stand out from the competition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              data-index={index}
            >
              <Card className={`h-full transition-all duration-500 ${
                visibleFeatures.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}>
                <CardContent className="p-6">
                  <div className="rounded-full bg-gray-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
