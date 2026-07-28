import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, CalendarClock, Video, LineChart, ShieldCheck, Gauge, Copy } from "lucide-react";

const GMEET_LINK = "https://meet.google.com/cyv-auty-wky";

const inquirySchema = z.object({
  companyName: z.string().trim().min(1, { message: "Company name is required" }).max(150),
  industry: z.string().trim().max(100).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  contactName: z.string().trim().min(1, { message: "Your name is required" }).max(100),
  role: z.string().trim().max(100).optional().or(z.literal("")),
  workEmail: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20)
    .regex(/^[+]?[\d\s\-()]+$/, { message: "Invalid phone number format" }),
  useCase: z.string().trim().max(1000).optional().or(z.literal("")),
  preferredDate: z.string().min(1, { message: "Please pick a demo date" }),
  preferredTime: z.string().min(1, { message: "Please pick a demo slot" }),
});

const slots = [
  "10:00 AM - 10:30 AM",
  "11:30 AM - 12:00 PM",
  "02:00 PM - 02:30 PM",
  "04:00 PM - 04:30 PM",
  "06:30 PM - 07:00 PM",
];

const highlights = [
  { icon: LineChart, title: "Forecast that reads ahead", body: "Demand, revenue, and engagement signals modelled on your own numbers." },
  { icon: Gauge, title: "Built for speed", body: "Upload, connect, and see your first forecast within a single session." },
  { icon: ShieldCheck, title: "Your data stays yours", body: "Private storage, scoped access, and no resale of your business data." },
];

const Product = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booked, setBooked] = useState<null | { date: string; time: string }>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    contactName: "",
    role: "",
    workEmail: "",
    phone: "",
    useCase: "",
    preferredDate: "",
    preferredTime: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const d = result.data;
      const { error } = await supabase.from("product_inquiries").insert({
        company_name: d.companyName,
        industry: d.industry || null,
        website: d.website || null,
        contact_name: d.contactName,
        role: d.role || null,
        work_email: d.workEmail,
        phone: d.phone,
        use_case: d.useCase || null,
        preferred_date: d.preferredDate,
        preferred_time: d.preferredTime,
      });
      if (error) throw error;

      setBooked({ date: d.preferredDate, time: d.preferredTime });
      toast.success("Slot booked. Your meeting link is ready below.");
      setFormData({
        companyName: "",
        industry: "",
        website: "",
        contactName: "",
        role: "",
        workEmail: "",
        phone: "",
        useCase: "",
        preferredDate: "",
        preferredTime: "",
      });
    } catch (err) {
      console.error("Error submitting product inquiry:", err);
      toast.error("Could not submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Our Product — Àkanní forecast platform</title>
        <meta name="description" content="Book a live demo of the Àkanní forecast product. Share your company details, pick a slot, and join on Google Meet." />
        <link rel="canonical" href="https://akanni-digital-heart.lovable.app/product" />
        <meta property="og:title" content="Our Product — Àkanní forecast platform" />
        <meta property="og:description" content="Book a live demo of the Àkanní forecast product. Share your company details, pick a slot, and join on Google Meet." />
        <meta property="og:url" content="https://akanni-digital-heart.lovable.app/product" />
      </Helmet>
      <Navbar />
      <div className="pt-28 md:pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <header className="text-center mb-12 space-y-4">
            <p className="eyebrow">Our Product</p>
            <h1 className="font-display text-4xl md:text-7xl text-foreground">
              The <span className="italic text-primary text-glow">forecast</span> platform
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              A decision layer for growing businesses. Connect your numbers and see where demand, revenue, and
              attention are heading, in language your whole team understands.
            </p>
            <div className="hairline w-32 mx-auto" />
          </header>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card/40 backdrop-blur-sm border border-border/60 p-5 space-y-2">
                <h.icon className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg text-foreground italic">{h.title}</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
          <div className="mb-8 border border-accent/40 bg-accent/5 p-5">
            <p className="text-sm text-foreground/90 leading-relaxed">
              <span className="font-semibold">Note:</span> This usage of the product is in trial phase and there
              would be a small charge to witness the beauty of the forecast product. That would be around
              <span className="text-accent font-semibold"> ₹800 INR</span>.
            </p>
          </div>
          {booked ? (
            <div className="bg-card border border-primary/30 p-8 space-y-5 text-center">
              <CalendarClock className="h-8 w-8 mx-auto text-primary" />
              <h2 className="font-display text-3xl text-foreground italic">Your slot is booked</h2>
              <p className="text-sm text-muted-foreground">
                {booked.date} at {booked.time}. Join us on Google Meet at your scheduled time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={GMEET_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-none w-full sm:w-auto">
                    <Video className="mr-2 h-4 w-4" />
                    Join Google Meet
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="rounded-none"
                  onClick={() => {
                    navigator.clipboard.writeText(GMEET_LINK);
                    toast.success("Meeting link copied");
                  }}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy link
                </Button>
              </div>
              <button
                onClick={() => setBooked(null)}
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                Book another slot
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border p-6 sm:p-8 space-y-6">
              <div>
                <p className="eyebrow mb-1">Company details</p>
                <div className="hairline w-16" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company name *</Label>
                  <Input id="companyName" value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} placeholder="Your company" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} placeholder="Retail, EdTech, Finance..." />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} placeholder="https://" />
              </div>
              <div>
                <p className="eyebrow mb-1">Your details</p>
                <div className="hairline w-16" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Full name *</Label>
                  <Input id="contactName" value={formData.contactName} onChange={(e) => setFormData({ ...formData, contactName: e.target.value })} placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="Founder, Manager..." />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="workEmail">Work email *</Label>
                  <Input id="workEmail" type="email" value={formData.workEmail} onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })} placeholder="you@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 00000 00000" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="useCase">What would you like to forecast?</Label>
                <Textarea id="useCase" value={formData.useCase} onChange={(e) => setFormData({ ...formData, useCase: e.target.value })} placeholder="Tell us briefly about your data and what you want to see." rows={4} />
              </div>
              <div>
                <p className="eyebrow mb-1">Book a slot</p>
                <div className="hairline w-16" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred date *</Label>
                  <Input id="preferredDate" type="date" min={today} value={formData.preferredDate} onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred slot *</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                    <SelectTrigger id="preferredTime">
                      <SelectValue placeholder="Select a slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {slots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full rounded-none">
                {isSubmitting ? "Booking your slot..." : "Book my demo slot"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                On submitting, your Google Meet link appears right here.
              </p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Product;