import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";

const experiences = [
  {
    company: "Company Name One",
    role: "Software Engineer",
    dates: "Jan 2024 - Present",
    description: "Leading development of key features and collaborating with cross-functional teams to deliver high-quality software solutions. Mentoring junior developers and driving best practices.",
  },
  {
    company: "Company Name Two",
    role: "Full Stack Developer",
    dates: "Jun 2022 - Dec 2023",
    description: "Developed and maintained web applications using modern frameworks. Implemented RESTful APIs and optimized database performance for improved scalability.",
  },
  {
    company: "Company Name Three",
    role: "Software Engineering Intern",
    dates: "May 2021 - Aug 2021",
    description: "Contributed to the development of internal tools and automation scripts. Gained hands-on experience with agile methodologies and version control systems.",
  },
  {
    company: "Company Name Four",
    role: "Research Assistant",
    dates: "Sep 2020 - Apr 2021",
    description: "Assisted in research projects involving data analysis and machine learning. Published findings in academic journals and presented at conferences.",
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
            My <span className="gradient-text">Experience</span>
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
              "JavaScript", "TypeScript", "Python", "Java",
              "React", "Node.js", "AWS", "Docker",
              "PostgreSQL", "MongoDB", "Git", "Linux",
              "REST APIs", "GraphQL", "CI/CD", "Agile"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-4 text-center border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-sm font-medium text-muted-foreground">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

export default Experience;
