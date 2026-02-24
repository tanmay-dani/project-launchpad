import { useEffect, useRef } from "react";

export function TrustpilotCollector() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = () => {
      if (ref.current && (window as any).Trustpilot) {
        (window as any).Trustpilot.loadFromElement(ref.current, true);
        return true;
      }
      return false;
    };
    if (!load()) {
      const interval = setInterval(() => {
        if (load()) clearInterval(interval);
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="69968f6dcd2640ab9bfd4621"
      data-style-height="44px"
      data-style-width="100%"
      data-token="57db3853-9f2c-4f0b-bae9-99090f19718f"
    >
      <a href="https://www.trustpilot.com/review/thepremiumnest.com" target="_blank" rel="noopener">
        Trustpilot
      </a>
    </div>
  );
}
