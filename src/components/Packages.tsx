import { packages } from '@/data/packages';
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

export default function Packages({ onSelectPackage }: { onSelectPackage: (pkgId: string) => void }) {
  return (
    <section id="packages" className="relative bg-obsidian py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <p className="label mb-4">INVESTMENT</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="editorial-heading text-5xl md:text-7xl lg:text-8xl">
              CHOOSE YOUR FATE.
            </h2>
          </Reveal>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ash/30">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 150}>
              <div
                className={`relative bg-obsidian p-8 md:p-10 h-full flex flex-col ${
                  pkg.highlighted ? 'bg-charcoal' : ''
                }`}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-burgundy text-bone text-[9px] uppercase tracking-widest-xl px-4 py-1.5 border border-burgundy-light">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Name */}
                <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light leading-tight mb-2 mt-4">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-4xl md:text-5xl text-ivory font-light">
                    {pkg.price}
                  </span>
                </div>

                <div className="hairline mb-6" />

                {/* Duration */}
                <p className="label mb-6">{pkg.duration}</p>

                {/* Features */}
                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-burgundy-light mt-1.5 text-[8px]">●</span>
                      <span className="font-sans text-sm text-bone/70 tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`group relative w-full py-4 text-[11px] uppercase tracking-widest-xl transition-all duration-500 border ${
                    pkg.highlighted
                      ? 'bg-burgundy border-burgundy-light text-bone hover:bg-burgundy-light'
                      : 'border-ash/50 text-ivory hover:border-ivory/80 hover:bg-ivory/5'
                  }`}
                >
                  <span className="flex items-center justify-center gap-3">
                    {pkg.cta}
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={300}>
          <p className="font-serif italic text-bone/40 text-sm md:text-base text-center mt-12">
            All packages include a contract, a consultation, and the quiet understanding that I will
            find your best angle — whether you want me to or not.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
