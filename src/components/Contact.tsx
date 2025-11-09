import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";
import { z } from "zod";

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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground text-justify">
              Ready to build something amazing together? Drop us a message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="bg-card rounded-3xl p-8 border-2 border-primary/20 shadow-lg hover:scale-105 transition-transform duration-300 float-animation">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a 
                      href="mailto:team.akanni@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      team.akanni@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-3xl p-8 border-2 border-secondary/20 shadow-lg hover:scale-105 transition-transform duration-300 float-animation" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a 
                      href="tel:+919004138118"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +91 90041 38118
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 border-2 border-accent/30 hover:scale-105 transition-transform duration-300 float-animation" style={{ animationDelay: '1s' }}>
                <p className="text-lg leading-relaxed text-justify">
                  <strong className="text-accent">New to Àkanní?</strong> We&apos;d love to hear about your project. 
                  Whether it&apos;s a brand refresh, a new website, or a social impact initiative, 
                  let&apos;s make it happen together!
                </p>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 border-2 border-cta/20 shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-2xl border-2 focus:border-primary"
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
                    className="rounded-2xl border-2 focus:border-primary"
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
                    className="rounded-2xl border-2 focus:border-primary resize-none"
                    aria-label="Your message"
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-cta hover:bg-cta/90 text-cta-foreground font-heading text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
