import { Check, ArrowRight } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useActivateModal } from "./ActivateModal";

const features = [
  { name: "5 InMail Credits/Month" },
  { name: "Who Viewed Your Profile (365 Days)" },
  { name: "21,000+ LinkedIn Learning Courses" },
  { name: "AI Resume & Profile Tools" },
  { name: "Applicant Insights" },
  { name: "Top Applicant Gold Badge" },
  { name: "Company Insights" },
  { name: "Interview Prep Tools" },
];

const PricingComparison = () => {
  const { openModal } = useActivateModal();

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-sm font-semibold text-success uppercase tracking-widest mb-3">The Math Doesn't Lie</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Same Premium. <span className="text-success">95% Less.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exact same features. Exact same plan. Just a <span className="text-foreground font-semibold">radically better price.</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: Side by side compact cards */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          <ScrollReveal direction="left">
            <div className="bg-gradient-card rounded-xl p-4 border border-border relative overflow-hidden h-full">
              <div className="relative">
                <p className="text-xs text-muted-foreground mb-1">LinkedIn Charges</p>
                <p className="text-2xl font-bold text-muted-foreground line-through">₹7,500</p>
                <p className="text-xs text-muted-foreground mt-1">/3 months</p>
                <div className="mt-4 space-y-1.5">
                  {features.slice(0, 4).map((f) => (
                    <div key={f.name} className="flex items-center gap-1.5 text-muted-foreground">
                      <Check className="w-3 h-3 flex-shrink-0" />
                      <span className="text-xs truncate">{f.name}</span>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground">+4 more</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-card rounded-xl p-4 border-2 border-success/40 relative overflow-hidden shadow-glow h-full">
              <div className="absolute top-2 right-2 bg-success text-success-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                95% OFF
              </div>
              <div className="relative">
                <p className="text-xs text-success mb-1 font-semibold">You Pay</p>
                <p className="text-2xl font-bold text-success">₹399</p>
                <p className="text-xs text-muted-foreground mt-1">/3 months</p>
                <div className="mt-4 space-y-1.5">
                  {features.slice(0, 4).map((f) => (
                    <div key={f.name} className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2 h-2 text-success" />
                      </div>
                      <span className="text-xs text-foreground truncate">{f.name}</span>
                    </div>
                  ))}
                  <p className="text-xs text-success font-medium">+4 more</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Desktop: Full cards */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-gradient-card rounded-2xl p-8 border border-border relative overflow-hidden h-full opacity-75">
              <div className="absolute top-0 right-0 w-32 h-32 bg-muted/20 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-xs text-destructive font-semibold uppercase tracking-wider mb-2">❌ What LinkedIn Charges</p>
                <h3 className="text-xl font-semibold mb-2 text-muted-foreground">Official Price</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-muted-foreground line-through">₹7,500</span>
                  <span className="text-muted-foreground">/3 months</span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">₹2,500/month × 3 months = ouch</p>
                <div className="space-y-3">
                  {features.slice(0, 5).map((f) => (
                    <div key={f.name} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5" />
                      <span>{f.name}</span>
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground pt-2">+ 3 more features</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-card rounded-2xl p-8 border-2 border-success/40 relative overflow-hidden shadow-glow h-full">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-success/15 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 bg-success text-success-foreground text-xs font-bold px-3 py-1 rounded-full">
                SAVE ₹7,100
              </div>
              <div className="relative">
                <p className="text-xs text-success font-semibold uppercase tracking-wider mb-2">✅ What You Pay With Us</p>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Our Price</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-success">₹399</span>
                  <span className="text-muted-foreground">/3 months</span>
                </div>
                <p className="text-sm text-success mb-8 font-medium">One-time · Pay after activation · Same exact plan</p>
                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f.name} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground">{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Savings Banner + CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 md:mt-12 bg-gradient-card rounded-2xl p-6 md:p-8 border border-success/30 text-center">
            <p className="text-muted-foreground mb-2 text-sm md:text-base">You save</p>
            <p className="text-4xl md:text-6xl font-bold text-success">₹7,100</p>
            <p className="text-muted-foreground mt-2 text-sm md:text-base mb-6">That's 95% off — and you pay AFTER seeing it work.</p>
            <Button variant="hero" size="xl" className="group shadow-glow" onClick={openModal}>
              <span className="hidden sm:inline">Lock In ₹399 Before Price Increases</span>
              <span className="sm:hidden">Lock In ₹399 Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingComparison;
