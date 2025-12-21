import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Glowing line above name */}
        <div className="w-24 h-0.5 mx-auto mb-8 glow-line animate-fade-in-up" style={{ animationDelay: '0.2s' }} />
        
        {/* Name */}
        <h1 
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-gradient">Rudrapaka VVLD Pallavi</span>
        </h1>

        {/* Tagline */}
        <p 
          className="font-heading text-lg sm:text-xl md:text-2xl text-primary tracking-widest uppercase mb-8 neon-text animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Aspiring Software Developer Engineer
        </p>

        {/* Introduction */}
        <p 
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          I'm an aspiring software developer passionate about building responsive, 
          efficient, and visually appealing web interfaces.
        </p>

        {/* CTA Button */}
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <Button
            variant="neon"
            size="xl"
            onClick={scrollToProjects}
            className="group"
          >
            View My Work
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </div>

      {/* Side decorative lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 items-center">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
