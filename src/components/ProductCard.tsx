import { useState } from "react";
import { Check, Zap, MessageCircle, ShieldCheck } from "lucide-react";
import type { Product } from "@/data/products";

const categoryGradients: Record<string, string> = {
  design: "from-pink-500/10 to-purple-500/10",
  career: "from-blue-500/10 to-cyan-500/10",
  streaming: "from-red-500/10 to-orange-500/10",
  ai: "from-emerald-500/10 to-teal-500/10",
  learning: "from-indigo-500/10 to-blue-500/10",
  security: "from-slate-500/10 to-blue-500/10",
  productivity: "from-red-500/10 to-rose-500/10",
  wellness: "from-sky-500/10 to-blue-500/10",
  adult: "from-rose-500/10 to-pink-500/10",
};

export function ProductCard({ product, index, id }: { product: Product; index: number; id?: string }) {
  const [selectedVariant, setSelectedVariant] = useState(0);

  const activeVariant = product.variants?.[selectedVariant];
  const activePrice = activeVariant ? activeVariant.price : product.price;
  const activeOriginalPrice = activeVariant ? activeVariant.originalPrice : product.originalPrice;
  const activeDuration = activeVariant?.duration || product.duration;

  const whatsappMessage = encodeURIComponent(
    product.variants
      ? `Hi, I want to buy ${product.name} (${product.variants[selectedVariant].label}) for ${activePrice}.`
      : `Hi, I want to buy ${product.name} for ${product.price} for ${product.duration}.`
  );
  const whatsappLink = `https://wa.me/919040914544?text=${whatsappMessage}`;

  return (
    <div
      id={id}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      {/* Top gradient accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${categoryGradients[product.category] || categoryGradients.design}`} />

      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <img
            src={product.logo}
            alt={`${product.name} logo`}
            loading="lazy"
            className={`rounded-lg object-contain ${
              product.name === "Pornhub Premium" || product.name === "Brazzers Premium"
                ? "h-[58px] w-[58px]"
                : "h-12 w-12"
            }`}
          />
          <span className="rounded-full bg-accent/60 px-3 py-1 text-xs font-semibold text-accent-foreground">
            {activeDuration}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-5">{product.tagline}</p>

        {/* Variant selector */}
        {product.variants && (
          <div className="mb-4 flex gap-2">
            {product.variants.map((variant, i) => (
              <button
                key={i}
                onClick={() => setSelectedVariant(i)}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                  selectedVariant === i
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-muted/40 text-muted-foreground hover:border-primary/50"
                }`}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mb-5 flex items-baseline gap-2">
          <span className="font-display text-3xl font-extrabold text-foreground">{activePrice}</span>
          <span className="text-sm text-muted-foreground line-through">{activeOriginalPrice}</span>
        </div>

        {/* Features */}
        <ul className="mb-6 flex-1 space-y-2.5">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Payment note (if applicable) */}
        {product.paymentNote && (
          <div className="mb-3 flex items-center gap-2 rounded-lg bg-emerald-600/20 px-3 py-2.5 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            {product.paymentNote}
          </div>
        )}

        {/* Delivery note */}
        <div className="mb-4 flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
          <Zap className="h-3.5 w-3.5 text-gold" />
          Delivered via WhatsApp within 15 mins
        </div>

        {/* CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
