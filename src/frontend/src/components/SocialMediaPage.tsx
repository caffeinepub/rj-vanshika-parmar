import { motion } from "motion/react";
import {
  SiFacebook,
  SiGoodreads,
  SiInstagram,
  SiSpotify,
  SiX,
  SiYoutube,
} from "react-icons/si";

const socialPlatforms = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@rjvanshikaparmar",
    icon: SiInstagram,
    href: "#",
    ocid: "social.instagram.card",
    hoverColor:
      "group-hover:border-pink-500/60 group-hover:shadow-[0_0_24px_oklch(0.6_0.22_350/0.35)]",
    iconColor: "group-hover:text-pink-400",
    glowBg: "group-hover:bg-pink-500/5",
    badge: "Stories & Reels",
  },
  {
    id: "twitter",
    name: "X (Twitter)",
    handle: "@vanshikaparmar",
    icon: SiX,
    href: "#",
    ocid: "social.twitter.card",
    hoverColor:
      "group-hover:border-white/40 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]",
    iconColor: "group-hover:text-white",
    glowBg: "group-hover:bg-white/3",
    badge: "Thoughts & Updates",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "/rjvanshikaparmar",
    icon: SiFacebook,
    href: "#",
    ocid: "social.facebook.card",
    hoverColor:
      "group-hover:border-blue-500/60 group-hover:shadow-[0_0_24px_oklch(0.55_0.2_260/0.35)]",
    iconColor: "group-hover:text-blue-400",
    glowBg: "group-hover:bg-blue-500/5",
    badge: "Community & Events",
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "RJ Vanshika Parmar",
    icon: SiYoutube,
    href: "#",
    ocid: "social.youtube.card",
    hoverColor:
      "group-hover:border-red-500/60 group-hover:shadow-[0_0_24px_oklch(0.55_0.22_25/0.35)]",
    iconColor: "group-hover:text-red-400",
    glowBg: "group-hover:bg-red-500/5",
    badge: "Videos & Vlogs",
  },
  {
    id: "goodreads",
    name: "Goodreads",
    handle: "Vanshika Parmar",
    icon: SiGoodreads,
    href: "#",
    ocid: "social.goodreads.card",
    hoverColor:
      "group-hover:border-amber-500/60 group-hover:shadow-[0_0_24px_oklch(0.75_0.18_80/0.35)]",
    iconColor: "group-hover:text-amber-400",
    glowBg: "group-hover:bg-amber-500/5",
    badge: "Books & Reviews",
  },
  {
    id: "spotify",
    name: "Spotify",
    handle: "RJ Vanshika",
    icon: SiSpotify,
    href: "#",
    ocid: "social.spotify.card",
    hoverColor:
      "group-hover:border-green-500/60 group-hover:shadow-[0_0_24px_oklch(0.65_0.2_145/0.35)]",
    iconColor: "group-hover:text-green-400",
    glowBg: "group-hover:bg-green-500/5",
    badge: "Radio & Podcasts",
  },
];

export default function SocialMediaPage() {
  return (
    <section id="social" className="section-padding relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-crimson/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Stay Connected
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Follow the
            <span className="text-crimson-light italic block">Journey</span>
          </h2>
          <p className="font-body text-muted-foreground mt-6 text-base max-w-md mx-auto">
            Stay connected across all platforms
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.id}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={platform.ocid}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative bg-card border border-border rounded-sm p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 ${
                  platform.hoverColor
                } ${platform.glowBg}`}
              >
                {/* Icon */}
                <div
                  className={`text-3xl text-muted-foreground transition-colors duration-300 ${
                    platform.iconColor
                  }`}
                >
                  <Icon />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {platform.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {platform.handle}
                  </p>
                </div>

                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs tracking-wider uppercase text-muted-foreground/60">
                    {platform.badge}
                  </span>
                  <span className="font-body text-xs tracking-widest uppercase text-gold/70 border border-gold/30 px-3 py-1 group-hover:border-gold/60 group-hover:text-gold transition-all duration-300">
                    Follow
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-r-[24px] border-t-transparent border-r-crimson/20 group-hover:border-r-crimson/40 transition-colors duration-300" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
