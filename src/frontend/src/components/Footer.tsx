export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Top row: brand + quick links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10 pb-10 border-b border-border">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-bold text-foreground mb-1">
              <span className="text-crimson-light">Night Rose</span>{" "}
              Publications
            </p>
            <p className="font-body text-xs text-muted-foreground italic">
              RJ Vanshika Parmar
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            <a
              href="#about"
              data-ocid="footer.about.link"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#books"
              data-ocid="footer.books.link"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              Books
            </a>
            <a
              href="#advertise"
              data-ocid="footer.advertise.link"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              Advertise
            </a>
            <a
              href="#contact"
              data-ocid="footer.contact.link"
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Decorative */}
          <div className="flex items-center gap-2 text-crimson/40 text-sm">
            <span>✦</span>
            <span>🌹</span>
            <span>✦</span>
          </div>
        </div>

        {/* Copyright block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-body text-xs text-muted-foreground">
              © {year} Night Rose Publications &amp; RJ Vanshika Parmar. All
              Rights Reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground/60 mt-1">
              Website by Night Rose Publications | Unauthorized reproduction of
              content is strictly prohibited.
            </p>
          </div>

          <p className="font-body text-xs text-muted-foreground">
            Built with <span className="text-crimson-light">♥</span> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
