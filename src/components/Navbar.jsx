import { useState, useEffect } from "react";
import { Home, User, Code, FolderKanban, GraduationCap, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const mobileNavItems = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="text-xl font-bold">
              <span className="text-gradient">KV</span>
            </a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {/* Home Button */}
              <a
                href="#hero"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group flex items-center gap-1"
              >
                <Home className="h-4 w-4 text-primary" />
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  <span className="text-primary font-mono mr-1">0{index + 1}.</span>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Button variant="hero" size="sm" asChild>
                <a href="/resume.pdf" download>Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-background border-t border-border"
        style={{ 
          paddingBottom: 'env(safe-area-inset-bottom, 8px)',
          transform: 'translateZ(0)',
          isolation: 'isolate'
        }}
      >
        <div className="flex items-center justify-around h-14 px-2 bg-background">
          {mobileNavItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex flex-col items-center justify-center gap-0.5 p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Spacer removed - footer handles bottom padding */}
    </>
  );
};

export default Navbar;
