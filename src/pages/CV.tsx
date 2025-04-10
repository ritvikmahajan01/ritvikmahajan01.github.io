
import { Download, BookOpen, Briefcase, Award, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CV = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Curriculum Vitae</h1>
          <p className="text-gray-600 text-lg">
            My academic qualifications, publications, and professional experiences.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      {/* Education Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Education</h2>
        </div>
        <Separator className="mb-6" />
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-medium">Ph.D. in [Your Field]</h3>
              <span className="text-gray-500">2018 - 2022</span>
            </div>
            <p className="text-primary font-medium">[University Name]</p>
            <p className="text-gray-600 mt-2">
              Dissertation: "[Title of Dissertation]"<br />
              Advisor: [Advisor Name]
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-medium">M.S. in [Your Field]</h3>
              <span className="text-gray-500">2016 - 2018</span>
            </div>
            <p className="text-primary font-medium">[University Name]</p>
            <p className="text-gray-600 mt-2">
              Thesis: "[Title of Thesis]"<br />
              Advisor: [Advisor Name]
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-medium">B.S. in [Your Field]</h3>
              <span className="text-gray-500">2012 - 2016</span>
            </div>
            <p className="text-primary font-medium">[University Name]</p>
            <p className="text-gray-600 mt-2">
              Minor: [Minor Subject]<br />
              Graduated with Honors
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Publications</h2>
        </div>
        <Separator className="mb-6" />
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg mb-3">Journal Articles</h3>
            <ul className="space-y-4">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                <span className="text-gray-500">2023</span> - Author, A., <strong>Mahajan, R.</strong>, & Co-author, B. (2023). "[Title of Publication]." <em>Journal Name</em>, Volume(Issue), Pages. DOI.
              </li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                <span className="text-gray-500">2022</span> - <strong>Mahajan, R.</strong>, Author, C., & Co-author, D. (2022). "[Title of Publication]." <em>Journal Name</em>, Volume(Issue), Pages. DOI.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-3">Conference Proceedings</h3>
            <ul className="space-y-4">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                <span className="text-gray-500">2021</span> - <strong>Mahajan, R.</strong> & Co-author, E. (2021). "[Title of Conference Paper]." In <em>Proceedings of Conference Name</em>, Location. Pages.
              </li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                <span className="text-gray-500">2020</span> - Author, F., <strong>Mahajan, R.</strong>, & Co-author, G. (2020). "[Title of Conference Paper]." In <em>Proceedings of Conference Name</em>, Location. Pages.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Professional Experience</h2>
        </div>
        <Separator className="mb-6" />
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-medium">[Position Title]</h3>
              <span className="text-gray-500">2022 - Present</span>
            </div>
            <p className="text-primary font-medium">[Institution/Organization]</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                Responsibility or achievement description
              </li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                Responsibility or achievement description
              </li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                Responsibility or achievement description
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <h3 className="text-xl font-medium">[Previous Position]</h3>
              <span className="text-gray-500">2020 - 2022</span>
            </div>
            <p className="text-primary font-medium">[Institution/Organization]</p>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                Responsibility or achievement description
              </li>
              <li className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                Responsibility or achievement description
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards & Grants Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Awards & Grants</h2>
        </div>
        <Separator className="mb-6" />
        
        <div className="space-y-4">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="font-medium">[Award/Grant Name]</h3>
              <p className="text-gray-600">[Awarding Institution]</p>
            </div>
            <span className="text-gray-500">2023</span>
          </div>
          
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="font-medium">[Award/Grant Name]</h3>
              <p className="text-gray-600">[Awarding Institution]</p>
            </div>
            <span className="text-gray-500">2021</span>
          </div>
          
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <h3 className="font-medium">[Award/Grant Name]</h3>
              <p className="text-gray-600">[Awarding Institution]</p>
            </div>
            <span className="text-gray-500">2020</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-primary">Skills</h2>
        </div>
        <Separator className="mb-6" />
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h3 className="font-medium mb-2">Research Methods</h3>
            <p className="text-gray-600">
              Quantitative Analysis, Qualitative Research, Statistical Modeling, Experimental Design
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Technical Skills</h3>
            <p className="text-gray-600">
              Python, R, MATLAB, LaTeX, Data Visualization
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Languages</h3>
            <p className="text-gray-600">
              English (Native), Spanish (Intermediate), French (Basic)
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Software & Tools</h3>
            <p className="text-gray-600">
              SPSS, STATA, NVivo, ATLAS.ti, Microsoft Office Suite
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
