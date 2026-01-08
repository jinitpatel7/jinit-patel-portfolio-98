import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gallery items with mixed aspect ratios - easily replaceable
// aspectRatio: "square" (1:1), "horizontal" (4:3), "vertical" (3:4)
const galleryItems = [
  // Mix of all aspect ratios interspersed throughout
  { id: 1, name: "Mountain Peak", aspectRatio: "square" as const },
  { id: 2, name: "Ocean Horizon", aspectRatio: "horizontal" as const },
  { id: 3, name: "Forest Path", aspectRatio: "vertical" as const },
  { id: 4, name: "City Lights", aspectRatio: "horizontal" as const },
  { id: 5, name: "Desert Dunes", aspectRatio: "square" as const },
  { id: 6, name: "Autumn Leaves", aspectRatio: "vertical" as const },
  { id: 7, name: "Starry Night", aspectRatio: "square" as const },
  { id: 8, name: "Coastal Cliff", aspectRatio: "horizontal" as const },
  { id: 9, name: "Urban Jungle", aspectRatio: "vertical" as const },
  { id: 10, name: "Golden Hour", aspectRatio: "horizontal" as const },
  { id: 11, name: "Misty Valley", aspectRatio: "square" as const },
  { id: 12, name: "Neon Streets", aspectRatio: "vertical" as const },
  { id: 13, name: "Snowy Summit", aspectRatio: "horizontal" as const },
  { id: 14, name: "River Bend", aspectRatio: "square" as const },
  { id: 15, name: "Cloud Canvas", aspectRatio: "vertical" as const },
  { id: 16, name: "Sunflower Field", aspectRatio: "horizontal" as const },
  { id: 17, name: "Night Market", aspectRatio: "vertical" as const },
  { id: 18, name: "Reflection Pool", aspectRatio: "square" as const },
  { id: 19, name: "Canyon Walls", aspectRatio: "horizontal" as const },
  { id: 20, name: "Bamboo Grove", aspectRatio: "vertical" as const },
  { id: 21, name: "Harbor Dawn", aspectRatio: "square" as const },
  { id: 22, name: "Prairie Wind", aspectRatio: "horizontal" as const },
  { id: 23, name: "Temple Steps", aspectRatio: "vertical" as const },
  { id: 24, name: "Wildflowers", aspectRatio: "square" as const },
  { id: 25, name: "Bridge View", aspectRatio: "horizontal" as const },
  { id: 26, name: "Lighthouse", aspectRatio: "vertical" as const },
  { id: 27, name: "Rain Drops", aspectRatio: "square" as const },
  { id: 28, name: "Vineyard Rows", aspectRatio: "horizontal" as const },
  { id: 29, name: "Market Spices", aspectRatio: "vertical" as const },
  { id: 30, name: "Frozen Lake", aspectRatio: "horizontal" as const },
  { id: 31, name: "Cherry Blossom", aspectRatio: "square" as const },
  { id: 32, name: "Cafe Corner", aspectRatio: "vertical" as const },
  { id: 33, name: "Rolling Hills", aspectRatio: "horizontal" as const },
  { id: 34, name: "Street Art", aspectRatio: "square" as const },
  { id: 35, name: "Waterfall Mist", aspectRatio: "vertical" as const },
  { id: 36, name: "Sunset Pier", aspectRatio: "horizontal" as const },
  { id: 37, name: "Garden Path", aspectRatio: "square" as const },
  { id: 38, name: "Old Town", aspectRatio: "vertical" as const },
  { id: 39, name: "Wave Crash", aspectRatio: "horizontal" as const },
  { id: 40, name: "Moon Rise", aspectRatio: "square" as const },
  { id: 41, name: "Alley Light", aspectRatio: "vertical" as const },
  { id: 42, name: "Field of Gold", aspectRatio: "horizontal" as const },
  { id: 43, name: "Stone Bridge", aspectRatio: "square" as const },
  { id: 44, name: "Morning Fog", aspectRatio: "vertical" as const },
  { id: 45, name: "Last Light", aspectRatio: "horizontal" as const },
];

// Placeholder image URLs - replace these with actual image sources
const getPlaceholderStyle = (aspectRatio: "square" | "horizontal" | "vertical") => {
  const gradients = {
    square: "from-primary/20 via-accent/10 to-secondary",
    horizontal: "from-accent/20 via-primary/10 to-secondary",
    vertical: "from-secondary via-primary/15 to-accent/20",
  };
  return gradients[aspectRatio];
};

// Aspect ratio classes for each type
const getAspectClass = (aspectRatio: "square" | "horizontal" | "vertical") => {
  switch (aspectRatio) {
    case "square":
      return "aspect-square";
    case "horizontal":
      return "aspect-[4/3]";
    case "vertical":
      return "aspect-[3/4]";
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Gallery = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedId(null);
  };

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="font-display">my</span>{" "}
            <span className="gradient-text">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The world through my lens.
          </motion.p>
        </motion.div>

        {/* Photo Wall Grid - CSS Grid with consistent 4 columns on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => handleImageClick(item.id)}
            >
              {/* Image tile */}
              <motion.div
                className={`relative ${getAspectClass(item.aspectRatio)} bg-secondary overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-2 bg-gradient-primary opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-300 pointer-events-none" />

                {/* Placeholder gradient - replace with actual images */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderStyle(item.aspectRatio)}`}
                />

                {/* Image placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground/40 text-sm select-none">
                    {item.aspectRatio}
                  </span>
                </div>

                {/* Click-to-show name overlay */}
                <AnimatePresence>
                  {selectedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-end justify-center pb-6 z-20"
                      onClick={handleOverlayClick}
                    >
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                        className="font-display text-base font-medium text-foreground px-4 py-2 bg-card/80 backdrop-blur-sm"
                      >
                        {item.name}
                      </motion.span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">© Jinit Patel 2025</p>
        </div>
      </footer>
    </main>
  );
};

export default Gallery;
