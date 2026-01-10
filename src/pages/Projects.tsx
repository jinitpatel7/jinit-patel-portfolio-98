import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
export const projects = [
  {
    id: "kaze-x1-rc-aircraft",
    title: "Kaze X1: 3D Printed RC Fixed-Wing Aircraft Build",
    description: "Currently in the process of designing, fabricating, and flight-testing an LW-PLA FDM 3D-printed sport/trainer hybrid RC aircraft, including CAD, aerodynamic validation, and avionics integration.",
    skills: ["SolidWorks", "ANSYS Fluent", "FDM 3D Printing", "Bambu Studio", "Soldering", "FDM/FDA", "Avionics Integration", "Flight Testing", "Mechanical Design"],
    dates: "November 2025 - Present",
    hidden: false
  },
  {
    id: "calorie-burn-predictor",
    title: "Precise Calorie Burn Predictor (Machine Learning)",
    description: "Utilized convolution neural networks within Python Libraries to create a model that can accurately predict calorie expenditure for specific activities, taking into account the user's biological, genetic, and lifestyle factors.",
    skills: ["Neural Networks", "Machine Learning", "Python", "TensorFlow", "NumPy", "Scikit-learn", "Matplotlib", "Hyperparameter Tuning"],
    dates: "November 2025 - December 2025",
    hidden: false
  },
  {
    id: "plasma-thrust-vectoring",
    title: "Plasma-Induced Thrust Vectoring on Subsonic Axisymmetric Jets",
    description: "Investigating localized arc-filament plasma actuators (LAFPAs) for active control over jet attachment and deflection. Designed and fabricated SLA nozzles, performed 2D RANS CFD analysis, and supported experimental testing using schlieren imaging, pressure measurements, and PIV.",
    skills: ["SolidWorks", "MATLAB", "SLA 3D Printing", "ANSYS Fluent", "2D RANS Simulations", "Schlieren Imaging", "Particle Image Velocimetry", "Data Acquisition", "Data Analysis"],
    dates: "August 2023 - Present",
    hidden: false
  },
  {
    id: "switch-handle-lever",
    title: "Patent-Pending Switch Handle Lever Mechanism",
    description: "Filed a provisional patent application for a switch handle lever mechanism I engineered for a Static Switch unit at Vertiv. Led the full rapid prototyping cycle of design, fabrication, and iteration until internal end users' needs were met.",
    skills: ["Creo", "Large BOM Management", "Ansys Mechanical", "Oracle PLM", "Rapid Prototyping", "FDM 3D Printing", "GD&T", "Testing & Iteration", "Mechanical Design"],
    dates: "May 2025 - August 2025",
    hidden: false
  },
  {
    id: "speaker-stand",
    title: "Custom 3D-Printed Satellite Speaker Stand",
    description: "Designed and optimized a satellite speaker stand for my apartment surround sound system. Modeled the structure, ran FEA for strength verification, and 3D printed an ergonomic and aesthetically clean final design.",
    skills: ["Onshape", "Ansys Mechanical", "FEA", "FDM 3D Printing", "Tolerancing", "Calipers"],
    dates: "October 2025",
    hidden: false
  },
  {
    id: "future-project",
    title: "Future Project Title",
    description: "Placeholder for a future project. Update this description when ready to publish.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    dates: "TBD",
    hidden: true
  }
];
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