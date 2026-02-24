import { Clock } from "lucide-react";
import WhatsAppIcon from "../adobe/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useActivateModal } from "./ActivateModal";

const WHATSAPP_LINK = "https://wa.me/919040914544?text=Hi%2C%20I%20have%20a%20question%20about%20LinkedIn%20Premium%20Career";

const FloatingBuyButton = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
  const { openModal } = useActivateModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-black"
    >
      <div className="flex gap-2 md:gap-3 max-w-md mx-auto items-center">
        <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-white">
          <Clock className="w-3 h-3 animate-pulse" />
          <span className="font-mono font-bold text-xs">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
        <Button variant="hero" size="lg" className="flex-1 shadow-glow" onClick={openModal}>
          Activate Premium · Pay After ₹399
        </Button>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
          <Button variant="outline" size="lg" className="aspect-square px-0 h-12 w-12 border-success text-success hover:bg-success hover:text-success-foreground">
            <WhatsAppIcon className="w-6 h-6" />
          </Button>
        </a>
      </div>
      <p className="text-xs text-center text-white/70 mt-1.5">🔒 Pay only after activation · Limited vouchers left</p>
    </motion.div>
  );
};

export default FloatingBuyButton;
