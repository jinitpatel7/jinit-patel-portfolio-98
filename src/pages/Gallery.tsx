import { motion } from "framer-motion";

const galleryItems = [
  { id: 1, title: "Photo Title 1", placeholder: true },
  { id: 2, title: "Photo Title 2", placeholder: true },
  { id: 3, title: "Photo Title 3", placeholder: true },
  { id: 4, title: "Photo Title 4", placeholder: true },
  { id: 5, title: "Photo Title 5", placeholder: true },
  { id: 6, title: "Photo Title 6", placeholder: true },
  { id: 7, title: "Photo Title 7", placeholder: true },
  { id: 8, title: "Photo Title 8", placeholder: true },
  { id: 9, title: "Photo Title 9", placeholder: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const Gallery = () => {
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
            <span className="font-display">My</span>{" "}
            <span className="gradient-text">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A visual collection of photography and creative work capturing moments and perspectives.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-2 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none rounded-xl" />
              
              {/* Card */}
              <div className="relative rounded-xl overflow-hidden bg-card border border-border shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Photo Placeholder</span>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
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

export default Gallery;
