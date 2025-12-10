import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project Title One",
    description: "A brief description of the project showcasing the main features and technologies used. This placeholder text represents the project summary.",
    skills: ["React", "TypeScript", "Node.js"],
    dates: "Jan 2024 - Present",
  },
  {
    title: "Project Title Two",
    description: "Another project description highlighting the key functionalities and technical stack. Placeholder content for demonstration purposes.",
    skills: ["Python", "Machine Learning", "AWS"],
    dates: "Sep 2023 - Dec 2023",
  },
  {
    title: "Project Title Three",
    description: "Short description of the third project with an overview of the development process and outcomes achieved.",
    skills: ["Flutter", "Firebase", "Dart"],
    dates: "Jun 2023 - Aug 2023",
  },
  {
    title: "Project Title Four",
    description: "Description placeholder for the fourth project, emphasizing the problem solved and the impact delivered.",
    skills: ["Java", "Spring Boot", "PostgreSQL"],
    dates: "Mar 2023 - May 2023",
  },
  {
    title: "Project Title Five",
    description: "A comprehensive project description covering the scope, challenges, and solutions implemented during development.",
    skills: ["Vue.js", "GraphQL", "Docker"],
    dates: "Nov 2022 - Feb 2023",
  },
  {
    title: "Project Title Six",
    description: "Final project placeholder showcasing technical expertise and creative problem-solving abilities.",
    skills: ["Swift", "iOS", "CoreML"],
    dates: "Jul 2022 - Oct 2022",
  },
];

const Projects = () => {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills, creativity, and passion for building impactful solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
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

export default Projects;
