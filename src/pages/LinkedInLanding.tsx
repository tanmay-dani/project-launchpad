import Navbar from "@/components/linkedin/Navbar";
import HeroSection from "@/components/linkedin/HeroSection";
import ValueStack from "@/components/linkedin/ValueStack";
import ProblemSolution from "@/components/linkedin/ProblemSolution";
import ScarcityExplainer from "@/components/linkedin/ScarcityExplainer";
import TrustpilotReviews from "@/components/adobe/TrustpilotReviews";
import GuaranteeSection from "@/components/linkedin/GuaranteeSection";
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
          <HeroSection />
          <ValueStack />
          <ProblemSolution />
          <ScarcityExplainer />
          <TrustpilotReviews />
          <GuaranteeSection />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
        <FloatingBuyButton />
      </div>
    </ActivateModalProvider>
  );
};

export default LinkedInLanding;
