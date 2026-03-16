import { Button } from "@/components/ui/button";
import { Mail, Monitor, Share2 } from "lucide-react";
import { motion } from "motion/react";

const packages = [
  {
    id: "website",
    icon: Monitor,
    title: "Website Feature",
    ocid: "advertise.website.card",
    enquireOcid: "advertise.enquire.button.1",
    features: [
      "Banner placement on key pages",
      "Author spotlight feature",
      "Dedicated book review feature",
      "Homepage hero mention",
    ],
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Amplification",
    ocid: "advertise.social.card",
    enquireOcid: "advertise.enquire.button.2",
    featured: true,
    features: [
      "Sponsored posts across all platforms",
      "Instagram & Facebook story features",
      "Reels & short-form video content",
      "Cross-platform campaign management",
    ],
  },
  {
    id: "newsletter",
    icon: Mail,
    title: "Newsletter Spotlight",
    ocid: "advertise.newsletter.card",
    enquireOcid: "advertise.enquire.button.3",
    features: [
      "Dedicated email feature",
      "Curated mentions to subscribers",
      "Exclusive reader promotions",
      "Monthly digest placement",
    ],
  },
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

        {/* Package cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                data-ocid={pkg.ocid}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative bg-background border rounded-sm p-8 flex flex-col gap-6 ${
                  pkg.featured
                    ? "border-gold/50 shadow-[0_0_30px_oklch(0.75_0.18_80/0.15)]"
                    : "border-border"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background font-body text-xs tracking-widest uppercase px-4 py-1">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center border ${
                    pkg.featured
                      ? "border-gold/50 text-gold"
                      : "border-crimson/30 text-crimson-light"
                  }`}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {pkg.title}
                  </h3>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-crimson-light mt-0.5 text-xs">
                        ✦
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  data-ocid={pkg.enquireOcid}
                  variant={pkg.featured ? "default" : "outline"}
                  className={`w-full tracking-widest uppercase text-xs ${
                    pkg.featured
                      ? "bg-gold text-background hover:bg-gold/90 border-gold"
                      : "border-crimson/40 text-crimson-light hover:bg-crimson/10 hover:border-crimson/60"
                  }`}
                >
                  Enquire Now
                </Button>
              </motion.div>
            );
          })}
        </div>

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
