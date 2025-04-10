
import { Calendar, Tag, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Ideas = () => {
  const researchIdeas = [
    {
      id: 1,
      title: "Exploring the Intersection of AI and Ethics in Academic Research",
      summary: "This research idea explores how artificial intelligence technologies are raising new ethical questions in academic research methodologies and knowledge production.",
      details: "As AI increasingly becomes part of academic research processes, there's a need to examine how these tools affect research integrity, bias, and attribution. This research would investigate frameworks for ethical AI use in research, examining case studies across different disciplines.",
      tags: ["AI Ethics", "Research Methods", "Interdisciplinary"],
      date: "April 10, 2025",
      status: "Conceptual"
    },
    {
      id: 2,
      title: "Knowledge Dissemination in Digital Environments",
      summary: "An exploration of how digital platforms are changing how academic knowledge is shared, accessed, and evaluated.",
      details: "This research would examine the evolution from traditional publishing to diverse digital channels, analyzing impact on peer review, accessibility, and knowledge democratization. It would incorporate perspectives from information science, media studies, and education.",
      tags: ["Digital Publishing", "Open Access", "Academic Impact"],
      date: "March 15, 2025",
      status: "Early Research"
    },
    {
      id: 3,
      title: "Cross-Cultural Collaboration in Virtual Research Teams",
      summary: "This idea explores effective practices for research teams collaborating across different cultural contexts in virtual environments.",
      details: "With research becoming increasingly global and remote, understanding how to build effective cross-cultural research teams is essential. This project would examine communication patterns, collaboration tools, and cultural intelligence in virtual research environments.",
      tags: ["Virtual Collaboration", "Cross-Cultural Research", "Team Science"],
      date: "February 27, 2025",
      status: "Seeking Collaborators"
    },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Research Ideas</h1>
      <p className="text-gray-600 mb-8 text-lg">
        Exploring concepts, theories, and potential research directions that I'm currently interested in.
      </p>
      
      <div className="grid gap-10">
        {researchIdeas.map((idea) => (
          <div key={idea.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
              <h2 className="text-2xl font-semibold text-primary">{idea.title}</h2>
              
              <Badge className="bg-secondary text-primary font-medium">
                {idea.status}
              </Badge>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{idea.date}</span>
            </div>
            
            <p className="text-gray-600 font-medium mb-4">{idea.summary}</p>
            
            <Separator className="my-4" />
            
            <h3 className="text-lg font-medium text-gray-800 mb-2">Details</h3>
            <p className="text-gray-600 mb-6">{idea.details}</p>
            
            <div className="flex flex-wrap gap-2">
              {idea.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="flex items-center">
                  <Tag className="h-3 w-3 mr-1" /> {tag}
                </Badge>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" /> 
                Interested in discussing this idea? Contact me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
