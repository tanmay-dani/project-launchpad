import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock, Briefcase, Eye, GraduationCap, MessageSquare, BarChart3 } from "lucide-react";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import linkedinLogo from "@/assets/logos/linkedin.png";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";
import trustpilotStars from "@/assets/trustpilot-stars-4.svg";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20LinkedIn%20Premium%20Career%20for%203%20months%20at%20₹399";

const HeroSection = () => {
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
        
        {/* LinkedIn Logo in background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <img 
            src={linkedinLogo} 
            alt="" 
            className="w-[400px] md:w-[600px] lg:w-[700px] opacity-[0.04] select-none"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10 border border-primary/30 rounded-full px-6 py-2.5 mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary/90">Career Booster</span>
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            LinkedIn Premium Career
            <br />
            <span className="text-gradient">3 Months for ₹399</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Get <span className="text-foreground font-medium">InMail credits, profile insights, AI tools</span> & access to{" "}
            <span className="text-foreground font-medium">21,000+ LinkedIn Learning courses</span>.
            <span className="text-success font-semibold"> Save 84%</span> off the official price.
          </motion.p>

          {/* Price Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Official Price</p>
              <p className="text-2xl font-bold text-muted-foreground line-through">₹7,500</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-sm text-success">Our Price</p>
              <p className="text-3xl font-bold text-gradient">₹399</p>
            </div>
          </motion.div>

          {/* Trustpilot Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-10 py-3 px-6 rounded-full bg-secondary/60 border border-border/50 backdrop-blur-sm max-w-fit mx-auto"
          >
            <div className="flex items-center gap-2">
              <img src={trustpilotStars} alt="Trustpilot 4 stars" className="h-5" />
              <span className="text-sm font-semibold text-foreground">4.2/5</span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">on</span>
              <img src={trustpilotLogo} alt="Trustpilot" className="h-4" />
            </div>
            <a
              href="https://www.trustpilot.com/review/thepremiumnest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
            >
              View on Trustpilot →
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <div className="flex items-center gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Get Started — ₹399
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="aspect-square px-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </Button>
              </a>
            </div>
            <a href="#features">
              <Button variant="heroOutline" size="xl">
                See What's Included
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
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
              <p className="text-xs text-success">Pay After Activation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
