import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "@/components/ui/motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 lg:py-12 pb-20 md:pb-12 border-t border-border bg-secondary/10">
      <div className="section-container">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
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
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Designed & Built with <Heart className="inline h-3 w-3 sm:h-4 sm:w-4 text-primary mx-1" /> by{" "}
              <span className="text-foreground font-medium">Krish Variya</span>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
