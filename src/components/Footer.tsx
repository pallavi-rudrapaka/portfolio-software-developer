import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border/30">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Main text */}
          <p className="font-body text-muted-foreground text-center flex items-center gap-2 flex-wrap justify-center">
            © 2025 Rudrapaka VVLD Pallavi | Built with 
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> 
            and passion for technology.
          </p>

          {/* Decorative element */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-1 h-1 rounded-full bg-secondary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
