import { AlertTriangle, HelpCircle } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";
import { useState, useEffect } from "react";

const ScarcityExplainer = () => {
  const [vouchersLeft, setVouchersLeft] = useState(9);

  useEffect(() => {
    const stored = sessionStorage.getItem("li-vouchers-batch");
    if (stored) setVouchersLeft(parseInt(stored));
    const interval = setInterval(() => {
      setVouchersLeft(prev => {
        const next = Math.max(prev - 1, 2);
        sessionStorage.setItem("li-vouchers-batch", String(next));
        return next;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-2xl p-8 md:p-10 border border-border">
            <div className="flex items-center gap-3 mb-5">
              <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                "Wait... ₹399 for ₹7,500 worth? What's the catch?"
              </h3>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <span className="text-foreground font-medium">No catch. Here's the honest truth:</span>
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Large companies buy LinkedIn Premium vouchers in bulk for employees. When employees don't use them, these vouchers go to waste. We buy these <span className="text-foreground font-medium">surplus corporate vouchers</span> before they expire and pass the savings directly to you.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              It's the <span className="text-foreground font-medium">same official LinkedIn Premium</span>, activated on your own email, with your own data. The only difference is you're paying 95% less because we cracked the supply chain.
            </p>

            <div className="bg-destructive/8 border border-destructive/15 rounded-xl p-4 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Only <span className="text-destructive font-bold">{vouchersLeft} vouchers</span> left in this batch
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  When they're gone, next batch will be ₹699.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScarcityExplainer;
