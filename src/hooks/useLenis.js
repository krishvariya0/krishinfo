import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const element = document.querySelector(href);
          if (element) {
            lenis.scrollTo(element, { offset: -80 });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
};
