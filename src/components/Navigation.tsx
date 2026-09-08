import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
  { label: 'WORK', target: 'portfolio' },
  { label: 'STORIES', target: 'story' },
  { label: 'PACKAGES', target: 'packages' },
  { label: 'AVAILABILITY', target: 'availability' },
  { label: 'ABOUT', target: 'about' },
];

export default function Navigation({ onBook }: { onBook: () => void }) {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 80;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-700 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-ash/30 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="font-serif text-ivory text-lg md:text-xl tracking-[0.15em] font-light hover:text-bone transition-colors duration-300"
          >
            WEDNESDAY ADDAMS
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => scrollTo(item.target)} className="nav-link">
                {item.label}
              </button>
            ))}
            <button onClick={onBook} className="btn-ghost !py-2.5 !px-6">
              BOOK ME
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-ivory p-2"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9995] lg:hidden transition-all duration-700 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-obsidian" />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-burgundy-dark/20 via-obsidian to-obsidian transition-transform duration-700 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        />

        <div className="relative h-full flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-ivory p-2"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          <p className="label mb-12">WEDNESDAY ADDAMS</p>

          <div className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="font-serif text-3xl text-ivory font-light tracking-wide hover:text-bone transition-all duration-500"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
                  transition: `opacity 0.6s ease ${i * 0.08 + 0.2}s, transform 0.6s ease ${i * 0.08 + 0.2}s`,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onBook();
              }}
              className="btn-solid mt-8"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
                transition: `opacity 0.6s ease ${navItems.length * 0.08 + 0.2}s, transform 0.6s ease ${navItems.length * 0.08 + 0.2}s`,
              }}
            >
              BOOK ME
            </button>
          </div>

          <p className="label absolute bottom-8">NAGPUR / WORLDWIDE</p>
        </div>
      </div>
    </>
  );
}
