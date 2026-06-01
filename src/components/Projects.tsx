import { useState } from "react";
import { Award, Leaf, BookOpen, Cloud, Newspaper, Trophy, Video, Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

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
    <motion.div
      className="group [perspective:1200px] min-h-[260px] sm:min-h-[280px]"
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } md:group-hover:[transform:rotateY(180deg)]`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] border border-border/60 bg-card/40 backdrop-blur-sm p-6 flex flex-col hover:border-primary/40 transition-colors">
          <div className={`w-12 h-12 ${project.bgColor} border border-border/60 flex items-center justify-center mb-6`}>
            <Icon className={`w-5 h-5 ${project.color}`} />
          </div>
          <p className="eyebrow mb-3 text-foreground/60">{project.title}</p>
          <h3 className="font-display text-2xl text-foreground italic leading-tight">
            {project.hook}
          </h3>
          <p className="mt-auto pt-6 eyebrow text-[9px]">tap to flip</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] border border-primary/40 bg-card/60 backdrop-blur-sm p-6 flex flex-col" style={{ boxShadow: "var(--shadow-glow)" }}>
          <p className="eyebrow mb-3 text-primary">{project.title}</p>
          <p className="text-sm leading-relaxed text-foreground/85">
            {project.description}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-auto pt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 text-xs uppercase tracking-[0.25em] transition-colors self-start"
            >
              <Instagram className="w-4 h-4" />
              View
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 md:py-36 relative overflow-hidden border-t border-border/40">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full -z-10 opacity-25" style={{ background: "var(--gradient-amber)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full -z-10 opacity-30" style={{ background: "var(--gradient-glow)", filter: "blur(80px)" }} />

      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            Our <span className="italic text-primary text-glow">highlights</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            From national stages to quiet community work. Hover or tap to read.
          </p>
          <div className="hairline w-32 mx-auto" />
        </Reveal>

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
