import Navbar from "@/components/linkedin/Navbar";
import HeroSection from "@/components/linkedin/HeroSection";
import ValueStack from "@/components/linkedin/ValueStack";
import ProblemSolution from "@/components/linkedin/ProblemSolution";
import WhatsIncluded from "@/components/linkedin/WhatsIncluded";
import ScarcityExplainer from "@/components/linkedin/ScarcityExplainer";
import TrustpilotReviews from "@/components/adobe/TrustpilotReviews";
import GuaranteeSection from "@/components/linkedin/GuaranteeSection";
import PricingComparison from "@/components/linkedin/PricingComparison";
import FAQ from "@/components/linkedin/FAQ";
import CTASection from "@/components/linkedin/CTASection";
import Footer from "@/components/linkedin/Footer";
import FloatingBuyButton from "@/components/linkedin/FloatingBuyButton";
import { ActivateModalProvider } from "@/components/linkedin/ActivateModal";

const LinkedInLanding = () => {
  return (
    <ActivateModalProvider>
      <div className="linkedin-theme min-h-screen bg-background">
        <Navbar />
        <main className="pb-28">
          {/* 1. Hook — Dream outcome + price anchor */}
          <HeroSection />
          {/* 2. Agitate — Pain without Premium vs Dream with it */}
          <ProblemSolution />
          {/* 3. Features — What they get (outcome-focused) */}
          <WhatsIncluded />
          {/* 4. Value Stack — Irresistible math */}
          <ValueStack />
          {/* 5. Price Comparison — Anchor high, reveal low */}
          <PricingComparison />
          {/* 6. Scarcity — Why it's cheap + urgency */}
          <ScarcityExplainer />
          {/* 7. Social Proof */}
          <div id="reviews">
            <TrustpilotReviews />
          </div>
          {/* 8. Risk Reversal — Pay after activation */}
          <GuaranteeSection />
          {/* 9. Objection Handling */}
          <FAQ />
          {/* 10. Final CTA — Close */}
          <CTASection />
        </main>
        <Footer />
        <FloatingBuyButton />
      </div>
    </ActivateModalProvider>
  );
};

export default LinkedInLanding;
