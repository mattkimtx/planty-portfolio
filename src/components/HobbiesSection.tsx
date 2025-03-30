
import React from 'react';
import { Fish, Smartphone, Github, LeafyGreen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20 bg-plant-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Fish className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Hobbies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What I enjoy doing when I'm not coding
          </p>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="plant-card hover:border-plant-300 transition-all overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 bg-plant-100">
                <img 
                  src="/lovable-uploads/2fd2c1a1-d2b4-4ee3-bb85-91a1809c24c8.png" 
                  alt="Fly fishing" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Fly Fishing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">
                  I'm passionate about fly fishing in New England's beautiful rivers. 
                  When I'm not coding, you'll find me wading through streams looking for the perfect catch.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="plant-card hover:border-plant-300 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4 p-3 bg-plant-50 rounded-full">
                <Smartphone className="text-plant-500" size={32} />
              </div>
              <h3 className="font-display text-xl mb-4">Fishy Fishy Sticker App</h3>
              <p className="text-muted-foreground mb-6">
                I created my own iOS sticker app called "Fishy Fishy Sticker App" 
                which features custom fishing-themed stickers for iMessage.
              </p>
              <div className="mt-auto">
                <Button className="bg-plant-500 hover:bg-plant-600" asChild>
                  <a href="https://apps.apple.com/us/app/fishy-fishy-sticker-app/id6743358124?uo=2" target="_blank" rel="noopener noreferrer">
                    View on App Store
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="plant-card hover:border-plant-300 transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4 p-3 bg-plant-50 rounded-full">
                <Github className="text-plant-500" size={32} />
              </div>
              <h3 className="font-display text-xl mb-4">Open Source</h3>
              <p className="text-muted-foreground mb-6">
                I enjoy contributing to open source projects and building tools that help the developer community.
                Check out my GitHub: mattkimtx.
              </p>
              <div className="mt-auto">
                <Button variant="outline" className="border-plant-200 hover:bg-plant-50" asChild>
                  <a href="https://github.com/mattkimtx" target="_blank" rel="noopener noreferrer">
                    Visit GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
