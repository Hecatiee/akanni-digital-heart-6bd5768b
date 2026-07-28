import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, ArrowLeft, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternShowcase from "@/components/InternShowcase";
import { z } from "zod";
import { Helmet } from "react-helmet-async";

// Input validation schema
const internshipApplicationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Full name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[+]?[\d\s\-()]+$/, { message: "Invalid phone number format" }),
  domain: z
    .string()
    .trim()
    .min(1, { message: "Domain is required" })
    .max(100, { message: "Domain must be less than 100 characters" }),
  location: z
    .string()
    .trim()
    .min(1, { message: "Location is required" })
    .max(200, { message: "Location must be less than 200 characters" }),
  isFreelancer: z.boolean(),
});

const Internships = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    domain: "",
    location: "",
    isFreelancer: false,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const domains = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Content Writing",
    "Graphic Design",
    "Data Science",
    "Machine Learning",
    "Cybersecurity",
    "Business Development",
    "Event Management",
    "Model Training",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 26214400) {
        toast.error("File size must be less than 25MB");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validationResult = internshipApplicationSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    if (!resumeFile) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      const validatedData = validationResult.data;

      // Upload resume to storage
      const fileExt = resumeFile.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, resumeFile);

      if (uploadError) throw uploadError;

      // Store the file path as the resume reference (bucket is private, use signed URLs to access)
      const resumePath = `resumes/${filePath}`;

      // Insert application to database with validated data
      const { error: insertError } = await supabase
        .from("internship_applications")
        .insert({
          full_name: validatedData.fullName,
          email: validatedData.email,
          phone: validatedData.phone,
          domain: validatedData.domain,
          location: validatedData.location,
          is_freelancer: validatedData.isFreelancer,
          resume_url: resumePath,
        });

      if (insertError) throw insertError;

      toast.success("Application submitted successfully!");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        domain: "",
        location: "",
        isFreelancer: false,
      });
      setResumeFile(null);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Internships at Àkanní — Apply to join the studio</title>
        <meta name="description" content="Apply for an internship at Àkanní. Join a digital studio working on design, web, apps, marketing, and social impact." />
        <link rel="canonical" href="https://akanni-digital-heart.lovable.app/internships" />
        <meta property="og:title" content="Internships at Àkanní" />
        <meta property="og:description" content="Apply for an internship at Àkanní. Join a digital studio working on design, web, apps, marketing, and social impact." />
        <meta property="og:url" content="https://akanni-digital-heart.lovable.app/internships" />
      </Helmet>
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 -ml-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12 space-y-4">
            <h1 className="font-display text-5xl md:text-7xl text-foreground">
              Find your <span className="italic text-primary text-glow">internship</span>
            </h1>
            <p className="text-muted-foreground text-base">
              Join our team and begin a chapter of your own.
            </p>
            <div className="hairline w-32 mx-auto" />
          </div>

          {/* Contact Info Section */}
          <div className="mb-12 bg-card/40 backdrop-blur-sm p-6 border border-border/60">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:team.akanni@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    team.akanni@gmail.com
                  </a>
                </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+919004138118"
                    className="font-medium hover:text-secondary transition-colors"
                  >
                    +91 90041 38118
                  </a>
                  <a 
                    href="tel:+918208125606"
                    className="block font-medium hover:text-secondary transition-colors"
                  >
                    +91 82081 25606
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8 border border-border">
            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              {/* Domain */}
              <div className="space-y-2">
                <Label htmlFor="domain">Domain *</Label>
                <Select
                  value={formData.domain}
                  onValueChange={(value) =>
                    setFormData({ ...formData, domain: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your domain" />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map((domain) => (
                      <SelectItem key={domain} value={domain}>
                        {domain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Work from home, New York, Remote"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
              </div>

              {/* Are you a Freelancer */}
              <div className="space-y-2">
                <Label>Are You a Freelancer? *</Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="freelancer"
                      checked={formData.isFreelancer === true}
                      onChange={() =>
                        setFormData({ ...formData, isFreelancer: true })
                      }
                      className="w-4 h-4 text-primary"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="freelancer"
                      checked={formData.isFreelancer === false}
                      onChange={() =>
                        setFormData({ ...formData, isFreelancer: false })
                      }
                      className="w-4 h-4 text-primary"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <Label htmlFor="resume">Upload Resume * (1 PDF or DOC file, Max 25MB)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="resume"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Only PDF or DOC/DOCX files accepted (max 25MB)
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Apply"}
              </Button>
            </div>
          </form>

          <div className="mt-16">
            <InternShowcase />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Internships;
