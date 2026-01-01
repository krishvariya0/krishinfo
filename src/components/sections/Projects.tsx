import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MessageCircle, FileText, Users, Heart, Zap, ShoppingCart, Layout, Database, Lock, Palette, Globe } from "lucide-react";
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
      color: "from-cyan-500/20 to-blue-500/10",
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
      color: "from-purple-500/20 to-pink-500/10",
    },
  ];

  const otherProjects = [
    {
      title: "E-Commerce Dashboard",
      description: "An admin dashboard for managing products, orders, and analytics with charts and data visualization.",
      techStack: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      github: "https://github.com/krish-variya",
      icon: ShoppingCart,
    },
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template with smooth animations and modern design for developers.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/krish-variya",
      icon: Layout,
    },
    {
      title: "Task Manager API",
      description: "RESTful API for task management with user authentication, CRUD operations, and data validation.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/krish-variya",
      icon: Database,
    },
    {
      title: "Auth Starter Kit",
      description: "A complete authentication starter with email/password, OAuth, and protected routes.",
      techStack: ["Next.js", "NextAuth", "Prisma", "TypeScript"],
      github: "https://github.com/krish-variya",
      icon: Lock,
    },
    {
      title: "UI Component Library",
      description: "A collection of reusable, accessible React components with Storybook documentation.",
      techStack: ["React", "Storybook", "Radix UI", "CSS Modules"],
      github: "https://github.com/krish-variya",
      icon: Palette,
    },
    {
      title: "Weather App",
      description: "A weather application with location detection, 7-day forecast, and beautiful UI animations.",
      techStack: ["React", "Weather API", "Geolocation", "Tailwind CSS"],
      github: "https://github.com/krish-variya",
      icon: Globe,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 block">03. Projects</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Real-world applications I've built to solve problems and showcase my skills
          </p>
        </FadeIn>

        {/* Featured Projects */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 mb-12 sm:mb-16">
          {featuredProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <motion.div
                className="card-glass p-4 sm:p-6 lg:p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Project Info */}
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div>
                      <span className="text-primary font-mono text-xs sm:text-sm">Featured Project</span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-2">{project.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{project.subtitle}</p>
                    </div>

                    <p className="text-sm sm:text-base text-secondary-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        >
                          <feature.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span>{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-secondary/50 border border-border rounded-full text-secondary-foreground font-mono"
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
                    <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2">
                      <Button variant="outline" size="default" className="w-full xs:w-auto" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="hero" size="default" className="w-full xs:w-auto" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="lg:w-1/3 flex items-center justify-center order-first lg:order-last">
                    <motion.div 
                      className={`w-full aspect-square max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] rounded-2xl bg-gradient-to-br ${project.color} border border-primary/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">{project.title[0]}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Other Projects */}
        <FadeIn>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            Other Noteworthy <span className="text-gradient">Projects</span>
          </h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {otherProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="card-glass p-4 sm:p-6 h-full flex flex-col group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>

                <h4 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-xs bg-secondary/50 border border-border rounded-full text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
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
