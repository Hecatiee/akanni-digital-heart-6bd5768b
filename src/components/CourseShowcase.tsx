import courseHarish from "@/assets/course-harish.jpg";
import courseTanaya from "@/assets/course-tanaya.jpg";
import courseMasud from "@/assets/course-masud.jpg";
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

const learners = [
  {
    image: courseHarish,
    alt: "Harish Badgujar - Web Developer, Course Completion",
    name: "Harish Badgujar",
    role: "Web Developer",
    batch: "Course Completion, Sandip University, Nashik",
  },
  {
    image: courseTanaya,
    alt: "Tanaya Joshi - Web Developer, Course Completion",
    name: "Tanaya Joshi",
    role: "Web Developer",
    batch: "Course Completion, MIT WPU, Pune",
  },
  {
    image: courseMasud,
    alt: "Masud Abbasi - Social Media, Course Completion",
    name: "Masud Abbasi",
    role: "Social Media",
    batch: "Course Completion, Central University, Tamil Nadu",
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

const CourseShowcase = () => {
  const shuffled = useMemo(() => shuffle(learners), []);
  return (
    <section className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden border-t border-border/40">
      <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "var(--gradient-glow)", filter: "blur(80px)" }} />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />
      <SpaceDecor variant="planet" size={90} className="top-6 left-6 hidden sm:block" color="radial-gradient(circle at 30% 30%, hsl(40 90% 75% / 0.95), hsl(20 80% 40% / 0.6) 55%, hsl(235 80% 8% / 0.9) 100%)" />
      <SpaceDecor variant="satellite" size={48} className="top-1/2 right-6 md:right-16" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in space-y-4">
          <Quote className="w-8 h-8 mx-auto text-primary/70" />
          <p className="eyebrow">Learners</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground">
            Course <span className="italic text-primary text-glow">graduates</span>
          </h2>
          <p className="text-muted-foreground text-sm">People who learned by building with us.</p>
          <div className="hairline w-32 mx-auto" />
        </div>

        <Carousel
          className="w-full max-w-3xl mx-auto px-8 sm:px-12"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]}
        >
          <CarouselContent>
            {shuffled.map((person, index) => (
              <CarouselItem key={index}>
                <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/10 animate-fade-in">
                  <div className="relative bg-card/70 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-primary/10 overflow-hidden">
                    <Orbit className="absolute top-3 right-3 w-4 h-4 text-primary/40 animate-spin" style={{ animationDuration: "18s" }} />
                    <div className="flex flex-col items-center">
                      <img
                        src={person.image}
                        alt={person.alt}
                        className="w-full max-w-xl h-auto mb-6 object-contain rounded-lg border border-primary/20 shadow-[0_0_40px_-10px_hsl(195_90%_70%/0.4)]"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        width={1000}
                        height={1250}
                      />
                      <div className="text-center">
                        <h3 className="font-display text-2xl text-foreground italic mb-2">{person.name}</h3>
                        <p className="text-muted-foreground text-sm mb-1">{person.role}</p>
                        <p className="eyebrow">{person.batch}</p>
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

export default CourseShowcase;