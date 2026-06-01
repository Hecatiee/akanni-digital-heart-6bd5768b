import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";
import { z } from "zod";
import Reveal from "@/components/Reveal";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          formattedErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    
    // Create mailto link with validated data
    const subject = encodeURIComponent(`New inquiry from ${result.data.name}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\n\nMessage:\n${result.data.message}`
    );
    
    window.location.href = `mailto:team.akanni@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-16 md:py-36 relative overflow-hidden border-t border-border/40">
      <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full -z-10 opacity-30" style={{ background: "var(--gradient-glow)", filter: "blur(80px)" }} />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full -z-10 opacity-25" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16 space-y-4">
            <p className="eyebrow">Chapter V</p>
            <p className="eyebrow text-accent">Our Team</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              Let&apos;s <span className="italic text-primary text-glow">connect</span>
            </h2>
            <p className="text-base text-muted-foreground">A note, an idea, a hello. Send it over.</p>
            <div className="hairline w-32 mx-auto" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal className="space-y-6" y={50}>
              <div className="bg-card/40 backdrop-blur-sm p-8 border border-border/60 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Email</p>
                    <a href="mailto:team.akanni@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                      team.akanni@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card/40 backdrop-blur-sm p-8 border border-border/60 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Phone</p>
                    <div className="flex flex-col">
                      <a href="tel:+919004138118" className="text-foreground/80 hover:text-primary transition-colors">
                        +91 90041 38118
                      </a>
                      <a href="tel:+918208125606" className="text-foreground/80 hover:text-primary transition-colors">
                        +91 82081 25606
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/40 backdrop-blur-sm p-8 border border-accent/30">
                <p className="font-display text-xl italic text-foreground leading-relaxed">
                  <span className="text-accent">New to Àkanní?</span> We&apos;d love to hear about your project. 
                  Whether it&apos;s a brand refresh, a new website, or a social impact initiative, 
                  let&apos;s make it together.
                </p>
              </div>
            </Reveal>

            <Reveal y={50} delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-card/40 backdrop-blur-sm p-8 border border-border/60">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus:border-primary px-0"
                    aria-label="Your name"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus:border-primary px-0"
                    aria-label="Your email"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="rounded-none border border-border bg-transparent focus-visible:ring-0 focus:border-primary resize-none"
                    aria-label="Your message"
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-body text-xs uppercase tracking-[0.25em] rounded-none py-6 transition-all duration-500"
                  size="lg"
                >
                  Send message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
