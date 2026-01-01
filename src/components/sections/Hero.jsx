import { Button } from "@/components/ui/button";
import { motion, smoothEase } from "@/components/ui/motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { scrollToElement } from "@/hooks/useLenis";

const Hero = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    scrollToElement("#about");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16 md:pt-0">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at top, hsl(220 10% 12%), hsl(220 10% 4%))' }}
      />
      
      {/* Subtle grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating orb - responsive sizing */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 1,
          y: [0, -20, 0],
        }}
        transition={{ 
          scale: { duration: 1, ease: smoothEase },
          opacity: { duration: 1, ease: smoothEase },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <div className="section-container relative z-10 text-center py-16 sm:py-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
          className="mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary/50 border border-border text-xs sm:text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
        >
          <span className="text-foreground">Krish</span>{" "}
          <span className="text-gradient">Variya</span>
        </motion.h1>

        {/* Role */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: smoothEase }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 font-mono"
        >
          Frontend / Full-Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: smoothEase }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-foreground max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Building modern, responsive & real-world web applications using{" "}
          <span className="text-primary font-medium">React</span> &{" "}
          <span className="text-primary font-medium">Next.js</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: smoothEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          <Button variant="hero" size="lg" className="w-full sm:w-auto transition-transform duration-300 hover:scale-105" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="w-full sm:w-auto transition-transform duration-300 hover:scale-105" asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: smoothEase }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a 
            href="https://github.com/krishvariya0" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/krish-variya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
          <motion.a 
            href="mailto:variyakrish0@gmail.com"
            className="p-2.5 sm:p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator - hidden on mobile to avoid overlap with bottom nav */}
        <motion.div 
          className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          }}
          onClick={handleScrollDown}
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
