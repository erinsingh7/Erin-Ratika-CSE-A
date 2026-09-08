import Reveal from './Reveal';

const stats = [
  { value: '127+', label: 'WEDDINGS' },
  { value: '18', label: 'COUNTRIES' },
  { value: '42K+', label: 'PHOTOGRAPHS DELIVERED' },
  { value: '0', label: 'FORCED SMILES' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-obsidian py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Portrait */}
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/11261731/pexels-photo-11261731.jpeg?auto=compress&cs=tinysrgb&w=940"
                  alt="Portrait of Wednesday Addams"
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover grayscale"
                />
                <div className="absolute inset-0 bg-obsidian/20" />
              </div>
              {/* Frame label */}
              <div className="absolute -bottom-4 left-0 right-0 flex justify-between items-end px-4">
                <p className="label text-[8px]">SELF-PORTRAIT / 2026</p>
                <p className="label text-[8px]">N°042</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="label mb-6">THE PHOTOGRAPHER</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl mb-2">
                MEET
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-bone/50 mb-12">
                YOUR PHOTOGRAPHER.
              </h2>
            </Reveal>

            <Reveal delay={250}>
              <div className="space-y-6 font-serif text-lg md:text-xl text-bone/60 leading-relaxed font-light">
                <p>
                  Wednesday Addams has always had an appreciation for life's more permanent
                  moments.
                </p>
                <p>
                  Weddings, funerals, dramatic family gatherings — she understands them all.
                </p>
                <p>
                  With an eye for composition and an alarming tolerance for emotional displays,
                  Wednesday photographs weddings exactly as they deserve to be remembered:
                </p>
                <p className="text-ivory italic">
                  beautifully, honestly, and slightly ominously.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={350}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ash/30 mt-16 border border-ash/30">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-obsidian p-6 text-center">
                    <p className="font-serif text-3xl md:text-4xl text-ivory font-light mb-2">
                      {stat.value}
                    </p>
                    <p className="label text-[8px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
