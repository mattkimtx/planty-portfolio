
import React from 'react';
import { TreePine, BookOpen, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const educations = [
  {
    degree: "Bachelor of Arts",
    institution: "Dartmouth College",
    location: "Hanover, NH",
    period: "September 2021 - June 2025",
    description: "Double Major in Computer Science and Chinese Language. GPA: 3.67/4.0",
    achievements: [
      "Relevant Coursework: Operating Systems, Computer Architecture, Database Systems",
      "UI/UX, Full Stack Web Development, Discrete Mathematics",
      "Algorithms, Software Design and Implementation, Object-Oriented Programming"
    ]
  }
];

const projects = [
  {
    name: "MeetMe",
    period: "September 2024 - March 2025",
    role: "Senior Design and Implementation Course Participant",
    description: "Developed a full-stack iOS app with SwiftUI for Google Calendar and Apple Calendar integration, enabling cross-platform event comparison and scheduling in group chats.",
    achievements: [
      "Built and taught teammates how to use Django, implementing a REST API",
      "Implemented Google Calendar API calls and Celery with Redis for async tasks",
      "Led project planning, created Figma prototypes, conducted user testing with 40 participants"
    ]
  },
  {
    name: "Yalnix",
    period: "January 2025 - March 2025",
    role: "Operating Systems Course Participant",
    description: "Built a custom OS kernel for Yalnix Operating System on the DCS 58 architecture, implementing virtual memory management, process scheduling, and system calls.",
    achievements: [
      "Designed and implemented page tables, TLB management, and kernel context switching",
      "Developed system traps, interrupts, and exception handling",
      "Improved system stability and performance through efficient memory protection"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-14 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TreePine className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          {educations.map((edu, index) => (
            <Card key={index} className="plant-card h-full animate-fade-in-up shadow-md hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-plant-600">{edu.degree}</CardTitle>
                <CardDescription className="text-base">{edu.institution}, {edu.location}</CardDescription>
                <span className="text-sm text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full inline-block mt-2 border border-secondary">
                  {edu.period}
                </span>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="mb-4 text-sm text-muted-foreground">{edu.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-plant-500">Coursework:</h4>
                  <ul className="list-disc list-outside ml-5 text-sm text-muted-foreground space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <Code className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Projects</h2>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="plant-card h-full animate-fade-in-up shadow-md hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-plant-600">{project.name}</CardTitle>
                <CardDescription className="text-base">{project.role}</CardDescription>
                <span className="text-sm text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full inline-block mt-2 border border-secondary">
                  {project.period}
                </span>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="mb-4 text-sm">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-plant-500">Key Accomplishments:</h4>
                  <ul className="list-disc list-outside ml-5 text-sm text-muted-foreground space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
