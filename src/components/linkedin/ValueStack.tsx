import { Check, Gift } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const stackItems = [
  { component: "3 Months LinkedIn Premium Career (Official)", value: "₹7,500" },
  { component: "15 InMail Credits (DM Hiring Managers Directly)", value: "₹3,000" },
  { component: "Who Viewed Your Profile — 365 Days of Data", value: "₹1,500" },
  { component: "21,000+ LinkedIn Learning Courses (Upskill Fast)", value: "₹5,000" },
  { component: "Top Applicant Gold Badge (Stand Out Instantly)", value: "Priceless" },
  { component: 'BONUS: "Pay After Activation" Safety Guarantee', value: "Priceless", isBonus: true },
];

const ValueStack = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Here Is Everything You <span className="text-gradient">Get Today</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't just sell a subscription — you're getting a complete career advantage package
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-gradient-card rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] gap-4 px-6 py-4 border-b border-border bg-secondary/30">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">What You Get</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-right">Real Value</span>
            </div>

            {/* Rows */}
            {stackItems.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_auto] gap-4 px-6 py-4 items-center border-b border-border/50 last:border-0 ${item.isBonus ? "bg-success/5" : ""}`}
              >
                <div className="flex items-center gap-3">
                  {item.isBonus ? (
                    <Gift className="w-5 h-5 text-success flex-shrink-0" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                  )}
                  <span className={`text-sm md:text-base ${item.isBonus ? "text-success font-semibold" : "text-foreground"}`}>
                    {item.component}
                  </span>
                </div>
                <span className={`text-sm md:text-base font-semibold text-right ${item.isBonus ? "text-success" : "text-muted-foreground"}`}>
                  {item.value}
                </span>
              </div>
            ))}

            {/* Total */}
            <div className="grid grid-cols-[1fr_auto] gap-4 px-6 py-5 bg-success/10 border-t-2 border-success/30">
              <span className="text-base md:text-lg font-bold text-foreground uppercase">Total Value</span>
              <span className="text-base md:text-lg font-bold text-success text-right">₹17,000+</span>
            </div>
          </div>
        </ScrollReveal>

        {/* The reveal */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-lg mb-2">You Get All Of This For Just:</p>
            <p className="text-5xl md:text-7xl font-bold text-success">₹399</p>
            <p className="text-muted-foreground mt-2">One-time payment • 3 months • Your own account</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueStack;
