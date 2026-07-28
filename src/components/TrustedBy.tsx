import Reveal from "@/components/Reveal";

const topRow = [
  { name: "BOI", style: "font-serif font-bold uppercase tracking-widest" },
  { name: "MIT WPU", style: "font-heading font-black" },
  { name: "FZounders", style: "font-heading font-bold tracking-wide" },
  { name: "DreamSVin", style: "font-heading font-bold italic" },
];

const bottomRow = [
  { name: "Heartfulness", style: "font-serif italic" },
  { name: "Bhakti Cure", style: "font-serif font-semibold" },
  { name: "Avora", style: "font-serif font-semibold tracking-wide" },
  { name: "Vittaedu", style: "font-heading font-bold tracking-wide" },
];


type Item = { name: string; style: string };

const Marquee = ({ items, reverse = false }: { items: Item[]; reverse?: boolean }) => {
  // Duplicate the list so the translateX(-50%) loop is seamless
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden group">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className={`flex w-max items-center gap-x-12 md:gap-x-20 lg:gap-x-28 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {loop.map((company, index) => (
          <span
            key={`${company.name}-${index}`}
            className={`inline-block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/40 hover:text-foreground transition-colors duration-500 ${company.style}`}
          >
            {company.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const TrustedBy = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden border-t border-border/40 relative">
      <Reveal className="container mx-auto px-4 mb-12 text-center space-y-3">
        <p className="eyebrow">Trusted by</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground italic">Partners along the way</h2>
      </Reveal>
      <div className="space-y-10 md:space-y-14">
        <Marquee items={topRow} />
        <Marquee items={bottomRow} reverse />
      </div>
    </section>
  );
};

export default TrustedBy;
