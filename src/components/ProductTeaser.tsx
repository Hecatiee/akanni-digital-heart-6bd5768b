import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SpaceDecor from "@/components/SpaceDecor";

const ProductTeaser = () => {
  const navigate = useNavigate();

  return (
    <section id="product" className="relative py-16 md:py-28 px-4 sm:px-6 overflow-hidden border-t border-border/40">
      <div
        className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-glow)", filter: "blur(90px)" }}
      />
      <SpaceDecor variant="planet" size={80} className="bottom-10 left-6 hidden sm:block" />
      <SpaceDecor variant="comet" size={130} className="top-16 left-1/3 hidden md:block" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <Reveal className="text-center space-y-4 mb-10">
          <p className="eyebrow">Our Product</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            A forecast engine, <span className="italic text-primary text-glow">built for you</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-justify sm:text-center">
            Our in house product turns your business data into clear, forward looking signals. Tell us about your
            company, pick a slot, and we will walk you through a live demo on Google Meet.
          </p>
          <div className="hairline w-32 mx-auto" />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
            <Sparkles className="h-4 w-4" />
            Trial phase open
          </div>
          <Button
            onClick={() => navigate("/product")}
            variant="outline"
            className="border border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-none font-body text-xs uppercase tracking-[0.2em] px-8 py-6"
          >
            Explore the product
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductTeaser;