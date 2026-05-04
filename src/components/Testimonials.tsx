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
    <section className="relative py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl blob-animation" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl blob-animation-delayed" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <Quote className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary float-animation" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center">
            Real stories from real partners
          </p>
        </div>

        <Carousel 
          className="w-full max-w-3xl mx-auto px-8 sm:px-12"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-card rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border-2 border-primary/10">
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.alt}
                      className="w-full max-w-xl h-auto rounded-2xl shadow-md mb-4 object-contain"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {testimonial.title}
                      </h3>
                      <p className="text-muted-foreground italic text-sm mb-3">
                        {testimonial.description}
                      </p>
                      <a 
                        href={testimonial.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Profile →
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

        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/4 w-8 h-8 text-accent/30 float-animation">
          ⭐
        </div>
        <div className="absolute top-1/3 right-10 w-6 h-6 text-primary/30 float-animation" style={{ animationDelay: '0.5s' }}>
          ✨
        </div>
        <div className="absolute bottom-20 left-1/3 w-6 h-6 text-cta/30 float-animation" style={{ animationDelay: '1s' }}>
          💬
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
