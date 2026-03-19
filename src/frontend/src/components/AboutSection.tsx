import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rose-divider mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-gold px-4">
            The Storyteller
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              A Voice in the
              <span className="block text-crimson-light italic">Shadows</span>
            </h2>

            <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
              Vanshika Parmar is a voice artist and writer who brings stories to
              life in the most intimate way — through words that are felt as
              deeply as they are heard.
            </p>

            <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
              As an author, she writes across many forms — novels, short
              stories, and poetry — weaving together emotion, drama, and the
              quiet truths of the human heart. Every piece she creates is a
              journey into a world you won't want to leave.
            </p>

            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Whether it's a verse that captures a fleeting feeling or a novel
              that keeps you awake through the night, Vanshika writes with
              honesty, depth, and a voice that is entirely her own.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              {[
                { value: "100+", label: "Stories Written" },
                { value: "4+", label: "Novels" },
                { value: "10K+", label: "Readers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-crimson-light">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex justify-center"
          >
            {/* Outer decorative rings */}
            <div className="relative">
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, oklch(0.45 0.18 15 / 0.25) 0%, transparent 70%)",
                  transform: "scale(1.15)",
                }}
              />
              {/* Gold outer border */}
              <div className="absolute -inset-3 border border-gold/30 rounded-full pointer-events-none" />
              {/* Crimson inner border */}
              <div className="absolute -inset-1.5 border border-crimson/50 rounded-full pointer-events-none" />

              {/* Portrait image */}
              <img
                src="/assets/uploads/Untitled200_20260317035152-1.png"
                alt="Vanshika Parmar"
                className="relative w-72 h-72 object-cover rounded-full"
                style={{
                  boxShadow:
                    "0 0 40px oklch(0.45 0.18 15 / 0.35), 0 20px 60px rgba(0,0,0,0.6)",
                }}
              />

              {/* Name badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card border border-gold/30 px-5 py-2 text-center whitespace-nowrap">
                <p className="font-display text-sm text-gold tracking-widest uppercase">
                  Vanshika Parmar
                </p>
              </div>
            </div>

            {/* Background decorative text */}
            <div className="absolute -z-10 inset-0 flex items-center justify-center opacity-5">
              <span className="font-display text-[12rem] font-black text-crimson select-none">
                V
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
