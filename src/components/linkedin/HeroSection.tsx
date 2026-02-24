import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock, CheckCircle2, Users, TrendingUp } from "lucide-react";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import linkedinLogo from "@/assets/logos/linkedin.png";
import { useState, useEffect } from "react";
import { useActivateModal } from "./ActivateModal";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20have%20a%20question%20about%20LinkedIn%20Premium%20Career";

const HeroSection = () => {
  const [vouchersLeft, setVouchersLeft] = useState(14);
  const { openModal } = useActivateModal();

  useEffect(() => {
    const stored = sessionStorage.getItem("li-vouchers");
    if (stored) setVouchersLeft(parseInt(stored));
    const interval = setInterval(() => {
      setVouchersLeft(prev => {
        const next = Math.max(prev - 1, 3);
        sessionStorage.setItem("li-vouchers", String(next));
        return next;
      });
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <img src={linkedinLogo} alt="" className="w-[400px] md:w-[600px] lg:w-[700px] opacity-[0.03] select-none" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-destructive">
              Only {vouchersLeft} Vouchers Left This Month
            </span>
          </motion.div>

          {/* LinkedIn Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex justify-center mb-6"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="h-12 md:h-14 w-auto" />
          </motion.div>

          {/* DREAM OUTCOME Headline — white with gold accent */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-foreground"
          >
            Land Your Dream Job
            <br />
            <span className="text-premium-gold">3x Faster</span> with Premium
          </motion.h1>

          {/* Subheadline — muted with white emphasis */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Get <span className="text-foreground font-semibold">3 months of LinkedIn Premium Career</span> on your own email for just <span className="text-success font-bold">₹399</span> instead of ₹7,500.
            <br className="hidden md:block" />
            <span className="text-foreground font-medium">We activate first. You pay only after you see it working.</span>
          </motion.p>

          {/* Social Proof Bar — muted icons, white numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-primary" />
              <span><span className="text-foreground font-semibold">2,400+</span> activated</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-check" />
              <span><span className="text-foreground font-semibold">94%</span> see results in 2 weeks</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-premium-gold" />
              <span className="text-foreground font-semibold">Zero Risk</span>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gradient-card rounded-2xl border border-border p-6 md:p-8 max-w-lg mx-auto mb-8"
          >
            <div className="flex items-center justify-center gap-6 mb-5">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">LinkedIn Charges</p>
                <p className="text-2xl md:text-3xl font-bold text-muted-foreground line-through">₹7,500</p>
              </div>
              <div className="w-px h-14 bg-border" />
              <div className="text-center">
                <p className="text-xs text-premium-gold mb-1 font-semibold">You Pay</p>
                <p className="text-3xl md:text-4xl font-bold text-success">₹399</p>
                <span className="inline-block mt-1 text-xs font-bold bg-success/15 text-success px-2 py-0.5 rounded-full">SAVE 95%</span>
              </div>
            </div>

            <div className="space-y-2.5 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-check flex-shrink-0" />
                <span className="text-sm text-foreground/80">Full 3-month plan on <strong className="text-foreground">YOUR</strong> personal email</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-premium-gold flex-shrink-0" />
                <span className="text-sm text-premium-gold font-semibold">Pay only after activation. Zero risk.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">No password needed. 2-minute setup. 100% safe.</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center gap-3 mb-6"
          >
            <Button variant="hero" size="xl" className="group shadow-glow text-base md:text-lg" onClick={openModal}>
              <span className="hidden sm:inline">Yes, Activate My Premium Now</span>
              <span className="sm:hidden">Activate Premium Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-muted-foreground">⚡ Takes 2 minutes · Pay only after you see the Gold Badge</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
              Have doubts? Chat with us first
            </a>
          </motion.div>

          {/* Trust Pillars — each a different color */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-check" />
              </div>
              <p className="text-xs text-muted-foreground">Your Own Email</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">Instant Activation</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-5 h-5 text-premium-gold" />
              </div>
              <p className="text-xs text-premium-gold font-semibold">Pay After Proof</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
