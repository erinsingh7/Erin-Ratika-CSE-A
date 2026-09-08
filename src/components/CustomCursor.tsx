import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      setHidden(false);
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('a, button, [data-cursor], input, textarea, select, [role="button"]') !== null;
      setHovering(isInteractive);
    };

    const onLeave = () => setHidden(true);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 z-[10001] pointer-events-none transition-opacity duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ marginLeft: '-3px', marginTop: '-3px' }}
      >
        <div className={`w-1.5 h-1.5 rounded-full bg-ivory transition-all duration-300 ${hovering ? 'scale-0' : 'scale-100'}`} />
      </div>
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 z-[10001] pointer-events-none transition-all duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ marginLeft: '-18px', marginTop: '-18px' }}
      >
        <div
          className={`rounded-full border border-ivory/40 transition-all duration-300 ${
            hovering ? 'w-12 h-12 border-ivory/60 bg-ivory/5' : 'w-9 h-9'
          }`}
        />
      </div>
    </>
  );
}
