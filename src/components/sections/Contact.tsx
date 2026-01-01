import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
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
      value: "github.com/krish-variya",
      href: "https://github.com/krish-variya",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">05. Contact</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactInfo.map((contact, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="card-glass p-6 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium text-foreground">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium text-foreground">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA Buttons */}
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:variyakrish0@gmail.com">
                <Send className="mr-2 h-5 w-5" />
                Send Me a Message
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
