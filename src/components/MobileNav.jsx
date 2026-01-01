import { createPortal } from "react-dom";
import { Home, User, Code, FolderKanban, Mail } from "lucide-react";

const MobileNav = () => {
  const mobileNavItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const navContent = (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border"
      style={{ 
        zIndex: 99999,
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
      }}
    >
      <div className="flex items-center justify-around h-14 px-2">
        {mobileNavItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
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

  // Use portal to render outside of any parent transforms/overflows
  if (typeof document !== 'undefined') {
    return createPortal(navContent, document.body);
  }

  return navContent;
};

export default MobileNav;