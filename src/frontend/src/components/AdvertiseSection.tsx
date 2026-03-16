import { Mail } from "lucide-react";
import { motion } from "motion/react";

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
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Partner With Us
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Advertise
            <span className="text-crimson-light italic block">With Us</span>
          </h2>
          <p className="font-display text-base text-gold/70 italic mt-3">
            Partner with Night Rose Publications
          </p>
          <p className="font-body text-muted-foreground mt-6 text-base max-w-2xl mx-auto leading-relaxed">
            Reach thousands of dark romance readers and radio listeners. Night
            Rose Publications offers unique advertising opportunities for brands
            that resonate with our audience — passionate, literary, and deeply
            engaged.
          </p>
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
              For advertising enquiries, reach out at:{" "}
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
