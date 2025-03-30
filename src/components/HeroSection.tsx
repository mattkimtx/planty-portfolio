
import React from 'react';
import { LeafyGreen, Download, Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Decorative elements */}
      <div className="absolute -z-10 top-20 right-20 opacity-10">
        <LeafyGreen size={200} className="text-plant-500" />
      </div>
      <div className="absolute -z-10 bottom-20 left-10 opacity-10">
        <LeafyGreen size={120} className="text-plant-400 rotate-45" />
      </div>
      <div className="absolute -z-10 top-40 left-20 opacity-10 animate-[leaf-sway_8s_ease-in-out_infinite]">
        <Fish size={100} className="text-plant-400" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up [animation-delay:200ms]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hello, I'm <span className="text-plant-500">Matthew Kim</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Software Engineer & Outdoor Enthusiast
            </p>
            <p className="text-lg mb-8 max-w-lg">
              I build beautiful, responsive, and user-friendly applications with a focus on clean code and sustainable practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-plant-500 hover:bg-plant-600">
                Contact Me
              </Button>
              <Button variant="outline" className="border-plant-200 hover:bg-plant-50">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-plant-100 to-plant-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-plant-500 font-medium text-lg">
                Matthew's Photo Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
