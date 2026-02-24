import RazorpayButton from "./RazorpayButton";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow - softer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/12 rounded-full blur-[180px]" />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="bg-gradient-card rounded-3xl p-10 md:p-16 border border-primary/25 text-center shadow-glow">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient">Create?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of creators who are saving big on Adobe Creative Cloud. Start your creative journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <RazorpayButton label="Get Adobe CC for ₹599" />
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              <span className="text-success">✓</span> Instant delivery via email &nbsp; 
              <span className="text-success">✓</span> Full access to all apps &nbsp; 
              <span className="text-success">✓</span> 4 months validity
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;