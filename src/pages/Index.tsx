
import { ArrowRight, BookOpen, Code, Briefcase, GraduationCap, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-white py-16 md:py-24">
        <div className="page-container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Ritvik Mahajan
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
                Academic Researcher & Developer
              </h2>
              <p className="text-gray-600 mb-8 md:text-lg">
                Welcome to my academic portfolio. I'm focused on research in [Your Field], 
                with particular interests in [specific research areas]. 
                Through this site, you can explore my projects, research ideas, and academic background.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/cv">
                    View CV <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-200 w-full h-64 md:h-80 flex items-center justify-center">
                <span className="text-gray-600">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-6">
                I am a [Your Position/Title] at [Institution/Organization]. My research focuses on 
                [brief description of your research focus]. I have [X years] of experience in 
                academic research and have published papers in [mention notable journals or conferences].
              </p>
              <p className="text-gray-600">
                My academic journey has taken me through [notable educational institutions or career milestones].
                I'm passionate about [specific aspects of your field] and dedicated to 
                [mention your goals, like advancing knowledge in your field, teaching, etc.].
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-primary">Research Interests</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span className="text-gray-600">Research Interest 1</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span className="text-gray-600">Research Interest 2</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5 mr-2" />
                  <span className="text-gray-600">Research Interest 3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="page-container">
          <h2 className="section-title">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Featured Project</h3>
              <p className="text-gray-600 mb-4">
                Brief description of your most significant or recent project that showcases your expertise.
              </p>
              <Link 
                to="/projects" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="card">
              <Briefcase className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Latest Publication</h3>
              <p className="text-gray-600 mb-4">
                Information about your most recent or important academic publication.
              </p>
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Read Paper <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="card">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Academic Achievement</h3>
              <p className="text-gray-600 mb-4">
                Highlight a recent award, grant, or significant academic achievement.
              </p>
              <Link 
                to="/cv" 
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                View All Achievements <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            I'm open to collaboration opportunities, speaking engagements, 
            and discussing research ideas. Feel free to reach out to me via email or connect with me on LinkedIn.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md"
            >
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors rounded-md"
            >
              <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
