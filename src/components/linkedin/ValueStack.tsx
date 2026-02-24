import { Check, Gift, ArrowRight } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useActivateModal } from "./ActivateModal";

const stackItems = [
  { component: "3 Months LinkedIn Premium Career (Official Plan)", value: "₹7,500", subtext: "Same plan others pay ₹2,500/mo for" },
  { component: "15 InMail Credits — DM Any Recruiter or CEO", value: "₹3,000", subtext: "Skip the queue, get replies in hours" },
  { component: "Who Viewed Your Profile — Full 365 Days", value: "₹1,500", subtext: "See who's interested & message them back" },
  { component: "21,000+ LinkedIn Learning Courses", value: "₹5,000", subtext: "Upskill in AI, Python, Marketing — free certificates" },
  { component: "Top Applicant Gold Badge", value: "Priceless", subtext: "Recruiters see you FIRST on every job" },
  { component: 'BONUS: "Pay After Activation" Safety Net', value: "Priceless", isBonus: true, subtext: "We activate first. You pay only after seeing proof." },
];

const ValueStack = () => {
  const { openModal } = useActivateModal();

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">The Irresistible Offer</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Here's Everything You Get <span className="text-premium-gold">Today</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We didn't just make it cheap — we made it a <span className="text-foreground font-medium">no-brainer.</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-gradient-card rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] gap-4 px-6 py-4 border-b border-border bg-secondary/30">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">What You Get</span>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-right">Real Value</span>
            </div>

            {stackItems.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_auto] gap-4 px-6 py-4 items-center border-b border-border/50 last:border-0 ${item.isBonus ? "bg-premium-gold/5" : ""}`}
              >
                <div className="flex items-start gap-3">
                  {item.isBonus ? (
                    <Gift className="w-5 h-5 text-premium-gold flex-shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-check/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-check" />
                    </div>
                  )}
                  <div>
                    <span className={`text-sm md:text-base block ${item.isBonus ? "text-premium-gold font-semibold" : "text-foreground/90"}`}>
                      {item.component}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.subtext}</span>
                  </div>
                </div>
                <span className={`text-sm md:text-base font-semibold text-right ${item.isBonus ? "text-premium-gold" : "text-muted-foreground"}`}>
                  {item.value}
                </span>
              </div>
            ))}

            <div className="grid grid-cols-[1fr_auto] gap-4 px-6 py-5 bg-primary/8 border-t border-primary/20">
              <span className="text-base md:text-lg font-bold text-foreground uppercase">Total Real Value</span>
              <span className="text-base md:text-lg font-bold text-foreground text-right">₹17,000+</span>
            </div>
          </div>
        </ScrollReveal>

        {/* The Grand Reveal */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-10 space-y-2">
            <p className="text-muted-foreground text-lg">You're NOT paying ₹17,000.</p>
            <p className="text-muted-foreground text-lg">You're NOT even paying ₹7,500.</p>
            <p className="text-muted-foreground text-lg mb-2">You get ALL of this for just:</p>
            <p className="text-6xl md:text-8xl font-bold text-success mt-4">₹399</p>
            <p className="text-muted-foreground">One-time payment · 3 months · Your own account</p>
            <p className="text-foreground font-medium text-lg mt-4">That's ₹4.4/day for a career transformation.</p>

            <Button variant="hero" size="xl" className="group shadow-glow mt-6" onClick={openModal}>
              <span className="hidden sm:inline">Yes, I Want This Deal</span>
              <span className="sm:hidden">I Want This Deal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ValueStack;
