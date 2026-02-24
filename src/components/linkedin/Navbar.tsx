import { Menu, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20LinkedIn%20Premium%20Career%20for%203%20months%20at%20₹399";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="bg-white rounded-lg p-2">
            <img src={logo} alt="Premium Nest" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <div className="flex items-center gap-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="sm">Activate Premium — ₹399</Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="aspect-square px-0 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  <WhatsAppIcon className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>FAQ</a>
              <div className="flex items-center gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="hero" size="default" className="w-full">Activate Premium — ₹399</Button>
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="default" className="aspect-square px-0 border-green-500 text-green-500 hover:bg-green-500 hover:text-white" onClick={() => setIsOpen(false)}>
                    <WhatsAppIcon className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
