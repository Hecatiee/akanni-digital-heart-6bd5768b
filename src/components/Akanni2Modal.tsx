import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart } from "lucide-react";

interface Akanni2ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
                When I was 15 or 16, I was travelling in a Mumbai local train. A transgender woman entered the compartment, quietly selling jhumkas. She spoke with warmth and dignity, but most people looked away. Not out of hatred, but out of habit.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base italic text-left">
                That moment stayed with me.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
                It made me question why some communities like transgender individuals, backward or underrepresented groups are always left behind, even when they're trying to create something honest for themselves. Why is opportunity still selective? Why do we hesitate to listen?
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
                Years later, when I started Àkanní, I knew this thought couldn't remain just a memory. That's how <strong className="text-foreground">Àkanní 2.0</strong> came to life.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
                Àkanní 2.0 is our community upliftment initiative. We work with individuals or organizations from marginalized communities for 45 days, completely free of cost, sharing skills, guidance, and support to help them grow sustainably.
              </p>
              <p className="text-foreground font-semibold text-sm sm:text-base">
                This isn't charity. It's a belief in equal beginnings.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base italic">
                Àkanní 2.0 exists because sometimes, a small moment in a crowded train can shape a purpose for life.
              </p>
            </div>
          </section>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Akanni2Modal;
