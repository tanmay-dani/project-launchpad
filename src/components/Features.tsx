import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Layers, Globe, Lock } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed with sub-second response times across the board." },
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant with end-to-end encryption and role-based access." },
  { icon: BarChart3, title: "Advanced Analytics", description: "Real-time dashboards and insights to track what matters most." },
  { icon: Layers, title: "Seamless Integrations", description: "Connect with 200+ tools your team already uses every day." },
  { icon: Globe, title: "Global Scale", description: "Edge-deployed infrastructure for low latency worldwide." },
  { icon: Lock, title: "Privacy First", description: "Your data stays yours. GDPR and CCPA compliant by default." },
];

const Features = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">ship fast</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete toolkit designed for modern teams who refuse to compromise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card/40 hover:bg-card/70 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
