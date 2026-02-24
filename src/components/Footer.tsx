const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold text-gradient">Acme</div>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Docs</a>
          <a href="#" className="hover:text-foreground transition">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Acme Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
