import { Quote } from "lucide-react";
import boiTestimonial from "@/assets/boi-testimonial.png";
import comicBeeTestimonial from "@/assets/comic-bee-testimonial.png";
import nupurTestimonial from "@/assets/nupur-testimonial.png";
import manishaTestimonial from "@/assets/manisha-testimonial.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      image: boiTestimonial,
      alt: "Mukund Satpute - Federation of Bank of India Pensioners and Retirees Associations Testimonial",
      title: "Mukund Satpute",
      description: "Federation of Bank of India Pensioners and Retirees Associations"
    },
    {
      image: comicBeeTestimonial,
      alt: "Santosh Pisharody - Comic Book Designing Testimonial",
      title: "Santosh Pisharody",
      description: "Comic Book (Designing)"
    },
    {
      image: nupurTestimonial,
      alt: "Nupur Risbood - Social Media Marketing Testimonial",
      title: "Nupur Risbood",
      description: "Social Media Marketing"
    },
    {
      image: manishaTestimonial,
      alt: "Mrs. Manisha Athavle - YouTube Management Testimonial",
      title: "Mrs. Manisha Athavle",
      description: "YouTube Management"
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl blob-animation" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl blob-animation-delayed" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Quote className="w-12 h-12 mx-auto mb-4 text-primary float-animation" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground text-justify">
            Real stories from real partners
          </p>
        </div>

        <Carousel 
          className="w-full max-w-3xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-card rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in float-animation border-2 border-primary/10">
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.alt}
                      className="w-full max-w-xl rounded-2xl shadow-md mb-4"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {testimonial.title}
                      </h3>
                      <p className="text-muted-foreground italic text-sm">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
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
