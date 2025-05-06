
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface AnalysisResultsProps {
  results: any;
  isVisible: boolean;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results, isVisible }) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  if (!isVisible || !results) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Resume Analysis Results</h2>
              <p className="text-gray-600">Here's how your resume performed in our analysis</p>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-full">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Overall Score</span>
                <span className="text-2xl font-bold text-blue-600">{results.overallScore}/100</span>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ats">ATS Compatibility</TabsTrigger>
              <TabsTrigger value="content">Content Analysis</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Strength Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">ATS Compatibility</span>
                        <span className="text-sm font-medium">{results.atsScore}%</span>
                      </div>
                      <Progress value={results.atsScore} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Content Quality</span>
                        <span className="text-sm font-medium">{results.contentScore}%</span>
                      </div>
                      <Progress value={results.contentScore} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Keyword Optimization</span>
                        <span className="text-sm font-medium">{results.keywordScore}%</span>
                      </div>
                      <Progress value={results.keywordScore} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Formatting</span>
                        <span className="text-sm font-medium">{results.formattingScore}%</span>
                      </div>
                      <Progress value={results.formattingScore} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t pt-6">
                    <h4 className="font-medium mb-3">Key Insights</h4>
                    <ul className="space-y-2">
                      {results.insights.map((insight: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 text-blue-500">&bull;</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ats" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ATS Compatibility Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Format Elements</h4>
                        <ul className="space-y-2">
                          {results.atsChecklist.map((item: any, index: number) => (
                            <li key={index} className="flex items-center">
                              {item.passed ? (
                                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              )}
                              <span className={item.passed ? "" : "text-red-600"}>{item.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-3">Improvement Suggestions</h4>
                        <ul className="space-y-2">
                          {results.atsSuggestions.map((suggestion: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1 text-blue-500">&bull;</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Quality Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {results.contentAnalysis.map((section: any, index: number) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <h4 className="font-medium mb-2">{section.sectionName}</h4>
                        <div className="flex space-x-2 mb-3">
                          <Badge variant={section.score > 70 ? "default" : "outline"}>
                            Score: {section.score}/100
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50">
                            {section.impactLevel} Impact
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{section.feedback}</p>
                        <div className="text-sm text-blue-600">
                          <strong>Suggestion: </strong> 
                          {section.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="keywords" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Detected Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {results.detectedKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Missing Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {results.missingKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="outline" className="border-red-200 text-red-600">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Industry-Specific Recommendations</h4>
                    <p className="text-gray-600 mb-4">{results.keywordRecommendation}</p>
                    <div className="flex flex-wrap gap-2">
                      {results.recommendedKeywords.map((keyword: string, index: number) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AnalysisResults;
