import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated blob backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl blob-animation" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl blob-animation-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-primary">Àkanní</span>
              <br />
              <span className="text-foreground">One roof.</span>
              <br />
              <span className="text-secondary">All digital.</span>
              <br />
              <span className="text-accent">Real impact.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              We&apos;re a one-stop digital studio that brings design, tech, and marketing together. 
              From AI-driven design to web apps and social impact projects, we turn ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-cta hover:bg-cta/90 text-cta-foreground font-heading text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Let's Build Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-lg rounded-full transition-all hover:scale-105"
              >
                Our Story
              </Button>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="relative float-animation">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroIllustration} 
                alt="Àkanní - Playful digital studio illustration with cute animals working on creative projects" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative blobs around image */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
