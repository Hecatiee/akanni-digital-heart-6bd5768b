import teamCircle from "@/assets/team-circle.png";
import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-36 relative overflow-hidden">
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full -z-10 opacity-40"
        style={{ background: "var(--gradient-glow)", filter: "blur(60px)" }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16 space-y-4">
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              Our <span className="italic text-primary text-glow">story</span>
            </h2>
            <div className="hairline w-32 mx-auto" />
          </Reveal>

          <div className="relative">
            <Reveal className="float-none md:float-right md:ml-10 md:mb-8 w-full md:w-96 mx-auto md:mx-0 mb-10 md:mb-0" y={60}>
              <div className="relative float-animation">
                <img
                  src={teamCircle}
                  alt="Diverse team members joining hands in a circle, representing unity and collaboration at Àkanní"
                  className="w-full h-auto rounded-full shadow-[0_30px_80px_-20px_hsl(195_90%_70%/0.35)] border border-border/40"
                />
                <div
                  className="absolute inset-0 rounded-full blur-2xl -z-10 scale-110"
                  style={{ background: "var(--gradient-glow)" }}
                />
              </div>
            </Reveal>

            <div className="space-y-10 text-base leading-relaxed">
              <Reveal className="bg-card/40 backdrop-blur-sm border border-border/60 p-8 md:p-10" y={50}>
                <p className="eyebrow text-accent mb-4">Àkanní 2.0</p>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6 italic">
                  A digital inclusion movement.
                </h3>
                <p className="mb-4 text-foreground/80">
                  Now we&apos;re launching <strong>Àkanní 2.0</strong>, a focused movement for digital inclusion.
                  This phase is practical, not performative.
                </p>
                <p className="text-foreground/70">
                  We will help underserved communities build and own their digital presence: brand representation,
                  social media, web profiles and e-commerce, without charging them. We want to hand them a stage
                  so they can be visible, respected, and self-sufficient in the digital world.
                </p>
              </Reveal>

              <Reveal className="text-left py-8 clear-right md:clear-none" y={50}>
                <p className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
                  More than a service studio.
                  <br />
                  <span className="italic text-primary text-glow">A growth partner</span> blending
                  <span className="italic"> creativity</span>,
                  <span className="italic"> technology</span>,
                  <span className="italic"> empathy</span>.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;