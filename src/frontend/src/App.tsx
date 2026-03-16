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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
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
