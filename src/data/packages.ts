export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  cta: string;
  badge?: string;
  highlighted?: boolean;
}

export const packages: Package[] = [
  {
    id: 'little-death',
    name: 'THE LITTLE DEATH',
    price: '₹45,000',
    duration: '4 HOURS',
    features: [
      '1 PHOTOGRAPHER',
      '250+ EDITED IMAGES',
      'ONLINE GALLERY',
      '4-WEEK DELIVERY',
    ],
    cta: "I'LL TAKE MY CHANCES",
  },
  {
    id: 'till-death',
    name: 'TILL DEATH DO US PART',
    price: '₹85,000',
    duration: '8 HOURS',
    features: [
      '2 PHOTOGRAPHERS',
      '500+ EDITED IMAGES',
      'ENGAGEMENT SESSION',
      'ONLINE GALLERY',
      'SNEAK PEEK',
      '6-WEEK DELIVERY',
    ],
    cta: 'SEAL THE DEAL',
    badge: 'MOST POPULAR',
    highlighted: true,
  },
  {
    id: 'forever-unfortunate',
    name: 'FOREVER & UNFORTUNATE',
    price: '₹1,35,000',
    duration: 'FULL DAY',
    features: [
      '2 PHOTOGRAPHERS',
      '800+ EDITED IMAGES',
      'ENGAGEMENT SESSION',
      'BRIDAL PORTRAITS',
      'PREMIUM ALBUM',
      'CINEMATIC SLIDESHOW',
      'PRIORITY DELIVERY',
    ],
    cta: 'MAKE IT PERMANENT',
  },
];
