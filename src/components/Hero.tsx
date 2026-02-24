import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            Now in public beta
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1]">
            Build faster with
            <br />
            <span className="text-gradient">intelligent tools</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The modern platform that helps teams ship products 10x faster.
            Automate workflows, collaborate seamlessly, and scale without limits.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-2 glow">
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-card transition-all">
              Watch Demo
            </button>
          </div>

          {/* Social proof */}
          <p className="text-sm text-muted-foreground pt-4">
            Trusted by <span className="text-foreground font-medium">2,500+</span> teams worldwide
          </p>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden glow">
            <div className="w-full h-full bg-gradient-to-br from-card to-secondary flex items-center justify-center">
              <div className="text-muted-foreground/40 text-lg font-mono">
                ▶ Product Preview
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
