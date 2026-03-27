import { Skeleton } from "@/components/ui/skeleton";
import { Headphones } from "lucide-react";
import { motion } from "motion/react";
import { useGetCompanyInfo } from "../hooks/useQueries";

const FALLBACK_DESCRIPTION =
  "Night Rose Publications is the creative home of interactive novel fiction. Founded by Vanshika Parmar, the company is dedicated to publishing stories that dare to explore the depths of human emotion — tales of passion, danger, heartbreak, and redemption. We believe every great love story hides a shadow.";

export default function NightRoseSection() {
  const { data: companyInfo, isLoading } = useGetCompanyInfo();

  const description = companyInfo?.description?.trim()
    ? companyInfo.description
    : FALLBACK_DESCRIPTION;

  return (
    <section
      id="nightrose"
      className="section-padding relative bg-card overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo with mist effect */}
          <div className="inline-flex items-center justify-center mb-10">
            <div className="relative inline-flex items-center justify-center">
              {/* Outer wide mist */}
              <div className="absolute rounded-full blur-3xl bg-white/20 scale-[2.2] pointer-events-none inset-0" />
              {/* Mid mist layer */}
              <div className="absolute rounded-full blur-2xl bg-white/15 scale-[1.7] pointer-events-none inset-0" />
              {/* Inner soft silver glow */}
              <div className="absolute rounded-full blur-xl bg-white/20 scale-[1.4] pointer-events-none inset-0" />
              {/* Gold accent haze */}
              <div className="absolute rounded-full blur-2xl bg-amber-200/15 scale-[1.5] pointer-events-none inset-0" />
              {/* Close silver shimmer */}
              <div className="absolute rounded-full blur-md bg-white/10 scale-[1.15] pointer-events-none inset-0" />
              <img
                src="/assets/uploads/1774642316477-019d30ed-497b-740a-b329-5e79adc37f40-1.png"
                alt="Night Rose Publications"
                className="relative w-72 h-72 object-contain"
              />
            </div>
          </div>

          {/* Label */}
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Publishing House
          </p>

          {/* Name */}
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">
            Night Rose
          </h2>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-crimson-light italic mb-12">
            Publications
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px bg-gold/40" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-16 h-px bg-gold/40" />
          </div>

          {/* Description */}
          {isLoading ? (
            <div
              className="space-y-3 max-w-2xl mx-auto"
              data-ocid="nightrose.loading_state"
            >
              <Skeleton className="h-5 w-full bg-background" />
              <Skeleton className="h-5 w-5/6 bg-background mx-auto" />
              <Skeleton className="h-5 w-4/5 bg-background mx-auto" />
            </div>
          ) : (
            <p className="font-body text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Core values */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Headphones size={28} className="text-crimson-light" />
              </div>
              <div className="font-body text-xs tracking-widest uppercase text-gold/70">
                Audio Books
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📖</div>
              <div className="font-body text-xs tracking-widest uppercase text-gold/70">
                Authentic Stories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-body text-xs tracking-widest uppercase text-gold/70">
                Emotional Depth
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
