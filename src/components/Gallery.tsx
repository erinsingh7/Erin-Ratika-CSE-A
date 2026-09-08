import { useState, useMemo, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioImages, galleryCategories, type GalleryCategory, type PortfolioImage } from '@/data/portfolio';
import Reveal from './Reveal';

const spanClasses: Record<PortfolioImage['span'], string> = {
  full: 'md:col-span-4 aspect-[16/9]',
  wide: 'md:col-span-3 aspect-[16/10]',
  tall: 'md:col-span-1 aspect-[3/4]',
  normal: 'md:col-span-2 aspect-[4/3]',
  square: 'md:col-span-2 aspect-square',
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(
    () =>
      activeCategory === 'ALL'
        ? portfolioImages
        : portfolioImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = (image: PortfolioImage) => {
    const idx = filteredImages.findIndex((img) => img.id === image.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length));
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="portfolio" className="relative bg-obsidian py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <Reveal>
              <p className="label mb-4">SELECTED WORK / 2023—2026</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="editorial-heading text-5xl md:text-7xl lg:text-8xl">THE EVIDENCE</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="font-serif italic text-bone/50 text-lg max-w-xs">
              They looked happy. Suspicious.
            </p>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-1 md:gap-2 mb-12 border-t border-b border-ash/30 py-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest-xl transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-ivory bg-ash/20'
                    : 'text-fog hover:text-bone'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, i) => (
            <Reveal
              key={image.id}
              delay={i * 50}
              className={spanClasses[image.span]}
            >
              <button
                onClick={() => openLightbox(image)}
                data-cursor="view"
                className="group relative w-full h-full overflow-hidden bg-charcoal cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-105 ${
                    image.grayscale ? 'grayscale' : ''
                  } group-hover:grayscale-0`}
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/30 transition-all duration-500" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-full">
                    {image.caption && (
                      <p className="font-serif italic text-bone text-sm md:text-base mb-2">
                        {image.caption}
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="label text-[9px] text-ivory">VIEW MEMORY</span>
                      <span className="text-ivory">→</span>
                    </div>
                  </div>
                </div>

                {/* Image number */}
                <span className="absolute top-3 left-3 label text-[8px] text-bone/40">
                  {String(i + 1).padStart(3, '0')}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[9995] bg-obsidian/98 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-ivory p-3 hover:text-bone transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory p-3 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory p-3 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src.replace('w=940', 'w=1600').replace('w=1600', 'w=1600')}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[70vh] object-contain"
            />

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="font-serif text-xl md:text-2xl text-ivory font-light tracking-wide">
                {filteredImages[lightboxIndex].couple}
              </p>
              <div className="flex items-center justify-center gap-4 mt-3">
                <p className="label">{filteredImages[lightboxIndex].location}</p>
                <span className="h-2 w-px bg-ash" />
                <p className="label">{filteredImages[lightboxIndex].date}</p>
                <span className="h-2 w-px bg-ash" />
                <p className="label">IMAGE {filteredImages[lightboxIndex].imageNumber}</p>
              </div>
              {filteredImages[lightboxIndex].caption && (
                <p className="font-serif italic text-bone/50 text-sm mt-4">
                  {filteredImages[lightboxIndex].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
