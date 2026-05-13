import internAnurag from "@/assets/intern-anurag.png";
import internAtharva from "@/assets/intern-atharva.png";
import internTrupti from "@/assets/intern-trupti.png";
import internRiddhi from "@/assets/intern-riddhi.png";
import internMrunali from "@/assets/intern-mrunali.png";
import internNirmiti from "@/assets/intern-nirmiti.png";
import internAditya from "@/assets/intern-aditya.jpeg";
import internRishi from "@/assets/intern-rishi.jpeg";
import internPushkar from "@/assets/intern-pushkar.jpeg";
import internAditi from "@/assets/intern-aditi.jpeg";
import internOmkar from "@/assets/intern-omkar.jpeg";
import { Quote } from "lucide-react";
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
  {
    image: internTrupti,
    alt: "Trupti Patil - Web Developer, Letter of Appreciation",
    name: "Trupti Patil",
    role: "Web Developer",
    batch: "Letter of Appreciation, Garaware College, Pune",
  },
  {
    image: internRiddhi,
    alt: "Riddhi Junawane - Data Analyst, Letter of Recommendation",
    name: "Riddhi Junawane",
    role: "Data Analyst",
    batch: "Letter of Recommendation, MIT WPU, Pune",
  },
  {
    image: internMrunali,
    alt: "Mrunali Pawar - Data Analyst, Letter of Appreciation",
    name: "Mrunali Pawar",
    role: "Data Analyst",
    batch: "Letter of Appreciation, MIT WPU, Pune",
  },
  {
    image: internNirmiti,
    alt: "Nirmiti Parkar - Designer, Letter of Appreciation",
    name: "Nirmiti Parkar",
    role: "Designer",
    batch: "Letter of Appreciation, MIT WPU, Pune",
  },
  {
    image: internAditya,
    alt: "Aditya Khude - Data Analyst, Letter of Appreciation",
    name: "Aditya Khude",
    role: "Data Analyst",
    batch: "Letter of Appreciation, MIT WPU, Pune",
  },
  {
    image: internRishi,
    alt: "Rishi Mandot - Data Analyst, Letter of Appreciation",
    name: "Rishi Mandot",
    role: "Data Analyst",
    batch: "Letter of Appreciation, MIT WPU, Pune",
  },
  {
    image: internPushkar,
    alt: "Pushkar Khaire - Data Analyst, Letter of Appreciation",
    name: "Pushkar Khaire",
    role: "Data Analyst",
    batch: "Letter of Appreciation, MIT WPU, Pune",
  },
  {
    image: internAditi,
    alt: "Aditi Joshi - Data Analyst, Letter of Recommendation",
    name: "Aditi Joshi",
    role: "Data Analyst",
    batch: "Letter of Recommendation, MIT WPU, Pune",
  },
  {
    image: internOmkar,
    alt: "Omkar Bhoite - Web Developer, Letter of Appreciation",
    name: "Omkar Bhoite",
    role: "Web Developer",
    batch: "Letter of Appreciation, MIT WPU, Pune",
  },
];

const InternShowcase = () => {
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background to-secondary/20 rounded-3xl">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl blob-animation" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl blob-animation-delayed" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <Quote className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary float-animation" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Interns
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center">
            Meet the talented individuals who have been part of our journey
          </p>
        </div>

        <Carousel
          className="w-full max-w-3xl mx-auto px-8 sm:px-12"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
        >
          <CarouselContent>
            {interns.map((intern, index) => (
              <CarouselItem key={index}>
                <div className="bg-card rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border-2 border-primary/10">
                  <div className="flex flex-col items-center">
                    <img
                      src={intern.image}
                      alt={intern.alt}
                      className="w-full max-w-xl h-auto rounded-2xl shadow-md mb-4 object-contain"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {intern.name}
                      </h3>
                      <p className="text-muted-foreground italic text-sm mb-1">
                        {intern.role}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {intern.batch}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 sm:-left-4" />
          <CarouselNext className="right-0 sm:-right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default InternShowcase;
