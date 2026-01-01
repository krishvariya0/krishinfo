import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  const firstName = "Krish";
  const lastName = "Variya";

  // Smooth easing
  const smoothEase = [0.25, 0.1, 0.25, 1];

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.08,
        ease: smoothEase,
      },
    }),
  };

  const lastNameLetterVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5 + i * 0.08,
        ease: smoothEase,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          {/* Background gradient - matching hero section */}
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

          {/* Floating orb - matching hero section */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: smoothEase }}
          />

          <div className="text-center px-4 w-full max-w-[95vw] sm:max-w-none relative z-10">
            {/* Name with typing effect */}
            <h1 className="text-[clamp(1.75rem,8vw,6rem)] font-bold tracking-tight leading-tight mb-4 sm:mb-6">
              <span className="inline-flex text-foreground flex-wrap justify-center">
                {firstName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              
              <span className="inline-block w-[0.15em]"></span>
              
              <span className="inline-flex text-gradient flex-wrap justify-center">
                {lastName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={lastNameLetterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Blinking cursor */}
              <motion.span
                className="text-primary ml-[0.05em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.05 }}
              >
                |
              </motion.span>
            </h1>

            {/* Role - matching hero section style */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8, ease: smoothEase }}
            >
              Frontend / Full-Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
