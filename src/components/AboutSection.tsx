import { Code, Palette, Zap } from 'lucide-react';
const AboutSection = () => {
  const skills = [{
    icon: Code,
    label: 'Clean Code',
    color: 'primary'
  }, {
    icon: Palette,
    label: 'Creative Design',
    color: 'secondary'
  }, {
    icon: Zap,
    label: 'Fast Learning',
    color: 'primary'
  }];
  return <section id="about" className="relative py-32 overflow-hidden">
      {/* Section background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-0.5 mx-auto glow-line" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar / Visual Element */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow opacity-20 blur-xl scale-110" />
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full gradient-border p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  {/* Placeholder for avatar - using initials */}
                  <div className="text-center">
                    <span className="font-heading text-5xl md:text-6xl font-bold text-gradient">
                      RP
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-2 tracking-wider">
                      Developer
                    </p>
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin-slow" style={{
              animationDuration: '15s'
            }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{
              animationDuration: '20s',
              animationDirection: 'reverse'
            }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed"><span className="text-primary font-semibold">Rudrapaka VVLD Pallavi</span></p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">I love turning creative ideas into interactive, user-friendly experiences. I'm driven by curiosity, continuous learning, and a passion for futuristic web design.<span className="text-primary"> HTML</span>, 
              <span className="text-secondary"> CSS</span>​ and   
              <span className="text-primary"> JavaScript</span>​             
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-4 pt-6">
              {skills.map((skill, index) => <div key={skill.label} className="flex items-center gap-3 px-5 py-3 glass-panel rounded-xl hover:border-primary/50 transition-all duration-300 group" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <skill.icon className={`w-5 h-5 ${skill.color === 'primary' ? 'text-primary' : 'text-secondary'} group-hover:scale-110 transition-transform`} />
                  <span className="font-body text-sm text-foreground/80">{skill.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;