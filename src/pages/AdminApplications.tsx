import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { ArrowLeft, Download, LogIn, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AdminApplications = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [applications, setApplications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchApplications();
    }
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast.success("Logged in successfully");
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setApplications([]);
    toast.success("Logged out");
  };

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase.functions.invoke("admin-applications", {
        headers: { Authorization: `Bearer ${session.access_token}` },
      });

      if (error) throw error;
      if (data?.error) {
        toast.error(data.error);
        return;
      }
      setApplications(data.applications || []);
    } catch (error: any) {
      toast.error("Failed to fetch applications. Make sure you have admin access.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadResume = async (resumePath: string, applicantName: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase.functions.invoke(
        `admin-applications?action=download&path=${encodeURIComponent(resumePath)}`,
        {
          headers: { Authorization: `Bearer ${session.access_token}` },
          method: "GET",
        }
      );

      if (error) throw error;
      if (data?.error) {
        toast.error(data.error);
        return;
      }

      window.open(data.url, "_blank");
      toast.success(`Downloading resume for ${applicantName}`);
    } catch (error: any) {
      toast.error("Failed to download resume");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-8 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Internship Applications
          </h1>

          {!user ? (
            <div className="max-w-md mx-auto bg-card rounded-2xl shadow-lg p-8 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input
                    id="admin-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isLoggingIn} className="w-full">
                  <LogIn className="mr-2 h-4 w-4" />
                  {isLoggingIn ? "Logging in..." : "Log In"}
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">
                  Logged in as <strong>{user.email}</strong>
                </p>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              </div>

              {isLoading ? (
                <p className="text-center text-muted-foreground py-12">Loading applications...</p>
              ) : applications.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">No applications found.</p>
              ) : (
                <div className="bg-card rounded-xl border border-border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Domain</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Freelancer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Resume</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.full_name}</TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>{app.phone || "N/A"}</TableCell>
                          <TableCell>{app.domain}</TableCell>
                          <TableCell>{app.location}</TableCell>
                          <TableCell>{app.is_freelancer ? "Yes" : "No"}</TableCell>
                          <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => downloadResume(app.resume_url, app.full_name)}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AdminApplications;
