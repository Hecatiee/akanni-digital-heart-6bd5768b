import { Quote } from "lucide-react";
import boiTestimonial from "@/assets/testimonial-boi.jpeg";
import comicBeeTestimonial from "@/assets/testimonial-comicbee.jpeg";
import kawaltheTestimonial from "@/assets/testimonial-kawalthe.jpeg";
import dreamsvinTestimonial from "@/assets/testimonial-dreamsvin.jpeg";
import kathaSudhaTestimonial from "@/assets/testimonial-kathasudha.jpeg";
import rajniTestimonial from "@/assets/testimonial-rajni.jpeg";
import avoraTestimonial from "@/assets/testimonial-avora.jpeg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      image: boiTestimonial,
      alt: "Mukund Satpute - Federation of Bank of India Pensioners and Retirees Associations Testimonial",
      title: "Mukund Satpute",
      description: "Federation of Bank of India Pensioners and Retirees Associations",
      link: "https://foboipara.in"
    },
    {
      image: comicBeeTestimonial,
      alt: "Tr. Santosh Pisharody - Comic Book Designing Testimonial",
      title: "Tr. Santosh Pisharody",
      description: "Comic Book Designing",
      link: "https://www.instagram.com/spisharody7/"
    },
    {
      image: kawaltheTestimonial,
      alt: "Nupur Risbood - Kawalthe Konnections Testimonial",
      title: "Nupur Risbood",
      description: "Kawalthe Konnections",
      link: "https://www.instagram.com/_kawalthe_konnection_?igsh=MTV0bGQ2bGg2cTVvNw=="
    },
    {
      image: dreamsvinTestimonial,
      alt: "Isha Ostwal - DreamSVin Consultancy Testimonial",
      title: "Isha Ostwal",
      description: "DreamSVin Consultancy",
      link: "https://www.instagram.com/dreamsvin.in?igsh=MXAxbzF0bHBkNjJlaA=="
    },
    {
      image: kathaSudhaTestimonial,
      alt: "Manisha Athavle - Katha Sudha Testimonial",
      title: "Manisha Athavle",
      description: "Katha Sudha",
      link: "https://www.youtube.com/@Katha.Sudha_2025"
    },
    {
      image: avoraTestimonial,
      alt: "Varun Gosavi - Avora & Crazy Hedz Testimonial",
      title: "Varun Gosavi",
      description: "Avora & Crazy Hedz",
      link: "https://www.instagram.com/avora_experiences?igsh=MXZ4YXF1Y2J4MmNpOQ=="
    },
    {
      image: rajniTestimonial,
      alt: "Rajni Raut - Social Media Management & Editing Testimonial",
      title: "Rajni Raut",
      description: "Social Media Management & Editing",
      link: "https://www.instagram.com/rajniraut230?igsh=angxYnljODZldGVp"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden border-t border-border/40">
      <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-30" style={{ background: "var(--gradient-glow)", filter: "blur(80px)" }} />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-25" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in space-y-4">
          <Quote className="w-8 h-8 mx-auto text-primary/70" />
          <p className="eyebrow">Chapter IV</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            Our <span className="italic text-primary text-glow">clients</span>
          </h2>
          <p className="text-base text-muted-foreground">Real stories from real partners.</p>
          <div className="hairline w-32 mx-auto" />
        </div>

        <Carousel 
          className="w-full max-w-3xl mx-auto px-8 sm:px-12"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 animate-fade-in border border-border/60 hover:border-primary/40">
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.alt}
                      className="w-full max-w-xl h-auto mb-6 object-contain border border-border/40"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="text-center">
                      <h3 className="font-display text-2xl text-foreground mb-2 italic">
                        {testimonial.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {testimonial.description}
                      </p>
                      <a 
                        href={testimonial.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-xs uppercase tracking-[0.25em] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit profile →
                      </a>
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
}

export default Testimonials;
