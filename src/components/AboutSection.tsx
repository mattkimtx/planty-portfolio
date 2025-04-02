
import React from 'react';
import { Sprout, Code, Heart, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-14 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Sprout className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a passionate software engineer and double major in Computer Science and Chinese Language at Dartmouth College. 
              With a strong foundation in both front-end and back-end technologies, I enjoy building applications 
              that are not only functional but also intuitive and visually appealing.
            </p>
            
            <p className="text-lg mb-8">
              When I'm not coding, you'll find me fly fishing in New England's beautiful rivers, exploring nature,
              or working on my next software project.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Code className="mr-2 text-plant-500" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center">
                <Heart className="mr-2 text-plant-500" />
                <span>User Experience</span>
              </div>
              <div className="flex items-center">
                <Sprout className="mr-2 text-plant-500" />
                <span>Sustainable Practices</span>
              </div>
              <div className="flex items-center">
                <Coffee className="mr-2 text-plant-500" />
                <span>Coffee Enthusiast</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Frontend", skills: ["React", "React Native", "TypeScript", "JavaScript", "HTML/CSS"] },
              { title: "Backend", skills: ["Python", "Java", "C", "Node.js", "Django"] },
              { title: "Databases", skills: ["SQL", "MongoDB", "Redis"] },
              { title: "Tools", skills: ["Git", "Docker", "AWS", "Azure", "Google Cloud"] }
            ].map((category, index) => (
              <Card key={index} className="plant-card animate-fade-in-up [animation-delay:300ms]">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-3">{category.title}</h3>
                  <ul className="space-y-1">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
