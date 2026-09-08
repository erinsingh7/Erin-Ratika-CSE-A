import { Instagram, Mail } from 'lucide-react';

const footerNav = [
  { label: 'WORK', target: 'portfolio' },
  { label: 'STORIES', target: 'story' },
  { label: 'PACKAGES', target: 'packages' },
  { label: 'AVAILABILITY', target: 'availability' },
  { label: 'ABOUT', target: 'about' },
];

export default function Footer({ onBook }: { onBook: () => void }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian border-t border-ash/30 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light tracking-wide mb-2">
              WEDNESDAY ADDAMS
            </h3>
            <p className="label mb-6">WEDDING PHOTOGRAPHY</p>
            <p className="font-serif italic text-bone/40 text-sm max-w-xs">
              Photographing love, devotion, chaos, and other unfortunate displays of human
              affection.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label mb-6">NAVIGATE</p>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={onBook} className="nav-link">
                  BOOK ME
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-6">CONNECT</p>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-bone/60 hover:text-ivory transition-colors group"
              >
                <Instagram size={16} strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-widest-xl">INSTAGRAM</span>
              </a>
              <a
                href="mailto:wednesday@addamsphotography.com"
                className="flex items-center gap-3 text-bone/60 hover:text-ivory transition-colors group"
              >
                <Mail size={16} strokeWidth={1.5} />
                <span className="text-[11px] uppercase tracking-widest-xl">EMAIL</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-bone/60 hover:text-ivory transition-colors group"
              >
                <span className="text-[11px] uppercase tracking-widest-xl">+91 98765 43210</span>
              </a>
            </div>
            <p className="label mt-6">NAGPUR / WORLDWIDE</p>
          </div>
        </div>

        {/* Hairline */}
        <div className="hairline mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="label text-[9px]">© 2026 WEDNESDAY ADDAMS PHOTOGRAPHY</p>
          <p className="font-serif italic text-bone/30 text-xs">
            PHOTOGRAPHED WITH LOVE. PROCESSED WITHOUT EMOTION.
          </p>
        </div>
      </div>
    </footer>
  );
}
