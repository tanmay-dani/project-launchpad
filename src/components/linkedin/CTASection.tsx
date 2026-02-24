import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import ScrollReveal from "../adobe/ScrollReveal";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20LinkedIn%20Premium%20Career%20for%203%20months%20at%20₹399";

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-3xl p-10 md:p-16 border border-primary/25 text-center shadow-glow">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Get LinkedIn Premium for <span className="text-gradient">₹399</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
              3 months. Official plan. Activated on your email.
            </p>
            <p className="text-primary font-bold text-lg mb-8">
              Pay only after you see the Gold Badge on your profile.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl" className="group shadow-glow">
                  Yes! Activate Premium — ₹399
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                Have questions? Chat with a human
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <span className="text-primary">✓</span> Your own email &nbsp;
              <span className="text-primary">✓</span> Pay after activation &nbsp;
              <span className="text-primary">✓</span> No password needed
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
