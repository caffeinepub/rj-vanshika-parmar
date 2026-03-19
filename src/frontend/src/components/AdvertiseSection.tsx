import { BookOpen, Mail, Mic, Pen, Radio, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const services = [
  { icon: Mic, label: "Voice Dubbing" },
  { icon: Users, label: "Live Shows" },
  { icon: Sparkles, label: "Ventriloquism Shows" },
  { icon: Radio, label: "Voice Over Projects" },
  { icon: Pen, label: "Custom Written Novels" },
  { icon: BookOpen, label: "And Many More..." },
];

export default function AdvertiseSection() {
  return (
    <section
      id="advertise"
      className="section-padding relative bg-card overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-gold/4 via-transparent to-crimson/4 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Collaborate
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Partner
            <span className="text-crimson-light italic block">With Us</span>
          </h2>
          <p className="font-display text-base text-gold/70 italic mt-3">
            Night Rose Publications
          </p>
          <p className="font-body text-muted-foreground mt-6 text-base max-w-2xl mx-auto leading-relaxed">
            Reach thousands of passionate readers and listeners. Night Rose
            Publications offers unique opportunities for brands that resonate
            with a literary, emotionally engaged audience — through novels,
            poetry, and audio books.
          </p>
        </motion.div>

        {/* RJ Vanshika Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold text-center mb-8">
            RJ Vanshika is Open For
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 border border-crimson/20 bg-background px-5 py-4 hover:border-gold/40 transition-colors duration-300"
              >
                <s.icon size={16} className="text-gold shrink-0" />
                <span className="font-body text-sm text-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact prompt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 border border-gold/30 bg-background px-8 py-4">
            <Mail size={16} className="text-gold" />
            <p className="font-body text-sm text-muted-foreground">
              For enquiries, reach out at:{" "}
              <a
                href="mailto:nightrosepublications@email.com"
                className="text-gold hover:text-gold/80 transition-colors duration-200"
              >
                nightrosepublications@email.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
