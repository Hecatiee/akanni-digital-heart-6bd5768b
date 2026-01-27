import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Target, Rocket, Users } from "lucide-react";

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
              The Story of Àkanní 2.0
            </h3>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 sm:p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                When I was 15 or 16, I was travelling in a Mumbai local train. A transgender woman entered the compartment, quietly selling jhumkas. She spoke with warmth and dignity—but most people looked away. Not out of hatred, but out of habit.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base italic">
                That moment stayed with me.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                It made me question why some communities—transgender individuals, backward or underrepresented groups—are always left behind, even when they're trying to create something honest for themselves. Why is opportunity still selective? Why do we hesitate to listen?
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Years later, when I started Àkanní, I knew this thought couldn't remain just a memory. That's how <strong className="text-foreground">Àkanní 2.0</strong> came to life.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Àkanní 2.0 is our community upliftment initiative. We work with individuals or organizations from marginalized communities for 45 days—completely free of cost—sharing skills, guidance, and support to help them grow sustainably.
              </p>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                This isn't charity. It's a belief in equal beginnings.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base italic">
                Àkanní 2.0 exists because sometimes, a small moment in a crowded train can shape a purpose for life.
              </p>
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2 text-secondary">
              <Rocket className="w-5 h-5" />
              Our Journey
            </h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border/50 hover:border-cta/30 transition-colors">
                  <h4 className="font-bold text-foreground">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground text-left">{milestone.description}</p>
                </div>
              ))}
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

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Akanni2Modal;
