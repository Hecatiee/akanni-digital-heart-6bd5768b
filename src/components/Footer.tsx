const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,hsl(225_60%_10%)_0%,hsl(232_70%_4%)_70%)]" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-end">
          <div className="space-y-3">
            <p className="eyebrow">Studio</p>
            <h3 className="font-display text-5xl text-foreground">Àkanní</h3>
            <p className="text-sm text-muted-foreground italic font-display">
              One roof. All digital. Real impact.
            </p>
          </div>

          <div className="space-y-2 text-sm md:text-center">
            <p className="eyebrow">Contact</p>
            <a href="mailto:team.akanni@gmail.com" className="block text-foreground/80 hover:text-primary transition-colors">
              team.akanni@gmail.com
            </a>
            <a href="tel:+919004138118" className="block text-foreground/80 hover:text-primary transition-colors">
              +91 90041 38118
            </a>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="eyebrow">Year</p>
            <p className="font-display text-2xl text-foreground">{new Date().getFullYear()}</p>
            <p className="text-xs text-muted-foreground">All rights reserved.</p>
          </div>
        </div>
        <div className="hairline mt-12" />
      </div>
    </footer>
  );
};

export default Footer;
