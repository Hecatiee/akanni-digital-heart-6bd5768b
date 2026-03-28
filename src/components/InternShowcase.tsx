import internAnurag from "@/assets/intern-anurag.png";
import internAtharva from "@/assets/intern-atharva.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const interns = [
  {
    image: internAnurag,
    alt: "Anurag Singh - Web Developer, Batch 1 (Jan - Mar 2025)",
    name: "Anurag Singh",
    role: "Web Developer",
    batch: "Batch 1 (Jan - Mar 2025)",
  },
  {
    image: internAtharva,
    alt: "Atharva Patil - Web Developer, Letter of Appreciation",
    name: "Atharva Patil",
    role: "Web Developer",
    batch: "Letter of Appreciation",
  },
];

const InternShowcase = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        Our Interns
      </h2>
      <p className="text-muted-foreground text-center mb-6 text-sm">
        Meet the talented individuals who have been part of our journey
      </p>

      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
        className="w-full max-w-md mx-auto"
      >
        <CarouselContent>
          {interns.map((intern, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                  <img
                    src={intern.image}
                    alt={intern.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>
    </section>
  );
};

export default InternShowcase;
