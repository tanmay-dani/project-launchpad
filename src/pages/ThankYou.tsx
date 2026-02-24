import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/adobe/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const WHATSAPP_URL =
  "https://wa.me/919040914544?text=Hi%2C%20I%20have%20completed%20my%20payment%20for%20Adobe%20Creative%20Cloud%20(4%20months%20%E2%80%93%20%E2%82%B9600).%20Please%20share%20my%20credentials.";

const ThankYou = () => {
  useEffect(() => {
    const end = Date.now() + 2000;
    const colors = ["#f59e0b", "#22c55e", "#3b82f6", "#a855f7"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    // Small delay so the page renders first
    const timeout = setTimeout(frame, 400);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="adobe-theme min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-success/10 rounded-full blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full text-center"
      >
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 w-20 h-20 rounded-full bg-success/15 flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-success" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Payment <span className="text-gradient">Successful!</span>
        </h1>

        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Thank you for your purchase! To receive your Adobe Creative Cloud credentials, message us on WhatsApp.
        </p>

        {/* WhatsApp CTA */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button
            size="xl"
            className="bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold gap-3 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Get Your Credentials
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>

        <p className="text-xs text-muted-foreground mt-6">
          You'll receive your login details within minutes after messaging us.
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
