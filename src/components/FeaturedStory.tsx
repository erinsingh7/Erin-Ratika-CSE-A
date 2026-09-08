import { featuredStory } from '@/data/story';
import Reveal from './Reveal';

export default function FeaturedStory() {
  return (
    <section id="story" className="relative bg-obsidian">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={featuredStory.heroImage}
          alt={featuredStory.heroAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6">
          <Reveal>
            <p className="label mb-4">FEATURED WEDDING / CASE STUDY</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-center text-balance">
              {featuredStory.title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif italic text-bone/60 text-lg md:text-xl mt-6 text-center max-w-2xl">
              {featuredStory.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Story sections */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        {featuredStory.sections.map((section, i) => (
          <div
            key={section.label}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32 last:mb-0 ${
              i % 2 === 1 ? 'md:[direction:rtl]' : ''
            }`}
          >
            {/* Image */}
            <Reveal className="[direction:ltr]">
              <div className="relative overflow-hidden group">
                <img
                  src={section.image}
                  alt={section.alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-obsidian/10 group-hover:bg-obsidian/0 transition-all duration-500" />
                <span className="absolute top-4 left-4 label text-[8px] text-bone/50">
                  FRAME {section.label}
                </span>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={150} className="[direction:ltr]">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif text-5xl md:text-6xl text-bone/20 font-light">
                    {section.label}
                  </span>
                  <div className="h-px flex-1 bg-ash/40" />
                </div>
                <h3 className="editorial-heading text-3xl md:text-5xl mb-6">{section.title}</h3>
                <p className="font-serif text-lg md:text-xl text-bone/60 leading-relaxed font-light">
                  {section.description}
                </p>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
