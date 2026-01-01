import { useEffect, useRef, createContext, useContext } from "react";
import Lenis from "lenis";

// Create a context to share Lenis instance
const LenisContext = createContext(null);

export const useLenisContext = () => useContext(LenisContext);

export const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame loop
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    const animationId = requestAnimationFrame(raf);

    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest('a[href^="#"]');
      if (anchor && lenisRef.current) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const element = document.querySelector(href);
          if (element) {
            lenisRef.current.scrollTo(element, { 
              offset: -80,
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Expose lenis to window for debugging
    window.lenis = lenisRef.current;

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("click", handleAnchorClick);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      delete window.lenis;
    };
  }, []);

  return lenisRef;
};

// Scroll to element function that can be used anywhere
export const scrollToElement = (selector, offset = -80) => {
  if (window.lenis) {
    const element = document.querySelector(selector);
    if (element) {
      window.lenis.scrollTo(element, { 
        offset,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  }
};

// Scroll to top function
export const scrollToTop = () => {
  if (window.lenis) {
    window.lenis.scrollTo(0, { 
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }
};