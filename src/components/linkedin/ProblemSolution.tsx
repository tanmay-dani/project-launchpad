import { X, Check, User, Crown, ArrowDown } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";
import linkedinPremiumGold from "@/assets/linkedin-premium-gold.png";

const painPoints = [
  { pain: "Applied to 200+ jobs", result: "0 callbacks" },
  { pain: "Recruiters never see your profile", result: "You're invisible" },
  { pain: "Can't message hiring managers", result: "Stuck waiting forever" },
  { pain: "No idea who viewed your profile", result: "Flying blind" },
  { pain: "Resume lost in 500+ applicants", result: "Just another number" },
];

const transformations = [
  "Recruiters actually find YOU because the Gold Badge makes you 3x more visible",
  "You can DM any hiring manager directly with 5 InMails every month",
  "You'll see exactly who checked your profile and message them back",
  "AI optimizes your resume in 2 minutes so you stand out instantly",
  "You can compare yourself against other applicants and know your edge",
];

const ProblemSolution = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-destructive/80 uppercase tracking-widest mb-3">The Painful Truth</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              This Is Why You're <span className="text-destructive">Not Getting Hired</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              It's not your skills. It's not your experience. It's that <span className="text-foreground font-medium">recruiters literally can't see you.</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* WITHOUT — Pain Column */}
          <ScrollReveal direction="left">
            <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border border-destructive/15 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">You Right Now</h3>
                    <p className="text-xs text-destructive/80 font-medium">Without Premium</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {painPoints.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive/70" />
                      </div>
                      <div>
                        <span className="text-sm text-foreground/70">{item.pain}</span>
                        <span className="text-sm text-destructive/80 font-medium"> → {item.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-destructive/8 rounded-lg p-3 text-center">
                  <p className="text-sm text-muted-foreground">Months of frustration. Zero progress.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* WITH — Premium Gold Column */}
          <ScrollReveal direction="right">
            <div className="bg-gradient-card rounded-2xl p-6 md:p-8 h-full relative overflow-hidden border border-premium-gold/25" style={{ boxShadow: '0 0 50px -15px hsl(42 75% 55% / 0.15)' }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl bg-premium-gold/5" />
              <div className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-premium-gold text-premium-gold-foreground">
                YOU IN 24 HOURS
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-premium-gold/10 flex items-center justify-center overflow-hidden">
                    <img src={linkedinPremiumGold} alt="LinkedIn Premium" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">The Premium Candidate</h3>
                    <p className="text-xs font-medium text-premium-gold">With LinkedIn Premium Career</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {transformations.map((trait, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-check/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-check" />
                      </div>
                      <span className="text-sm text-foreground/85">{trait}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg p-3 text-center bg-premium-gold/8">
                  <p className="text-sm font-medium text-premium-gold">Interview calls within 2 weeks. Guaranteed.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto mb-3 animate-bounce" />
            <p className="text-lg text-muted-foreground">
              The difference? <span className="text-foreground font-semibold">₹399</span> and <span className="text-foreground font-semibold">2 minutes.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSolution;
