import { useState } from "react";
import {
  Share2, Monitor, BarChart3, Calendar, Smartphone,
  Palette, Users, Package, Settings, Search, ArrowRight, Plus, Minus,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "Web Development & Cyber Security",
    icon: Monitor,
    color: "text-cta",
    bgColor: "bg-cta/10",
    description: "We create impactful, responsive, and secure websites tailored to your brand identity, with comprehensive cyber security solutions.",
    points: [
      "Frontend & backend development",
      "UI/UX design & optimization",
      "Domain and hosting setup",
      "Website maintenance & upgrades",
      "Integration with SEO and analytics tools",
      "Cyber security audits & vulnerability assessment",
      "Data protection & secure infrastructure"
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
    description: "Every business has unique needs, we customize accordingly.",
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

interface ServiceRowProps {
  service: typeof services[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}

const ServiceRow = ({ service, index, open, onToggle }: ServiceRowProps) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`border-t border-border/40 ${index === services.length - 1 ? "border-b" : ""}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-7 text-left group transition-colors hover:bg-foreground/[0.02]"
      >
        <span className="eyebrow text-muted-foreground/70 w-8 sm:w-12 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`hidden sm:flex w-10 h-10 ${service.bgColor} items-center justify-center shrink-0 border border-border/40`}>
          <Icon className={`w-5 h-5 ${service.color}`} />
        </span>
        <span className="flex-1 font-display text-2xl sm:text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors leading-tight">
          {service.title}
        </span>
        <span className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 sm:pl-[5.5rem] pr-2 sm:pr-12 space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {service.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-3xl">
                {service.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                    <span className="text-primary mt-1">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cta hover:text-primary transition-colors pt-2"
              >
                Let&apos;s connect
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="services" className="py-16 md:py-36 relative overflow-hidden border-t border-border/40">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -z-10 opacity-30" style={{ background: "var(--gradient-glow)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full -z-10 opacity-25" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground">
            What <span className="italic text-primary text-glow">we craft</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Ten disciplines, one studio. Each shaped to your moment.
          </p>
          <div className="hairline w-32 mx-auto" />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceRow
              key={index}
              service={service}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;