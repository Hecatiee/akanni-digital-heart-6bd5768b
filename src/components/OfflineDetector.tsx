import { useState, useEffect } from "react";
import { WifiOff, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfflineDetector = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-heading font-black text-foreground leading-none">
              Oops!
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We can't seem to connect to the internet right now.
            </p>
            
            <div className="text-muted-foreground/80">
              <p className="font-semibold mb-3">Error: No Connection</p>
              <p className="text-sm mb-4">Here are some things you can try:</p>
              <ul className="text-sm space-y-2 text-left inline-block">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Check your WiFi or mobile data
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Restart your router
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Try again in a few moments
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
              <Button
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button
                onClick={() => window.location.href = "/"}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 bg-card rounded-full flex items-center justify-center shadow-2xl border-4 border-muted">
                  <WifiOff className="w-20 h-20 md:w-28 md:h-28 text-muted-foreground/50" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default OfflineDetector;
