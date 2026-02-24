import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { Button } from "@/components/ui/button";
import RazorpayButton from "./RazorpayButton";
import adobeCCLogo from "@/assets/adobe-cc.svg";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";
import trustpilotStars from "@/assets/trustpilot-stars-4.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Effects - softer glows */}
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
        
        {/* Adobe CC Logo in background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <img 
            src={adobeCCLogo} 
            alt="" 
            className="w-[500px] md:w-[700px] lg:w-[800px] opacity-[0.04] select-none"
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-500/10 border border-amber-500/30 rounded-full px-6 py-2.5 mb-8 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50" />
            <span className="text-sm font-medium tracking-widest uppercase text-amber-200/90">Exclusive Offer</span>
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Adobe Creative Cloud
            <br />
            <span className="text-gradient">4 Months for ₹599</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Access <span className="text-foreground font-medium">20+ Adobe apps</span> including Photoshop, Illustrator, Premiere Pro & more. 
            <span className="text-success font-semibold"> Save 90%</span> off the official price.
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
              <p className="text-2xl font-bold text-muted-foreground line-through">₹6,000</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-sm text-success">Our Price</p>
              <p className="text-3xl font-bold text-gradient">₹599</p>
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
              <RazorpayButton label="Get Started Now" />
              <a href="https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20the%20Adobe%20Creative%20cloud%20for%204%20months%20at%20600rs" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="aspect-square px-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </Button>
              </a>
            </div>
            <a href="#apps">
              <Button variant="heroOutline" size="xl">
                View All Apps
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
              <p className="text-xs text-muted-foreground">100% Genuine</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">Instant Delivery</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-5 h-5 text-success" />
              </div>
              <p className="text-xs text-success">24/7 Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;