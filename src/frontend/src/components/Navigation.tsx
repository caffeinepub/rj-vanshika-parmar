import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import type { PageType } from "../App";

const navLinks = [
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Writing", href: "#writing", ocid: "nav.writing.link" },
  { label: "Night Rose", href: "#nightrose", ocid: "nav.nightrose.link" },
  { label: "Partner", href: "#advertise", ocid: "nav.advertise.link" },
  { label: "Social", href: "#social", ocid: "nav.social.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

interface NavigationProps {
  isLight: boolean;
  onToggleTheme: () => void;
  page: PageType;
  onNavigateTo: (page: string) => void;
}

function NavPill({
  label,
  isActive,
  onClick,
  ocid,
}: {
  label: string;
  isActive?: boolean;
  onClick: () => void;
  ocid: string;
}) {
  return (
    <motion.button
      type="button"
      data-ocid={ocid}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{
        scale: 0.95,
        boxShadow:
          "0 0 30px oklch(0.55 0.2 15 / 1), 0 0 60px oklch(0.55 0.2 15 / 0.6)",
      }}
      className={`relative font-body text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
        isActive ? "btn-crimson-active font-semibold" : "btn-crimson"
      }`}
    >
      {label}
    </motion.button>
  );
}

export default function Navigation({
  isLight,
  onToggleTheme,
  page,
  onNavigateTo,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (page !== "home") {
      onNavigateTo("home");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setMobileOpen(false);
  };

  const isBooksActive =
    page === "booksLanguage" ||
    page === "hindiBooks" ||
    page === "englishBooks";

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
        <button
          type="button"
          onClick={() => onNavigateTo("home")}
          className="font-display text-xl font-semibold tracking-wide text-foreground hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
        >
          <span className="text-crimson-light">RJ</span> Vanshika Parmar
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavPill
                label={link.label}
                ocid={link.ocid}
                isActive={false}
                onClick={() => handleNavClick(link.href)}
              />
            </li>
          ))}
          {/* Books page link */}
          <li>
            <NavPill
              label="Books"
              ocid="nav.books.link"
              isActive={isBooksActive}
              onClick={() => {
                onNavigateTo("booksLanguage");
                setMobileOpen(false);
              }}
            />
          </li>
          {/* Audio Books page link */}
          <li>
            <NavPill
              label="Audio Books"
              ocid="nav.audiobooks.link"
              isActive={page === "audioBooks"}
              onClick={() => {
                onNavigateTo("audioBooks");
                setMobileOpen(false);
              }}
            />
          </li>
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            type="button"
            onClick={onToggleTheme}
            data-ocid="nav.theme.toggle"
            whileTap={{
              scale: 0.9,
              boxShadow: "0 0 24px oklch(0.55 0.2 15 / 1)",
            }}
            whileHover={{ scale: 1.1 }}
            aria-label={
              isLight ? "Switch to dark mode" : "Switch to light mode"
            }
            className="relative w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300 btn-crimson"
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
            className="md:hidden text-foreground hover:text-crimson-light transition-colors"
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
            <ul className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {page === "home" ? (
                    <a
                      href={link.href}
                      data-ocid={link.ocid}
                      onClick={() => setMobileOpen(false)}
                      className="block font-body text-sm tracking-widest uppercase py-2 px-4 rounded-full border btn-crimson transition-all"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      type="button"
                      data-ocid={link.ocid}
                      onClick={() => handleNavClick(link.href)}
                      className="block font-body text-sm tracking-widest uppercase py-2 px-4 rounded-full border btn-crimson cursor-pointer w-full text-left transition-all"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button
                  type="button"
                  data-ocid="nav.books.link"
                  onClick={() => {
                    onNavigateTo("booksLanguage");
                    setMobileOpen(false);
                  }}
                  className={`block font-body text-sm tracking-widest uppercase py-2 px-4 rounded-full border cursor-pointer w-full text-left transition-all ${
                    isBooksActive ? "btn-crimson-active" : "btn-crimson"
                  }`}
                >
                  Books
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-ocid="nav.audiobooks.link"
                  onClick={() => {
                    onNavigateTo("audioBooks");
                    setMobileOpen(false);
                  }}
                  className={`block font-body text-sm tracking-widest uppercase py-2 px-4 rounded-full border cursor-pointer w-full text-left transition-all ${
                    page === "audioBooks" ? "btn-crimson-active" : "btn-crimson"
                  }`}
                >
                  Audio Books
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
