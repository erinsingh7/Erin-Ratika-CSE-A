export interface Testimonial {
  id: number;
  quote: string;
  authors: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'Every photograph looked like a Renaissance painting that had witnessed something terrible.',
    authors: 'EMILY & VICTOR',
    rating: 5,
  },
  {
    id: 2,
    quote: 'My mother cried. Wednesday called it excellent lighting.',
    authors: 'BIANCA & TYLER',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Would absolutely hire her again.',
    authors: 'MORTICIA & GOMEZ',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'She told us to smile. We didn\'t. The photos were perfect.',
    authors: 'LUCY & DRAKE',
    rating: 5,
  },
  {
    id: 5,
    quote:
      'Our wedding album arrived in a black box. We were afraid to open it. It was stunning.',
    authors: 'SOPHIA & CALEB',
    rating: 5,
  },
];
