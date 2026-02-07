import { useRef, useCallback, useState } from "react";

interface FigureProps {
  src: string;
  caption: string;
  type?: "image" | "video";
  alt?: string;
}

const Figure = ({ src, caption, type = "image", alt }: FigureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (type === "video") {
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  }, [type]);

  const handleMouseLeave = useCallback(() => {
    if (type === "video") {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [type]);

  return (
    <figure 
      className="my-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="gradient-border overflow-hidden">
        {type === "video" ? (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-auto object-cover"
          />
        ) : (
          <img
            src={src}
            alt={alt || caption}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
      <figcaption className="mt-2 text-sm italic text-muted-foreground text-center">
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
