import { useState } from "react";
import teamCircle from "@/assets/team-circle.png";
import Akanni2Modal from "./Akanni2Modal";
import { ChevronRight } from "lucide-react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 animate-fade-in">
            Our <span className="text-primary">Story</span>
          </h2>

          <div className="relative">
            {/* Central circular team image */}
            <div className="float-none md:float-right md:ml-8 md:mb-8 w-full md:w-96 mx-auto md:mx-0 mb-8 md:mb-0">
              <div className="relative float-animation">
                <img 
                  src={teamCircle} 
                  alt="Diverse team members joining hands in a circle, representing unity and collaboration at Àkanní"
                  className="w-full h-auto rounded-full shadow-2xl"
                />
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl -z-10 scale-110" />
              </div>
            </div>

            <div className="space-y-8 text-lg leading-relaxed">
              <div 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-cta/20 to-primary/20 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border-2 border-cta/30 hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-cta">Àkanní 2.0: Digital Inclusion Movement</h3>
                  <ChevronRight className="w-6 h-6 text-cta group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="mb-4 text-left">
                  Now we&apos;re launching <strong>Àkanní 2.0</strong>, a focused movement for digital inclusion. 
                  This phase is practical, not performative.
                </p>
                <p className="text-left">
                  We will help underserved communities build and own their digital presence: brand representation, 
                  social media, web profiles and e-commerce, without charging them. We want to hand them a stage 
                  so they can be visible, respected, and self-sufficient in the digital world.
                </p>
                <p className="text-sm text-cta mt-4 group-hover:underline">Click to learn more →</p>
              </div>

              <Akanni2Modal open={isModalOpen} onOpenChange={setIsModalOpen} />

              <div className="text-center md:text-left py-8 animate-fade-in clear-right md:clear-none">
                <p className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-300 text-left">
                  Àkanní is more than a service studio.<br />
                  <span className="text-primary">we&apos;re a growth partner</span> that blends 
                  <span className="text-secondary"> creativity</span>, 
                  <span className="text-accent"> technology</span>, and 
                  <span className="text-cta"> empathy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
