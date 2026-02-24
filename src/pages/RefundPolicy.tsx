import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <img src={logo} alt="The Premium Nest" className="h-8 w-auto" />
      </div>
    </nav>

    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Refund Policy</h1>
      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <p><strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Payment After Activation</h2>
          <p>For select products (Canva Pro, LinkedIn Career, LinkedIn Sales Navigator, Adobe Creative Cloud), we follow a <strong className="text-foreground">payment after activation</strong> model. This means you only pay once the service has been activated on your account, ensuring complete transparency and trust.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. Instant Refund Policy</h2>
          <p>For products that support it (such as Canva Pro), if you are not satisfied with the activation, we offer an <strong className="text-foreground">instant refund</strong> — no questions asked. Simply contact us on WhatsApp within 24 hours of activation.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Non-Refundable Products</h2>
          <p>Due to the digital nature of our products, subscriptions that have been fully activated and used (streaming services, VPN accounts, etc.) are generally non-refundable. However, if the product does not work as described, we will provide a replacement or full refund.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Defective or Non-Working Products</h2>
          <p>If the subscription we deliver does not work or stops working within the promised duration, we will either replace it with a working subscription or issue a full refund at your choice.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. How to Request a Refund</h2>
          <p>To request a refund, simply message us on WhatsApp with your order details. Refunds are typically processed within 24–48 hours.</p>
        </section>
      </div>
    </main>
  </div>
);

export default RefundPolicy;
