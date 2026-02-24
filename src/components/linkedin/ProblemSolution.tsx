import { X, Check, User, Crown } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const regularTraits = [
  "Apply and wait in the dark",
  "Resume gets lost in 500+ applicants",
  "Zero idea who is looking at you",
  "Can't message recruiters directly",
  "No way to stand out from the crowd",
];

const premiumTraits = [
  "Message the Recruiter directly — skip the line",
  "See exactly who viewed you & message them instantly",
  "Gold Badge makes you look like a serious professional",
  "AI tools optimize your resume in minutes",
  "Compare yourself against other applicants on any job",
];

const ProblemSolution = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Which One Are <span className="text-gradient">You?</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Without Premium */}
          <ScrollReveal direction="left">
            <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border border-destructive/20 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">The Regular Job Seeker</h3>
                    <p className="text-xs text-muted-foreground">Without Premium</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {regularTraits.map((trait, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-destructive" />
                      </div>
                      <span className="text-sm text-muted-foreground">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* With Premium */}
          <ScrollReveal direction="right">
            <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border-2 border-primary/40 h-full relative overflow-hidden shadow-glow">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute top-3 right-3 bg-success text-success-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
                YOU AFTER TODAY
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">The Premium Candidate</h3>
                    <p className="text-xs text-primary">With LinkedIn Premium Career</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {premiumTraits.map((trait, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-foreground">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
