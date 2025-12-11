import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useCallback } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  skills: string[];
  dates: string;
  imageUrl?: string;
  videoUrl?: string;
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    if (cardRef.current) {
      cardRef.current.dataset.hovered = "true";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (cardRef.current) {
      cardRef.current.dataset.hovered = "false";
    }
  }, []);

  return (
    <Link to={`/projects/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
        data-hovered="false"
        className="group relative cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-200 ease-out will-change-transform"
      >
        {/* Hover glow effect - behind everything */}
        <div className="absolute -inset-4 bg-gradient-primary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 pointer-events-none -z-10" />
        
        {/* Gradient border wrapper - only visible on hover */}
        <div className="relative rounded-xl p-[3px] bg-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-300 z-10">
          {/* Card content with background and default border */}
          <div className="bg-card rounded-[9px] overflow-hidden border border-border group-hover:border-transparent transition-colors duration-300">
          {/* Image/Video Thumbnail */}
          <div className="relative aspect-video overflow-hidden bg-secondary">
            {/* Background gradient - behind media */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />
            {/* Media container - above gradient */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              {videoUrl ? (
                <>
                  {/* Static image (poster) - shown when not hovered */}
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover group-[[data-hovered='true']]:opacity-0 transition-opacity duration-300"
                    />
                  )}
                  {/* Video - plays on hover */}
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover absolute inset-0 opacity-0 group-[[data-hovered='true']]:opacity-100 transition-opacity duration-300"
                  />
                  {/* Fallback if no poster image */}
                  {!imageUrl && (
                    <div className="text-muted-foreground text-sm group-[[data-hovered='true']]:opacity-0 transition-opacity duration-300">
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
            {/* Gradient overlay at bottom - behind media but styled */}
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60 z-5 pointer-events-none" />
          </div>

          {/* Content - use flex-grow and min-height to ensure uniform card sizes */}
          <div className="p-6 space-y-4 flex flex-col min-h-[220px]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>
              <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-200 flex-shrink-0 hover:scale-110 will-change-transform">
                <ExternalLink size={18} />
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
              {description}
            </p>

            {/* Skills & Tools */}
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

            <p className="text-xs text-muted-foreground mt-auto">{dates}</p>
          </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
