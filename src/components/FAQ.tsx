import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqItems } from '@/data/faq';
import Reveal from './Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-obsidian py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="label mb-4">FREQUENTLY ASKED</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl">
              QUESTIONS.
            </h2>
          </Reveal>
        </div>

        {/* Accordion */}
        <div className="border-t border-ash/30">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div className="border-b border-ash/30">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  >
                    <span
                      className={`font-serif text-lg md:text-2xl font-light transition-colors duration-300 ${
                        isOpen ? 'text-ivory' : 'text-bone/60 group-hover:text-ivory'
                      }`}
                    >
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 text-ivory/60">
                      {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-serif text-base md:text-lg text-bone/50 leading-relaxed font-light pb-6 pr-12">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
