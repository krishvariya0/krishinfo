// Simple smooth scroll utilities without Lenis

export const useLenis = () => {
  // No-op hook for compatibility
  return null;
};

// Scroll to element function using native smooth scroll
export const scrollToElement = (selector, offset = -80) => {
  const element = document.querySelector(selector);
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

// Scroll to top function
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
