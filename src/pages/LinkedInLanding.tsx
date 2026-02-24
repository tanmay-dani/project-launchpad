import Navbar from "@/components/linkedin/Navbar";
import HeroSection from "@/components/linkedin/HeroSection";
import TrustpilotReviews from "@/components/adobe/TrustpilotReviews";
import WhatsIncluded from "@/components/linkedin/WhatsIncluded";
import PricingComparison from "@/components/linkedin/PricingComparison";
import FAQ from "@/components/linkedin/FAQ";
import CTASection from "@/components/linkedin/CTASection";
import Footer from "@/components/linkedin/Footer";
import FloatingBuyButton from "@/components/linkedin/FloatingBuyButton";

const LinkedInLanding = () => {
  return (
    <div className="linkedin-theme min-h-screen bg-background">
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

export default LinkedInLanding;
