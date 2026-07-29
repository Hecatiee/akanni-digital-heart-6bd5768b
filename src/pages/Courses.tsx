import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Mail, Phone, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SpaceDecor from "@/components/SpaceDecor";

const Courses = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Courses with Àkanní — Learn by building</title>
        <meta name="description" content="Courses with Àkanní. Practical, mentor led programmes in design, development, data and social media. Details coming soon." />
        <link rel="canonical" href="https://akanni-digital-heart.lovable.app/courses" />
        <meta property="og:title" content="Courses with Àkanní — Learn by building" />
        <meta property="og:description" content="Practical, mentor led programmes in design, development, data and social media." />
        <meta property="og:url" content="https://akanni-digital-heart.lovable.app/courses" />
      </Helmet>
      <Navbar />
      <div className="relative pt-28 md:pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <SpaceDecor variant="planet" size={90} className="top-24 right-6 hidden sm:block" />
        <SpaceDecor variant="comet" size={130} className="bottom-20 left-8 hidden md:block" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Reveal className="text-center mb-12 space-y-4">
            <p className="eyebrow">Learn</p>
            <h1 className="font-display text-4xl md:text-7xl text-foreground">
              Courses with <span className="italic text-primary text-glow">Àkanní</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Practical, mentor led programmes built the way we work. Real briefs, real feedback, real portfolios.
            </p>
            <div className="hairline w-32 mx-auto" />
          </Reveal>

          <Reveal className="border border-border/60 bg-card/40 backdrop-blur-sm p-8 text-center space-y-4">
            <GraduationCap className="h-8 w-8 mx-auto text-primary" />
            <h2 className="font-display text-3xl text-foreground italic">Curriculum coming soon</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We are putting the finishing touches on the course tracks, mentors, durations and fees. Reach out and
              we will let you know the moment enrolment opens.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
              <Sparkles className="h-4 w-4" />
              Enrolment opening soon
            </div>
          </Reveal>

          <Reveal className="mt-10 border border-border/60 bg-card/40 backdrop-blur-sm p-6 sm:p-8">
            <p className="eyebrow mb-4">Talk to us</p>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:team.akanni@gmail.com" className="text-sm text-foreground/90 hover:text-primary transition-colors">
                  team.akanni@gmail.com
                </a>
              </div>
              <div className="hidden md:block h-10 w-px bg-border" />
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="space-y-1">
                  <a href="tel:+919004138118" className="block text-sm text-foreground/90 hover:text-accent transition-colors">
                    +91 90041 38118
                  </a>
                  <a href="tel:+918208125606" className="block text-sm text-foreground/90 hover:text-accent transition-colors">
                    +91 82081 25606
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Courses;