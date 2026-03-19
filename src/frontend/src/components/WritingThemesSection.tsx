import { BookOpen, Feather, Headphones, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const themes = [
  {
    icon: BookOpen,
    title: "Novels",
    description:
      "From gripping fiction to sweeping narratives, every novel is a new world waiting to be discovered — vivid, layered, and unforgettable.",
    color: "text-crimson-light",
  },
  {
    icon: Feather,
    title: "Poetry",
    description:
      "Words that breathe and ache — poetry that captures what the heart cannot say out loud, one line at a time.",
    color: "text-gold",
  },
  {
    icon: Headphones,
    title: "Audio Books",
    description:
      "Stories brought to life through voice — immersive audio experiences that let you feel every word, every emotion.",
    color: "text-crimson-light",
  },
  {
    icon: Sparkles,
    title: "Emotional Drama",
    description:
      "Layered characters, raw emotions, and unexpected turns that make every page impossible to put down.",
    color: "text-gold",
  },
];

export default function WritingThemesSection() {
  return (
    <section
      id="writing"
      className="section-padding relative bg-card overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Her Craft
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Themes of the
            <span className="text-crimson-light italic block">
              Heart & Shadow
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative bg-background border border-border hover:border-crimson/40 p-8 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <theme.icon
                size={28}
                className={`${theme.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
              />

              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {theme.title}
              </h3>

              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {theme.description}
              </p>

              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-crimson/20 group-hover:border-crimson/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
