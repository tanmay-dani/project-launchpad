import { ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import ScrollReveal from "../adobe/ScrollReveal";
import { useActivateModal } from "./ActivateModal";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20have%20a%20question%20about%20LinkedIn%20Premium%20Career";

const CTASection = () => {
  const { openModal } = useActivateModal();

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-3xl p-10 md:p-16 border border-border text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Last Chance</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Stop Scrolling. <span className="text-premium-gold">Start Getting Hired.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
              3 months of LinkedIn Premium Career. Official plan. On your own email.
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground line-through">₹7,500</span>
              <span className="text-4xl md:text-5xl font-bold text-success">₹399</span>
            </div>
            <p className="text-foreground font-medium text-lg mb-8">
              We activate first. You pay only after you see the Gold Badge.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <Button variant="hero" size="xl" className="group shadow-glow text-base md:text-lg" onClick={openModal}>
                <span className="hidden sm:inline">Yes, Activate My Premium Now</span>
                <span className="sm:hidden">Activate My Premium</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground">⚡ 2-minute setup · Zero risk · Pay after proof</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Still unsure? Talk to us first
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-check" />
                <span>Your own email</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" />
                <span>No password needed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-premium-gold" />
                <span>Pay after activation</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
