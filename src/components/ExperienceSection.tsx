
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
    title: "Lead Software Engineer",
    company: "Feast",
    period: "January 2025 - Current",
    description: "Developed a React Native app and React web platform using TypeScript for Feast, a B2B employee benefit platform connecting companies with private chefs. Collaborated with the CTO to implement user feedback-driven improvements, including automated email workflows, calendar scheduling via Cloud Run Functions (GCP), and chef payment processing with Stripe APIs and Webhooks.",
    technologies: ["React Native", "TypeScript", "React", "GCP", "Stripe API"]
  },
  {
    title: "Software Engineer Intern",
    company: "Microsoft",
    period: "June 2024 - August 2024",
    description: "Automated investigation of services failing uptime SLAs by developing 3 Scala Spark pipelines on Azure Synapse, analyzing log data from 7 authentication services across 9 regions, and visualizing results in Power BI. Optimized local Spark project build time from 20 minutes to under 3 minutes.",
    technologies: ["Scala", "Spark", "Azure Synapse", "Power BI"]
  },
  {
    title: "Software Engineer Intern",
    company: "Senao Networks",
    period: "September 2023 - February 2024",
    description: "Developed two full-stack web apps with Django and MongoDB for querying network packet data and managing firmware for routers, switches, and access points. Automated CI/CD with GitHub Actions and Docker, deploying to an Ubuntu EC2 server, improving efficiency.",
    technologies: ["Django", "MongoDB", "GitHub Actions", "Docker", "AWS EC2"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-14">
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
