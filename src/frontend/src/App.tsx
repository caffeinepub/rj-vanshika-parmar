import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AdvertiseSection from "./components/AdvertiseSection";
import AudioBooksPage from "./components/AudioBooksPage";
import BooksLanguagePage from "./components/BooksLanguagePage";
import BooksSection from "./components/BooksSection";
import ContactSection from "./components/ContactSection";
import EnglishBooksPage from "./components/EnglishBooksPage";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HindiBooksPage from "./components/HindiBooksPage";
import Navigation from "./components/Navigation";
import NightRoseSection from "./components/NightRoseSection";
import SocialMediaPage from "./components/SocialMediaPage";
import WritingThemesSection from "./components/WritingThemesSection";

export type PageType =
  | "home"
  | "about"
  | "writing"
  | "nightrose"
  | "partner"
  | "social"
  | "contact"
  | "booksLanguage"
  | "hindiBooks"
  | "englishBooks"
  | "audioBooks";

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  const [page, setPage] = useState<PageType>("home");

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight((prev) => !prev);
  const navigateTo = (p: string) => setPage(p as PageType);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        isLight={isLight}
        onToggleTheme={toggleTheme}
        page={page}
        onNavigateTo={navigateTo}
      />

      {page === "home" && (
        <main className="pt-16">
          <HeroSection />
          <BooksSection />
        </main>
      )}

      {page === "about" && (
        <main className="pt-20">
          <AboutSection />
        </main>
      )}

      {page === "writing" && (
        <main className="pt-20">
          <WritingThemesSection onNavigateTo={navigateTo} />
        </main>
      )}

      {page === "nightrose" && (
        <main className="pt-20">
          <NightRoseSection />
        </main>
      )}

      {page === "partner" && (
        <main className="pt-20">
          <AdvertiseSection />
        </main>
      )}

      {page === "social" && (
        <main className="pt-20">
          <SocialMediaPage />
        </main>
      )}

      {page === "contact" && (
        <main className="pt-20">
          <ContactSection />
        </main>
      )}

      {page === "booksLanguage" && (
        <BooksLanguagePage onNavigateTo={navigateTo} />
      )}
      {page === "hindiBooks" && <HindiBooksPage onNavigateTo={navigateTo} />}
      {page === "englishBooks" && (
        <EnglishBooksPage onNavigateTo={navigateTo} />
      )}
      {page === "audioBooks" && <AudioBooksPage onNavigateTo={navigateTo} />}

      <Footer />
    </div>
  );
}
