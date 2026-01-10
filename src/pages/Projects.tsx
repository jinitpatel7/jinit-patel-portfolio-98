import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const Projects = () => {
  return <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="text-center mb-16 space-y-4">
          <motion.h1 initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-display">my</span> <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-muted-foreground max-w-2xl mx-auto"> I enjoy bringing ideas to life in my free time. My personal projects are where my creativity and love for engineering intersect—take a look!    </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-8">
          {projects.filter(project => !project.hidden).map((project, index) => <ProjectCard key={project.id} {...project} index={index} />)}
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
    </main>;
};
export default Projects;