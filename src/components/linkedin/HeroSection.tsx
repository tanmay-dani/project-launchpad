import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import linkedinLogo from "@/assets/logos/linkedin.png";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20LinkedIn%20Premium%20Career%20for%203%20months%20at%20₹399";

const HeroSection = () => {
  const [vouchersLeft, setVouchersLeft] = useState(14);

  useEffect(() => {
    // Simulate slow scarcity drain
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
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-trust/5 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <img src={linkedinLogo} alt="" className="w-[400px] md:w-[600px] lg:w-[700px] opacity-[0.04] select-none" aria-hidden="true" />
        </motion.div>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          {/* Scarcity Pre-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-destructive/15 border border-destructive/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-destructive">
              ⚠️ Limited Stock: Only {vouchersLeft} Vouchers Left for February
            </span>
          </motion.div>

          {/* Main Headline — Outcome focused */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
          >
            Get The <span className="text-gradient">'Gold Badge'</span> Advantage
            <br />
            & Land Interviews <span className="text-success">3x Faster</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Unlock <span className="text-foreground font-medium">3 Months of LinkedIn Premium Career</span> (Official Plan) for the price of a coffee.
          </motion.p>

          {/* Grand Slam Price Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="bg-gradient-card rounded-2xl border border-primary/30 p-6 md:p-8 max-w-lg mx-auto mb-8 shadow-glow"
          >
            <div className="flex items-center justify-center gap-6 mb-5">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Official Price</p>
                <p className="text-2xl md:text-3xl font-bold text-muted-foreground line-through">₹7,500</p>
              </div>
              <div className="w-px h-14 bg-border" />
              <div className="text-center">
                <p className="text-xs text-success mb-1">Your Price</p>
                <p className="text-3xl md:text-4xl font-bold text-gradient">₹399</p>
                <span className="inline-block mt-1 text-xs font-bold bg-success/20 text-success px-2 py-0.5 rounded-full">SAVE 95%</span>
              </div>
            </div>

            {/* The Guarantee Hooks */}
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-sm text-foreground">Activated on <strong>YOUR</strong> personal email</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-semibold">🔒 PAY ONLY AFTER IT WORKS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">No login details required. 100% Safe.</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Yes! Upgrade My Career for ₹399
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="aspect-square px-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xs text-muted-foreground mb-12"
          >
            No login details required. 100% Safe. Pay only after activation.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-trust" />
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
                <Clock className="w-5 h-5 text-success" />
              </div>
              <p className="text-xs text-success font-semibold">Pay After Activation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
