import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedButtonWrapperProps {
  children: ReactNode;
  className?: string;
}

const AnimatedButtonWrapper = ({ children, className = "" }: AnimatedButtonWrapperProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -3
      }}
      whileTap={{
        scale: 0.98
      }}
      transition={{
        duration: 0.15,
        ease: "easeOut"
      }}
      className={`relative group ${className}`}
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-200 rounded-lg" />
      {children}
    </motion.div>
  );
};

export default AnimatedButtonWrapper;
