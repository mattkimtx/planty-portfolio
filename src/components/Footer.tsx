
import React from 'react';
import { LeafyGreen, Fish, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <LeafyGreen className="h-5 w-5 text-plant-500" />
            <Fish className="h-5 w-5 text-plant-400" />
            <span className="font-display text-lg">Matthew Kim</span>
            <a 
              href="https://apps.apple.com/us/app/fishy-fishy-sticker-app/id6743358124?uo=2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-xs text-plant-500 hover:text-plant-600 flex items-center"
            >
              <Smartphone className="h-3 w-3 mr-1" />
              Fishy Fishy App
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Matthew Kim. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 text-sm">
            Made with <span className="text-plant-500">♥</span> and lots of coffee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
