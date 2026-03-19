import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Writing", href: "#writing", ocid: "nav.writing.link" },
  { label: "Books", href: "#books", ocid: "nav.books.link" },
  { label: "Night Rose", href: "#nightrose", ocid: "nav.nightrose.link" },
  { label: "Advertise", href: "#advertise", ocid: "nav.advertise.link" },
  { label: "Social", href: "#social", ocid: "nav.social.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

interface NavigationProps {
  isLight: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({
  isLight,
  onToggleTheme,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-crimson/20 shadow-glow"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-wide text-foreground hover:text-gold transition-colors duration-300"
        >
          <span className="text-crimson-light">RJ</span> Vanshika Parmar
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid={link.ocid}
                className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-crimson group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            type="button"
            onClick={onToggleTheme}
            data-ocid="nav.theme.toggle"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label={
              isLight ? "Switch to dark mode" : "Switch to light mode"
            }
            className="relative w-9 h-9 flex items-center justify-center rounded-full border border-crimson/30 text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300 bg-background/20 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isLight ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Moon size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Sun size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 border-b border-crimson/20 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={link.ocid}
                    onClick={() => setMobileOpen(false)}
                    className="block font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
