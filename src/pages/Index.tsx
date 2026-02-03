import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SchoolFinderSection from "@/components/SchoolFinderSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import StatsSection from "@/components/StatsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <SchoolFinderSection />
        <AboutSection />
        <ProgramsSection />
        <StatsSection />
        <CampusLifeSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
