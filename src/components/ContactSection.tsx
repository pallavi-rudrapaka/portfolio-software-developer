import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'secondary',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@yourusername',
    href: 'https://github.com/yourusername',
    color: 'primary',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact Me</span>
          </h2>
          <div className="w-24 h-0.5 mx-auto glow-line mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Let's connect! Feel free to reach out for collaborations or opportunities.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 glass-panel rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_hsl(var(--primary)/0.2)] min-w-[280px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-3 rounded-lg ${link.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-secondary/10 group-hover:bg-secondary/20'} transition-colors duration-300`}>
                <link.icon className={`w-6 h-6 ${link.color === 'primary' ? 'text-primary' : 'text-secondary'} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-left">
                <p className="font-body text-sm text-muted-foreground">{link.label}</p>
                <p className="font-body text-foreground group-hover:text-primary transition-colors duration-300">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="neon-purple"
            size="xl"
            asChild
            className="group"
          >
            <a href="mailto:your.email@example.com">
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
