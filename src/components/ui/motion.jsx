import { motion } from "framer-motion";

// Standard smooth easing
const smoothEase = [0.25, 0.1, 0.25, 1];

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const FadeIn = ({ children, className, delay = 0, direction = "up", duration = 0.6 }) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
};

const ScaleIn = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
};

const SlideIn = ({ children, className, delay = 0, direction = "left" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};

const StaggerItem = ({ children, className }) => {
  return (
    <motion.div 
      className={className} 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: {
            duration: 0.5,
            ease: smoothEase,
          }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax effect component
const Parallax = ({ children, className, speed = 0.5 }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

// Reveal text animation
const RevealText = ({ children, className, delay = 0 }) => {
  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: smoothEase }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export { 
  motion, 
  FadeIn, 
  ScaleIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerItem, 
  Parallax,
  RevealText,
  fadeInVariants, 
  staggerContainer,
  smoothEase,
};
