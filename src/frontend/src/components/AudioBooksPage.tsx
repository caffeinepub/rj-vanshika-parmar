import { ArrowLeft, Eye, Headphones } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AudioBook {
  id: number;
  title: string;
  description: string;
  views: string;
  duration: string;
  gradient: string;
}

const hindiBooks: AudioBook[] = [
  {
    id: 1,
    title: "आवाज़ की दुनिया",
    description:
      "एक आवाज़ जो दिल तक पहुँचती है — वनशिका की आवाज़ में सुनें एक अनोखी प्रेम कहानी।",
    views: "24.7K",
    duration: "3h 12m",
    gradient: "from-crimson/30 via-crimson/10 to-gold/20",
  },
  {
    id: 2,
    title: "खामोश रातें",
    description: "रात की खामोशी में छुपी बातें, जो शब्दों से नहीं, आवाज़ से कही जाती हैं।",
    views: "18.2K",
    duration: "2h 45m",
    gradient: "from-gold/30 via-crimson/10 to-background/40",
  },
  {
    id: 3,
    title: "दिल की बात",
    description:
      "जब दिल बोलता है तो शब्द कम पड़ जाते हैं — एक भावुक कहानी जो आपको रुला देगी।",
    views: "31.5K",
    duration: "4h 02m",
    gradient: "from-crimson/25 via-gold/10 to-crimson/15",
  },
  {
    id: 4,
    title: "मेरी धड़कन",
    description: "प्यार और दर्द की एक अद्भुत कहानी जो दिल की गहराइयों को छू लेती है।",
    views: "15.8K",
    duration: "2h 28m",
    gradient: "from-gold/20 via-crimson/20 to-gold/10",
  },
];

const englishBooks: AudioBook[] = [
  {
    id: 1,
    title: "Whispers in the Dark",
    description:
      "A haunting tale of forbidden love, secrets whispered beneath midnight skies, and a heart that refuses to stay silent.",
    views: "42.1K",
    duration: "5h 18m",
    gradient: "from-crimson/35 via-gold/15 to-crimson/10",
  },
  {
    id: 2,
    title: "Voice of the Night",
    description:
      "She had a voice that could stop time. He had a past that refused to let go. Together, they wrote a story the world wasn't ready for.",
    views: "28.9K",
    duration: "3h 55m",
    gradient: "from-gold/30 via-crimson/15 to-background/40",
  },
  {
    id: 3,
    title: "Mafia Crave: Audio Edition",
    description:
      "A dangerous meeting between a ruthless Russian mafia and a strong Indian IAS officer. He craves her… and she falls for the man she should hate.",
    views: "67.3K",
    duration: "6h 44m",
    gradient: "from-crimson/45 via-crimson/15 to-gold/20",
  },
  {
    id: 4,
    title: "The Silent Storm",
    description:
      "Beneath her calm exterior raged a storm. When destiny forced their paths to cross, neither was prepared for the inevitable.",
    views: "19.4K",
    duration: "3h 10m",
    gradient: "from-gold/20 via-crimson/25 to-gold/10",
  },
];

interface AudioBooksPageProps {
  onNavigateTo: (page: string) => void;
}

export default function AudioBooksPage({ onNavigateTo }: AudioBooksPageProps) {
  const [activeTab, setActiveTab] = useState<"hindi" | "english">("hindi");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const books = activeTab === "hindi" ? hindiBooks : englishBooks;

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <motion.button
          type="button"
          data-ocid="audiobooks.back.button"
          onClick={() => onNavigateTo("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileTap={{
            scale: 0.95,
            boxShadow:
              "0 0 30px oklch(0.55 0.2 15 / 1), 0 0 60px oklch(0.55 0.2 15 / 0.6)",
          }}
          className="flex items-center gap-2 btn-crimson border transition-all duration-300 mb-12 group cursor-pointer px-5 py-2 rounded-full font-body text-sm tracking-widest uppercase"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center">
              <Headphones size={20} className="text-crimson-light" />
            </div>
          </div>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Listen to Her Stories
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Audio
            <span className="text-crimson-light italic block">Books</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Experience Vanshika&apos;s stories through the power of her voice
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          <motion.button
            type="button"
            data-ocid="audiobooks.hindi.tab"
            onClick={() => setActiveTab("hindi")}
            whileTap={{
              scale: 0.95,
              boxShadow:
                "0 0 30px oklch(0.55 0.2 15 / 1), 0 0 60px oklch(0.55 0.2 15 / 0.6)",
            }}
            className={`relative font-body text-sm tracking-widest uppercase px-8 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
              activeTab === "hindi"
                ? "btn-crimson-active scale-105"
                : "btn-crimson"
            }`}
          >
            हिंदी · Hindi
          </motion.button>
          <motion.button
            type="button"
            data-ocid="audiobooks.english.tab"
            onClick={() => setActiveTab("english")}
            whileTap={{
              scale: 0.95,
              boxShadow:
                "0 0 30px oklch(0.55 0.2 15 / 1), 0 0 60px oklch(0.55 0.2 15 / 0.6)",
            }}
            className={`relative font-body text-sm tracking-widest uppercase px-8 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
              activeTab === "english"
                ? "btn-crimson-active scale-105"
                : "btn-crimson"
            }`}
          >
            English
          </motion.button>
        </motion.div>

        {/* Books grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, idx) => (
            <motion.div
              key={`${activeTab}-${book.id}`}
              data-ocid={`audiobooks.item.${idx + 1}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-card border border-crimson/20 rounded-sm overflow-hidden cursor-pointer hover:border-crimson/60 hover:shadow-crimson transition-all duration-300"
            >
              {/* Cover area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${book.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/20" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-background/30 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-crimson/40 group-hover:border-crimson/40 transition-all duration-300">
                    <Headphones
                      size={28}
                      className="text-white drop-shadow-lg"
                    />
                  </div>
                  <span className="font-body text-xs tracking-widest uppercase text-white/70">
                    {book.duration}
                  </span>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-white/10" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full border border-white/5" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-crimson-light transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                  {book.description}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground/70">
                  <Eye size={14} className="text-crimson/60" />
                  <span className="font-body text-xs tracking-wide">
                    {book.views} views
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
