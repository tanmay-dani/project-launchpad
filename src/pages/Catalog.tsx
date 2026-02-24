import { products } from "@/data/products";
import logo from "@/assets/logo-new.png";

const categoryLabels: Record<string, string> = {
  streaming: "📺 Streaming",
  career: "💼 Career",
  ai: "🤖 AI Tools",
  design: "🎨 Design",
  learning: "🎓 Learning",
  productivity: "📄 Productivity",
  wellness: "🧘 Wellness",
  security: "🛡️ Security",
  adult: "🔞 18+ Adult",
};

const categoryOrder = ["streaming", "career", "ai", "design", "learning", "productivity", "wellness", "security", "adult"];

const getWhatsAppLink = (product: typeof products[0]) => {
  const message = encodeURIComponent(
    `Hi, I want to buy ${product.name} for ${product.price} for ${product.duration}.`
  );
  return `https://wa.me/919040914544?text=${message}`;
};

const Catalog = () => {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat] || cat,
      items: products.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Print button - hidden in print */}
      <div className="print:hidden sticky top-0 z-50 bg-white border-b px-6 py-3 flex items-center justify-between">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-900">← Back to site</a>
        <button
          onClick={handlePrint}
          className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
        >
          📥 Download as PDF
        </button>
      </div>

      {/* Catalog content */}
      <div className="mx-auto max-w-4xl px-6 py-10 print:py-2 print:px-4 print:max-w-none">
        {/* Header */}
        <div className="text-center mb-10 print:mb-2">
          <img src={logo} alt="The Premium Nest" className="h-14 mx-auto mb-4 print:h-10 print:mb-2" />
          <h1 className="text-3xl font-black tracking-tight print:text-2xl">
            Product Catalog
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Premium Digital Subscriptions at Unbeatable Prices • WhatsApp: 15-Min Delivery
          </p>
          <p className="mt-1 text-gray-400 text-xs">
            Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>

        {/* Categories */}
        {grouped.map((group) => (
          <div key={group.category} className="mb-10 print:mb-6 break-inside-avoid-page">
            <h2 className="text-xl font-bold border-b-2 border-gray-200 pb-2 mb-4 print:text-lg">
              {group.label}
            </h2>
            <div className="space-y-5 print:space-y-3">
              {group.items.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-xl p-5 print:p-3 print:rounded-lg break-inside-avoid"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className="h-10 w-10 rounded-lg object-contain shrink-0 print:h-8 print:w-8"
                      />
                      <div>
                        <h3 className="text-lg font-bold print:text-base">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-0.5">{product.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-black text-green-700 print:text-base">{product.price}</div>
                      <div className="text-xs text-gray-400 line-through">{product.originalPrice}</div>
                      <div className="text-xs font-medium text-gray-600 mt-0.5">{product.duration}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 print:grid-cols-2">
                    {product.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-1.5">
                        <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Variants */}
                  {product.variants && product.variants.length > 1 && (
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Plans Available:</p>
                      <div className="flex flex-wrap gap-3">
                        {product.variants.map((v, i) => (
                          <span key={i} className="text-xs text-gray-600 bg-gray-50 rounded-md px-2 py-1 print:bg-gray-100">
                            {v.label}: <strong>{v.price}</strong> <span className="line-through text-gray-400">{v.originalPrice}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.paymentNote && (
                    <p className="mt-2 text-xs text-amber-700 font-medium">{product.paymentNote}</p>
                  )}

                  {/* WhatsApp Order Link */}
                  <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-end">
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#1fba59] transition print:text-[#25D366] print:bg-transparent print:px-0 print:underline"
                    >
                      <svg className="h-3.5 w-3.5 print:hidden" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500 print:mt-6">
          <p className="font-semibold text-gray-700">📲 Order via WhatsApp — Delivery in 15 Minutes</p>
          <p className="mt-1">
            <a href="https://wa.me/919040914544" className="text-[#25D366] font-semibold hover:underline">
              +91 90409 14544
            </a>
          </p>
          <p className="mt-2">© {new Date().getFullYear()} The Premium Nest. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-400">All trademarks belong to their respective owners.</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
