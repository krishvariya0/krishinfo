import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLenis } from "@/hooks/useLenis";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize Lenis smooth scroll after loading completes
  useLenis();

  return (
    <>


      {/* Loading Screen with Lenis-inspired animations */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;