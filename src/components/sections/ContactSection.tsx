import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <p className="text-primary font-mono text-sm mb-4">What's Next?</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Get In Touch</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Based in Boston and open to data science and ML engineering roles.
            If you want to chat about generative AI, research, or your next project,
            I'd love to hear from you.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="group px-8 py-6 text-base bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <a href="mailto:kumar.riti@northeastern.edu">
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Say Hello
              <Send className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/ritikakumar0204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/ritika-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pb-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            Designed & built with care by Ritika Kumar
          </p>
          <p className="text-center text-xs text-muted-foreground/60 mt-2">
            Copyright {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
