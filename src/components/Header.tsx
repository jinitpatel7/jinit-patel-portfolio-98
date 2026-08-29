import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const initialDarkMode = () => {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved) return saved === "dark";
  return true;
};

const Header = () => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [isDark, setIsDark] = useState(initialDarkMode);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#0d0d12" : "#f8f7fc");
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location.pathname]);

  const isActive = (path: string) => path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
  const toggleLabel = isDark ? "Switch to light theme" : "Switch to dark theme";

  const socialLinks = (
    <>
      <a href="https://www.linkedin.com/in/jinitpatel1/" target="_blank" rel="noopener noreferrer" aria-label="Jinit Patel on LinkedIn" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all">
        <Linkedin size={18} aria-hidden="true" />
      </a>
      <a href="https://github.com/jinitpatel7" target="_blank" rel="noopener noreferrer" aria-label="Jinit Patel on GitHub" className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all">
        <Github size={18} aria-hidden="true" />
      </a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "py-5"}`}>
      <nav aria-label="Primary navigation" className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" aria-label="Jinit Patel portfolio home" className="group relative flex items-baseline transition-all duration-200">
          <motion.span whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }} className="font-display text-2xl md:text-3xl font-bold relative header-name group-hover:text-primary transition-colors duration-200">
            Jinit Patel
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-primary rounded-full" />
          </motion.span>
          <span aria-hidden="true" className="text-sm md:text-base font-medium text-muted-foreground ml-3">–</span>
          <span className="text-sm md:text-base font-medium text-muted-foreground ml-2">Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} aria-current={isActive(link.path) ? "page" : undefined} className={`relative font-medium text-sm transition-colors duration-200 hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
                  {link.label}
                  {isActive(link.path) && <motion.span layoutId={reduceMotion ? undefined : "activeNav"} className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {socialLinks}
            <Button variant="ghost" size="icon" onClick={() => setIsDark((value) => !value)} aria-label={toggleLabel} title={toggleLabel} className="rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary">
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </Button>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen((value) => !value)} aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu" aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}>
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </Button>
      </nav>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <motion.div id="mobile-menu" initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduceMotion ? undefined : { opacity: 0, height: 0 }} className="md:hidden glass border-t border-border">
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} aria-current={isActive(link.path) ? "page" : undefined} className={`block py-2 font-medium transition-colors ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                {socialLinks}
                <Button variant="ghost" size="icon" onClick={() => setIsDark((value) => !value)} aria-label={toggleLabel} className="ml-auto">
                  {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
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
