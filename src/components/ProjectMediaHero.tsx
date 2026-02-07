import { useRef, useCallback, useState } from "react";

interface ProjectMediaHeroProps {
  imageUrl?: string;
  videoUrl?: string;
  title: string;
}

const ProjectMediaHero = ({ imageUrl, videoUrl, title }: ProjectMediaHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div 
      className="w-full h-full bg-secondary flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoUrl ? (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-muted-foreground">Project Screenshot / Demo</span>
      )}
    </div>
  );
};

export default ProjectMediaHero;
