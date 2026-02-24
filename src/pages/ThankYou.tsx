import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto px-6"
      >
        <div className="w-16 h-16 rounded-full bg-trust/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-trust" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Thank you!</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We've received your request. Our team will reach out shortly to get you set up.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </motion.div>
    </div>
  );
}
