
import React from 'react';
import { Leaf, Trees, Coffee, BookOpen, Plane, Music, Fish, LocateFixed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const funFacts = [
  {
    icon: <Fish className="leaf-icon" size={24} />,
    title: "Fly Fishing Enthusiast",
    description: "I spend weekends fly fishing in New England's beautiful rivers. My favorite spots include the Farmington and Deerfield Rivers."
  },
  {
    icon: <Leaf className="leaf-icon" size={24} />,
    title: "Plant Parent",
    description: "I own over 30 houseplants and counting. My favorite is my 5-year-old Monstera Deliciosa."
  },
  {
    icon: <Coffee className="leaf-icon" size={24} />,
    title: "Coffee Enthusiast",
    description: "I've visited over 100 specialty coffee shops and can tell the difference between beans from Ethiopia and Colombia."
  },
  {
    icon: <BookOpen className="leaf-icon" size={24} />,
    title: "Avid Reader",
    description: "I read 30+ books per year. My favorite genres include science fiction, popular science, and biographies."
  },
  {
    icon: <LocateFixed className="leaf-icon" size={24} />,
    title: "Nature Explorer",
    description: "I map out and document New England's hidden fishing spots and trails, combining my love for technology and the outdoors."
  },
  {
    icon: <Trees className="leaf-icon" size={24} />,
    title: "Trail Runner",
    description: "I run on forest trails three times a week and have completed two half-marathons."
  },
];

const FunFactsSection = () => {
  return (
    <section id="fun-facts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Trees className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fun Facts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A few interesting things about me beyond coding
          </p>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funFacts.map((fact, index) => (
            <Card 
              key={index} 
              className="plant-card h-full animate-fade-in-up hover:border-plant-300 transition-all" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-plant-50 rounded-full">
                  {fact.icon}
                </div>
                <h3 className="font-display text-xl mb-2">{fact.title}</h3>
                <p className="text-muted-foreground">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
