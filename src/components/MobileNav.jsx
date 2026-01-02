import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Home, User, Code, FolderKanban, Mail } from "lucide-react";
import { scrollToElement } from "@/hooks/useLenis";

const MobileNav = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href, -20);
  };

  const navContent = (
    <nav 
      className="md:hidden bg-background border-t border-border"
      style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
        transform: 'none',
        willChange: 'auto',
        backfaceVisibility: 'hidden',
      }}
    >
      <div className="flex items-center justify-around h-14 px-2">
        {mobileNavItems.map((item, index) => {
          const Icon = item.icon;
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex flex-col items-center justify-center gap-0.5 p-2 transition-colors duration-200 ${
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary active:text-primary"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "scale-110" : ""} transition-transform duration-200`} />
              <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );

  if (mounted) {
    return createPortal(navContent, document.body);
  }

  return null;
};

export default MobileNav;
