import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Shield, Zap, Star, ExternalLink, Search, ArrowUpDown, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-new.png";
import trustpilotStars from "@/assets/trustpilot-stars-4.svg";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LogoBanner } from "@/components/LogoBanner";
import { TrustpilotReviews } from "@/components/TrustpilotReviews";
import { TrustpilotCollector } from "@/components/TrustpilotCollector";

const GOOGLE_FORM_URL = "https://forms.gle/gt94dHa3HAhuJLNu7";

const categories = [
  { key: "all", label: "All", emoji: "🔥" },
  { key: "streaming", label: "Streaming", emoji: "📺" },
  { key: "career", label: "Career", emoji: "💼" },
  { key: "ai", label: "AI", emoji: "🤖" },
  { key: "adult", label: "18+ Adult", emoji: "🔞" },
  { key: "design", label: "Design", emoji: "🎨" },
  { key: "learning", label: "Learning", emoji: "🎓" },
  { key: "productivity", label: "Productivity", emoji: "📄" },
  { key: "wellness", label: "Wellness", emoji: "🧘" },
  { key: "security", label: "Security", emoji: "🛡️" },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "popularity" | "low-high" | "high-low">("default");
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [navCategoryActive, setNavCategoryActive] = useState(false);
  const catDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (catDropdownRef.current && !catDropdownRef.current.contains(e.target as Node)) {
        setCatDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isSearchActive = searchQuery.trim().length > 0;
  const isFiltered = isSearchActive || (navCategoryActive && activeCategory !== "all");

  const parsePrice = (price: string) => parseInt(price.replace(/[^\d]/g, ""), 10) || 0;

  const categoryPopularity: Record<string, number> = {
    streaming: 0,
    career: 1,
    ai: 2,
    design: 3,
    learning: 4,
    wellness: 5,
    productivity: 6,
    security: 7,
  };

  const filtered = useMemo(() => {
    let result: typeof products;

    if (isSearchActive) {
      const q = searchQuery.toLowerCase().trim();
      result = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    } else {
      result = activeCategory === "all"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);
    }

    if (!isSearchActive) {
      if (sortOrder === "low-high") {
        result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      } else if (sortOrder === "high-low") {
        result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      } else if (sortOrder === "popularity") {
        result = [...result].sort((a, b) => (categoryPopularity[a.category] ?? 99) - (categoryPopularity[b.category] ?? 99));
      }
    }

    return result;
  }, [activeCategory, sortOrder, searchQuery, isSearchActive]);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setNavCategoryActive(false);
                setSortOrder("default");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="shrink-0 cursor-pointer bg-transparent border-none p-0"
            >
              <img src={logo} alt="The Premium Nest" className="h-10 w-auto" />
            </button>
            <div className="relative flex-1 max-w-md mx-2 sm:mx-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-8 h-8 text-[16px] sm:text-sm sm:h-9 rounded-full bg-muted/60 border-transparent focus-visible:border-border"
                maxLength={100}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="relative shrink-0" ref={catDropdownRef}>
              <button
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
                className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <span className="hidden sm:inline">Categories</span>
                <span className="sm:hidden">{categories.find(c => c.key === activeCategory)?.emoji || "🔥"}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${catDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {catDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-48 rounded-xl border border-border bg-card shadow-xl py-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => {
                        setActiveCategory(cat.key);
                        setCatDropdownOpen(false);
                        setSearchQuery("");
                        setNavCategoryActive(cat.key !== "all");
                      }}
                      className={`flex w-full items-center gap-2 px-4 py-2.5 text-sm transition hover:bg-muted/80 ${
                        activeCategory === cat.key
                          ? "font-semibold text-primary"
                          : "text-foreground"
                      }`}
                    >
                      <span>{cat.emoji}</span>
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - hidden during search */}
      {!isFiltered && (
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Channel & Review Links */}
              <div className="mb-6 sm:mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Follow Us</span>
                  <a href="https://whatsapp.com/channel/0029Vb7duRi8PgsOXU1dvN31" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110" aria-label="WhatsApp Channel">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                  <a href="https://t.me/+8dUb32qbDqFmNjg1" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#229ED9] text-white transition hover:scale-110" aria-label="Telegram Channel">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  </a>
                </div>
                <span className="hidden text-border sm:inline">|</span>
                <div className="w-60 sm:w-64 h-[44px]">
                  <TrustpilotCollector />
                </div>
              </div>

              <h1 className="font-display text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                The <span className="text-gold">Premium</span> Nest
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Access Premium Subscriptions, OTT, and AI Tools at prices that actually make sense.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-gold" /> Trusted Since 2017
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-gold" /> 15-Min Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-gold" /> 2000+ Happy Customers
              </span>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("reviews");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="flex items-center gap-2 rounded-full border border-border bg-[#050816] px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-sm transition hover:bg-black"
              >
                <img
                  src={trustpilotStars}
                  alt="Trustpilot 4.2 stars"
                  className="h-4"
                />
                <span>4.2 out of 5 · 7 reviews on</span>
                <img
                  src={trustpilotLogo}
                  alt="Trustpilot"
                  className="h-4"
                />
              </button>
            </motion.div>

            <LogoBanner onProductClick={(id) => {
              setActiveCategory("all");
              setSearchQuery("");
              setNavCategoryActive(false);
              setSortOrder("default");
              setTimeout(() => {
                const el = document.getElementById(`product-${id}`);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 100);
            }} />
          </div>
        </header>
      )}

      {/* Products */}
      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        {isFiltered ? (
          <div className="mb-6 pt-6">
            <p className="text-sm text-muted-foreground">
              {isSearchActive
                ? <>{filtered.length} result{filtered.length !== 1 ? "s" : ""} for "<span className="font-medium text-foreground">{searchQuery.trim()}</span>"</>
                : <>{filtered.length} product{filtered.length !== 1 ? "s" : ""} in <span className="font-medium text-foreground">{categories.find(c => c.key === activeCategory)?.emoji} {categories.find(c => c.key === activeCategory)?.label}</span></>
              }
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Our Products</h2>
              <p className="mt-2 text-muted-foreground">Premium digital subscriptions at unbeatable prices</p>
            </div>

            {/* Category filters */}
            <div className="mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => { setActiveCategory(cat.key); setNavCategoryActive(false); }}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === cat.key
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted/60 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort control */}
            <div className="mb-6 flex justify-end">
              <div className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as "default" | "popularity" | "low-high" | "high-low")}
                  className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="default">Default</option>
                  <option value="popularity">Popularity</option>
                  <option value="low-high">Price: Low → High</option>
                  <option value="high-low">Price: High → Low</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} id={`product-${product.id}`} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              {isSearchActive
                ? `No results for "${searchQuery.trim()}".`
                : "No products in this category yet."}
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:opacity-90"
            >
              🔍 Request this Service
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        )}

        {/* Request a Service CTA */}
        <div className="mt-14 rounded-2xl border border-border bg-muted/30 py-10 text-center">
          <p className="text-xl font-bold text-foreground sm:text-2xl">
            🔍 Can't find what you're looking for?
          </p>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Fill out a quick form and we'll try to get any subscription you need.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Request a Service
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </main>

      {/* Trustpilot Reviews */}
      <TrustpilotReviews />

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-6">
            <img src={logo} alt="The Premium Nest" className="h-12 w-auto" />
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/catalog" className="text-muted-foreground hover:text-foreground transition">Catalog</Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-muted-foreground hover:text-foreground transition">Refund Policy</Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground transition">Terms of Service</Link>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} The Premium Nest. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                All trademarks belong to their respective owners.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
