import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-glass-border py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-accent" />
        <span className="font-display text-sm text-gradient-gold">CosmoSphere</span>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} CosmoSphere. AI-Powered Astrology Platform.
      </p>
    </div>
  </footer>
);

export default Footer;
