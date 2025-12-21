import { Helmet } from 'react-helmet-async';
import AnimatedBackground from '@/components/AnimatedBackground';
import GeometricShapes from '@/components/GeometricShapes';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rudrapaka VVLD Pallavi | Aspiring Software Developer Engineer</title>
        <meta 
          name="description" 
          content="Portfolio of Rudrapaka VVLD Pallavi, an aspiring software developer passionate about building responsive, efficient, and visually appealing web interfaces." 
        />
        <meta name="keywords" content="software developer, web development, frontend, portfolio, React, JavaScript" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Animated backgrounds */}
        <AnimatedBackground />
        <GeometricShapes />

        {/* Scan line effect */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.02]">
          <div className="absolute w-full h-px bg-primary animate-scan-line" />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
