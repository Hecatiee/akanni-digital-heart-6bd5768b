import { Button } from "@/components/ui/button";
import { ArrowRight, MoveDown } from "lucide-react";
import Starfield from "@/components/Starfield";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(225_70%_14%)_0%,hsl(230_60%_7%)_55%,hsl(232_70%_3%)_100%)]" />
        <Starfield />
        {/* Horizon glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full glow-orb opacity-70 float-animation" />
        {/* Amber halo lower right */}
        <div className="absolute -bottom-32 -right-20 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-50" style={{ background: "var(--gradient-amber)", filter: "blur(40px)" }} />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(232_70%_3%)_100%)]" />
      </div>
      <div className="grain" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <p className="eyebrow">À K A N N Í &nbsp; · &nbsp; D I G I T A L &nbsp; S T U D I O</p>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] text-foreground">
            One roof.
            <br />
            <span className="italic text-primary text-glow">All digital.</span>
            <br />
            Real impact.
          </h1>

          <div className="hairline w-40 mx-auto" />

          <p className="font-body text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A one stop digital studio bringing design, technology and marketing together. From AI driven design to web, apps and social impact, we turn ideas into things that matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-none px-8 py-6 transition-all duration-500 shadow-[0_0_40px_-10px_hsl(195_90%_70%/0.5)]"
            >
              Let&apos;s build together
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-foreground/30 bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground font-body text-sm tracking-[0.2em] uppercase rounded-none px-8 py-6"
            >
              Our story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="eyebrow text-[9px]">scroll</span>
        <MoveDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
