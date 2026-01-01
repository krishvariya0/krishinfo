import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Krish Variya | Frontend & Full-Stack Developer</title>
        <meta
          name="description"
          content="Krish Variya - Frontend and Full-Stack Developer specializing in React, Next.js, and TypeScript. Building modern, responsive web applications."
        />
        <meta
          name="keywords"
          content="Krish Variya, Web Developer, Frontend Developer, Full-Stack Developer, React, Next.js, TypeScript, Tailwind CSS"
        />
        <meta name="author" content="Krish Variya" />
        <link rel="canonical" href="https://krishvariya.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Krish Variya | Frontend & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Building modern, responsive & real-world web applications using React & Next.js"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishvariya.dev" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Krish Variya | Frontend & Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="Building modern, responsive & real-world web applications using React & Next.js"
        />
      </Helmet>

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