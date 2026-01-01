import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at top, hsl(220 10% 12%), hsl(220 10% 4%))' }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      
      <div className="section-container relative z-10 text-center py-20">
        {/* Status badge */}
        <div className="animate-in opacity-0 animate-delay-100 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-in opacity-0 animate-delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Krish</span>{" "}
          <span className="text-gradient">Variya</span>
        </h1>

        {/* Role */}
        <p className="animate-in opacity-0 animate-delay-300 text-xl sm:text-2xl text-muted-foreground mb-4 font-mono">
          Frontend / Full-Stack Developer
        </p>

        {/* Tagline */}
        <p className="animate-in opacity-0 animate-delay-400 text-lg sm:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Building modern, responsive & real-world web applications using{" "}
          <span className="text-primary font-medium">React</span> &{" "}
          <span className="text-primary font-medium">Next.js</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-in opacity-0 animate-delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="hero" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-in opacity-0 animate-delay-500 flex items-center justify-center gap-4">
          <a 
            href="https://github.com/krish-variya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/krish-variya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:variyakrish0@gmail.com"
            className="p-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
