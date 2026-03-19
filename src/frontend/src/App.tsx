import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AdvertiseSection from "./components/AdvertiseSection";
import BooksSection from "./components/BooksSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import NightRoseSection from "./components/NightRoseSection";
import SocialMediaPage from "./components/SocialMediaPage";
import WritingThemesSection from "./components/WritingThemesSection";

export default function App() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

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
      <Navigation isLight={isLight} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <WritingThemesSection />
        <BooksSection />
        <NightRoseSection />
        <AdvertiseSection />
        <SocialMediaPage />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
