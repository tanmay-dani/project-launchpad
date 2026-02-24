import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  "Seamless Creative Cloud integration",
  "Import PSD, AI, and XD files directly",
  "Automated asset optimization pipeline",
  "Real-time design-to-code sync",
  "Save up to 40% on production time",
  "Dedicated Adobe partnership support",
];

export default function Adobe() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
              Partnership
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Apex + <span className="text-gradient">Adobe</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Bring your creative workflow into production. Our Adobe integration
              bridges design and development like never before.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="p-8 rounded-xl border border-border bg-card/40">
              <h2 className="text-xl font-semibold mb-6">What you get</h2>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-trust/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-trust" />
                    </div>
                    <span className="text-foreground">{b}</span>
                    {b.includes("40%") && (
                      <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                        Save big
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>

              <Link
                to="/thank-you"
                className="group mt-8 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
              >
                Get started with Adobe
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
