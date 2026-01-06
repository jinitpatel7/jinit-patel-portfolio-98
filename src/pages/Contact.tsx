import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedButtonWrapper from "@/components/AnimatedButtonWrapper";
const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "patel.4780@osu.edu",
  href: "mailto:patel.4780@osu.edu"
}, {
  icon: Phone,
  label: "Phone",
  value: "(740) 803-4681",
  href: "tel:+17408034681"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "linkedin.com/in/jinitpatel1",
  href: "https://www.linkedin.com/in/jinitpatel1/"
}, {
  icon: Github,
  label: "GitHub",
  value: "github.com/jinitpatel7",
  href: "https://github.com/jinitpatel7"
}];
const Contact = () => {
  return <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16 space-y-4">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">get in <span className="gradient-text">Touch</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a question or want to work together? I'd love to hear from you. Feel free to reach out to talk about anything :)</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-8">
            <h2 className="font-display text-2xl font-bold">Contact Information</h2>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              x: 8
            }} className="group flex items-center gap-4 p-4 rounded-xl glass border border-border hover:border-primary/30 transition-all">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>)}
            </div>

            {/* Resume Download */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.7
          }} className="pt-4">
              <AnimatedButtonWrapper className="w-full">
                <Button asChild size="lg" className="relative w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium">
                  <a href="/Patel_Jinit_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </AnimatedButtonWrapper>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="glass rounded-2xl p-8 border border-border">
            <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
            
            <form action="https://formspree.io/f/xpwvoljo" method="POST" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" className="bg-secondary border-border focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" className="bg-secondary border-border focus:border-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="What's this about?" className="bg-secondary border-border focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={5} className="bg-secondary border-border focus:border-primary/50 resize-none" />
              </div>

              <AnimatedButtonWrapper className="w-full">
                <Button type="submit" size="lg" className="relative w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </AnimatedButtonWrapper>
            </form>
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
    </main>;
};
export default Contact;