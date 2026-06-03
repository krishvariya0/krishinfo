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
      <Helmet>
        <title>Krish Variya | Portfolio</title>
        <meta
          name="description"
          content="Welcome to the official portfolio of Krish Variya. Explore my projects, skills, and professional experience."
        />
        <meta
          name="keywords"
          content="Krish Variya, Web Developer, Frontend Developer, Full-Stack Developer, React, Next.js, JavaScript, TypeScript, Tailwind CSS, Portfolio"
        />
        <meta name="author" content="Krish Variya" />
        <link rel="canonical" href="https://krishvariya.me" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Krish Variya | Portfolio" />
        <meta
          property="og:description"
          content="Welcome to the official portfolio of Krish Variya. Explore my projects, skills, and professional experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishvariya.me" />
        <meta property="og:site_name" content="Krish Variya Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@krishvariya" />
        <meta name="twitter:title" content="Krish Variya | Portfolio" />
        <meta
          name="twitter:description"
          content="Welcome to the official portfolio of Krish Variya. Explore my projects, skills, and professional experience."
        />
      </Helmet>

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