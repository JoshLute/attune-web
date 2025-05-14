
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CalendlyModal } from "@/components/CalendlyModal";
import MainNavigationMenu from "@/components/NavigationMenu";
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
    <div className="min-h-screen bg-[#f0f4fa]">
      {/* Navigation */}
      <MainNavigationMenu onJoinBeta={openModal} />
      
      {/* Main Content with padding to account for fixed header */}
      <main className="pt-24">
        <HeroSection onJoinBeta={openModal} />
        <div id="problem"><ProblemSection /></div>
        <div id="solution"><SolutionSection /></div>
        <div id="demo"><DemoSection /></div>
        <div id="socialproof"><SocialProofSection /></div>
        <div id="pricing"><PricingSection onContactUs={openModal} /></div>
        <div id="features"><FeaturesSection /></div>
        <div id="resources"><ResourcesSection /></div>
        <div id="about"><AboutSection /></div>
      </main>

      <Footer onJoinBeta={openModal} />
      
      <CalendlyModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
