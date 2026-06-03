import { Code, Rocket, Target } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: Rocket,
      title: "Modern Stack",
      description: "Using cutting-edge technologies and best practices"
    },
    {
      icon: Target,
      title: "User Focused",
      description: "Creating intuitive and accessible user experiences"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 block">01. About Me</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Passionate Developer & <span className="text-gradient">Problem Solver</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <FadeIn direction="up" className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed">
              <strong className="text-foreground">Krish Variya</strong> is a passionate Frontend and Full-Stack Developer currently pursuing a Bachelor of Computer Applications (BCA) at Vivekanand College for Advanced Computer and Information Science, Surat. I am building a strong foundation in programming, software development, and modern web technologies.
            </p>
            <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed">
              I actively work on <span className="text-primary font-medium">real-world web applications</span> and have a strong interest in frontend and full-stack web development. I have hands-on experience with HTML, CSS, JavaScript, React, Tailwind CSS, and Firebase, focusing on building responsive, user-friendly interfaces and implementing authentication and real-time data handling.
            </p>
            <p className="text-base sm:text-lg text-secondary-foreground leading-relaxed">
              I am highly motivated to keep learning, explore modern technologies like Next.js, and apply my skills to real-world challenges. I aim to grow as a developer and contribute to building impactful and scalable software solutions.
            </p>
          </FadeIn>

          {/* Highlights */}
          <StaggerContainer className="grid gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="card-glass p-4 sm:p-6 group cursor-default"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
