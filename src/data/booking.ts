export interface BookingStep {
  step: number;
  title: string;
  fields: BookingField[];
}

export interface BookingField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'number' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[];
  required?: boolean;
  full?: boolean;
}

export const bookingSteps: BookingStep[] = [
  {
    step: 1,
    title: 'WHO ARE WE PHOTOGRAPHING?',
    fields: [
      { name: 'name', label: 'YOUR NAME', type: 'text', placeholder: 'Jane Doe', required: true },
      { name: 'partnerName', label: "PARTNER'S NAME", type: 'text', placeholder: 'John Doe', required: true },
      { name: 'email', label: 'EMAIL', type: 'email', placeholder: 'jane@email.com', required: true },
      { name: 'phone', label: 'PHONE', type: 'tel', placeholder: '+91 98765 43210', required: true },
    ],
  },
  {
    step: 2,
    title: 'WHEN DOES THE MISFORTUNE OCCUR?',
    fields: [
      { name: 'weddingDate', label: 'WEDDING DATE', type: 'date', required: true },
      { name: 'location', label: 'LOCATION', type: 'text', placeholder: 'Mumbai, India', required: true },
      { name: 'venue', label: 'VENUE', type: 'text', placeholder: 'The Grand Mansion Hall', required: true },
      { name: 'guestCount', label: 'GUEST COUNT', type: 'number', placeholder: '150', required: true },
    ],
  },
  {
    step: 3,
    title: 'WHAT ARE WE DOCUMENTING?',
    fields: [
      {
        name: 'eventType',
        label: 'EVENT TYPE',
        type: 'select',
        options: ['WEDDING', 'ENGAGEMENT', 'BRIDAL', 'DESTINATION', 'OTHER'],
        required: true,
        full: true,
      },
    ],
  },
  {
    step: 4,
    title: 'CHOOSE YOUR FATE',
    fields: [
      {
        name: 'package',
        label: 'PACKAGE',
        type: 'select',
        options: [
          'THE LITTLE DEATH — ₹45,000',
          'TILL DEATH DO US PART — ₹85,000',
          'FOREVER & UNFORTUNATE — ₹1,35,000',
        ],
        required: true,
        full: true,
      },
    ],
  },
  {
    step: 5,
    title: 'TELL ME EVERYTHING',
    fields: [
      {
        name: 'details',
        label: 'YOUR STORY',
        type: 'textarea',
        placeholder:
          'Tell me about your wedding, your people, your plans, and the moments you absolutely don\'t want me to miss.',
        required: true,
        full: true,
      },
    ],
  },
];

export const loadingMessages = [
  'PROCESSING YOUR MISFORTUNE...',
  'TRYING TO FIND THE LIGHT. IT APPEARS TO BE DEAD.',
  'DEVELOPING YOUR MEMORIES...',
  'ARRANGING THE EVIDENCE...',
  'CALIBRATING THE DARKNESS...',
];
