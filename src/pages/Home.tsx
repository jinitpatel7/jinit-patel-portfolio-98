import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="relative z-10 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-wide"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            >
              <span className="gradient-text">Jinit Patel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              Engineering Portfolio
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground max-w-lg mx-auto leading-relaxed"
            >
              Building innovative solutions at the intersection of technology and creativity.
              Passionate about crafting elegant, efficient, and scalable systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link to="/projects">
                <Button size="lg" className="group bg-gradient-primary hover:opacity-90 text-foreground font-medium px-8">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-secondary/50"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated engineer with a passion for building impactful solutions. 
                My journey in technology has equipped me with a diverse skill set spanning 
                software development, system design, and problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, and continuously learning 
                to stay at the forefront of innovation.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Problem Solving", "System Design", "Full Stack", "Cloud", "AI/ML"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="gradient-border aspect-square max-w-md mx-auto overflow-hidden">
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground">Profile Image</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Download Card */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 md:p-12 text-center space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Interested in my work?
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Download my resume to learn more about my experience, skills, and achievements.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-foreground font-medium px-8"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h3 className="font-display text-xl font-semibold text-muted-foreground">
              Let's Connect
            </h3>
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:glow-primary transition-all duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Jinit Patel. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
