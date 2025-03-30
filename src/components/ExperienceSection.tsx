
import React from 'react';
import { TreeDeciduous } from 'lucide-react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription 
} from '@/components/ui/card';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "Jan 2022 - Present",
    description: "Led the development of a real-time analytics dashboard using React and Node.js. Improved system performance by 40% through code optimization and refactoring legacy systems.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"]
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions Ltd.",
    period: "May 2019 - Dec 2021",
    description: "Developed and maintained full-stack web applications for clients in the finance sector. Implemented responsive UIs and RESTful APIs serving thousands of users.",
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Docker"]
  },
  {
    title: "Junior Developer",
    company: "WebCraft Studio",
    period: "Aug 2017 - Apr 2019",
    description: "Created responsive websites and e-commerce solutions for small businesses. Collaborated with designers to implement pixel-perfect UIs and optimize user experiences.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TreeDeciduous className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-5 bottom-5 w-0.5 bg-plant-200 hidden md:block" style={{ left: '23px' }}></div>
          
          {experiences.map((job, index) => (
            <div key={index} className="md:pl-12 relative animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 w-6 h-6 rounded-full border-2 border-plant-300 bg-white hidden md:block"></div>
              
              <Card className="plant-card overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-wrap">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
