import Navbar from "@/components/Navbar";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Àkanní — One roof. All digital. Real impact.</title>
        <meta name="description" content="Àkanní is a full-stack digital studio for AI design, web and app development, marketing, and social impact." />
        <link rel="canonical" href="https://akanni-digital-heart.lovable.app/" />
        <meta property="og:title" content="Àkanní — One roof. All digital. Real impact." />
        <meta property="og:description" content="Àkanní is a full-stack digital studio for AI design, web and app development, marketing, and social impact." />
        <meta property="og:url" content="https://akanni-digital-heart.lovable.app/" />
      </Helmet>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Services />
      <Projects />
      <div id="testimonials">
        <Testimonials />
      </div>
      <TrustedBy />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
