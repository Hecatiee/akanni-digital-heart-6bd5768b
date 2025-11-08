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
    setIsSubmitting(true);

    try {
      if (!resumeFile) {
        toast.error("Please upload your resume");
        return;
      }

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

      // Insert application to database
      const { error: insertError } = await supabase
        .from("internship_applications")
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          domain: formData.domain,
          location: formData.location,
          is_freelancer: formData.isFreelancer,
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
    <main className="min-h-screen bg-background">
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

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Find Your Internship
            </h1>
            <p className="text-muted-foreground text-lg">
              Join our team and kickstart your career
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="mb-12 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-6 border border-border">
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
                <Label htmlFor="resume">Upload Resume * (Max 25MB)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
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
                      PDF, DOC, DOCX (max 25MB)
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
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Internships;
