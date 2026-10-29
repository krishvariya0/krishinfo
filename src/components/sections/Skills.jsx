import { useState } from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPhp,
  SiPython,
  SiFirebase, 
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiNetlify,
  SiFigma,
  SiDocker
} from "react-icons/si";
import { FileCode2 } from "lucide-react";
import { FadeIn, motion, smoothEase } from "@/components/ui/motion";

const SkillCard = ({ skill, skillIndex, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const detailsId = `skill-details-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const reveal = (event) => {
    if (event.pointerType !== "touch") setIsOpen(true);
  };

  const dismiss = (event) => {
    if (event.pointerType !== "touch") setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: skillIndex * 0.05, ease: smoothEase }}
      whileHover={{ y: -5, scale: 1.05 }}
      onPointerEnter={reveal}
      onPointerLeave={dismiss}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      className={`relative ${isOpen ? "z-30" : "z-0"}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-describedby={isOpen ? detailsId : undefined}
        onClick={() => {
          if (window.matchMedia("(hover: none)").matches) {
            setIsOpen((current) => !current);
          }
        }}
        className="card-glass p-3 sm:p-4 w-full min-h-full flex flex-col items-center gap-2 sm:gap-3 cursor-pointer text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <skill.icon
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 transition-all duration-300"
          style={{ color: skill.color }}
        />
        <span className="text-xs sm:text-sm font-medium text-center leading-tight">{skill.name}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={detailsId}
            role="region"
            aria-label={`${skill.name} details`}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2, ease: smoothEase }}
            className="card-glass absolute left-1/2 top-full z-40 mt-3 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 p-4 text-left shadow-[var(--shadow-glow)]"
          >
            <span className="text-xs font-mono text-primary">{details.eyebrow}</span>
            <h4 className="mt-1 text-base font-semibold text-foreground">{skill.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{details.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {details.topics.map((topic) => (
                <span key={topic} className="rounded-sm border border-border/70 bg-secondary/70 px-2 py-1 text-xs text-secondary-foreground">
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: SiHtml5,
          color: "#E34F26",
          details: {
            eyebrow: "MARKUP",
            description: "Builds the structure and meaning of web pages with clear, semantic elements.",
            topics: ["Semantic HTML", "Accessible forms", "Metadata"],
          },
        },
        {
          name: "CSS3",
          icon: FileCode2,
          color: "#1572B6",
          details: {
            eyebrow: "STYLESHEETS",
            description: "Shapes responsive layouts and brings interfaces to life with reusable styles and motion.",
            topics: ["Flexbox & Grid", "Responsive design", "Transitions"],
          },
        },
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
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
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
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
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
                  skill.details ? (
                    <SkillCard key={skill.name} skill={skill} skillIndex={skillIndex} details={skill.details} />
                  ) : (
                    <motion.div
                      key={skill.name}
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
                  )
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
