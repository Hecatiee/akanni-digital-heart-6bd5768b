import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Leaf, BookOpen, Cloud, Users, Newspaper } from "lucide-react";

const projects = [
  {
    title: "Bank of India Pensioners & Retirees",
    description: "Official website launched at national Triennial session with 700+ audience",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Featured in Loksatta",
    description: "Press coverage for our national-level work and impact",
    icon: Newspaper,
    color: "text-cta",
    bgColor: "bg-cta/10",
  },
  {
    title: "Kawlathe Konnection",
    description: "Community & sustainability project with Nupur Risbood (TEDx speaker)",
    icon: Leaf,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "CloudNautics Partnership",
    description: "From hackathon collaboration to long-term client relationship",
    icon: Cloud,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Comic Bee",
    description: "Edutainment & comic-book projects bringing learning to life",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Growing Team",
    description: "Interns from Karnataka joining our web dev & design journey",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

const Projects = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From national projects to community impact — here's what we've been building
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-3xl overflow-hidden"
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${project.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${project.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
