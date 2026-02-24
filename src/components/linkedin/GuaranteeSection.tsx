import { Shield, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const steps = [
  { step: "You fill a 30-second form.", detail: "Just your name and LinkedIn email." },
  { step: "We activate Premium on YOUR account.", detail: "No password needed. No access to your account." },
  { step: "You see the Gold Badge on your profile.", detail: "Verify it yourself. Take a screenshot if you want." },
  { step: "ONLY THEN do you pay us ₹399.", detail: "If it doesn't work? You owe us ₹0. Walk away." },
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-premium-gold/25 text-center relative overflow-hidden" style={{ boxShadow: '0 0 50px -15px hsl(42 75% 55% / 0.12)' }}>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-premium-gold/3 rounded-full blur-[100px]" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-premium-gold/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-premium-gold" />
              </div>

              <p className="text-sm font-medium text-premium-gold uppercase tracking-widest mb-3">Our Guarantee</p>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
                We Activate First. <span className="text-premium-gold">You Pay After.</span>
              </h2>

              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                We know the internet is full of scams. That's why we put our money where our mouth is — <span className="text-foreground font-medium">we do the work first, and you pay only when you're satisfied.</span>
              </p>

              <div className="space-y-5 max-w-md mx-auto text-left mb-8">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <span className={`text-sm md:text-base block ${i === steps.length - 1 ? "text-premium-gold font-bold" : "text-foreground font-medium"}`}>
                        {s.step}
                      </span>
                      <span className="text-xs text-muted-foreground">{s.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-check/8 border border-check/15 rounded-xl p-5 max-w-md mx-auto mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-check" />
                  <span className="text-foreground font-bold text-lg">Literally Zero Risk</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  If Premium doesn't show up on your account, you pay ₹0. Not ₹1. Not ₹399. <span className="text-foreground font-medium">Absolutely nothing.</span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="text-premium-gold">★★★★</span><span className="text-muted-foreground/50">★</span>
                <span>Rated <span className="text-foreground font-semibold">4.2 on Trustpilot</span> based on 7 reviews</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GuaranteeSection;
