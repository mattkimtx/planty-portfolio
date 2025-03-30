
import React from 'react';
import { LeafyGreen, Fish } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <LeafyGreen className="h-5 w-5 text-plant-500" />
            <Fish className="h-5 w-5 text-plant-400" />
            <span className="font-display text-lg">Your Name</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Your Name. All rights reserved.
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
