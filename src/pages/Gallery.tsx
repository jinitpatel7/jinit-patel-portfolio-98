import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import actual images
import clockTowerSunset from "@/assets/gallery/clock-tower-sunset.jpg";
import orchardThrow from "@/assets/gallery/orchard-throw.jpg";
import cornfieldDusk from "@/assets/gallery/cornfield-dusk.jpg";
import torontoSkyline from "@/assets/gallery/toronto-skyline.jpg";
import niagaraRainbow from "@/assets/gallery/niagara-rainbow.jpg";
import moonlitClouds from "@/assets/gallery/moonlit-clouds.jpg";
import concertLights from "@/assets/gallery/concert-lights.jpg";
import basketballHoop from "@/assets/gallery/basketball-hoop.jpg";
import parkingLotSunset from "@/assets/gallery/parking-lot-sunset.jpg";
import boathouseNight from "@/assets/gallery/boathouse-night.jpg";

// Gallery items with mixed aspect ratios - randomized order
// aspectRatio: "square" (1:1), "horizontal" (4:3), "vertical" (3:4)
type GalleryItem = {
  id: number;
  name: string;
  aspectRatio: "square" | "horizontal" | "vertical";
  image?: string;
};

const galleryItems: GalleryItem[] = [
  // Randomized mix of all aspect ratios with real square images interspersed
  { id: 1, name: "Concert Lights", aspectRatio: "square", image: concertLights },
  { id: 2, name: "Ocean Horizon", aspectRatio: "horizontal" },
  { id: 3, name: "Forest Path", aspectRatio: "vertical" },
  { id: 4, name: "Niagara Rainbow", aspectRatio: "square", image: niagaraRainbow },
  { id: 5, name: "City Lights", aspectRatio: "horizontal" },
  { id: 6, name: "Autumn Leaves", aspectRatio: "vertical" },
  { id: 7, name: "Toronto Skyline", aspectRatio: "square", image: torontoSkyline },
  { id: 8, name: "Coastal Cliff", aspectRatio: "horizontal" },
  { id: 9, name: "Urban Jungle", aspectRatio: "vertical" },
  { id: 10, name: "Parking Lot Sunset", aspectRatio: "square", image: parkingLotSunset },
  { id: 11, name: "Golden Hour", aspectRatio: "horizontal" },
  { id: 12, name: "Neon Streets", aspectRatio: "vertical" },
  { id: 13, name: "Basketball Hoop", aspectRatio: "square", image: basketballHoop },
  { id: 14, name: "Snowy Summit", aspectRatio: "horizontal" },
  { id: 15, name: "Cloud Canvas", aspectRatio: "vertical" },
  { id: 16, name: "Orchard Throw", aspectRatio: "square", image: orchardThrow },
  { id: 17, name: "Sunflower Field", aspectRatio: "horizontal" },
  { id: 18, name: "Night Market", aspectRatio: "vertical" },
  { id: 19, name: "Clock Tower Sunset", aspectRatio: "square", image: clockTowerSunset },
  { id: 20, name: "Canyon Walls", aspectRatio: "horizontal" },
  { id: 21, name: "Bamboo Grove", aspectRatio: "vertical" },
  { id: 22, name: "Cornfield Dusk", aspectRatio: "square", image: cornfieldDusk },
  { id: 23, name: "Prairie Wind", aspectRatio: "horizontal" },
  { id: 24, name: "Temple Steps", aspectRatio: "vertical" },
  { id: 25, name: "Moonlit Clouds", aspectRatio: "square", image: moonlitClouds },
  { id: 26, name: "Bridge View", aspectRatio: "horizontal" },
  { id: 27, name: "Lighthouse", aspectRatio: "vertical" },
  { id: 28, name: "Boathouse Night", aspectRatio: "square", image: boathouseNight },
  { id: 29, name: "Vineyard Rows", aspectRatio: "horizontal" },
  { id: 30, name: "Market Spices", aspectRatio: "vertical" },
  { id: 31, name: "Frozen Lake", aspectRatio: "horizontal" },
  { id: 32, name: "Cafe Corner", aspectRatio: "vertical" },
  { id: 33, name: "Rolling Hills", aspectRatio: "horizontal" },
  { id: 34, name: "Waterfall Mist", aspectRatio: "vertical" },
  { id: 35, name: "Sunset Pier", aspectRatio: "horizontal" },
];

// Placeholder gradient for items without images
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

                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Placeholder gradient */}
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
                {selectedImage.image ? (
                  <img
                    src={selectedImage.image}
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
