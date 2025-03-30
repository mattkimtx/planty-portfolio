import React, { useRef, useEffect, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { Sprout, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Initialize with your public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Show loading toast
    toast({
      title: "Sending message...",
      description: "Please wait while your message is being sent.",
    });
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        (result) => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
        },
        (error) => {
          toast({
            title: "Failed to send message",
            description: "Something went wrong. Please try again later.",
          });
        }
      );
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
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="user_name"
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
                    name="user_email"
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
                    name="user_message"
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
                  <a href="mailto:mattjkim.me@gmail.com" className="hover:text-plant-600 transition-colors">
                    mattjkim.me@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-medium mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/mattkimtx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-plant-200 hover:bg-plant-50 hover:border-plant-500 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/matthewkim25/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-plant-200 hover:bg-plant-50 hover:border-plant-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://www.instagram.com/_math_u_/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full border-plant-200 hover:bg-plant-50 hover:border-plant-500 transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </a>
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
