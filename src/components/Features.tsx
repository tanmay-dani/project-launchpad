import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Layers, Globe, Clock } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized pipelines that deploy in seconds, not minutes." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant with end-to-end encryption by default." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Deep insights into performance, usage, and growth." },
  { icon: Layers, title: "Modular Stack", desc: "Pick only what you need. Every component is composable." },
  { icon: Globe, title: "Global Edge", desc: "Deployed across 50+ regions for sub-50ms latency." },
  { icon: Clock, title: "99.99% Uptime", desc: "Battle-tested infrastructure trusted by thousands." },
];

export default function Features() {
  return (
    <section id="features" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Built for teams who refuse to compromise on speed, security, or developer experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
