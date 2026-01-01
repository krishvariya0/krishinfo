import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { FadeIn, motion } from "@/components/ui/motion";

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative bg-secondary/20">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 block">04. Education</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </FadeIn>

        {/* Education Card */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="card-glass p-4 sm:p-6 lg:p-8"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Icon */}
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <p className="text-base sm:text-lg text-primary mt-1">Computer Science</p>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground">
                    Vivekanand College for Advanced Computer and Information Science
                  </p>

                  <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>Surat, Gujarat, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span>June 2024 - June 2028</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-secondary-foreground">
                    Building a strong foundation in programming, software development, and modern web technologies while actively working on real-world projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Education;
