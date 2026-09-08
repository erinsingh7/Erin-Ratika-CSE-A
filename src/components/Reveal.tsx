import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function Reveal({ children, className = '', delay = 0, y = 30 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1.2s] ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
