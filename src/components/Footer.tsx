import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          <span className="text-gradient">Apex</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <Link to="/adobe" className="hover:text-foreground transition-colors">Adobe</Link>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Apex. All rights reserved.</p>
      </div>
    </footer>
  );
}
