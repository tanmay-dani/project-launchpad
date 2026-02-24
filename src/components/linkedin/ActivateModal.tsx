import { useState, createContext, useContext, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "../adobe/WhatsAppIcon";

// Context so any component can trigger the modal
interface ActivateModalContextType {
  openModal: () => void;
}

const ActivateModalContext = createContext<ActivateModalContextType>({ openModal: () => {} });

export const useActivateModal = () => useContext(ActivateModalContext);

export const ActivateModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"confirm" | "form">("confirm");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const openModal = () => {
    setStep("confirm");
    setName("");
    setEmail("");
    setErrors({});
    setOpen(true);
  };

  const validateAndSubmit = () => {
    const newErrors: { name?: string; email?: string } = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || trimmedName.length < 2) {
      newErrors.name = "Please enter your name";
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = encodeURIComponent(
      `Hi, I want to activate LinkedIn Premium Career (3 months) for ₹399.\n\nName: ${trimmedName}\nLinkedIn Email: ${trimmedEmail}\n\n(Pay after activation)`
    );
    window.open(`https://wa.me/919040914544?text=${message}`, "_blank");
    setOpen(false);
  };

  return (
    <ActivateModalContext.Provider value={{ openModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-background border-border p-0 overflow-hidden">
          {step === "confirm" ? (
            // Step 1: Micro-qualification
            <div className="p-6 md:p-8 text-center">
              <DialogTitle className="text-xl md:text-2xl font-bold mb-2">
                Are you ready to activate today?
              </DialogTitle>
              <p className="text-sm text-muted-foreground mb-6">
                LinkedIn Premium Career • 3 Months • ₹399
              </p>

              <div className="flex flex-col gap-3">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full shadow-glow group"
                  onClick={() => setStep("form")}
                >
                  Yes — Let's Activate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Maybe Later
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 mt-5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-primary" />
                Pay only after activation • Zero risk
              </div>
            </div>
          ) : (
            // Step 2: Lead capture form
            <div className="p-6 md:p-8">
              <DialogTitle className="text-xl md:text-2xl font-bold mb-1 text-center">
                Almost There!
              </DialogTitle>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Enter your details and we'll activate Premium on your account
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="activate-name" className="text-sm font-medium text-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="activate-name"
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
                    className="mt-1.5 bg-secondary border-border"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="activate-email" className="text-sm font-medium text-foreground">
                    LinkedIn Email
                  </Label>
                  <Input
                    id="activate-email"
                    type="email"
                    placeholder="e.g. rahul@gmail.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })); }}
                    className="mt-1.5 bg-secondary border-border"
                    maxLength={254}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  <p className="text-xs text-muted-foreground mt-1">
                    The email you use to login to LinkedIn
                  </p>
                </div>

                <Button
                  variant="hero"
                  size="xl"
                  className="w-full shadow-glow group mt-2"
                  onClick={validateAndSubmit}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Activate My Premium
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  We'll activate on your account, then you pay ₹399
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  No password required • 100% safe
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </ActivateModalContext.Provider>
  );
};
