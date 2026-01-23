import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Target, Rocket, Users, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import boiTestimonial from "@/assets/boi-testimonial.png";
import comicBeeTestimonial from "@/assets/comic-bee-testimonial.png";
import nupurTestimonial from "@/assets/nupur-testimonial.png";
import manishaTestimonial from "@/assets/manisha-testimonial.png";

interface Akanni2ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const milestones = [
  { year: "2023", title: "The Spark", description: "Identified the digital divide affecting underserved communities" },
  { year: "2024", title: "Foundation", description: "Built partnerships with NGOs and community leaders" },
  { year: "2025", title: "Launch", description: "Officially launched Àkanní 2.0 digital inclusion movement" },
  { year: "2026", title: "Expansion", description: "Scaling to reach 100+ communities across India" },
];

const futureOutcomes = [
  { icon: Users, title: "500+ Communities", description: "Empowering underserved communities with digital presence" },
  { icon: Rocket, title: "Digital Independence", description: "Helping businesses become self-sufficient online" },
  { icon: Heart, title: "Zero Cost Support", description: "Providing free digital services to those in need" },
  { icon: Target, title: "Sustainable Impact", description: "Creating lasting change through digital literacy" },
];

const testimonials = [
  {
    name: "Mukund Satpute",
    role: "BOI Pensioners Association",
    image: boiTestimonial,
    quote: "Àkanní 2.0 gave our association a voice in the digital world. We can now reach all 700+ members effortlessly.",
  },
  {
    name: "Santosh Pisharody",
    role: "Comic Bee Studios",
    image: comicBeeTestimonial,
    quote: "Their commitment to digital inclusion is inspiring. They helped us connect with audiences we never knew existed.",
  },
  {
    name: "Nupur",
    role: "Kawlathe Konnection",
    image: nupurTestimonial,
    quote: "The team understood our vision and brought it to life digitally. True partners in our journey.",
  },
  {
    name: "Manisha",
    role: "Katha Sudha",
    image: manishaTestimonial,
    quote: "From zero online presence to a thriving digital community - Àkanní 2.0 made it possible.",
  },
];

const Akanni2Modal = ({ open, onOpenChange }: Akanni2ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-cta/5 border-cta/30">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            <span className="text-cta">Àkanní 2.0</span>
            <span className="block text-lg sm:text-xl font-normal text-muted-foreground mt-2">
              Digital Inclusion Movement
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Origin Story */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              Why We Started
            </h3>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 sm:p-6">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                In a world racing towards digital transformation, millions are being left behind. 
                We witnessed small businesses, artisans, and community organizations struggling to 
                establish their digital identity—not because they lacked talent or value, but because 
                they lacked access and resources.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-sm sm:text-base">
                <strong className="text-foreground">Àkanní 2.0</strong> was born from a simple belief: 
                everyone deserves a place in the digital world. We're not just building websites; 
                we're building bridges to opportunity, visibility, and self-sufficiency.
              </p>
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-secondary">
              <Rocket className="w-5 h-5" />
              Our Journey
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cta via-primary to-secondary hidden sm:block" />
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cta to-primary flex items-center justify-center text-white text-xs font-bold shrink-0 z-10">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 flex-1 border border-border/50 hover:border-cta/30 transition-colors">
                      <h4 className="font-bold text-foreground">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Future Outcomes */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-accent">
              <Target className="w-5 h-5" />
              Future Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {futureOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-card to-accent/5 rounded-xl p-4 border border-border/50 hover:border-accent/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <outcome.icon className="w-8 h-8 text-accent mb-2" />
                  <h4 className="font-bold text-foreground">{outcome.title}</h4>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-cta">
              <Quote className="w-5 h-5" />
              Client Stories
            </h3>
            <Carousel
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="bg-gradient-to-br from-card to-cta/5 rounded-xl p-4 sm:p-6 border border-border/50 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-cta/30"
                        />
                        <div>
                          <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Akanni2Modal;
