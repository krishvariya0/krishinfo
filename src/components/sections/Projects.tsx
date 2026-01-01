import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MessageCircle, FileText, Users, Heart, Zap } from "lucide-react";
import { FadeIn, motion } from "@/components/ui/motion";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Chatza",
      subtitle: "Social Media Web App",
      description: "A modern social media web application inspired by Instagram/Twitter, built as a portfolio-grade full-stack project with real-time interactions and a sleek dark-theme UI.",
      features: [
        { icon: Users, text: "User Authentication" },
        { icon: Heart, text: "Posts, Likes & Comments" },
        { icon: Zap, text: "Real-time Interactions" },
        { icon: MessageCircle, text: "User Profiles" },
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
      github: "https://github.com/krish-variya/chatza",
      live: "#",
    },
    {
      title: "Fexora",
      subtitle: "Modern Blog Platform",
      description: "A clean and modern blog platform focused on UI clarity and real-time content management with comprehensive authentication and responsive design.",
      features: [
        { icon: FileText, text: "Blog CRUD Operations" },
        { icon: Users, text: "User Authentication" },
        { icon: Zap, text: "Real-time Updates" },
      ],
      techStack: ["React", "Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/krish-variya/fexora",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">03. Projects</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications I've built to solve problems and showcase my skills
          </p>
        </FadeIn>

        {/* Featured Projects */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <motion.div
                className="card-glass p-6 sm:p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <span className="text-primary font-mono text-sm">Featured Project</span>
                      <h3 className="text-2xl sm:text-3xl font-bold mt-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>

                    <p className="text-secondary-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        >
                          <feature.icon className="h-4 w-4 text-primary" />
                          <span>{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-secondary/50 border border-border rounded-full text-secondary-foreground font-mono"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-2">
                      <Button variant="outline" size="lg" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="hero" size="lg" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="lg:w-1/3 flex items-center justify-center">
                    <motion.div 
                      className="w-full aspect-square max-w-[280px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-6xl font-bold text-gradient">{project.title[0]}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
