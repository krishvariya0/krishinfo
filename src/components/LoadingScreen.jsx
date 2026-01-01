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

  // Simple, smooth easing
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
          className="fixed inset-0 z-[999999] bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <div className="text-center px-4 w-full max-w-[95vw] sm:max-w-none">
            {/* Name with typing effect */}
            <h1 className="text-[clamp(1.75rem,8vw,6rem)] font-bold tracking-tight leading-tight">
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
