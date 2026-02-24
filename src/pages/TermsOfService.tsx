import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const TermsOfService = () => (
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
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <p><strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Overview</h2>
          <p>The Premium Nest provides premium digital subscription services at discounted prices. By using our website and placing an order, you agree to these terms.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. Products & Delivery</h2>
          <p>All products are digital subscriptions delivered via WhatsApp within 15 minutes of confirmed payment. Delivery timelines may vary in rare cases but we strive for the fastest service possible.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Account Usage</h2>
          <p>Subscriptions are for personal use only. Sharing, reselling, or distributing the subscription credentials to others is strictly prohibited and may result in termination of the service without refund.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Pricing</h2>
          <p>All prices are listed in Indian Rupees (₹) and are subject to change without prior notice. The price at the time of order placement will be honored.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. Liability</h2>
          <p>The Premium Nest acts as a service provider for digital subscriptions. We are not affiliated with the original subscription providers. All trademarks belong to their respective owners.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Changes to Terms</h2>
          <p>We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
        </section>
      </div>
    </main>
  </div>
);

export default TermsOfService;
