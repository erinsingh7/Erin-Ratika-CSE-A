import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative bg-obsidian py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/775667/pexels-photo-775667.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-obsidian" />

      <div className="relative max-w-[1200px] mx-auto text-center">
        <Reveal>
          <p className="label mb-12">— THE INVITATION</p>
        </Reveal>

        <div className="space-y-1 md:space-y-2">
          <Reveal delay={100}>
            <h2 className="editorial-heading text-5xl md:text-7xl lg:text-8xl">
              LET'S MAKE
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="editorial-heading text-5xl md:text-7xl lg:text-8xl text-bone/50">
              SOMETHING
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <h2 className="editorial-heading text-5xl md:text-7xl lg:text-8xl">
              BEAUTIFULLY
            </h2>
          </Reveal>
          <Reveal delay={400}>
            <h2 className="editorial-heading text-5xl md:text-7xl lg:text-8xl text-bone/50">
              UNCOMFORTABLE.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <p className="font-serif italic text-bone/50 text-lg md:text-xl mt-12 max-w-xl mx-auto">
            YOUR WEDDING DESERVES BETTER THAN BORING PHOTOGRAPHS.
          </p>
        </Reveal>

        <Reveal delay={800}>
          <button onClick={onBook} className="btn-solid group mt-12">
            INQUIRE ABOUT YOUR DATE
            <ArrowRight
              size={14}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
