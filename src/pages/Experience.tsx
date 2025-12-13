import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import vertivLogo from "@/assets/logos/vertiv.png";
import osuArcLogo from "@/assets/logos/osu-arc.jpg";
import sgtLogo from "@/assets/logos/sgt.jpg";
import buckeyeVerticalLogo from "@/assets/logos/buckeye-vertical.jpg";
import bsliLogo from "@/assets/logos/bsli.png";
import hondajetLogo from "@/assets/logos/hondajet.png";

const experiences = [
  {
    company: "Honda Aircraft Company",
    role: "Propulsion Engineering Intern",
    dates: "May 2026 – August 2026",
    description: "Incoming Summer 2026",
    logoUrl: hondajetLogo,
    companyUrl: "https://www.hondajet.com/",
  },
  {
    company: "Vertiv",
    role: "Mechanical Engineering Intern",
    dates: "May 2025 – Sep 2025",
    description: "Rapid prototyped a patent-pending actuation lever mechanism using carbon fiber composite FDM 3D printing. Developed 75+ electromechanical components in Creo with GD&T/MBD. Cut manual engineering hours by 80% via Python automation. Executed ECOs and BOM management in Oracle Agile.",
    logoUrl: vertivLogo,
    companyUrl: "https://www.vertiv.com/en-us/",
  },
  {
    company: "OSU Aerospace Research Center",
    role: "Undergraduate Research Intern",
    dates: "May 2024 – Dec 2024",
    description: "Realized $10,000 production cost savings developing Flexible Reaction Surface nozzle in SolidWorks. Achieved 15° deflection at Mach 0.9 for plasma-actuated thrust vectoring. Ran RANS CFD in ANSYS Fluent within ±5% of experimental results. AIAA published research at 33rd Ohio Space Grant Consortium Symposium.",
    logoUrl: osuArcLogo,
    companyUrl: "https://arc.osu.edu/",
  },
  {
    company: "Sigma Gamma Tau",
    role: "Treasurer",
    dates: "Dec 2024 – Present",
    description: "Oversee financial planning & operations for Aerospace Honors Society, managing a $6,000 annual budget to support events, professional development, and chapter activities in coordination with the executive board.",
    logoUrl: sgtLogo,
    companyUrl: "https://u.osu.edu/sgtosu/",
  },
  {
    company: "Buckeye Vertical",
    role: "Avionics and Structures Member",
    dates: "Aug 2024 – May 2025",
    description: "Collaborated with a 20-member competition team to develop a UAS payload drone with autopilot & 15-mile range. Fine-tuned ArduPilot in QGroundControl by optimizing PID loops to enhance flight stability.",
    logoUrl: buckeyeVerticalLogo,
    companyUrl: "https://www.buckeyevertical.org/",
  },
  {
    company: "BSLI - NASA Student Launch",
    role: "Team Member",
    dates: "Aug 2022 – May 2024",
    description: "Fabricated rocket fuselage and fins via wet layups, CNC routing, and laser cutting for a 12-ft carbon fiber fuselage. Achieved +50 ft increase in peak altitude through aerodynamic geometry optimization in OpenRocket. Contributed to three successful launches.",
    logoUrl: bsliLogo,
    companyUrl: "https://www.bsli.space/",
  },
];

const Experience = () => {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="font-display">My</span> <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional career, highlighting key roles and achievements along the way.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-8 md:pl-16">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.company} {...experience} index={index} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "MATLAB", "SolidWorks", "Creo", "Ansys Fluent",
              "Ansys Mechanical", "FEA", "CFD", "Python",
              "ML (TensorFlow, NumPy, Keras)", "C++", "3D Printing (SLA/FDM)", "CURA",
              "DFMA", "GD&T", "Design Reviews", "Kaizen"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-4 border border-border hover:border-primary/30 transition-colors flex items-center justify-center min-h-[60px]"
              >
                <span className="text-sm font-medium text-muted-foreground text-center">{skill}</span>
              </motion.div>
            ))}
          </div>
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

export default Experience;
