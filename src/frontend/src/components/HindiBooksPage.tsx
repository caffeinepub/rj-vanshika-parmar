import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

interface HindiBooksPageProps {
  onNavigateTo: (page: string) => void;
}

const hindiBooks = [
  {
    id: 1,
    title: "Mafia Crave",
    hindiTitle: "माफिया क्रेव",
    cover: "/assets/uploads/Picsart_26-03-20_03-13-42-588-1.jpg",
    description:
      "एक खतरनाक मुलाकात, एक रूसी माफिया और एक भारतीय IAS अफसर के बीच... जो बदल गई उनकी ज़िंदगी हमेशा के लिए।",
    link: null as string | null,
    comingSoon: true,
  },
  {
    id: 2,
    title: "क्रिमसन व्रत",
    hindiTitle: "Crimson Vows",
    cover: null as string | null,
    description: "उसने प्यार न करने की कसम खाई थी। उसने वो कसम तुड़वाने की ठान ली थी।",
    link: null as string | null,
    comingSoon: true,
  },
  {
    id: 3,
    title: "चांदनी में टूटे ख्वाब",
    hindiTitle: "Shattered in Moonlight",
    cover: null as string | null,
    description: "दो टूटी हुई आत्माएं... एक असंभव प्रेम कहानी।",
    link: null as string | null,
    comingSoon: true,
  },
];

export default function HindiBooksPage({ onNavigateTo }: HindiBooksPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <motion.button
          type="button"
          data-ocid="hindi_books.back.button"
          onClick={() => onNavigateTo("booksLanguage")}
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
          Back to Languages
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            हिंदी कहानियाँ
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
            Hindi Books
          </h1>
          <p className="font-display text-2xl md:text-3xl text-crimson-light italic mb-4">
            हिंदी किताबें
          </p>
          <p className="font-body text-muted-foreground">
            Vanshika Parmar की हिंदी में लिखी गई कहानियाँ
          </p>
        </motion.div>

        {/* Books grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {hindiBooks.map((book, i) => (
            <motion.article
              key={book.id}
              data-ocid={`hindi_books.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.2 }}
              whileHover={{ y: -8 }}
              className="group cursor-default"
            >
              {/* Book cover */}
              <div className="relative overflow-hidden mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group-hover:shadow-crimson transition-shadow duration-500">
                {book.cover ? (
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full aspect-[2/3] bg-gradient-to-br from-crimson/20 via-card to-card flex flex-col items-center justify-center p-6 border border-crimson/20">
                    <div className="w-8 h-px bg-crimson mb-4" />
                    <p className="font-display text-xl font-bold text-foreground text-center leading-snug">
                      {book.title}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-2 text-center">
                      {book.hindiTitle}
                    </p>
                    <div className="w-8 h-px bg-crimson mt-4" />
                  </div>
                )}
                {book.comingSoon && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-gold text-background text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-crimson/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Book info */}
              <div className="relative">
                <div className="w-8 h-px bg-crimson mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-crimson-light transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="font-body text-xs text-gold mb-3">
                  {book.hindiTitle}
                </p>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {book.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
