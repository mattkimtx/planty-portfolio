
import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'fun-facts', label: 'Fun Facts' },
    { id: 'contact', label: 'Contact' },
  ];

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Button
          key={link.id}
          variant="ghost"
          className={`font-medium ${
            activeSection === link.id 
              ? 'text-plant-600 bg-plant-50' 
              : 'text-foreground hover:text-plant-600 hover:bg-plant-50'
          }`}
          onClick={() => scrollToSection(link.id)}
        >
          {link.label}
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-plant-500" />
          <span className="font-display text-xl font-medium">Portfolio</span>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <ThemeToggle />
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-2 mt-8">
                <NavLinks />
                <div className="pt-4 flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex md:items-center md:space-x-1">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
