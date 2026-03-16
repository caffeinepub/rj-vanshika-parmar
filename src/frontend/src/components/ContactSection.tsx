import { motion } from "motion/react";
import { SiGoodreads, SiInstagram, SiX } from "react-icons/si";

const socials = [
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/rjvanshikaparmar?igsh=YXozeDh4bzkwcWgx",
    ocid: "contact.instagram.button",
    color: "hover:text-pink-400",
  },
  {
    icon: SiX,
    label: "Twitter / X",
    href: "https://x.com",
    ocid: "contact.twitter.button",
    color: "hover:text-foreground",
  },
  {
    icon: SiGoodreads,
    label: "Goodreads",
    href: "https://goodreads.com",
    ocid: "contact.goodreads.button",
    color: "hover:text-amber-400",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-crimson/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Stay Connected
          </p>

          {/* Heading */}
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Connect with
            <span className="text-crimson-light italic block">Vanshika</span>
          </h2>

          {/* Invite text */}
          <p className="font-body text-base leading-relaxed text-muted-foreground mb-12 max-w-xl mx-auto">
            Follow her journey through the airwaves and the written word. Be the
            first to know about new stories, radio shows, and glimpses behind
            the shadows.
          </p>

          {/* Social buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={social.ocid}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-3 px-8 py-4 bg-card border border-border ${social.color} text-muted-foreground transition-all duration-300 hover:border-crimson/40 group font-body text-sm tracking-widest uppercase`}
              >
                <social.icon
                  size={16}
                  className="transition-transform group-hover:scale-110"
                />
                {social.label}
              </motion.a>
            ))}
          </div>

          {/* Closing quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-border"
          >
            <p className="font-display text-xl italic text-gold/70">
              &ldquo;Every story begins in the dark. Come find me there.&rdquo;
            </p>
            <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-3">
              — Vanshika Parmar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
