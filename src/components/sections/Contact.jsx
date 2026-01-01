import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, motion } from "@/components/ui/motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "variyakrish0@gmail.com",
      href: "mailto:variyakrish0@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/krish-variya",
      href: "https://www.linkedin.com/in/krish-variya",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/krishvariya0",
      href: "https://github.com/krishvariya0",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "instagram.com/krxsh.in",
      href: "https://www.instagram.com/krxsh.in/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm mb-3 sm:mb-4 block">05. Contact</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {contactInfo.map((contact, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="card-glass p-4 sm:p-6 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <contact.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-sm sm:text-base font-medium text-foreground truncate">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary">
                        <contact.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-sm sm:text-base font-medium text-foreground truncate">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Buttons */}
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="mailto:variyakrish0@gmail.com">
                <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Send Me a Message
              </a>
            </Button>
            <Button variant="heroOutline" size="default" className="w-full sm:w-auto" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button variant="heroOutline" size="default" className="w-full sm:w-auto" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
