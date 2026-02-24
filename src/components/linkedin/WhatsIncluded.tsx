import { MessageSquare, Eye, GraduationCap, BarChart3, Sparkles, UserCheck, Search, BookOpen } from "lucide-react";
import ScrollReveal from "../adobe/ScrollReveal";

const features = [
  {
    name: "5 InMail Credits/Month",
    description: "Message recruiters & hiring managers directly",
    icon: MessageSquare,
  },
  {
    name: "Profile Viewers (365 Days)",
    description: "See everyone who viewed your profile in the last year",
    icon: Eye,
  },
  {
    name: "21,000+ Learning Courses",
    description: "Full access to LinkedIn Learning library",
    icon: GraduationCap,
  },
  {
    name: "Applicant Insights",
    description: "Compare yourself against other applicants on any job",
    icon: BarChart3,
  },
  {
    name: "AI Resume & Profile Tools",
    description: "AI-powered optimization for your resume and profile",
    icon: Sparkles,
  },
  {
    name: "Top Applicant Badge",
    description: "Stand out to recruiters as a featured applicant",
    icon: UserCheck,
  },
  {
    name: "Company Insights",
    description: "See growth trends, hiring patterns & employee data",
    icon: Search,
  },
  {
    name: "Interview Prep Tools",
    description: "AI-powered interview preparation and practice",
    icon: BookOpen,
  },
];

const WhatsIncluded = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You <span className="text-gradient">Get</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LinkedIn Premium Career gives you the ultimate unfair advantage in your job search
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.name} delay={index * 0.08}>
              <div className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 h-full">
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.name}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Upgraded on <span className="text-primary font-semibold">your own personal email</span> — no shared accounts
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsIncluded;
