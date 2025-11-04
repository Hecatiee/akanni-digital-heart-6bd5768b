const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Our <span className="text-primary">Story</span>
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="bg-gradient-to-r from-cta/20 to-primary/20 rounded-3xl p-8 shadow-lg border-2 border-cta/30 hover:scale-105 transition-transform duration-300 float-animation">
              <h3 className="text-2xl font-bold mb-4 text-cta">Àkanní 2.0 — Digital Inclusion Movement</h3>
              <p className="mb-4">
                Now we're launching <strong>Àkanní 2.0</strong> — a focused movement for digital inclusion. 
                This phase is practical, not performative.
              </p>
              <p>
                We will help underserved communities (with a special focus on the transgender community in India) 
                build and own their digital presence — brand representation, social media, web profiles and 
                e-commerce — without charging them. We want to hand them a stage so they can be visible, 
                respected, and self-sufficient in the digital world.
              </p>
            </div>

            <div className="text-center py-8 animate-fade-in">
              <p className="text-2xl font-bold text-foreground hover:scale-105 transition-transform duration-300">
                Àkanní is more than a service studio —<br />
                <span className="text-primary">we're a growth partner</span> that blends 
                <span className="text-secondary"> creativity</span>, 
                <span className="text-accent"> technology</span>, and 
                <span className="text-cta"> empathy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
