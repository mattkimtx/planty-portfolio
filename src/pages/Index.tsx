
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import HobbiesSection from '@/components/HobbiesSection';
import FunFactsSection from '@/components/FunFactsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <HobbiesSection />
        <FunFactsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
