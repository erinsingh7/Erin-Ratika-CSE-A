import { useState, useEffect } from 'react';
import Reveal from './Reveal';
import { useInView } from '@/hooks/useInView';

export default function Philosophy() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setRevealed(true), 1000);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <section className="relative bg-charcoal py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/733614/pexels-photo-733614.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div ref={ref} className="relative max-w-[1200px] mx-auto text-center">
        {!revealed ? (
          <div className="space-y-2 md:space-y-4">
            <Reveal>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                I DON'T PHOTOGRAPH
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-bone/50">
                WEDDINGS.
              </h2>
            </Reveal>
          </div>
        ) : (
          <div className="space-y-2 md:space-y-4 animate-fade-in">
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
              I PHOTOGRAPH
            </h2>
            <h2 className="editorial-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-bone/50">
              WHAT REMAINS.
            </h2>
          </div>
        )}

        <Reveal delay={400}>
          <div className="mt-16 md:mt-24 max-w-2xl mx-auto">
            <div className="hairline mb-10" />
            <p className="font-serif text-lg md:text-2xl text-bone/60 leading-relaxed font-light italic">
              "I look for the moments between the planned moments.
            </p>
            <p className="font-serif text-lg md:text-2xl text-bone/60 leading-relaxed font-light italic mt-4">
              The hand that trembles.
            </p>
            <p className="font-serif text-lg md:text-2xl text-bone/60 leading-relaxed font-light italic mt-4">
              The parent trying not to cry.
            </p>
            <p className="font-serif text-lg md:text-2xl text-bone/60 leading-relaxed font-light italic mt-4">
              The glance nobody noticed.
            </p>
            <p className="font-serif text-lg md:text-2xl text-bone/60 leading-relaxed font-light italic mt-4">
              The laughter that arrives unexpectedly.
            </p>
            <p className="font-serif text-lg md:text-2xl text-bone/60 leading-relaxed font-light italic mt-4">
              The beautiful chaos.
            </p>
            <p className="font-serif text-lg md:text-2xl text-ivory leading-relaxed font-light italic mt-6">
              Those are the photographs worth keeping."
            </p>
            <div className="hairline mt-10" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
