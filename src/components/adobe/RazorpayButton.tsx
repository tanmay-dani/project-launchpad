import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RazorpayButtonProps {
  className?: string;
  label?: string;
  variant?: "hero" | "default";
  size?: "sm" | "default" | "lg" | "xl";
  showArrow?: boolean;
}

const RazorpayButton = ({ 
  className, 
  label = "Buy Now — ₹599", 
  variant = "hero", 
  size = "xl",
  showArrow = true 
}: RazorpayButtonProps) => {
  const handleClick = () => {
    window.open("https://razorpay.com/payment-button/pl_SJX0AlJVuj8Etb/view", "_blank");
  };

  return (
    <div className={className}>
      <Button 
        variant={variant} 
        size={size} 
        className="group w-full" 
        onClick={handleClick}
      >
        {label}
        {showArrow && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </Button>
    </div>
  );
};

export default RazorpayButton;
