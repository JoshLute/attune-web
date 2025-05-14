
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CalendlyModal } from "@/components/CalendlyModal";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import DemoSection from "@/components/sections/DemoSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-50">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">attune</span>
        </div>
        <Button onClick={openModal} className="bg-primary hover:bg-primary/90">
          Join the Beta
        </Button>
      </header>

      <main>
        <HeroSection onJoinBeta={openModal} />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <SocialProofSection />
        <PricingSection onContactUs={openModal} />
        <FeaturesSection />
        <ResourcesSection />
        <AboutSection />
      </main>

      <Footer onJoinBeta={openModal} />
      
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
