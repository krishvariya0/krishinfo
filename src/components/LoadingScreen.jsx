import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth effects
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Progress animation
    const duration = 3000;
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);
      
      if (newProgress < 1) {
        requestAnimationFrame(updateProgress);
      }
    };
    
    requestAnimationFrame(updateProgress);

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
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [onComplete]);

  const firstName = "Krish";
  const lastName = "Variya";

  // Lenis-inspired easing function
  const lenisEasing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

  // Custom spring animation config inspired by Lenis smoothness
  const lenisTransition = {
    type: "spring",
    damping: 30,
    stiffness: 200,
    mass: 0.8,
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        ...lenisTransition,
        delay: i * 0.08,
      },
    }),
  };

  const lastNameLetterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        ...lenisTransition,
        delay: 0.6 + i * 0.08,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999999] bg-background flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Background grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.02]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Floating orb effect */}
          <motion.div 
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 0.3, 0.2],
            }}
            transition={{ 
              duration: 2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />

          <div className="text-center relative z-10" style={{ perspective: "1000px" }}>
            {/* Name with 3D typing effect */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex text-foreground" style={{ transformStyle: "preserve-3d" }}>
                {firstName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              
              <span className="inline-block w-3 sm:w-4"></span>
              
              <span className="inline-flex text-gradient" style={{ transformStyle: "preserve-3d" }}>
                {lastName.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={lastNameLetterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ transformOrigin: "bottom center" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Blinking cursor */}
              <motion.span
                className="text-primary ml-1 inline-block"
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.1 }}
              >
                |
              </motion.span>
            </motion.h1>
            
            {/* Subtitle with smooth reveal */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted-foreground font-mono mt-6"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 0.8, 
                delay: 1.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Frontend / Full-Stack Developer
            </motion.p>

            {/* Progress bar */}
            <motion.div 
              className="mt-8 w-48 sm:w-64 h-0.5 bg-border/30 rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <motion.div 
                className="h-full bg-primary rounded-full"
                style={{ 
                  width: `${progress * 100}%`,
                  transition: "width 0.1s ease-out"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;