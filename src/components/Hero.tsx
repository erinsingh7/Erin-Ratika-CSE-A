import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero({ onBook }: { onBook: () => void }) {
  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/18959295/pexels-photo-18959295.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gothic wedding couple in an abandoned building with arched windows"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Top labels */}
        <div className="absolute top-28 md:top-32 left-6 md:left-12">
          <p className="label animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            WEDNESDAY ADDAMS
          </p>
          <p
            className="label mt-1 animate-fade-in"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            WEDDING PHOTOGRAPHY
          </p>
        </div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <h1
            className="editorial-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            YOUR HAPPIEST
            <br />
            MOMENTS.
          </h1>
          <h1
            className="editorial-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] text-bone/80 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            MY DARKEST ART.
          </h1>
        </div>

        {/* Supporting copy */}
        <p
          className="font-serif italic text-lg md:text-xl text-bone/70 mt-8 max-w-xl animate-fade-up"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          "I photograph love, devotion, chaos, and other unfortunate displays of human
          affection."
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: '1.3s', opacity: 0 }}
        >
          <button onClick={scrollToPortfolio} className="btn-ghost group">
            EXPLORE THE EVIDENCE
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
          <button onClick={onBook} className="btn-solid group">
            REQUEST A DATE
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Bottom metadata */}
        <div
          className="flex items-center gap-6 md:gap-10 mt-12 animate-fade-in"
          style={{ animationDelay: '1.6s', opacity: 0 }}
        >
          <p className="label">NAGPUR / WORLDWIDE</p>
          <span className="h-3 w-px bg-ash" />
          <p className="label">WEDDINGS • EDITORIAL • PORTRAITS</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1.8s', opacity: 0 }}
      >
        <p className="label text-[9px]">SCROLL TO DESCEND</p>
        <ArrowDown size={14} className="text-fog animate-bounce" />
      </div>
    </section>
  );
}
