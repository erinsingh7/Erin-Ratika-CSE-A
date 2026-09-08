import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 600);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-obsidian flex flex-col items-center justify-center transition-opacity duration-700 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <p
          className="font-serif text-2xl md:text-3xl text-ivory tracking-[0.2em] font-light animate-fade-in"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          WEDNESDAY ADDAMS
        </p>
        <div className="hairline w-32 mx-auto mt-6" />
        <p
          className="label mt-6 animate-fade-in"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          DEVELOPING YOUR MEMORIES...
        </p>
      </div>

      <div className="w-48 h-px bg-ash/30 mt-12 overflow-hidden">
        <div
          className="h-full bg-ivory/60 transition-all duration-200 ease-linear"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
