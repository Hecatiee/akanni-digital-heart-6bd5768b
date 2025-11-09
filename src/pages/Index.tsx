import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;
