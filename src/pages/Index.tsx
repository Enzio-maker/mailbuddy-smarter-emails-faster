import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExamplesSection from "@/components/ExamplesSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PrivacySection from "@/components/PrivacySection";
import FooterCTA from "@/components/FooterCTA";
import VariantSwitcher from "@/components/VariantSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <ExamplesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <PrivacySection />
      <FooterCTA />
      <VariantSwitcher />
    </div>
  );
};

export default Index;
