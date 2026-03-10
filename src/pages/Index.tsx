import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExamplesSection from "@/components/ExamplesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import PrivacySection from "@/components/PrivacySection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <ExamplesSection />
      <PricingSection />
      <FAQSection />
      <PrivacySection />
      <FooterCTA />
    </div>
  );
};

export default Index;
