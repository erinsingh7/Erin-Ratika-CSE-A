import Reveal from './Reveal';

export default function Introduction() {
  return (
    <section className="relative bg-obsidian py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <p className="label mb-16 md:mb-24">— PROLOGUE</p>
        </Reveal>

        <div className="space-y-2 md:space-y-4">
          <Reveal delay={100}>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              EVERYONE REMEMBERS
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-bone/50">
              THE WEDDING.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              FEW REMEMBER
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-bone/50">
              HOW IT FELT.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <div className="mt-16 md:mt-24 flex items-center gap-6">
            <div className="h-px w-12 md:w-24 bg-ash" />
            <p className="font-serif italic text-2xl md:text-3xl text-ivory font-light">
              That's where I come in.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Decorative vertical text */}
      <p
        className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 label rotate-90 origin-center whitespace-nowrap"
        style={{ writingMode: 'vertical-rl' }}
      >
        WEDDING PHOTOGRAPHY — EST. 2023
      </p>
    </section>
  );
}
