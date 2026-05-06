import { useState, useEffect } from "react";
import { Home, User, Code, FolderKanban, GraduationCap, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/hooks/useLenis";
import MobileNav from "./MobileNav";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Projects", href: "#projects", icon: FolderKanban },
    { label: "Education", href: "#education", icon: GraduationCap },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToElement(href);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center"
            aria-label="Krish Variya logo"
          >
            <img src={logo} alt="Krish Variya logo" className="h-9 w-9 object-contain" />
          </a>

          {/* Resume Button */}
          <Button variant="hero" size="sm" asChild>
            <a href="/resume.pdf" download className="flex items-center gap-1.5">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </header>

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
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center transition-transform duration-300 hover:scale-105"
              aria-label="Krish Variya logo"
            >
              <img src={logo} alt="Krish Variya logo" className="h-11 w-11 object-contain" />
            </a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {/* Home Button */}
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group flex items-center gap-1"
              >
                <Home className="h-4 w-4 text-primary" />
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
              </a>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                >
                  <span className="text-primary font-mono mr-1">0{index + 1}.</span>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
              <Button variant="hero" size="sm" className="transition-transform duration-300 hover:scale-105" asChild>
                <a href="/resume.pdf" download>Resume</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - rendered via portal */}
      <MobileNav />
    </>
  );
};

export default Navbar;
