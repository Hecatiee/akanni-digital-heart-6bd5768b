const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">
            <span className="text-primary">À</span>kanní
          </h3>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            One roof. All digital. Real impact.
          </p>

          <div className="pt-4 border-t border-border/50 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Àkanní. All rights reserved.</p>
            <p className="mt-2">
              <a href="mailto:team.akanni@gmail.com" className="hover:text-primary transition-colors">
                team.akanni@gmail.com
              </a>
              {" | "}
              <a href="tel:+919004138118" className="hover:text-primary transition-colors">
                +91 90041 38118
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
