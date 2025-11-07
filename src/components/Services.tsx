import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Share2, Monitor, BarChart3, Calendar, Smartphone, Palette, Users, Package, Settings, Search } from "lucide-react";

const services = [
  {
    title: "Social Media Management",
    icon: Share2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "We manage and grow your digital presence across platforms like LinkedIn, Instagram, YouTube, and Pinterest.",
    points: [
      "Strategic content planning & calendar creation",
      "Designing high-engagement creatives & captions",
      "Audience engagement & growth tracking",
      "Consistent branding and tone alignment",
      "Monthly analytics & progress reports"
    ]
  },
  {
    title: "Web Development",
    icon: Monitor,
    color: "text-cta",
    bgColor: "bg-cta/10",
    description: "We create impactful, responsive, and user-friendly websites tailored to your brand identity.",
    points: [
      "Frontend & backend development",
      "UI/UX design & optimization",
      "Domain and hosting setup",
      "Website maintenance & upgrades",
      "Integration with SEO and analytics tools"
    ]
  },
  {
    title: "Analytics, Reports & Consultancy",
    icon: BarChart3,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "We turn data into direction, helping you make informed business decisions.",
    points: [
      "Business performance & marketing analytics",
      "Growth & conversion tracking",
      "Financial and digital audits",
      "Customized strategy reports & recommendations"
    ]
  },
  {
    title: "Event Organization & Management",
    icon: Calendar,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    description: "From concept to execution, we make your events memorable and professional.",
    points: [
      "Event planning and coordination",
      "Venue & vendor management",
      "Thematic setup and creative execution",
      "On-site management & social coverage"
    ]
  },
  {
    title: "App Prototype Development",
    icon: Smartphone,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "We help visualize your app idea before it goes live.",
    points: [
      "UI/UX app wireframing",
      "Interactive prototype design",
      "Feedback-based refinements",
      "Cross-platform design support"
    ]
  },
  {
    title: "Digital Asset Creation",
    icon: Palette,
    color: "text-cta",
    bgColor: "bg-cta/10",
    description: "We create powerful digital assets for your brand to stand out.",
    points: [
      "Brand kits & logo design",
      "Marketing & advertising creatives",
      "Pitch decks, posters & infographics",
      "Social media and ad campaign visuals"
    ]
  },
  {
    title: "Networking & Connection Development",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "We help individuals and brands build valuable industry connections.",
    points: [
      "B2B and B2C networking support",
      "Collaboration and influencer outreach",
      "Partnership development strategy",
      "Personalized business introductions"
    ]
  },
  {
    title: "Vendor Management",
    icon: Package,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    description: "We coordinate trusted vendors that match your brand's expectations.",
    points: [
      "Vendor sourcing and negotiation",
      "Contract and delivery management",
      "Quality control & follow-ups",
      "Custom vendor coordination for events, production, or marketing"
    ]
  },
  {
    title: "Custom Service Packages",
    icon: Settings,
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Every business has unique needs — we customize accordingly.",
    points: [
      "Sector-based service curation",
      "Tailored workflow & management plans",
      "Flexible timelines and pricing options",
      "One-on-one consultation to finalize deliverables"
    ]
  },
  {
    title: "SEO for Web & Socials",
    icon: Search,
    color: "text-cta",
    bgColor: "bg-cta/10",
    description: "We boost your online visibility and ensure your audience finds you faster.",
    points: [
      "Website keyword optimization",
      "Hashtag and caption SEO for socials",
      "Analytics-based improvement strategy",
      "Monthly SEO performance tracking"
    ]
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <HoverCard key={index} openDelay={200}>
                  <HoverCardTrigger asChild>
                    <Card 
                      className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-2xl overflow-hidden animate-fade-in cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="pb-3">
                        <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-2`}>
                          <Icon className={`w-6 h-6 ${service.color}`} />
                        </div>
                        <CardTitle className="text-sm font-bold leading-tight">{service.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent 
                    className="w-80 p-5 bg-background/80 backdrop-blur-xl border border-primary/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] z-50 rounded-2xl transform rotate-1" 
                    side="top" 
                    align="start"
                    sideOffset={10}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 ${service.bgColor} backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className={`w-5 h-5 ${service.color}`} />
                        </div>
                        <h4 className="font-bold text-base leading-tight bg-gradient-to-r from-primary to-cta bg-clip-text text-transparent">{service.title}</h4>
                      </div>
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="space-y-2 bg-muted/30 backdrop-blur-sm rounded-lg p-3 border border-primary/10">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide">What we do:</p>
                        <ul className="space-y-1.5">
                          {service.points.map((point, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5 font-bold">•</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
