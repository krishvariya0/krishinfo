import { useEffect, useCallback } from "react";

export const useLenis = () => {
  const handleAnchorClick = useCallback((e) => {
    const target = e.target;
    const anchor = target.closest('a[href^="#"]');
    if (anchor) {
      e.preventDefault();
      const href = anchor.getAttribute("href");
      if (href && href !== "#") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [handleAnchorClick]);
};