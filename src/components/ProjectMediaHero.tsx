interface ProjectMediaHeroProps {
  imageUrl?: string;
  videoUrl?: string;
  posterUrl?: string;
  title: string;
}

const ProjectMediaHero = ({ imageUrl, videoUrl, posterUrl, title }: ProjectMediaHeroProps) => {
  return (
    <div className="w-full h-full bg-secondary flex items-center justify-center">
      {videoUrl ? (
        <video
          src={videoUrl}
          poster={posterUrl}
          muted
          loop
          playsInline
          controls
          preload="none"
          aria-label={`Video demonstration of ${title}`}
          className="w-full h-full object-cover"
        />
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-muted-foreground">Project Screenshot / Demo</span>
      )}
    </div>
  );
};

export default ProjectMediaHero;
