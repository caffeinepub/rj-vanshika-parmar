import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Eye,
  Feather,
  Play,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface BlogsPageProps {
  onNavigateTo: (page: string) => void;
}

type Tab = "blogs" | "videos" | "poems";

const blogPosts = [
  {
    title: "The Night I Found My Voice",
    date: "March 15, 2026",
    excerpt:
      "It wasn't on a grand stage or in front of thousands. It was a quiet evening, a microphone, and the terrifying realization that my voice could carry stories that mattered…",
    readTime: "5 min read",
  },
  {
    title: "Ventriloquism: More Than a Trick",
    date: "February 28, 2026",
    excerpt:
      "People often ask me what it feels like to give life to a puppet. The truth is, it's the puppet that gives something back to me — a kind of freedom you can't find anywhere else…",
    readTime: "7 min read",
  },
  {
    title: "Writing Mafia Crave: Behind the Story",
    date: "January 10, 2026",
    excerpt:
      "Every story has a moment of birth. For Mafia Crave, it was a dream — a woman standing fearless before a man who had never known fear. That image refused to leave me…",
    readTime: "6 min read",
  },
];

const videos = [
  {
    title: "Live Ventriloquism Show — Ahmedabad",
    duration: "12:34",
    views: "4.2K",
  },
  {
    title: "Voice Acting Tutorial: Emotions in Audio Books",
    duration: "8:20",
    views: "2.8K",
  },
  {
    title: "Reading from Mafia Crave — Chapter One",
    duration: "15:07",
    views: "6.1K",
  },
];

const poems = [
  {
    title: "रात की गुलाब / Rose of the Night",
    lines: [
      "वो रात के अँधेरे में खिलती है,",
      "जहाँ कोई देखता नहीं, वहाँ मिलती है।",
      "उसकी खुशबू कहानी बन जाती है,",
      "हर काँटे में एक जिंदगी छुप जाती है।",
    ],
  },
  {
    title: "Silence Between Words",
    lines: [
      "There is a language",
      "that lives between sentences —",
      "a breath held too long,",
      "a name spoken only once.",
    ],
  },
  {
    title: "The Voice That Stayed",
    lines: [
      "Long after the microphone goes dark,",
      "the echo finds the hollow of the heart,",
      "settles there, warm and aching,",
      "like a story that never finished being told.",
    ],
  },
];

export default function BlogsPage({ onNavigateTo }: BlogsPageProps) {
  const [activeTab, setActiveTab] = useState<Tab>("blogs");

  return (
    <main className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Back button */}
        <motion.button
          type="button"
          data-ocid="blogs.back.button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => onNavigateTo("home")}
          className="flex items-center gap-2 btn-crimson px-4 py-2 rounded-full border mb-10 text-xs tracking-widest uppercase font-body transition-all"
        >
          <ArrowLeft size={14} />
          Back to Home
        </motion.button>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Her World · Her Words
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
            Explore
          </h1>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-crimson-light italic mb-8">
            Her World
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <span className="text-gold text-lg">✦</span>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          <button
            type="button"
            data-ocid="blogs.blogs.tab"
            onClick={() => setActiveTab("blogs")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border font-body text-xs tracking-widest uppercase transition-all ${
              activeTab === "blogs" ? "btn-crimson-active" : "btn-crimson"
            }`}
          >
            <BookOpen size={13} />
            Blog Posts
          </button>
          <button
            type="button"
            data-ocid="blogs.videos.tab"
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border font-body text-xs tracking-widest uppercase transition-all ${
              activeTab === "videos" ? "btn-crimson-active" : "btn-crimson"
            }`}
          >
            <Play size={13} />
            Videos
          </button>
          <button
            type="button"
            data-ocid="blogs.poems.tab"
            onClick={() => setActiveTab("poems")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border font-body text-xs tracking-widest uppercase transition-all ${
              activeTab === "poems" ? "btn-crimson-active" : "btn-crimson"
            }`}
          >
            <Feather size={13} />
            Poems
          </button>
        </motion.div>

        {/* Blog Posts Tab */}
        {activeTab === "blogs" && (
          <motion.div
            key="blogs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8"
            data-ocid="blogs.list"
          >
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`blogs.item.${i + 1}`}
                className="bg-card border border-crimson/20 rounded-2xl p-8 hover:border-crimson/50 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.45_0.22_15/0.15)] group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 font-body text-xs text-gold/70">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-crimson-light transition-colors">
                  {post.title}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  data-ocid={`blogs.read.button.${i + 1}`}
                  className="btn-crimson px-5 py-2 rounded-full border font-body text-xs tracking-widest uppercase transition-all"
                >
                  Read More →
                </button>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="blogs.videos.list"
          >
            {videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`blogs.video.item.${i + 1}`}
                className="bg-card border border-crimson/20 rounded-2xl overflow-hidden hover:border-crimson/50 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.45_0.22_15/0.15)] group cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div className="relative bg-gradient-to-br from-crimson/20 via-background to-gold/10 h-44 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 rounded-full bg-crimson/80 flex items-center justify-center shadow-[0_0_20px_oklch(0.45_0.22_15/0.5)] group-hover:bg-crimson transition-colors"
                    >
                      <Play
                        size={22}
                        className="text-white ml-1"
                        fill="white"
                      />
                    </motion.div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-background/80 text-foreground font-body text-xs px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-crimson-light transition-colors">
                    {video.title}
                  </h3>
                  <span className="flex items-center gap-1.5 font-body text-xs text-gold/70">
                    <Eye size={12} />
                    {video.views} views
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Poems Tab */}
        {activeTab === "poems" && (
          <motion.div
            key="poems"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="blogs.poems.list"
          >
            {poems.map((poem, i) => (
              <motion.div
                key={poem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                data-ocid={`blogs.poem.item.${i + 1}`}
                className="bg-card border border-gold/20 rounded-2xl p-8 text-center hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.75_0.15_75/0.1)] group"
              >
                <div className="text-gold text-2xl mb-6">✦</div>
                <h3 className="font-display text-xl font-bold text-crimson-light mb-6 group-hover:text-gold transition-colors">
                  {poem.title}
                </h3>
                <div className="space-y-2">
                  {poem.lines.map((line) => (
                    <p
                      key={line}
                      className="font-display italic text-muted-foreground text-base leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="text-gold/40 text-xl mt-6">—</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Coming soon note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center font-body text-xs tracking-widest uppercase text-muted-foreground mt-16"
        >
          More coming soon · Stay tuned ✦
        </motion.p>
      </div>
    </main>
  );
}
