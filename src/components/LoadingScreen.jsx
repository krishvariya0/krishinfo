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
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.08,
        ease: smoothEase,
      },
    }),
  };

  const lastNameLetterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5 + i * 0.08,
        ease: smoothEase,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: smoothEase }}
        >
          <div className="text-center px-4 w-full">
            {/* Name with typing effect */}
            <h1 className="text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight mb-3 sm:mb-4 md:mb-6 whitespace-nowrap">
              <span className="text-foreground">
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
              
              <span className="inline-block w-[2vw] sm:w-3 md:w-4"></span>
              
              <span className="text-gradient">
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
                className="text-primary ml-1"
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.05 }}
              >
                |
              </motion.span>
            </h1>

            {/* Role */}
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8, ease: smoothEase }}
            >
              Full-Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
