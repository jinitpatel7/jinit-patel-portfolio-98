import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import new gallery images
import img8245 from "@/assets/gallery/IMG_8245-2.jpg";
import img8281 from "@/assets/gallery/IMG_8281-2.jpg";
import img3507 from "@/assets/gallery/IMG_3507-2.jpg";
import img3526 from "@/assets/gallery/IMG_3526-2.jpg";
import img4152 from "@/assets/gallery/IMG_4152-2.jpg";
import img2510 from "@/assets/gallery/IMG_2510-2.jpg";
import img5991 from "@/assets/gallery/IMG_5991-2.jpg";
import img8425 from "@/assets/gallery/IMG_8425-2.jpg";
import img4529 from "@/assets/gallery/IMG_4529-2.jpg";
import img0579 from "@/assets/gallery/IMG_0579-2.jpg";
import img4715 from "@/assets/gallery/IMG_4715.jpg";
import img1632 from "@/assets/gallery/IMG_1632.jpg";
import img8895 from "@/assets/gallery/IMG_8895.jpg";
import img6372 from "@/assets/gallery/IMG_6372.jpg";
import img6375 from "@/assets/gallery/IMG_6375.jpg";

// Import horizontal gallery images
import img5195 from "@/assets/gallery/IMG_5195.jpg";
import img0768 from "@/assets/gallery/IMG_0768.jpg";
import img4450 from "@/assets/gallery/IMG_4450.jpg";
import img3343 from "@/assets/gallery/IMG_3343.jpg";
import img3612 from "@/assets/gallery/IMG_3612.jpg";
import img4751 from "@/assets/gallery/IMG_4751.jpg";
import img5653 from "@/assets/gallery/IMG_5653.jpg";
import img5994 from "@/assets/gallery/IMG_5994.jpg";
import img2611 from "@/assets/gallery/IMG_2611.jpg";
import img3730 from "@/assets/gallery/IMG_3730.jpg";
import img9885 from "@/assets/gallery/IMG_9885.jpg";
import img4101 from "@/assets/gallery/IMG_4101.jpg";
import img3609 from "@/assets/gallery/IMG_3609.jpg";
import img4963 from "@/assets/gallery/IMG_4963.jpg";
import img5183 from "@/assets/gallery/IMG_5183.jpg";

