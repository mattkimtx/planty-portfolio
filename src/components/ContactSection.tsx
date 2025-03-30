
import React from 'react';
import { Sprout, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission with an API call
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Sprout className="inline-block text-plant-500 mb-3" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="h-1 w-20 bg-plant-300 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="plant-card animate-fade-in-up">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="border-plant-100 focus:border-plant-300 focus:ring-plant-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-plant-100 focus:border-plant-300 focus:ring-plant-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="border-plant-100 focus:border-plant-300 focus:ring-plant-300"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-plant-500 hover:bg-plant-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6 flex flex-col justify-center animate-fade-in-up [animation-delay:200ms]">
            <div>
              <h3 className="text-2xl font-display font-medium mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-plant-500" />
                  <span>your.email@example.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-medium mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full border-plant-200 hover:bg-plant-50">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-plant-200 hover:bg-plant-50">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-plant-200 hover:bg-plant-50">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-medium mb-4">Resume</h3>
              <a href="/Resume.pdf" download>
                <Button variant="outline" className="border-plant-200 hover:bg-plant-50">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
