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

// Import vertical gallery images
import img3643 from "@/assets/gallery/IMG_3643.jpg";
import img5586 from "@/assets/gallery/IMG_5586.jpg";
import img9746 from "@/assets/gallery/IMG_9746.jpg";
import img1987 from "@/assets/gallery/IMG_1987.jpg";
import img3314 from "@/assets/gallery/IMG_3314.jpg";
import img3464 from "@/assets/gallery/IMG_3464.jpg";
import img4308 from "@/assets/gallery/IMG_4308.jpg";
import img7387 from "@/assets/gallery/IMG_7387.jpg";
import img1364 from "@/assets/gallery/IMG_1364.jpg";
import img1826 from "@/assets/gallery/IMG_1826.jpg";
import img3653 from "@/assets/gallery/IMG_3653.jpg";
import img3844 from "@/assets/gallery/IMG_3844.jpg";
import img3991 from "@/assets/gallery/IMG_3991.jpg";
import img1911 from "@/assets/gallery/IMG_1911.jpg";
import img3642 from "@/assets/gallery/IMG_3642.jpg";

// LOCKED aspect-ratio layout pattern (45 slots) - DO NOT CHANGE THIS ORDER
const lockedLayoutPattern: ("square" | "horizontal" | "vertical")[] = [
  "square", "horizontal", "vertical",
  "horizontal", "vertical", "square",
  "vertical", "square", "horizontal",
  "square", "horizontal", "vertical",
  "horizontal", "vertical", "square",
  "vertical", "square", "horizontal",
  "square", "horizontal", "vertical",
  "horizontal", "vertical", "square",
  "vertical", "square", "horizontal",
  "square", "horizontal", "vertical",
  "horizontal", "vertical", "square",
  "vertical", "square", "horizontal",
  "square", "horizontal", "vertical",
  "horizontal", "vertical", "square",
  "vertical", "square", "horizontal",
];

// Image pools by aspect ratio (15 each) - name is used as the description
// AI-analyzed descriptions based on image content
const squareImages = [
  { name: "Sun-drenched clouds frame a basketball hoop from below", src: img8245 },
  { name: "Dramatic cumulus clouds behind orange basketball rim", src: img8281 },
  { name: "Fiery sunset paints the sky in orange and purple hues", src: img3507 },
  { name: "Vibrant autumn sunset with silhouetted tree line", src: img3526 },
  { name: "Close-up of textured natural elements in warm light", src: img4152 },
  { name: "Busy street intersection captured in urban motion", src: img2510 },
  { name: "Deep orange and pink gradients across evening clouds", src: img5991 },
  { name: "Modern architecture with geometric glass patterns", src: img8425 },
  { name: "Serene lake reflection at golden hour", src: img4529 },
  { name: "Rays of sunlight breaking through dramatic cloud cover", src: img0579 },
  { name: "Rocky terrain with intricate natural formations", src: img4715 },
  { name: "Candid moment frozen in time on a city street", src: img1632 },
  { name: "Minimalist composition with clean lines and soft tones", src: img8895 },
  { name: "Late afternoon sun casting long shadows", src: img6372 },
  { name: "Weathered stone surface telling stories of time", src: img6375 },
];

const horizontalImages = [
  { name: "Vast ocean horizon under a pastel pink and blue sky", src: img5195 },
  { name: "Tree-lined campus path at twilight with distant sunset", src: img0768 },
  { name: "City skyline silhouetted against a vibrant sunset", src: img4450 },
  { name: "Rolling green landscape stretching to the horizon", src: img3343 },
  { name: "Sunset reflected in car side mirror on empty road", src: img3612 },
  { name: "Winding road disappearing into misty mountains", src: img4751 },
  { name: "Tall grass swaying in golden afternoon light", src: img5653 },
  { name: "Dramatic clouds layered over a calm lake", src: img5994 },
  { name: "Early morning fog rising over a quiet field", src: img2611 },
  { name: "Light and shadow playing across urban architecture", src: img3730 },
  { name: "Wide open plains under an endless blue sky", src: img9885 },
  { name: "Geometric patterns in agricultural landscape from above", src: img4101 },
  { name: "Golden light streaming through forest canopy", src: img3609 },
  { name: "Peaceful waterfront scene at dusk", src: img4963 },
  { name: "Panoramic view of mountains meeting the sky", src: img5183 },
];

const verticalImages = [
  { name: "Modern skyscrapers rising into cloudy sky", src: img3643 },
  { name: "Nighttime city street with glowing office towers", src: img5586 },
  { name: "Tall tree trunk reaching toward the forest canopy", src: img9746 },
  { name: "Steep stairway ascending through urban neighborhood", src: img1987 },
  { name: "High-rise buildings creating an urban canyon", src: img3314 },
  { name: "Young plant reaching toward sunlight", src: img3464 },
  { name: "Imposing skyscraper viewed from street level", src: img4308 },
  { name: "Parallel lines converging toward the sky", src: img7387 },
  { name: "Rocky mountain path leading upward", src: img1364 },
  { name: "Person silhouetted against bright window light", src: img1826 },
  { name: "Vertical rock face with dramatic depth", src: img3653 },
  { name: "Spiral staircase ascending through modern building", src: img3844 },
  { name: "Crowd of pedestrians on busy city street at night", src: img3991 },
  { name: "Tall pine trees against a clear blue sky", src: img1911 },
  { name: "Cozy cafe interior with warm ambient lighting", src: img3642 },
];

// Fisher-Yates shuffle (random, not seeded)
const shuffle = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Build gallery items by mapping shuffled images to locked layout slots
const buildGalleryItems = () => {
  const shuffledSquare = shuffle(squareImages);
  const shuffledHorizontal = shuffle(horizontalImages);
  const shuffledVertical = shuffle(verticalImages);

  let squareIdx = 0, horizontalIdx = 0, verticalIdx = 0;

  return lockedLayoutPattern.map((aspectRatio, index) => {
    let image;
    if (aspectRatio === "square") {
      image = shuffledSquare[squareIdx++];
    } else if (aspectRatio === "horizontal") {
      image = shuffledHorizontal[horizontalIdx++];
    } else {
      image = shuffledVertical[verticalIdx++];
    }
    return {
      id: index + 1,
      name: image.name,
      aspectRatio,
      src: image.src,
    };
  });
};

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

type GalleryItem = {
  id: number;
  name: string;
  aspectRatio: "square" | "horizontal" | "vertical";
  src: string;
};

const Gallery = () => {
  // Build gallery items once on mount (randomized on each page load)
  const galleryItems = useMemo(() => buildGalleryItems(), []);
  
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleImageClick = (item: GalleryItem) => {
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
          {galleryItems.map((item) => (
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

              {/* Image description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 px-6 py-3 bg-card/80 backdrop-blur-sm text-center"
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
