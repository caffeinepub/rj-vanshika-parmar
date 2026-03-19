import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useGetAllBooks } from "../hooks/useQueries";

const FALLBACK_BOOKS = [
  {
    id: BigInt(1),
    title: "Mafia Crave",
    description:
      "A dangerous meeting between a ruthless Russian mafia and a strong Indian IAS officer turns into an unexpected love. He begins to crave her… and she falls for the man she should hate.",
    link: "https://m.webnovel.com/book/mafia-crave_32768347400005105",
  },
  {
    id: BigInt(2),
    title: "Crimson Vows",
    description:
      "She swore never to love again. He swore to make her break that promise. In a world of secrets and shadows, their souls collide with devastating consequences.",
    link: null,
  },
  {
    id: BigInt(3),
    title: "Shattered in Moonlight",
    description:
      "Two broken people. One impossible love. When the night holds more truth than the day, they must choose between safety and surrender — between walls and wings.",
    link: null,
  },
  {
    id: BigInt(4),
    title: "Velvet Thorns",
    description:
      "She ran from everything she ever wanted. He made sure she had nowhere left to run. A dark, consuming love story set against secrets that refuse to stay buried.",
    link: null,
  },
];

const COVERS = [
  "/assets/uploads/Picsart_26-03-20_03-13-42-588-1.jpg",
  "/assets/generated/book-cover-2.dim_300x450.jpg",
  "/assets/generated/book-cover-3.dim_300x450.jpg",
  "/assets/generated/book-cover-4.dim_300x450.jpg",
];

export default function BooksSection() {
  const { data: books, isLoading } = useGetAllBooks();
  const displayBooks =
    books && books.length > 0
      ? books
          .slice(0, 4)
          .map((b, i) => ({ ...b, link: FALLBACK_BOOKS[i]?.link ?? null }))
      : FALLBACK_BOOKS;

  const ocids = [
    "books.item.1",
    "books.item.2",
    "books.item.3",
    "books.item.4",
  ];

  return (
    <section id="books" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Her Stories
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Books That
            <span className="text-crimson-light italic block">Haunt You</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="space-y-4"
                data-ocid="books.loading_state"
              >
                <Skeleton className="w-full aspect-[2/3] bg-card" />
                <Skeleton className="h-6 w-3/4 bg-card" />
                <Skeleton className="h-4 w-full bg-card" />
                <Skeleton className="h-4 w-5/6 bg-card" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {displayBooks.map((book, i) => {
              const hasLink = !!(book as (typeof FALLBACK_BOOKS)[0]).link;
              const bookLink = (book as (typeof FALLBACK_BOOKS)[0]).link;
              const Wrapper = hasLink ? motion.a : motion.article;
              const wrapperProps = hasLink
                ? {
                    href: bookLink!,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <Wrapper
                  key={book.id.toString()}
                  data-ocid={ocids[i]}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  className={`group ${hasLink ? "cursor-pointer" : "cursor-default"} block no-underline`}
                  {...(wrapperProps as object)}
                >
                  {/* Book cover */}
                  <div className="relative overflow-hidden mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group-hover:shadow-crimson transition-shadow duration-500">
                    <img
                      src={COVERS[i]}
                      alt={book.title}
                      className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-crimson/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {hasLink && (
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
                    <p className="font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {book.description}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
