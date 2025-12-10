import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  dates: string;
  imageUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  skills,
  dates,
  imageUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group gradient-border overflow-hidden cursor-pointer"
    >
      {/* Image Placeholder */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="text-muted-foreground text-sm">
              Project Image Placeholder
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all"
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
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border group-hover:border-primary/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">{dates}</p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
