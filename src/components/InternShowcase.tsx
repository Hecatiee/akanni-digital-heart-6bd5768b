import internAnurag from "@/assets/intern-anurag.png";
import internAtharva from "@/assets/intern-atharva.png";
import internTrupti from "@/assets/intern-trupti.png";
import internRiddhi from "@/assets/intern-riddhi.png";
import internMrunali from "@/assets/intern-mrunali.png";
import internNirmiti from "@/assets/intern-nirmiti-new.jpg";
import internAditya from "@/assets/intern-aditya.jpeg";
import internRishi from "@/assets/intern-rishi.jpeg";
import internPushkar from "@/assets/intern-pushkar.jpeg";
import internAditi from "@/assets/intern-aditi.jpeg";
import internOmkar from "@/assets/intern-omkar.jpeg";
import internShubhanAsset from "@/assets/intern-shubhan.jpg";
import internAdityaShindeAsset from "@/assets/intern-aditya-shinde.jpg";
import internVedAsset from "@/assets/intern-ved.jpg";
import internAayush from "@/assets/intern-aayush.jpg";
import internNundana from "@/assets/intern-nundana.jpg";
import internInshal from "@/assets/intern-inshal.jpg";
import internSavani from "@/assets/intern-savani.jpg";
import internVedant from "@/assets/intern-vedant.jpg";
import internSmit from "@/assets/intern-smit.jpg";
import internRevati from "@/assets/intern-revati-new.jpg";
import internParth from "@/assets/intern-parth.jpg";
import { Quote, Orbit } from "lucide-react";
import { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SpaceDecor from "@/components/SpaceDecor";

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
  {
    image: internShubhanAsset,
    alt: "Shubhan Khairnar - Web Developer, Letter of Appreciation",
    name: "Shubhan Khairnar",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internAdityaShindeAsset,
    alt: "Aditya Shinde - Web Developer, Letter of Recommendation",
    name: "Aditya Shinde",
    role: "Web Developer",
    batch: "Letter of Recommendation, Symbiosis, Pune",
  },
  {
    image: internVedAsset,
    alt: "Ved Khairnar - Web Developer, Letter of Appreciation",
    name: "Ved Khairnar",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internAayush,
    alt: "Aayush Nalawade - Project Management, Letter of Appreciation",
    name: "Aayush Nalawade",
    role: "Project Management",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internNundana,
    alt: "Nundana Sree - Web Developer, Letter of Appreciation",
    name: "Nundana Sree",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internInshal,
    alt: "Inshal Zafar - Project Developer, Letter of Appreciation",
    name: "Inshal Zafar",
    role: "Project Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internSavani,
    alt: "Savani Lohate - Web Developer, Letter of Appreciation",
    name: "Savani Lohate",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internVedant,
    alt: "Vedant Turkar - Web Developer, Letter of Appreciation",
    name: "Vedant Turkar",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internSmit,
    alt: "Smit Jambhale - Web Developer, Letter of Appreciation",
    name: "Smit Jambhale",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internRevati,
    alt: "Revati Chavan - Web Developer, Letter of Appreciation",
    name: "Revati Chavan",
    role: "Web Developer",
    batch: "Letter of Appreciation, Symbiosis, Pune",
  },
  {
    image: internParth,
    alt: "Parth Sujit - Project Developer, Letter of Recommendation",
    name: "Parth Sujit",
    role: "Project Developer",
    batch: "Letter of Recommendation, Symbiosis, Pune",
  },
];

const shuffle = <T,>(items: T[]) => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const InternShowcase = () => {
  const shuffledInterns = useMemo(() => shuffle(interns), []);
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden border-t border-border/40">
      <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "var(--gradient-glow)", filter: "blur(80px)" }} />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />
      <SpaceDecor variant="planet" size={90} className="top-6 left-6 hidden sm:block" color="radial-gradient(circle at 30% 30%, hsl(40 90% 75% / 0.95), hsl(20 80% 40% / 0.6) 55%, hsl(235 80% 8% / 0.9) 100%)" />
      <SpaceDecor variant="satellite" size={48} className="top-1/2 right-6 md:right-16" />
      <SpaceDecor variant="comet" size={140} className="bottom-24 left-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in space-y-4">
          <Quote className="w-8 h-8 mx-auto text-primary/70" />
          <p className="eyebrow">Alumni</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Our <span className="italic text-primary text-glow">interns</span>
          </h2>
          <p className="text-muted-foreground text-sm">Talented people who have walked with us.</p>
          <div className="hairline w-32 mx-auto" />
        </div>

        <Carousel
          className="w-full max-w-3xl mx-auto px-8 sm:px-12"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
        >
          <CarouselContent>
            {shuffledInterns.map((intern, index) => (
              <CarouselItem key={index}>
                <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/10 animate-fade-in">
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-40 pointer-events-none" style={{ background: "var(--gradient-glow)", filter: "blur(40px)" }} />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-30 pointer-events-none" style={{ background: "var(--gradient-amber)", filter: "blur(40px)" }} />
                  <div className="relative bg-card/70 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-primary/10 overflow-hidden">
                    <Orbit className="absolute top-3 right-3 w-4 h-4 text-primary/40 animate-spin" style={{ animationDuration: "18s" }} />
                    <div className="flex flex-col items-center">
                    <img
                      src={intern.image}
                      alt={intern.alt}
                      className="w-full max-w-xl h-auto mb-6 object-contain rounded-lg border border-primary/20 shadow-[0_0_40px_-10px_hsl(195_90%_70%/0.4)]"
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : "low"}
                      decoding="async"
                      width={1000}
                      height={1250}
                    />
                    <div className="text-center">
                      <h3 className="font-display text-2xl text-foreground italic mb-2">
                        {intern.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {intern.role}
                      </p>
                      <p className="eyebrow">
                        {intern.batch}
                      </p>
                    </div>
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
