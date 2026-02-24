import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "../adobe/ScrollReveal";

const faqs = [
  {
    question: "Is this legit? How can it be so cheap?",
    answer:
      "100% legit. We source surplus corporate bulk vouchers that large companies buy for employees but don't fully use. These vouchers are about to expire, so we acquire them at steep discounts and pass the savings to you. The Premium you get is the exact same official LinkedIn Premium Career plan.",
  },
  {
    question: "Will it be activated on MY account?",
    answer:
      "Yes. This is activated directly on your personal LinkedIn profile using your own email. All your connections, messages, and data stay exactly as they are. You simply get Premium features unlocked. No shared accounts, no fake profiles.",
  },
  {
    question: "Do I need to share my password?",
    answer:
      "Absolutely not. We never ask for your LinkedIn password. Our activation method is completely secure and doesn't require any login credentials. We'll walk you through the simple process via WhatsApp. It takes less than 2 minutes.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "That's the whole point of our \"Pay After Activation\" guarantee. We activate first, you verify the Gold Badge is on your profile, and only then do you pay. If it doesn't work, you owe us nothing. Simple as that.",
  },
  {
    question: "What exactly is included in Premium Career?",
    answer:
      "You get 5 InMail credits per month so you can message anyone on LinkedIn, full profile viewer history for 365 days, AI-powered resume optimization, applicant insights on every job, the Top Applicant Gold Badge, unlimited access to 21,000+ LinkedIn Learning courses with certificates, and interview prep tools.",
  },
  {
    question: "What happens after 3 months?",
    answer:
      "After the 3-month period, your account goes back to the free LinkedIn plan. No automatic charges, no surprises. You can purchase another activation from us at whatever the current batch price is, or subscribe directly through LinkedIn at ₹2,500/month.",
  },
  {
    question: "How fast is the activation?",
    answer:
      "Most activations happen within 2 to 6 hours. Some happen within minutes. You'll get a WhatsApp confirmation the moment it's live. We also have 24/7 support at 8971583467 if you need anything.",
  },
  {
    question: "I'm still not sure...",
    answer:
      "Totally fair. Here's the thing though: you literally pay nothing upfront. We activate first, you verify it works, then pay. If you're not happy, just walk away. There's no scenario where you lose money. The only risk is missing out on this batch at ₹399.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Still Have Questions?</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              We'll Answer <span className="text-foreground">Everything</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              If your question isn't here, just WhatsApp us. We reply in minutes, not days.
            </p>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-gradient-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
