
import { ExternalLink, Calendar, User, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Research Project 1",
      description: "This project focuses on [research area] and aims to [project goals]. The methodology involves [brief description of methods] and has produced significant findings in [specific area].",
      tags: ["Machine Learning", "Data Analysis", "Research"],
      date: "January 2023",
      collaborators: ["Dr. Jane Smith", "Prof. John Doe"],
      link: "#",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+1"
    },
    {
      id: 2,
      title: "Academic Paper",
      description: "A peer-reviewed paper published in [journal name] that explores [paper topic]. This research contributes to the field by [significant contribution].",
      tags: ["Publication", "Research", "Analysis"],
      date: "October 2022",
      collaborators: ["Dr. Alex Johnson"],
      link: "#",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+2"
    },
    {
      id: 3,
      title: "Conference Presentation",
      description: "Presented research findings at [conference name] on the topic of [presentation subject]. The presentation highlighted [key aspects] and received positive feedback from peers.",
      tags: ["Conference", "Presentation", "Research"],
      date: "May 2022",
      collaborators: [],
      link: "#",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+3"
    },
    {
      id: 4,
      title: "Research Grant Project",
      description: "A funded research project through [funding organization] focused on investigating [research question]. This ongoing project aims to [project goals] and has currently completed [project milestone].",
      tags: ["Grant", "Research", "Ongoing"],
      date: "February 2022 - Present",
      collaborators: ["Dr. Sarah Williams", "Prof. Robert Brown"],
      link: "#",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Project+4"
    },
  ];

  return (
    <div className="page-container animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Projects</h1>
      <p className="text-gray-600 mb-8 text-lg">
        A collection of my academic research projects, publications, and presentations.
      </p>

      <div className="grid gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-semibold text-primary mb-2">{project.title}</h2>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary"
                      aria-label="External link"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.date}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" /> {tag}
                    </Badge>
                  ))}
                </div>
                
                {project.collaborators.length > 0 && (
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span className="font-medium">Collaborators:</span>
                    </div>
                    <div className="ml-5">
                      {project.collaborators.join(", ")}
                    </div>
                  </div>
                )}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
