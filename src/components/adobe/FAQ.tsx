import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "How does this subscription work?",
    answer:
      "After your purchase, you'll receive login credentials for an Adobe Creative Cloud account with a 4-month subscription. You can use these credentials to sign in to Adobe's website and download any Creative Cloud app.",
  },
  {
    question: "How will I receive my subscription?",
    answer:
      "Within 24 hours of your payment confirmation, you'll receive an email with your Adobe Creative Cloud account credentials. These are ready to use immediately on Adobe's official platform.",
  },
  {
    question: "Is this a legitimate Adobe subscription?",
    answer:
      "Yes, this is a genuine Adobe Creative Cloud subscription. You'll have full access to all Creative Cloud apps, cloud storage, and Adobe Fonts through Adobe's official platform.",
  },
  {
    question: "Can I use this on multiple devices?",
    answer:
      "Yes! Adobe Creative Cloud allows you to install apps on up to two devices (one desktop, one laptop) with a single subscription. You can sign in on both devices with the same account.",
  },
  {
    question: "What happens after 4 months?",
    answer:
      "After the 4-month period ends, the subscription will expire. You can then purchase another subscription from us to continue your access, or subscribe directly through Adobe at their standard rates.",
  },
  {
    question: "Is there any support available?",
    answer:
      "Absolutely! We provide support via WhatsApp and email. If you face any issues with your subscription, reach out to us and we'll assist you promptly.",
  },
  {
    question: "Do you offer 24/7 phone support?",
    answer:
      "Yes! We offer round-the-clock phone support for all your queries. You can reach us anytime at 8971583467. Whether it's a question about your subscription, technical assistance, or any other concern — we're just a call away, 24 hours a day, 7 days a week!",
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
              Everything you need to know about our Adobe Creative Cloud offer
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