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
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  const firstName = "Krish";
  const lastName = "Variya";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999999] bg-background flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <motion.span
                className="text-foreground inline-block overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {firstName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.2 + index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <span className="inline-block w-2 sm:w-3"></span>
              <motion.span
                className="text-gradient inline-block overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              >
                {lastName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.8 + index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="text-primary ml-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              >
                |
              </motion.span>
            </h1>
            
            {/* Subtitle animation */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted-foreground font-mono mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
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