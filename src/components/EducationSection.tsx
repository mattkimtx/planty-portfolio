
import React from 'react';
import { TreePine } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const educations = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2015 - 2017",
    description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Optimizing Neural Networks for Resource-Constrained Devices'.",
    achievements: ["Dean's List", "Research Assistant", "Published in ACM Conference"]
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    period: "2011 - 2015",
    description: "Comprehensive program covering software development methodologies, algorithms, data structures, and system design.",
    achievements: ["Graduated with Honors", "Software Development Club President", "Hackathon Winner"]
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    period: "Summer 2013",
    description: "Intensive 12-week program focused on full-stack web development and modern JavaScript frameworks.",
    achievements: ["Best Final Project", "Perfect Attendance"]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TreePine className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <Card key={index} className="plant-card h-full animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full inline-block mt-2">
                  {edu.period}
                </span>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{edu.description}</p>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Achievements:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {edu.achievements.map((achievement, idx) => (
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
