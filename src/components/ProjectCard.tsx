import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, tools, githubUrl, liveUrl, index }: ProjectCardProps) => {
  return (
    <div
      className="group relative glass-panel rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] overflow-hidden"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Project number */}
      <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors duration-300">
        0{index + 1}
      </span>

      <div className="relative z-10">
        {/* Title */}
        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs font-body tracking-wide rounded-full border border-border bg-muted/30 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="group/btn"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="group/btn"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default ProjectCard;
