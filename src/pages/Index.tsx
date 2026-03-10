import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import AudienceSection from "@/components/AudienceSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExamplesSection from "@/components/ExamplesSection";
import PricingSection from "@/components/PricingSection";
import PrivacySection from "@/components/PrivacySection";
import FooterCTA from "@/components/FooterCTA";
import VariantSwitcher from "@/components/VariantSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VariantSwitcher />
      <Navbar />
      <HeroSection />
      <StepsSection />
      <AudienceSection />
      <BenefitsSection />
      <ExamplesSection />
      <PricingSection />
      <PrivacySection />
      <FooterCTA />
    </div>
  );
};

export default Index;
