import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "./Projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
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

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="gradient-border aspect-video mb-12 overflow-hidden"
        >
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground">Project Screenshot / Demo</span>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is an extended description placeholder for the project detail page. 
                Here you can add more comprehensive information about the project's goals, 
                challenges faced during development, and the solutions implemented to overcome them.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Key Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Feature one placeholder - Describe a key feature of the project
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Feature two placeholder - Another important functionality
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Feature three placeholder - Additional capability implemented
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  Feature four placeholder - Final notable feature
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold">Challenges & Solutions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Placeholder text describing the main challenges encountered during development 
                and the innovative solutions implemented to address them. This section would 
                highlight problem-solving skills and technical decision-making.
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <Tag size={18} className="text-primary" />
                Tech Stack
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
            <div className="glass rounded-xl p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold">Links</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start card-hover-glow"
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start card-hover-glow"
                >
                  <Github className="mr-2 w-4 h-4" />
                  Source Code
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Jinit Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetail;
