import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "../adobe/ScrollReveal";

const faqs = [
  {
    question: "How does this subscription work?",
    answer:
      "After your purchase, we upgrade your existing LinkedIn account to Premium Career directly on your personal email. You keep full control of your account — we just activate the premium features for 3 months.",
  },
  {
    question: "Is it activated on my own account?",
    answer:
      "Yes! Unlike shared accounts, this is activated directly on your personal LinkedIn profile. All your connections, messages, and data remain exactly as they are — you simply get Premium features unlocked.",
  },
  {
    question: "How will I receive my subscription?",
    answer:
      "After payment confirmation, we'll activate Premium Career on your account within 24 hours. You'll receive a confirmation message once it's live. No credentials to manage — it's your own account.",
  },
  {
    question: "What's included in Premium Career?",
    answer:
      "You get 5 InMail credits per month, full profile viewer history (365 days), AI-powered resume and profile optimization, applicant insights on every job, Top Applicant badge, and unlimited access to 21,000+ LinkedIn Learning courses.",
  },
  {
    question: "Do I need to share my LinkedIn password?",
    answer:
      "We use a secure activation method that doesn't require your password. We'll guide you through the simple process via WhatsApp — it takes less than 2 minutes.",
  },
  {
    question: "What happens after 3 months?",
    answer:
      "After the 3-month period ends, your account reverts to the free LinkedIn plan. You can purchase another subscription from us to continue, or subscribe directly through LinkedIn at their standard rates.",
  },
  {
    question: "Is there any support available?",
    answer:
      "Absolutely! We provide support via WhatsApp and phone. If you face any issues with your subscription, reach out to us and we'll assist you promptly. We also offer 24/7 phone support at 8971583467.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about our LinkedIn Premium Career offer
            </p>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-gradient-card rounded-xl border border-border px-6 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