// Gallery items with mixed aspect ratios - 45 total (15 square real, 10 horizontal real + 5 placeholder, 15 vertical placeholder)
// Ordered to maximize alternation: square → horizontal → vertical (repeating pattern)
// aspectRatio: "square" (1:1), "horizontal" (4:3), "vertical" (3:4)
const galleryItems = [
  // Alternating pattern: square, horizontal, vertical (repeat 15 times)
  // 10 horizontal images replaced with real photos, 5 horizontal placeholders remain
  { id: 1, name: "IMG_8245-2", aspectRatio: "square" as const, src: img8245 },
  { id: 2, name: "IMG_5195", aspectRatio: "horizontal" as const, src: img5195 },
  { id: 3, name: "Forest Path", aspectRatio: "vertical" as const },
  { id: 4, name: "IMG_8281-2", aspectRatio: "square" as const, src: img8281 },
  { id: 5, name: "IMG_0768", aspectRatio: "horizontal" as const, src: img0768 },
  { id: 6, name: "Autumn Leaves", aspectRatio: "vertical" as const },
  { id: 7, name: "IMG_3507-2", aspectRatio: "square" as const, src: img3507 },
  { id: 8, name: "IMG_4450", aspectRatio: "horizontal" as const, src: img4450 },
  { id: 9, name: "Urban Jungle", aspectRatio: "vertical" as const },
  { id: 10, name: "IMG_3526-2", aspectRatio: "square" as const, src: img3526 },
  { id: 11, name: "IMG_3343", aspectRatio: "horizontal" as const, src: img3343 },
  { id: 12, name: "Neon Streets", aspectRatio: "vertical" as const },
  { id: 13, name: "IMG_4152-2", aspectRatio: "square" as const, src: img4152 },
  { id: 14, name: "IMG_3612", aspectRatio: "horizontal" as const, src: img3612 },
  { id: 15, name: "Cloud Canvas", aspectRatio: "vertical" as const },
  { id: 16, name: "IMG_2510-2", aspectRatio: "square" as const, src: img2510 },
  { id: 17, name: "IMG_4751", aspectRatio: "horizontal" as const, src: img4751 },
  { id: 18, name: "Night Market", aspectRatio: "vertical" as const },
  { id: 19, name: "IMG_5991-2", aspectRatio: "square" as const, src: img5991 },
  { id: 20, name: "IMG_5653", aspectRatio: "horizontal" as const, src: img5653 },
  { id: 21, name: "Bamboo Grove", aspectRatio: "vertical" as const },
  { id: 22, name: "IMG_8425-2", aspectRatio: "square" as const, src: img8425 },
  { id: 23, name: "IMG_5994", aspectRatio: "horizontal" as const, src: img5994 },
  { id: 24, name: "Temple Steps", aspectRatio: "vertical" as const },
  { id: 25, name: "IMG_4529-2", aspectRatio: "square" as const, src: img4529 },
  { id: 26, name: "IMG_2611", aspectRatio: "horizontal" as const, src: img2611 },
  { id: 27, name: "Lighthouse", aspectRatio: "vertical" as const },
  { id: 28, name: "IMG_0579-2", aspectRatio: "square" as const, src: img0579 },
  { id: 29, name: "IMG_3730", aspectRatio: "horizontal" as const, src: img3730 },
  { id: 30, name: "Market Spices", aspectRatio: "vertical" as const },
  { id: 31, name: "IMG_4715", aspectRatio: "square" as const, src: img4715 },
  { id: 32, name: "IMG_9885", aspectRatio: "horizontal" as const, src: img9885 },
  { id: 33, name: "Cafe Corner", aspectRatio: "vertical" as const },
  { id: 34, name: "IMG_1632", aspectRatio: "square" as const, src: img1632 },
  { id: 35, name: "IMG_4101", aspectRatio: "horizontal" as const, src: img4101 },
  { id: 36, name: "Waterfall Mist", aspectRatio: "vertical" as const },
  { id: 37, name: "IMG_8895", aspectRatio: "square" as const, src: img8895 },
  { id: 38, name: "IMG_3609", aspectRatio: "horizontal" as const, src: img3609 },
  { id: 39, name: "Old Town", aspectRatio: "vertical" as const },
  { id: 40, name: "IMG_6372", aspectRatio: "square" as const, src: img6372 },
  { id: 41, name: "IMG_4963", aspectRatio: "horizontal" as const, src: img4963 },
  { id: 42, name: "Alley Light", aspectRatio: "vertical" as const },
  { id: 43, name: "IMG_6375", aspectRatio: "square" as const, src: img6375 },
  { id: 44, name: "IMG_5183", aspectRatio: "horizontal" as const, src: img5183 },
  { id: 45, name: "Morning Fog", aspectRatio: "vertical" as const },
];

// Seeded shuffle function for consistent randomization
const seededShuffle = <T,>(array: T[], seed: number): T[] => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(random() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
  }

  return shuffled;
};

// Pre-shuffled gallery items with consistent order
const shuffledGalleryItems = seededShuffle(galleryItems, 42);

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
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const handleImageClick = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
  };

  const handleClose = () => {
    setSelectedImage(null);
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

        {/* Photo Wall Grid - Clean masonry-style with columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 md:columns-3 gap-8"
        >
          {shuffledGalleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative cursor-pointer mb-8 break-inside-avoid"
              onClick={() => handleImageClick(item)}
            >
              {/* Image tile */}
              <motion.div
                className={`relative ${getAspectClass(item.aspectRatio)} bg-secondary overflow-hidden`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-2 bg-gradient-primary opacity-0 group-hover:opacity-25 blur-lg transition-opacity duration-300 pointer-events-none" />

                {/* Show actual image if src exists, otherwise placeholder */}
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderStyle(item.aspectRatio)}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground/40 text-sm select-none">
                        {item.aspectRatio}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Enlarged image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            >
              {/* Image */}
              <div
                className={`relative ${getAspectClass(selectedImage.aspectRatio)} w-full max-h-[75vh] bg-secondary overflow-hidden`}
                style={{ maxWidth: selectedImage.aspectRatio === "vertical" ? "500px" : "100%" }}
              >
                {/* Show actual image if src exists, otherwise placeholder */}
                {selectedImage.src ? (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderStyle(selectedImage.aspectRatio)}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground/40 text-lg select-none">
                        {selectedImage.aspectRatio}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Image name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 px-6 py-3 bg-card/80 backdrop-blur-sm"
              >
                <span className="font-display text-lg font-medium text-foreground">
                  {selectedImage.name}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
