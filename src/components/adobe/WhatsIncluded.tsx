import photoshopLogo from "@/assets/adobe-photoshop.svg";
import illustratorLogo from "@/assets/adobe-illustrator.svg";
import premiereLogo from "@/assets/adobe-premiere.svg";
import aftereffectsLogo from "@/assets/adobe-aftereffects.svg";
import indesignLogo from "@/assets/adobe-indesign.svg";
import lightroomLogo from "@/assets/adobe-lightroom.svg";
import xdLogo from "@/assets/adobe-xd.svg";
import acrobatLogo from "@/assets/adobe-acrobat.svg";
import ScrollReveal from "./ScrollReveal";

const adobeApps = [
  {
    name: "Photoshop",
    description: "Industry-leading photo editing and design",
    logo: photoshopLogo,
  },
  {
    name: "Illustrator",
    description: "Vector graphics and illustration",
    logo: illustratorLogo,
  },
  {
    name: "Premiere Pro",
    description: "Professional video editing",
    logo: premiereLogo,
  },
  {
    name: "After Effects",
    description: "Motion graphics and VFX",
    logo: aftereffectsLogo,
  },
  {
    name: "InDesign",
    description: "Layout and publishing",
    logo: indesignLogo,
  },
  {
    name: "Lightroom",
    description: "Photo processing and editing",
    logo: lightroomLogo,
  },
  {
    name: "XD",
    description: "UI/UX design and prototyping",
    logo: xdLogo,
  },
  {
    name: "Acrobat Pro",
    description: "PDF creation and editing",
    logo: acrobatLogo,
  },
];

const WhatsIncluded = () => {
  return (
    <section id="apps" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You <span className="text-gradient">Need</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get access to the full Adobe Creative Cloud suite — 20+ industry-leading creative apps
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {adobeApps.map((app, index) => (
            <ScrollReveal key={app.name} delay={index * 0.08}>
              <div className="group bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 h-full">
                <div className="w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={app.logo}
                    alt={`${app.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{app.name}</h3>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Plus <span className="text-primary font-semibold">12+ more apps</span> including Animate, Audition, Dreamweaver, and more!
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatsIncluded;