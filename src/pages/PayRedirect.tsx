import { useEffect } from "react";

const PayRedirect = () => {
  useEffect(() => {
    window.location.href = "https://razorpay.me/@thepremiumnest";
  }, []);

  return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Redirecting to payment…</div>;
};

export default PayRedirect;
