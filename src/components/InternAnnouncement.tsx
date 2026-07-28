import { Award, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const appreciation = ["Ved", "Shubhan", "Nandana", "Revati", "Inshal", "Vedant", "Aayush", "Smit", "Savani"];
const recommendation = ["Aditya", "Parth"];

const InternAnnouncement = () => {
  return (
    <section className="relative mb-12 border border-border/60 bg-card/40 backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-glow)", filter: "blur(70px)" }}
      />
      <Reveal className="relative z-10 space-y-6">
        <div className="space-y-2">
          <p className="eyebrow">Announcement</p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">
            Selected <span className="italic text-primary text-glow">interns</span>
          </h2>
          <div className="hairline w-24" />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          We are pleased to announce the interns who have been selected for special recognition based on their
          dedication, consistency, professionalism, and overall performance during their internship at Àkanní,
          Creating Digital Dreams.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Star className="h-4 w-4" />
              <p className="text-xs uppercase tracking-[0.2em]">Company Appreciation</p>
            </div>
            <ul className="space-y-1.5">
              {appreciation.map((name) => (
                <li key={name} className="text-sm text-foreground/90 border-b border-border/40 pb-1.5">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-accent">
              <Award className="h-4 w-4" />
              <p className="text-xs uppercase tracking-[0.2em]">Letter of Recommendation</p>
            </div>
            <ul className="space-y-1.5">
              {recommendation.map((name) => (
                <li key={name} className="text-sm text-foreground/90 border-b border-border/40 pb-1.5">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Congratulations to all the selected interns. Your commitment and hard work have been truly commendable,
          and we are proud to recognise your efforts. We wish you continued success in your academic and
          professional journey.
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">
          Team Àkanní, Creating Digital Dreams
        </p>
      </Reveal>
    </section>
  );
};

export default InternAnnouncement;