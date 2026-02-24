import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="bg-white rounded-lg p-2">
              <img src={logo} alt="Premium Nest" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground">Your trusted source for premium software deals</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} The Premium Nest. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2">LinkedIn is a trademark of LinkedIn Corporation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
