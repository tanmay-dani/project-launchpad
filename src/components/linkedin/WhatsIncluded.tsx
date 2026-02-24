import { MessageSquare, Eye, GraduationCap, BarChart3, Sparkles, UserCheck, Search, BookOpen } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const features = [
  {
    name: "5 InMail Credits/Month",
    description: "Skip applying — DM recruiters and hiring managers directly",
    icon: MessageSquare,
    outcome: "Get replies, not rejections",
  },
  {
    name: "Profile Viewers (365 Days)",
    description: "See every person who viewed your profile and reach out",
    icon: Eye,
    outcome: "Turn stalkers into opportunities",
  },
  {
    name: "21,000+ Learning Courses",
    description: "Master AI, Python, Marketing — get LinkedIn certificates",
    icon: GraduationCap,
    outcome: "Upskill in days, not months",
  },
  {
    name: "Applicant Insights",
    description: "See how you compare against other applicants on any job",
    icon: BarChart3,
    outcome: "Know your edge before applying",
  },
  {
    name: "AI Resume & Profile Tools",
    description: "AI rewrites your headline, summary, and resume in 2 minutes",
    icon: Sparkles,
    outcome: "10x more profile views",
  },
  {
    name: "Top Applicant Gold Badge",
    description: "Your profile gets highlighted to recruiters automatically",
    icon: UserCheck,
    outcome: "3x more recruiter attention",
  },
  {
    name: "Company Insights",
    description: "Growth trends, hiring patterns, salary data — before you apply",
    icon: Search,
    outcome: "Apply smarter, not harder",
  },
  {
    name: "Interview Prep Tools",
    description: "AI-powered mock interviews and preparation",
    icon: BookOpen,
    outcome: "Walk in confident, walk out hired",
  },
];

const WhatsIncluded = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">What's Inside</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              8 Premium Tools That <span className="text-premium-gold">Get You Hired</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each one designed to give you an <span className="text-foreground font-medium">unfair advantage</span> over every other applicant
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.name} delay={index * 0.08}>
              <div className="group bg-gradient-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="w-12 h-12 md:w-14 md:h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{feature.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 flex-1">{feature.description}</p>
                <p className="text-xs font-medium text-check">→ {feature.outcome}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              All activated on <span className="text-foreground font-medium">your own personal email</span> — no shared accounts
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsIncluded;
