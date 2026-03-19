import { ArrowLeft, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

interface BooksLanguagePageProps {
  onNavigateTo: (page: string) => void;
}

export default function BooksLanguagePage({
  onNavigateTo,
}: BooksLanguagePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <motion.button
          type="button"
          data-ocid="books_language.back.button"
          onClick={() => onNavigateTo("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300 mb-12 group bg-transparent border-none cursor-pointer p-0 font-body text-sm tracking-widest uppercase"
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
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Her Library
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            Books by
            <span className="text-crimson-light italic block">Language</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Explore Vanshika Parmar&apos;s stories in the language you love
          </p>
        </motion.div>

        {/* Language cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hindi Card */}
          <motion.button
            type="button"
            data-ocid="books_language.hindi.button"
            onClick={() => onNavigateTo("hindiBooks")}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-card border border-crimson/30 rounded-sm overflow-hidden cursor-pointer text-left w-full p-0 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-crimson transition-all duration-500"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-crimson/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all duration-500" />

            <div className="relative p-10 md:p-12">
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-sm bg-crimson/20 border border-crimson/40 flex items-center justify-center group-hover:bg-crimson/30 transition-colors duration-300">
                  <BookOpen size={22} className="text-crimson-light" />
                </div>
                <span className="font-body text-4xl text-gold/30 group-hover:text-gold/50 transition-colors duration-500">
                  हिं
                </span>
              </div>

              <div className="w-10 h-px bg-crimson mb-6" />

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-crimson-light transition-colors duration-300">
                Hindi Books
              </h2>
              <p className="font-body text-lg text-gold mb-2">हिंदी किताबें</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
                दिल को छू लेने वाली कहानियाँ — हिंदी में पढ़ें
              </p>

              <div className="flex items-center gap-2 text-gold group-hover:gap-4 transition-all duration-300">
                <span className="font-body text-sm tracking-widest uppercase">
                  Explore
                </span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </motion.button>

          {/* English Card */}
          <motion.button
            type="button"
            data-ocid="books_language.english.button"
            onClick={() => onNavigateTo("englishBooks")}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-card border border-gold/20 rounded-sm overflow-hidden cursor-pointer text-left w-full p-0 shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(184,142,69,0.2)] transition-all duration-500"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/5 rounded-full blur-2xl group-hover:bg-crimson/10 transition-all duration-500" />

            <div className="relative p-10 md:p-12">
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <BookOpen size={22} className="text-gold" />
                </div>
                <span className="font-body text-4xl text-crimson/20 group-hover:text-crimson/40 transition-colors duration-500">
                  En
                </span>
              </div>

              <div className="w-10 h-px bg-gold mb-6" />

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                English Books
              </h2>
              <p className="font-body text-lg text-crimson-light mb-2">
                Dark Romance Novels
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8">
                Stories that haunt you long after the last page
              </p>

              <div className="flex items-center gap-2 text-gold group-hover:gap-4 transition-all duration-300">
                <span className="font-body text-sm tracking-widest uppercase">
                  Explore
                </span>
                <span className="text-lg">→</span>
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    </main>
  );
}
