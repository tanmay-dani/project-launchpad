import { Shield, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const steps = [
  "You fill the form.",
  "We activate Premium on your account.",
  "You see the Gold Badge on your profile.",
  "ONLY THEN do you pay us ₹399.",
];

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border-2 border-success/30 text-center relative overflow-hidden shadow-glow">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-success/5 rounded-full blur-[100px]" />
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-success" />
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                The "Iron-Clad" <span className="text-success">Pay-After-Trust</span> Guarantee
              </h2>

              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We know the internet is full of scams. That's why we don't want a single rupee from you until you see the results with your own eyes.
              </p>

              <div className="space-y-4 max-w-md mx-auto text-left mb-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-success">{i + 1}</span>
                    </div>
                    <span className={`text-sm md:text-base ${i === steps.length - 1 ? "text-success font-bold" : "text-foreground"}`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-success/10 border border-success/25 rounded-xl p-5 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-foreground font-bold">Zero Risk</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  If it doesn't work, you pay ₹0. You have literally nothing to lose.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GuaranteeSection;
