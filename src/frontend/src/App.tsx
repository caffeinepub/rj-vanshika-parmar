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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        isLight={isLight}
        onToggleTheme={toggleTheme}
        page={page}
        onNavigateTo={(p) => setPage(p as PageType)}
      />
      {page === "home" && (
        <main>
          <HeroSection />
          <AboutSection />
          <WritingThemesSection onNavigateTo={(p) => setPage(p as PageType)} />
          <BooksSection />
          <NightRoseSection />
          <AdvertiseSection />
          <SocialMediaPage />
          <ContactSection />
        </main>
      )}
      {page === "booksLanguage" && (
        <BooksLanguagePage onNavigateTo={(p) => setPage(p as PageType)} />
      )}
      {page === "hindiBooks" && (
        <HindiBooksPage onNavigateTo={(p) => setPage(p as PageType)} />
      )}
      {page === "englishBooks" && (
        <EnglishBooksPage onNavigateTo={(p) => setPage(p as PageType)} />
      )}
      {page === "audioBooks" && (
        <AudioBooksPage onNavigateTo={(p) => setPage(p as PageType)} />
      )}
      <Footer />
    </div>
  );
}
