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
import { Upload, ArrowLeft, Briefcase } from "lucide-react";
import { z } from "zod";

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

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("resumes")
        .getPublicUrl(filePath);

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
          resume_url: publicUrl,
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
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#2C1B47] via-[#4A2D5E] to-[#1A1A2E]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mountains/Hills silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/4 bg-gradient-to-tr from-[#2C1B47]/60 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-gradient-to-tl from-[#4A2D5E]/60 to-transparent rounded-tl-full" />
        
        {/* Stars */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-60 right-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />
        
        {/* Clouds */}
        <div className="absolute top-20 right-1/4 w-32 h-8 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-40 left-1/3 w-40 h-10 bg-white/10 rounded-full blur-xl" />
        <div className="absolute top-60 right-1/3 w-36 h-9 bg-white/10 rounded-full blur-xl" />
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="w-full max-w-2xl">
          {/* Glass-morphism Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 shadow-lg">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Join Our Team
              </h1>
              <p className="text-white/80 text-lg">
                Start your journey with Àkanní
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white font-medium">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/25 focus:border-white/50"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/25 focus:border-white/50"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/25 focus:border-white/50"
                  required
                />
              </div>

              {/* Domain */}
              <div className="space-y-2">
                <Label htmlFor="domain" className="text-white font-medium">
                  Domain *
                </Label>
                <Select
                  value={formData.domain}
                  onValueChange={(value) =>
                    setFormData({ ...formData, domain: value })
                  }
                  required
                >
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:bg-white/25 focus:border-white/50">
                    <SelectValue placeholder="Select your domain" />
                  </SelectTrigger>
                  <SelectContent className="bg-card/95 backdrop-blur-xl border-white/20">
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
                <Label htmlFor="location" className="text-white font-medium">
                  Location *
                </Label>
                <Input
                  id="location"
                  placeholder="e.g., Work from home, New York, Remote"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/25 focus:border-white/50"
                  required
                />
              </div>

              {/* Are you a Freelancer */}
              <div className="space-y-2">
                <Label className="text-white font-medium">Are You a Freelancer? *</Label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer text-white">
                    <input
                      type="radio"
                      name="freelancer"
                      checked={formData.isFreelancer === true}
                      onChange={() =>
                        setFormData({ ...formData, isFreelancer: true })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-white">
                    <input
                      type="radio"
                      name="freelancer"
                      checked={formData.isFreelancer === false}
                      onChange={() =>
                        setFormData({ ...formData, isFreelancer: false })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="space-y-2">
                <Label htmlFor="resume" className="text-white font-medium">
                  Upload Resume * (Max 25MB)
                </Label>
                <div className="border-2 border-dashed border-white/30 rounded-xl p-6 text-center hover:border-white/50 transition-colors bg-white/5">
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
                    <Upload className="h-8 w-8 text-white/70" />
                    <span className="text-sm text-white/80">
                      {resumeFile ? resumeFile.name : "Click to upload or drag and drop"}
                    </span>
                    <span className="text-xs text-white/60">
                      PDF or DOC/DOCX only
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white h-12 text-lg font-semibold shadow-xl rounded-xl"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white/70 text-sm mb-2">Need help?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a 
                  href="mailto:team.akanni@gmail.com"
                  className="text-white hover:text-primary transition-colors"
                >
                  team.akanni@gmail.com
                </a>
                <span className="hidden sm:inline text-white/30">•</span>
                <a 
                  href="tel:+919004138118"
                  className="text-white hover:text-secondary transition-colors"
                >
                  +91 90041 38118
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Internships;
