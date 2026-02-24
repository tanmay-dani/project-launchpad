import { AlertTriangle, Info } from "lucide-react";
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
              <Info className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                "Why is the price so low?"
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We purchase <span className="text-foreground font-medium">corporate bulk vouchers</span> that are about to expire. 
              We pass the savings directly to you. Because these are surplus vouchers, we only have a{" "}
              <span className="text-foreground font-medium">limited supply each month</span>.
            </p>

            <div className="bg-destructive/10 border border-destructive/25 rounded-xl p-4 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  🔴 STATUS: Only <span className="text-destructive">{vouchersLeft} vouchers</span> remaining for this batch.
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Next batch price may increase to ₹699.
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
