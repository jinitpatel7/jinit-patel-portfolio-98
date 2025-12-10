import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun, Linkedin, Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
    } else {
      root.classList.add("light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="group relative flex items-baseline gap-2 transition-all duration-300"
        >
          <motion.span 
            className="font-display text-2xl md:text-3xl font-bold header-name"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Jinit Patel
            {/* Gradient underline */}
            <span className="absolute -bottom-1 left-0 right-[calc(100%-10ch)] h-[2px] bg-gradient-primary rounded-full" />
            {/* Hover glow outline */}
            <span className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
          </motion.span>
          <span className="text-base md:text-lg font-medium text-muted-foreground">
            – Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative font-medium text-sm transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
            >
              <Github size={18} />
            </a>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary"
            >
              <motion.div
                key={isDark ? "sun" : "moon"}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 font-medium transition-colors ${
                        isActive(link.path) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary"
                >
                  <Github size={20} />
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDark(!isDark)}
                  className="ml-auto"
                >
                  <motion.div
                    key={isDark ? "sun-mobile" : "moon-mobile"}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
