import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Home, User, Code, FolderKanban, Mail } from "lucide-react";
import { scrollToElement } from "@/hooks/useLenis";

const MobileNav = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          return (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="flex flex-col items-center justify-center gap-0.5 p-2 text-muted-foreground hover:text-primary active:text-primary transition-colors duration-200"
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
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
