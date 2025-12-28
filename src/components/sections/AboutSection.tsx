import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-deep/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm lg:text-base mb-4 animate-fade-in">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">Ritika Kumar</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Building data-driven, AI-powered products.
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Data scientist and ML engineer based in Boston, focused on generative AI, retrieval systems, and production-grade ML. I enjoy turning research ideas into reliable products with solid MLOps, thoughtful evaluation, and clear storytelling.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com/ritikakumar0204"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200 hover:-translate-y-1 transform"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ritika-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200 hover:-translate-y-1 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kumar.riti@northeastern.edu"
              className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200 hover:-translate-y-1 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
