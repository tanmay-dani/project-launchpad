import Navbar from "@/components/adobe/Navbar";
import HeroSection from "@/components/adobe/HeroSection";
import TrustpilotReviews from "@/components/adobe/TrustpilotReviews";
import WhatsIncluded from "@/components/adobe/WhatsIncluded";
import PricingComparison from "@/components/adobe/PricingComparison";
import FAQ from "@/components/adobe/FAQ";
import CTASection from "@/components/adobe/CTASection";
import Footer from "@/components/adobe/Footer";
import CustomCursor from "@/components/adobe/CustomCursor";
import FloatingBuyButton from "@/components/adobe/FloatingBuyButton";

const Index = () => {
  return (
    <div className="adobe-theme min-h-screen bg-background cursor-none md:cursor-auto">
      <CustomCursor />
      <Navbar />
      <main className="pb-28">
        <HeroSection />
        <TrustpilotReviews />
        <WhatsIncluded />
        <PricingComparison />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingBuyButton />
    </div>
  );
};

export default Index;