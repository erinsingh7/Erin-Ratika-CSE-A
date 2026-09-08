import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import Reveal from './Reveal';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="relative bg-charcoal py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background quote mark */}
      <div className="absolute top-12 left-6 md:left-12 pointer-events-none select-none">
        <span className="font-serif text-[200px] md:text-[300px] text-ash/10 leading-none">"</span>
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <p className="label mb-4">CLIENT TESTIMONIALS</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl">
              THE WITNESSES.
            </h2>
          </Reveal>
        </div>

        {/* Testimonial */}
        <div className="text-center min-h-[280px] flex flex-col items-center justify-center">
          {/* Stars */}
          <div className="flex gap-1 mb-8">
            {Array.from({ length: active.rating }).map((_, i) => (
              <Star key={i} size={14} className="text-ivory fill-ivory" strokeWidth={0} />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            key={active.id}
            className="font-serif text-2xl md:text-4xl lg:text-5xl text-ivory font-light italic leading-tight max-w-4xl text-balance animate-fade-in"
          >
            "{active.quote}"
          </blockquote>

          {/* Author */}
          <p
            key={`author-${active.id}`}
            className="label mt-10 animate-fade-in"
          >
            — {active.authors}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="text-ivory/40 hover:text-ivory transition-colors p-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setAutoPlay(false);
                  setActiveIndex(i);
                }}
                className={`h-px transition-all duration-500 ${
                  i === activeIndex ? 'w-10 bg-ivory' : 'w-4 bg-ash hover:bg-fog'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-ivory/40 hover:text-ivory transition-colors p-2"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
