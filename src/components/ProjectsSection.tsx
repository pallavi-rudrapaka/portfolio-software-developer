import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project Name One',
    description: 'A brief description of your first project. Explain what problem it solves, the key features, and what makes it unique or interesting.',
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Name Two',
    description: 'A brief description of your second project. Highlight the main functionality and any interesting technical challenges you overcame.',
    tools: ['JavaScript', 'Node.js', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Name Three',
    description: 'A brief description of your third project. Share what you learned from this project and any innovative approaches you took.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-0.5 mx-auto glow-line mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A showcase of my work and passion projects. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* Add more projects hint */}
        <div className="text-center mt-12">
          <p className="font-body text-sm text-muted-foreground">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
