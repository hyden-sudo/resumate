
// This is a mock service that simulates interaction with the OpenAI API
// In a real application, this would make API calls to OpenAI's services

export async function askAi(question: string, resumeData: any): Promise<string> {
  // Simulate a delay for the API call
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  // Log the question for debugging
  console.log("Question asked:", question);
  console.log("Resume data context:", resumeData);
  
  // Simple response mapping for common questions
  // In a real app, this would be handled by the OpenAI API
  
  if (question.toLowerCase().includes("improve") && question.toLowerCase().includes("summary")) {
    return "To improve your professional summary, focus on these key points:\n\n1. Start with a strong professional title\n2. Include 2-3 of your biggest achievements with metrics\n3. Mention your years of experience and key skills\n4. Tailor it to the specific job you're applying for\n\nFor example, instead of 'Dedicated marketing professional with experience in digital campaigns', try 'Results-driven Marketing Manager with 5+ years of experience delivering ROI-positive campaigns, including a social media strategy that increased engagement by 45% and generated $500K in revenue.'";
  }
  
  if (question.toLowerCase().includes("ats")) {
    return "To make your resume more ATS-friendly:\n\n1. Remove the header section as mentioned in our analysis\n2. Use a clean, single-column layout\n3. Stick to standard section headings like 'Experience', 'Skills', 'Education'\n4. Use common file formats like .docx or .pdf (not PDFs with unusual formatting)\n5. Incorporate relevant keywords from the job description\n6. Avoid tables, graphics, and special characters\n\nThese changes will significantly improve your resume's ability to pass through ATS filters.";
  }
  
  if (question.toLowerCase().includes("keyword") || question.toLowerCase().includes("keywords")) {
    return "Based on our analysis, you should incorporate these missing keywords into your resume:\n\n- Agile methodology\n- Stakeholder management\n- KPI tracking\n- Risk assessment\n- Cross-functional teams\n- ROI optimization\n\nTry to integrate these naturally within your experience descriptions rather than just listing them in your skills section. For example, describe how you 'Led cross-functional teams using agile methodology to deliver projects 15% ahead of schedule.'";
  }
  
  if (question.toLowerCase().includes("experience") || question.toLowerCase().includes("work history")) {
    return "Your work experience section needs more quantifiable achievements. Here's how to improve it:\n\n1. Start each bullet point with a strong action verb\n2. Follow the PAR formula: Problem, Action, Result\n3. Include metrics whenever possible\n\nFor example, change:\n'Managed a team and improved sales'\n\nTo:\n'Led a 7-person sales team that increased regional revenue by 32% ($1.2M) in 12 months by implementing a new CRM system and standardizing the sales process.'";
  }
  
  // Default response for other questions
  return "Based on my analysis of your resume, I'd suggest focusing on strengthening your quantifiable achievements and tailoring your keywords to better match industry standards. Your formatting is good, but your content could be more impactful with specific metrics and results. Would you like me to provide specific examples of how to improve particular sections?";
}
