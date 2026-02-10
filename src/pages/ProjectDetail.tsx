import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectMediaHero from "@/components/ProjectMediaHero";
import SectionHeader from "@/components/SectionHeader";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">{project.title}</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {project.dates}
            </span>
          </div>
        </motion.div>

        {/* Project Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="gradient-border aspect-video mb-12 overflow-hidden"
        >
          <ProjectMediaHero
            imageUrl={project.imageUrl}
            videoUrl={project.videoUrl}
            title={project.title}
          />
        </motion.div>

        {/* Project Details */}
        {/* Sidebar - renders first on mobile (order), side on desktop */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 min-w-0 max-w-none"
          >
            {/* Section 1: Motivation & Overview */}
            <div className="space-y-4">
              <SectionHeader>Motivation & Overview</SectionHeader>
              <p className="text-muted-foreground leading-relaxed">
                {project.sections?.motivationOverview || project.description}
              </p>
            </div>

            {/* Section 2: Engineering Methodology */}
            <div className="space-y-4">
              <SectionHeader>Engineering Methodology</SectionHeader>
              {project.sections?.engineeringMethodology ? (
                project.sections.engineeringMethodology.map((subsection, index) => (
                  <div key={index} className="space-y-1.5">
                    <h3 className="font-semibold text-muted-foreground">{subsection.header}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {subsection.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  Engineering methodology details coming soon.
                </p>
              )}
            </div>

            {/* Section 3: Results & Impacts */}
            <div className="space-y-4">
              <SectionHeader>Results & Impacts</SectionHeader>
              {project.sections?.resultsImpacts ? (
                project.sections.resultsImpacts.map((result, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-semibold text-muted-foreground">{result.header}</h3>
                    <p className="text-muted-foreground leading-relaxed">{result.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  Results and impacts details coming soon.
                </p>
              )}
            </div>

            {/* Section 4: Challenges, Takeaways & Next Steps */}
            <div className="space-y-4">
              <SectionHeader>Challenges, Takeaways & Next Steps</SectionHeader>
              
              {project.sections?.challengesTakeaways ? (
                project.sections.challengesTakeaways.map((subsection, index) => (
                  <div key={index} className="space-y-1.5">
                    <h3 className="font-semibold text-muted-foreground">{subsection.label}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground leading-relaxed">
                  Challenges and takeaways details coming soon.
                </p>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Skills & Tools */}
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <Tag size={18} className="text-primary" />
                Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div className="glass rounded-xl p-6 space-y-4">
                <h3 className="font-display text-lg font-semibold">Links</h3>
                <div className="space-y-3">
                  {project.links.map((link, index) => {
                    const hasUrl = link.url && link.url.length > 0;
                    const Icon = link.icon === "github" ? Github : ExternalLink;
                    return hasUrl ? (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                        <Button variant="outline" className="w-full justify-start card-hover-glow">
                          <Icon className="mr-2 w-4 h-4" />
                          {link.label}
                        </Button>
                      </a>
                    ) : (
                      <Button key={index} variant="outline" className="w-full justify-start opacity-50 cursor-not-allowed" disabled>
                        <Icon className="mr-2 w-4 h-4" />
                        {link.label} — Coming soon
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © Jinit Patel 2025
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetail;
