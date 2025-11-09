import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Leaf, BookOpen, Cloud, Newspaper, Trophy } from "lucide-react";

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
    title: "National Startup 2025 - Round 2",
    description: "Our startup reached an important milestone as we advanced to Round 2 at National Startup 2025 in Bandra",
    icon: Trophy,
    color: "text-accent",
    bgColor: "bg-accent/10",
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
    title: "Katha Sudha",
    description: "Cultural content collaboration bringing stories to life",
    icon: BookOpen,
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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From national projects to community impact, here&apos;s what we&apos;ve been building
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {projects.slice(0, 4).map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-3xl overflow-hidden animate-fade-in float-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
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

          {/* Second row - 3 cards offset */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-[12.5%]">
            {projects.slice(4, 7).map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index + 4}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-105 rounded-3xl overflow-hidden animate-fade-in float-animation"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
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
      </div>
    </section>
  );
};

export default Projects;
