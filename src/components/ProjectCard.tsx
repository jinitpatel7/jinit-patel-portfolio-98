import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  skills: string[];
  dates: string;
  imageUrl?: string;
  videoUrl?: string; // Support for GIF/video
  index: number;
}

const ProjectCard = ({
  id,
  title,
  description,
  skills,
  dates,
  imageUrl,
  videoUrl,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link to={`/projects/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ y: -8, scale: 1.02 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden cursor-pointer rounded-xl"
      >
        {/* Gradient border - always visible, stronger on hover */}
        <div className="absolute inset-0 rounded-xl p-[3px] bg-gradient-primary opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:p-[4px]">
          <div className="absolute inset-[3px] rounded-[9px] bg-card group-hover:inset-[4px]" />
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute -inset-3 bg-gradient-primary opacity-0 group-hover:opacity-25 blur-2xl transition-opacity duration-300 pointer-events-none" />

        {/* Card content */}
        <div className="relative z-10 bg-card rounded-xl overflow-hidden">
          {/* Image/Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              {videoUrl ? (
                <>
                  {/* Static image (poster) - shown when not hovered */}
                  {imageUrl && !isHovered && (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Video - plays on hover */}
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  />
                  {/* Fallback if no poster image */}
                  {!imageUrl && !isHovered && (
                    <div className="text-muted-foreground text-sm">
                      Hover to preview
                    </div>
                  )}
                </>
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className="text-muted-foreground text-sm">
                  Project Image
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.15 }}
                className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-200"
              >
                <ExternalLink size={18} />
              </motion.div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border group-hover:border-primary/30 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">{dates}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
