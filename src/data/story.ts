export interface StorySection {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const featuredStory: {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  sections: StorySection[];
} = {
  title: 'THE BLACKWOOD WEDDING',
  subtitle: 'A celebration of love, family, and several questionable decisions.',
  heroImage:
    'https://images.pexels.com/photos/18959295/pexels-photo-18959295.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'Bride and groom in gothic outfits inside an abandoned building with arched windows',
  sections: [
    {
      label: '01',
      title: 'THE ARRIVAL',
      description:
        'The guests arrived at the mansion as dusk settled over the grounds. Candles lined the pathway. A string quartet played something in a minor key. The groom looked nervous. The bride looked certain. Both looked magnificent.',
      image:
        'https://images.pexels.com/photos/9572051/pexels-photo-9572051.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Illuminated entrance of a Victorian mansion at night',
    },
    {
      label: '02',
      title: 'THE CEREMONY',
      description:
        'They exchanged vows beneath an archway of black roses and ivory blooms. The officiant spoke of forever. The couple meant it. A tear escaped the father of the bride. I photographed it before he could wipe it away.',
      image:
        'https://images.pexels.com/photos/30772210/pexels-photo-30772210.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Bride and groom holding candles during a church wedding ceremony',
    },
    {
      label: '03',
      title: 'THE PORTRAITS',
      description:
        'We retreated to the mansion\'s east wing, where the light fell through stained glass in fractured columns of colour. They held each other as if the world outside had ceased to exist. Perhaps, for a moment, it had.',
      image:
        'https://images.pexels.com/photos/30273644/pexels-photo-30273644.jpeg?auto=compress&cs=tinysrgb&w=940',
      alt: 'Dramatic black and white wedding portrait with bride and groom',
    },
    {
      label: '04',
      title: 'THE CHAOS',
      description:
        'The reception descended into what can only be described as organised pandemonium. The dance floor filled. The champagne flowed. Someone\'s uncle attempted a speech that was, frankly, inadvisable. I documented everything.',
      image:
        'https://images.pexels.com/photos/16372599/pexels-photo-16372599.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Bride and groom share a romantic dance amidst dramatic spotlights',
    },
    {
      label: '05',
      title: 'THE RECEPTION',
      description:
        'Long tables draped in black linen, crowned with candelabras and burgundy florals. The cake was seven tiers. The first dance was slow, deliberate, and entirely theirs. The room watched. I watched from a darker corner.',
      image:
        'https://images.pexels.com/photos/5864616/pexels-photo-5864616.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Candlelit dinner setting in a dark room with elegant decoration',
    },
    {
      label: '06',
      title: 'THE AFTERMATH',
      description:
        'By midnight, the candles had burned low and the last guests had departed. The couple stood alone in the entrance hall, still in their finery, reluctant to let the night end. I took one final photograph. Then I left them to their privacy.',
      image:
        'https://images.pexels.com/photos/775667/pexels-photo-775667.jpeg?auto=compress&cs=tinysrgb&w=1600',
      alt: 'Nighttime photograph of an eerie mansion',
    },
  ],
};
