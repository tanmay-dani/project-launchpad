import { products } from "@/data/products";

const logos = products.map((p) => ({ id: p.id, name: p.name, logo: p.logo }));
const duplicated = [...logos, ...logos];

export function LogoBanner({ onProductClick }: { onProductClick?: (id: number) => void }) {
  const handleClick = (id: number) => {
    if (onProductClick) {
      onProductClick(id);
    } else {
      const el = document.getElementById(`product-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="overflow-hidden pt-14 pb-2">
      <div className="flex w-max animate-[scroll_25s_linear_infinite] items-center gap-10" style={{ willChange: "transform", transform: "translateZ(0)" }}>
        {duplicated.map((item, i) => (
          <button
            key={`${item.name}-${i}`}
            onClick={() => handleClick(item.id)}
            className="cursor-pointer bg-transparent border-none p-0"
            aria-label={`Go to ${item.name}`}
          >
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              className="h-12 w-12 shrink-0 object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
