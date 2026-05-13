import { useState } from "react";
import { Linkedin, Instagram, FileText, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "About", id: "about", type: "scroll" },
    { name: "Our Services", id: "services", type: "scroll" },
    { name: "Testimonials", id: "testimonials", type: "scroll" },
    { name: "Internships", path: "/internships", type: "navigate" },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/akanni-team-ab0047342/?viewAsMember=true", 
      label: "LinkedIn",
      color: "hover:text-primary" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/_.akanni.__", 
      label: "Instagram",
      color: "hover:text-accent" 
    },
    { 
      icon: FileText, 
      href: "https://medium.com/@team.akanni", 
      label: "Blog",
      color: "hover:text-secondary" 
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Àkanní Logo" className="h-10 w-auto opacity-90" />
            <span className="hidden sm:inline font-display text-2xl text-foreground tracking-wide">Àkanní</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {/* Nav Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => 
                    link.type === "scroll" 
                      ? scrollToSection(link.id!) 
                      : handleNavigation(link.path!)
                  }
                  className="text-foreground/80 hover:text-primary transition-colors font-body text-xs uppercase tracking-[0.25em]"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 border-l border-border/40 pl-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className={`text-muted-foreground ${social.color} transition-colors`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="default"
                className="ml-2 border border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-none font-body text-xs uppercase tracking-[0.2em]"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => 
                    link.type === "scroll" 
                      ? scrollToSection(link.id!) 
                      : handleNavigation(link.path!)
                  }
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className={`text-muted-foreground ${social.color} transition-colors`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-cta hover:bg-cta/90 text-cta-foreground rounded-full w-full mt-2"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
