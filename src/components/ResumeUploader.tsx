
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { analyzeResume } from "@/utils/resumeAnalyzer";

interface ResumeUploaderProps {
  onAnalysisComplete: (results: any) => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onAnalysisComplete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'application/pdf' && 
          selectedFile.type !== 'application/msword' && 
          selectedFile.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        toast.error("Please upload a PDF or Word document");
        return;
      }
      
      if (selectedFile.size > 5000000) { // 5MB limit
        toast.error("File size must be less than 5MB");
        return;
      }
      
      setFile(selectedFile);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleAnalyze = async () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    // Simulate upload completion
    setTimeout(() => {
      clearInterval(uploadInterval);
      setProgress(100);
      setIsUploading(false);
      setIsAnalyzing(true);
      
      // Simulate analysis
      setTimeout(async () => {
        try {
          // In a real app, we'd pass the file to the analyzer
          const results = await analyzeResume(file);
          toast.success("Analysis complete!");
          onAnalysisComplete(results);
        } catch (error) {
          toast.error("Failed to analyze resume. Please try again.");
        } finally {
          setIsAnalyzing(false);
        }
      }, 2500);
    }, 2000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Upload Your Resume</h2>
          <p className="text-xl text-gray-600">
            Get instant feedback and improve your chances of landing your dream job
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          {!file && !isUploading && !isAnalyzing ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
              />
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Drop your resume here</h3>
              <p className="text-gray-500 text-sm mb-4">Supports PDF, DOC, DOCX (Max 5MB)</p>
              <Button onClick={handleUploadClick} className="mb-2 w-full">
                <Upload className="mr-2 h-4 w-4" />
                Select File
              </Button>
            </div>
          ) : isUploading ? (
            <div className="text-center p-8">
              <div className="animate-pulse-slow">
                <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-medium mb-4">Uploading your resume...</h3>
              <Progress value={progress} className="h-2 mb-2" />
              <p className="text-gray-500 text-sm">{progress}% complete</p>
            </div>
          ) : isAnalyzing ? (
            <div className="text-center p-8">
              <div className="relative mx-auto w-16 h-16 mb-4">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Analyzing your resume...</h3>
              <p className="text-gray-500">Our AI is reviewing your document</p>
              
              <div className="mt-6 text-left">
                <div className="flex items-center space-x-2 mb-2 animate-pulse">
                  <div className="h-2 bg-blue-200 rounded w-2/3"></div>
                  <span className="text-xs text-gray-400">Scanning format</span>
                </div>
                <div className="flex items-center space-x-2 mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>
                  <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                  <span className="text-xs text-gray-400">Detecting keywords</span>
                </div>
                <div className="flex items-center space-x-2 mb-2 animate-pulse" style={{ animationDelay: '0.4s' }}>
                  <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                  <span className="text-xs text-gray-400">Evaluating content</span>
                </div>
                <div className="flex items-center space-x-2 animate-pulse" style={{ animationDelay: '0.6s' }}>
                  <div className="h-2 bg-blue-200 rounded w-1/3"></div>
                  <span className="text-xs text-gray-400">Generating insights</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-8">
              <FileText className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                {file?.name || "Resume uploaded"}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {(file?.size && (file.size / 1024 / 1024).toFixed(2)) || "0"} MB
              </p>
              <div className="flex space-x-3">
                <Button onClick={handleUploadClick} variant="outline" className="flex-1">
                  Change
                </Button>
                <Button onClick={handleAnalyze} className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                  Analyze Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeUploader;
