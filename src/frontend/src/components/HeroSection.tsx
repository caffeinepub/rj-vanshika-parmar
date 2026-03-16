import { motion } from "motion/react";

export default function HeroSection() {
  const handleExplore = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x800.jpg')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Decorative corner petals */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-crimson/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-crimson/8 to-transparent rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-24 h-px bg-crimson mx-auto mb-8"
        />

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold via-crimson to-gold opacity-80 blur-sm scale-105" />
            {/* Portrait container */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-[0_0_30px_rgba(220,20,60,0.5)]">
              <img
                src="/assets/uploads/Untitled200_20260317035152-1.png"
                alt="RJ Vanshika Parmar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Subtitle label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6"
        >
          Radio Jockey · Dark Romance Author
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight mb-6"
        >
          <span className="block">RJ Vanshika</span>
          <span className="block text-crimson-light italic">Parmar</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-display text-xl md:text-2xl italic text-gold/80 mb-12 max-w-2xl mx-auto"
        >
          &ldquo;Where darkness meets desire, and secrets rewrite love.&rdquo;
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleExplore}
          data-ocid="hero.primary_button"
          className="inline-flex items-center gap-3 px-10 py-4 bg-crimson text-foreground font-body text-sm tracking-widest uppercase hover:bg-crimson-light transition-colors duration-300 shadow-crimson group"
        >
          Explore Her World
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </motion.button>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-24 h-px bg-crimson mx-auto mt-16"
        />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-px h-8 bg-gradient-to-b from-crimson to-transparent"
        />
      </motion.div>
    </section>
  );
}
