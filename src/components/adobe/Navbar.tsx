import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import RazorpayButton from "./RazorpayButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="bg-white rounded-lg p-2">
            <img src={logo} alt="Premium Nest" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#apps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Apps Included
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <div className="flex items-center gap-2">
              <RazorpayButton label="Buy Now — ₹599" size="sm" showArrow={false} />
              <a href="https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20the%20Adobe%20Creative%20cloud%20for%204%20months%20at%20600rs" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="aspect-square px-0 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  <WhatsAppIcon className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#apps"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apps Included
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <div className="flex items-center gap-2">
                <RazorpayButton className="flex-1" />
                <a href="https://wa.me/919040914544?text=Hi%2C%20I%20want%20to%20avail%20the%20Adobe%20Creative%20cloud%20for%204%20months%20at%20600rs" target="_blank" rel="noopener noreferrer">
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