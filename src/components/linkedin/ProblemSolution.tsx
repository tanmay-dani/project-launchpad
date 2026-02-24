import { X, Check, User, Crown, ArrowDown } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const painPoints = [
  { pain: "Applied to 200+ jobs", result: "0 callbacks" },
  { pain: "Recruiters never see your profile", result: "You're invisible" },
  { pain: "Can't message hiring managers", result: "Stuck waiting forever" },
  { pain: "No idea who viewed your profile", result: "Flying blind" },
  { pain: "Resume lost in 500+ applicants", result: "Just another number" },
];

const transformations = [
  "Recruiters find YOU — Gold Badge makes you 3x more visible",
  "DM any hiring manager directly with 5 InMails/month",
  "See exactly who stalked your profile — message them back",
  "AI optimizes your resume in 2 minutes — stand out instantly",
  "Compare yourself vs other applicants — know your edge",
];

const ProblemSolution = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        {/* Agitate the Pain */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-destructive uppercase tracking-widest mb-3">The Painful Truth</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              This Is Why You're <span className="text-destructive">Not Getting Hired</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              It's not your skills. It's not your experience. It's that <span className="text-foreground font-semibold">recruiters literally can't see you.</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* WITHOUT — Pain Column */}
          <ScrollReveal direction="left">
            <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border border-destructive/20 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">You Right Now</h3>
                    <p className="text-xs text-destructive font-medium">Without Premium</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {painPoints.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                      <div>
                        <span className="text-sm text-foreground">{item.pain}</span>
                        <span className="text-sm text-destructive font-medium"> → {item.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-destructive/10 rounded-lg p-3 text-center">
                  <p className="text-sm text-destructive font-semibold">😞 Months of frustration. Zero progress.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* WITH — Dream Outcome Column */}
          <ScrollReveal direction="right">
            <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border-2 border-success/40 h-full relative overflow-hidden shadow-glow">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-success/10 rounded-full blur-3xl" />
              <div className="absolute top-3 right-3 bg-success text-success-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
                YOU IN 24 HOURS
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">You With Premium</h3>
                    <p className="text-xs text-success font-medium">After Activation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {transformations.map((trait, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-foreground">{trait}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-success/10 rounded-lg p-3 text-center">
                  <p className="text-sm text-success font-semibold">🚀 Interview calls within 2 weeks. Guaranteed.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bridge — Effort Reduction */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <ArrowDown className="w-6 h-6 text-success mx-auto mb-3 animate-bounce" />
            <p className="text-lg text-muted-foreground">
              The difference? <span className="text-success font-bold">₹399 and 2 minutes.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSolution;
