import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import ScrollReveal from "../adobe/ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20LinkedIn%20Premium%20Career%20for%203%20months%20at%20₹399";

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/12 rounded-full blur-[180px]" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-3xl p-10 md:p-16 border border-primary/25 text-center shadow-glow">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient">Level Up?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of professionals who are supercharging their career with LinkedIn Premium at a fraction of the cost.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group">
                  Yes! Upgrade My Career — ₹399
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="gap-2">
                  <WhatsAppIcon className="w-5 h-5" />
                  Have Questions? Chat with a Human
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <span className="text-success">✓</span> Your own email &nbsp;
              <span className="text-success">✓</span> Pay after activation &nbsp;
              <span className="text-success">✓</span> 3 months validity
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
