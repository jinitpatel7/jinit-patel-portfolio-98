import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export const projects = [
  {
    id: "project-one",
    title: "Project Title One",
    description: "A brief description of the project showcasing the main features and engineering methods used. This placeholder text represents the project summary.",
    skills: ["SolidWorks", "Ansys Fluent", "CFD"],
    dates: "Jan 2024 - Present",
  },
  {
    id: "project-two",
    title: "Project Title Two",
    description: "Another project description highlighting the key functionalities and engineering tools. Placeholder content for demonstration purposes.",
    skills: ["MATLAB", "Python", "ML (TensorFlow, NumPy, Keras)"],
    dates: "Sep 2023 - Dec 2023",
  },
  {
    id: "project-three",
    title: "Project Title Three",
    description: "Short description of the third project with an overview of the design process and outcomes achieved through rigorous engineering analysis.",
    skills: ["Creo", "Ansys Mechanical", "FEA"],
    dates: "Jun 2023 - Aug 2023",
  },
  {
    id: "project-four",
    title: "Project Title Four",
    description: "Description placeholder for the fourth project, emphasizing the problem solved and the impact delivered through manufacturing optimization.",
    skills: ["3D Printing (SLA/FDM)", "CURA", "DFMA"],
    dates: "Mar 2023 - May 2023",
  },
  {
    id: "project-five",
    title: "Project Title Five",
    description: "A comprehensive project description covering the scope, challenges, and solutions implemented during the engineering design phase.",
    skills: ["GD&T", "Design Reviews", "Kaizen"],
    dates: "Nov 2022 - Feb 2023",
  },
  {
    id: "project-six",
    title: "Project Title Six",
    description: "Final project placeholder showcasing technical expertise and creative problem-solving abilities in aerospace applications.",
    skills: ["C++", "Microsoft Excel", "Microsoft PowerPoint"],
    dates: "Jul 2022 - Oct 2022",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="font-display">My</span> <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills, creativity, and passion for building impactful solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </motion.div>
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

export default Projects;
