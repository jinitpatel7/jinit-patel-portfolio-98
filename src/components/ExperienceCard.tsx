import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  dates: string;
  description: string;
  logoUrl?: string;
  companyUrl?: string;
  index: number;
}

const ExperienceCard = ({
  company,
  role,
  dates,
  description,
  logoUrl,
  companyUrl,
  index,
}: ExperienceCardProps) => {
  const logoContent = (
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="w-full h-full object-cover"
        />
      ) : (
        <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group glass rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            {logoContent}
          </a>
        ) : (
          logoContent
        )}

        {/* Content */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {company}
            </h3>
            <span className="text-xs text-muted-foreground">{dates}</span>
          </div>
          
          <p className="text-sm font-medium text-primary">{role}</p>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/30 transition-colors" />
    </motion.div>
  );
};

export default ExperienceCard;
