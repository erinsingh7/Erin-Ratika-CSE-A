export type DateStatus = 'available' | 'limited' | 'booked';

export interface AvailabilityDate {
  day: number;
  status: DateStatus;
}

export interface AvailabilityMonth {
  name: string;
  year: number;
  dates: AvailabilityDate[];
}

// Pre-populated availability data — structured for future backend integration.
// Replace this static data with a fetch to the availability API when connected.
export const availabilityData: AvailabilityMonth[] = [
  {
    name: 'NOVEMBER',
    year: 2026,
    dates: [
      { day: 1, status: 'available' },
      { day: 2, status: 'available' },
      { day: 3, status: 'available' },
      { day: 4, status: 'limited' },
      { day: 5, status: 'booked' },
      { day: 6, status: 'booked' },
      { day: 7, status: 'available' },
      { day: 8, status: 'available' },
      { day: 9, status: 'limited' },
      { day: 10, status: 'available' },
      { day: 11, status: 'available' },
      { day: 12, status: 'booked' },
      { day: 13, status: 'available' },
      { day: 14, status: 'available' },
      { day: 15, status: 'limited' },
      { day: 16, status: 'booked' },
      { day: 17, status: 'booked' },
      { day: 18, status: 'available' },
      { day: 19, status: 'available' },
      { day: 20, status: 'available' },
      { day: 21, status: 'limited' },
      { day: 22, status: 'available' },
      { day: 23, status: 'available' },
      { day: 24, status: 'available' },
      { day: 25, status: 'booked' },
      { day: 26, status: 'available' },
      { day: 27, status: 'available' },
      { day: 28, status: 'limited' },
      { day: 29, status: 'available' },
      { day: 30, status: 'available' },
    ],
  },
  {
    name: 'DECEMBER',
    year: 2026,
    dates: [
      { day: 1, status: 'available' },
      { day: 2, status: 'available' },
      { day: 3, status: 'limited' },
      { day: 4, status: 'available' },
      { day: 5, status: 'available' },
      { day: 6, status: 'booked' },
      { day: 7, status: 'booked' },
      { day: 8, status: 'available' },
      { day: 9, status: 'available' },
      { day: 10, status: 'available' },
      { day: 11, status: 'limited' },
      { day: 12, status: 'available' },
      { day: 13, status: 'available' },
      { day: 14, status: 'available' },
      { day: 15, status: 'booked' },
      { day: 16, status: 'available' },
      { day: 17, status: 'available' },
      { day: 18, status: 'limited' },
      { day: 19, status: 'available' },
      { day: 20, status: 'available' },
      { day: 21, status: 'booked' },
      { day: 22, status: 'booked' },
      { day: 23, status: 'available' },
      { day: 24, status: 'available' },
      { day: 25, status: 'available' },
      { day: 26, status: 'available' },
      { day: 27, status: 'limited' },
      { day: 28, status: 'available' },
      { day: 29, status: 'available' },
      { day: 30, status: 'available' },
      { day: 31, status: 'booked' },
    ],
  },
  {
    name: 'JANUARY',
    year: 2027,
    dates: [
      { day: 1, status: 'available' },
      { day: 2, status: 'available' },
      { day: 3, status: 'available' },
      { day: 4, status: 'limited' },
      { day: 5, status: 'available' },
      { day: 6, status: 'available' },
      { day: 7, status: 'booked' },
      { day: 8, status: 'available' },
      { day: 9, status: 'available' },
      { day: 10, status: 'available' },
      { day: 11, status: 'available' },
      { day: 12, status: 'limited' },
      { day: 13, status: 'available' },
      { day: 14, status: 'available' },
      { day: 15, status: 'booked' },
      { day: 16, status: 'booked' },
      { day: 17, status: 'available' },
      { day: 18, status: 'available' },
      { day: 19, status: 'available' },
      { day: 20, status: 'limited' },
      { day: 21, status: 'available' },
      { day: 22, status: 'available' },
      { day: 23, status: 'available' },
      { day: 24, status: 'available' },
      { day: 25, status: 'booked' },
      { day: 26, status: 'available' },
      { day: 27, status: 'available' },
      { day: 28, status: 'limited' },
      { day: 29, status: 'available' },
      { day: 30, status: 'available' },
      { day: 31, status: 'available' },
    ],
  },
];

export const statusConfig: Record<DateStatus, { label: string; color: string; bgColor: string; hoverText: string }> = {
  available: {
    label: 'AVAILABLE',
    color: 'text-ivory',
    bgColor: 'bg-transparent border-ash/40 hover:border-ivory/60 hover:bg-ivory/5',
    hoverText: 'AVAILABLE',
  },
  limited: {
    label: 'LIMITED',
    color: 'text-bone/80',
    bgColor: 'bg-burgundy/20 border-burgundy/40 hover:border-burgundy-light hover:bg-burgundy/30',
    hoverText: 'LIMITED',
  },
  booked: {
    label: 'BOOKED',
    color: 'text-fog/50',
    bgColor: 'bg-charcoal border-ash/20 opacity-40 cursor-not-allowed',
    hoverText: 'SOMEONE GOT THERE FIRST',
  },
};
