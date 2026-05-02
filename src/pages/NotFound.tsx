import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text content */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-black text-foreground leading-none">
            Oops!
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We can't seem to find the page you're looking for.
          </p>
          
          <div className="text-muted-foreground/80">
            <p className="font-semibold mb-3">Error code: 404</p>
            <p className="text-sm mb-4">Here are some helpful links instead:</p>
            <ul className="text-sm space-y-2 text-left inline-block">
              <li>
                <Link to="/" className="text-primary hover:text-primary/80 flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="text-primary hover:text-primary/80 flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  className="text-primary hover:text-primary/80 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-card rounded-full flex items-center justify-center shadow-2xl border-4 border-muted">
                <span className="text-5xl sm:text-6xl md:text-8xl font-heading font-black text-muted-foreground/30">
                  404
                </span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary/30 rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-6 w-8 h-8 sm:w-12 sm:h-12 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-1/2 -right-8 w-4 h-4 sm:w-6 sm:h-6 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
