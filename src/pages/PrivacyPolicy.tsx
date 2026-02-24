import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const PrivacyPolicy = () => (
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
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <p><strong className="text-foreground">Last updated:</strong> {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Information We Collect</h2>
          <p>When you place an order through our website or WhatsApp, we may collect your name, email address, phone number, and payment details. We only collect information necessary to fulfill your order.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
          <p>We use your information to process and deliver your orders, communicate with you about your purchases, provide customer support, and improve our services. We do not sell or share your personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. Payment Security</h2>
          <p>All payments are processed securely through Razorpay. We do not store your credit/debit card details on our servers. Razorpay handles all payment data in compliance with PCI-DSS standards.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal or reporting requirements.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. To exercise these rights, please contact us via WhatsApp or email.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please reach out to us on WhatsApp.</p>
        </section>
      </div>
    </main>
  </div>
);

export default PrivacyPolicy;
