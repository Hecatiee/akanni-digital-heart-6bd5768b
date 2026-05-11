import { useState } from "react";
import { Award, Leaf, BookOpen, Cloud, Newspaper, Trophy, Video, Instagram } from "lucide-react";

const projects = [
  {
    title: "Bank of India Pensioners & Retirees",
    hook: "Not just a website. A national presence.",
    description: "We launched the official platform at a national event, built for scale, credibility, and 700+ audience impact.",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Featured in Loksatta",
    hook: "Not just coverage. Credible recognition.",
    description: "Our work made it to national press, validating impact beyond just digital.",
    icon: Newspaper,
    color: "text-cta",
    bgColor: "bg-cta/10",
  },
  {
    title: "National Startup 2025 - Round 2",
    hook: "Not just participation. Progress.",
    description: "From idea to milestone, we advanced to Round 2 on a national stage.",
    icon: Trophy,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "CloudNautics Partnership",
    hook: "Not just a project. A partnership.",
    description: "What started at a hackathon turned into a long-term client relationship.",
    icon: Cloud,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Kawalthe Konnections",
    hook: "Not just a project. A purpose.",
    description: "A community-led sustainability initiative built with vision and real-world impact.",
    icon: Leaf,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Comic Bee",
    hook: "Not just learning. Smarter learning.",
    description: "Upgrading education across SSC, CBSE, and ICSE through structured, modern learning approaches.",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Champion Content",
    hook: "Not just content. Champion content.",
    description: "Behind every strong athlete is a stronger narrative. We handled the shoot + edits to bring that story to life.",
    icon: Video,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    link: "https://www.instagram.com/rajniraut230?igsh=MWp2bWFkaXE5bXFocA==",
  },
];

type Project = {
  title: string;
  hook: string;
  description: string;
  icon: typeof Award;
  color: string;
  bgColor: string;
  link?: string;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const Icon = project.icon;
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="group [perspective:1200px] animate-fade-in float-animation min-h-[260px] sm:min-h-[280px]"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } md:group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl border-2 border-border bg-card p-5 sm:p-6 shadow-md flex flex-col">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 ${project.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${project.color}`} />
          </div>
          <p className="text-sm sm:text-base font-bold text-foreground mb-2 text-left">{project.title}</p>
          <h3 className="text-base sm:text-lg font-heading font-semibold text-primary text-left leading-snug">
            {project.hook}
          </h3>
          <p className="mt-auto pt-4 text-[11px] uppercase tracking-wider text-muted-foreground/70">
            Tap to flip
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-3xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-5 sm:p-6 shadow-xl flex flex-col">
          <p className="text-xs sm:text-sm font-semibold text-primary mb-2 text-left">{project.title}</p>
          <p className="text-sm sm:text-base leading-relaxed text-foreground/90 text-left">
            {project.description}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-auto pt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors self-start"
            >
              <Instagram className="w-4 h-4" />
              View on Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-60 md:w-80 h-60 md:h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-center">
            From national projects to community impact, here&apos;s what we&apos;ve been building
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {/* First row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Second row - 3 cards offset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-[12.5%]">
            {projects.slice(4, 7).map((project, index) => (
              <ProjectCard key={index + 4} project={project} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
