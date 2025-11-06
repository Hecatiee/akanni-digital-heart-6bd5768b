import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Megaphone, Shield, TrendingUp, Sparkles, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web & UI/UX Development Department",
    icon: Monitor,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Digital Marketing & Content Department",
    icon: Megaphone,
    color: "text-cta",
    bgColor: "bg-cta/10",
  },
  {
    title: "Cybersecurity & Tech Consulting Department",
    icon: Shield,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Research & Strategy Department",
    icon: TrendingUp,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "AI & Visual Design Department",
    icon: Sparkles,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Application Design and Development",
    icon: Smartphone,
    color: "text-cta",
    bgColor: "bg-cta/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBottomRow = index >= 3;
            return (
              <Card 
                key={index}
                className={`border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-2xl overflow-hidden animate-fade-in ${
                  isBottomRow ? 'md:translate-x-[50%]' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-2`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-base font-bold leading-tight">{service.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
