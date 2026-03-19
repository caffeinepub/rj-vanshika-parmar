import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

interface EnglishBooksPageProps {
  onNavigateTo: (page: string) => void;
}

const englishBooks = [
  {
    id: 1,
    title: "Mafia Crave",
    cover: "/assets/uploads/Picsart_26-03-20_03-13-42-588-1.jpg",
    description:
      "A dangerous meeting between a ruthless Russian mafia and a strong Indian IAS officer turns into an unexpected love. He begins to crave her… and she falls for the man she should hate.",
    link: "https://m.webnovel.com/book/mafia-crave_32768347400005105",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Crimson Vows",
    cover: null as string | null,
    description:
      "She swore never to love again. He swore to make her break that promise. In a world of secrets and shadows, their souls collide with devastating consequences.",
    link: null as string | null,
    comingSoon: true,
  },
  {
    id: 3,
    title: "Velvet Thorns",
    cover: null as string | null,
    description:
      "She ran from everything she ever wanted. He made sure she had nowhere left to run. A dark, consuming love story set against secrets that refuse to stay buried.",
    link: null as string | null,
    comingSoon: true,
  },
];

export default function EnglishBooksPage({
  onNavigateTo,
}: EnglishBooksPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <motion.button
          type="button"
          data-ocid="english_books.back.button"
          onClick={() => onNavigateTo("booksLanguage")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300 mb-12 group bg-transparent border-none cursor-pointer p-0 font-body text-sm tracking-widest uppercase"
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
            Dark Romance Novels
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
            English
            <span className="text-crimson-light italic block">Books</span>
          </h1>
          <p className="font-body text-muted-foreground">
            Vanshika Parmar's English dark romance novels
          </p>
        </motion.div>

        {/* Books grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {englishBooks.map((book, i) => {
            const Wrapper = book.link ? motion.a : motion.article;
            const wrapperProps = book.link
              ? {
                  href: book.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={book.id}
                data-ocid={`english_books.item.${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12 + 0.2 }}
                whileHover={{ y: -8 }}
                className={`group ${book.link ? "cursor-pointer" : "cursor-default"} block no-underline`}
                {...(wrapperProps as object)}
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
                    <div className="w-full aspect-[2/3] bg-gradient-to-br from-crimson/10 via-card to-card flex flex-col items-center justify-center p-6 border border-crimson/20">
                      <div className="w-8 h-px bg-gold mb-4" />
                      <p className="font-display text-xl font-bold text-foreground text-center leading-snug">
                        {book.title}
                      </p>
                      <p className="font-body text-xs text-crimson-light mt-2 text-center uppercase tracking-widest">
                        Dark Romance
                      </p>
                      <div className="w-8 h-px bg-gold mt-4" />
                    </div>
                  )}
                  {/* Coming soon badge */}
                  {book.comingSoon && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gold text-background text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm shadow-lg">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {book.link && (
                    <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-crimson text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-sm shadow-lg">
                        Read Now
                      </span>
                    </div>
                  )}
                </div>

                {/* Book info */}
                <div className="relative">
                  <div className="w-8 h-px bg-crimson mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-crimson-light transition-colors duration-300">
                    {book.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {book.description}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </main>
  );
}
