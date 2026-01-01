import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFirebase, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiNetlify 
} from "react-icons/si";
import { FadeIn, motion } from "@/components/ui/motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend / Services",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">02. Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in modern web development technologies and continuously expand my toolkit
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={categoryIndex} delay={categoryIndex * 0.1}>
              <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="card-glass p-4 flex flex-col items-center gap-3 cursor-default"
                  >
                    <skill.icon 
                      className="h-8 w-8 transition-transform duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
