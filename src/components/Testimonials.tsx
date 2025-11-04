import { Quote } from "lucide-react";
import boiTestimonial from "@/assets/boi-testimonial.png";

const Testimonials = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl blob-animation" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl blob-animation-delayed" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Quote className="w-12 h-12 mx-auto mb-4 text-primary float-animation" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real partners
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* BOI Testimonial */}
          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-in float-animation border-2 border-primary/10">
            <div className="flex flex-col items-center">
              <img 
                src={boiTestimonial} 
                alt="Federation of Bank of India Pensioners & Retirees Associations Testimonial" 
                className="w-full max-w-3xl rounded-2xl shadow-md mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Federation of Bank of India Pensioners & Retirees Associations
                </h3>
                <p className="text-muted-foreground italic">
                  Official website launched at national Triennial Delegate Session (700+ members)
                </p>
              </div>
            </div>
          </div>
        </div>

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
};

export default Testimonials;
