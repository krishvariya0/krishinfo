import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFirebase, 
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiNetlify,
  SiFigma
} from "react-icons/si";
import { FadeIn, motion, smoothEase } from "@/components/ui/motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend / Databases",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Vercel", icon: SiVercel, color: "#ffffff" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative bg-secondary/20 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 block">02. Skills</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            I specialize in modern web development technologies and continuously expand my toolkit
          </p>
        </FadeIn>

        {/* Skills Grid */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={categoryIndex} delay={categoryIndex * 0.1}>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05, ease: smoothEase }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="card-glass p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3 cursor-default"
                  >
                    <skill.icon 
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs sm:text-sm font-medium text-center leading-tight">{skill.name}</span>
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
