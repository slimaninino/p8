export const LOGO_MARK = 'assets/images/noahswitch-logo-mark.png';
export const LOGO_HERO = 'assets/images/noahswitch-logo-hero.png';

export type ServiceIcon =
  | 'strategy'
  | 'identity'
  | 'content'
  | 'concepts'
  | 'digital'
  | 'training';

export interface ServiceItem {
  icon: ServiceIcon;
  title: string;
  description: string;
}

export interface ThemeDemo {
  id: number;
  title: string;
  category: string;
  path: string;
  accent: string;
  summary: string;
}

export const NAV_SECTIONS = ['about', 'services', 'themes', 'contact'] as const;

export const SERVICES: ServiceItem[] = [
  {
    icon: 'strategy',
    title: 'Brand Strategy',
    description:
      'Developing cohesive branding strategies that resonate with your target audience'
  },
  {
    icon: 'identity',
    title: 'Brand ID Systems',
    description:
      'Crafting compelling brand identities that set you apart from the competition'
  },
  {
    icon: 'content',
    title: 'Brand Content',
    description:
      'Creating captivating content that engages and inspires your audience'
  },
  {
    icon: 'concepts',
    title: 'Creative Concepts',
    description:
      'Conceptualizing innovative digital solutions for modern challenges'
  },
  {
    icon: 'digital',
    title: 'Digital Expertise',
    description:
      'Website development, marketing, and international marketing excellence'
  },
  {
    icon: 'training',
    title: 'Technology Training',
    description:
      'Cutting-edge training programs to empower individuals and organizations'
  }
];

export const THEME_DEMOS: ThemeDemo[] = [
  {
    id: 1,
    title: 'Neon Night Karaoke',
    category: 'Karaoke',
    path: 'assets/Index/index-1.html',
    accent: '#9557ff',
    summary: 'Neon nightlife concept with bold visuals and private-room booking flow.'
  },
  {
    id: 2,
    title: 'Private Voice Lounge',
    category: 'Karaoke',
    path: 'assets/Index/index-2.html',
    accent: '#c9a46d',
    summary: 'Upscale lounge aesthetic with intimate rooms and premium atmosphere.'
  },
  {
    id: 3,
    title: 'Pop Party Karaoke',
    category: 'Karaoke',
    path: 'assets/Index/index-3.html',
    accent: '#ff5c9a',
    summary: 'Playful pop-party energy built for groups, events, and social sharing.'
  },
  {
    id: 4,
    title: 'StageHouse Karaoke Club',
    category: 'Karaoke',
    path: 'assets/Index/index-4.html',
    accent: '#6ea8ff',
    summary: 'Club-stage layout highlighting events, leaderboards, and themed nights.'
  },
  {
    id: 5,
    title: 'Moonroom Karaoke Suites',
    category: 'Karaoke',
    path: 'assets/Index/index-5.html',
    accent: '#d7b67a',
    summary: 'Soft luxury suites with calm typography and reservation-first UX.'
  },
  {
    id: 6,
    title: 'Karaoke Caravan',
    category: 'Karaoke',
    path: 'assets/Index/index-6.html',
    accent: '#4186ff',
    summary: 'Mobile event branding for weddings, offices, and pop-up entertainment.'
  },
  {
    id: 7,
    title: 'Maison Élégance',
    category: 'Restaurant',
    path: 'assets/Index/index-7.html',
    accent: '#c8a46d',
    summary: 'Fine dining homepage with calm luxury and sophisticated menu hierarchy.'
  },
  {
    id: 8,
    title: 'Olive & Ember Bistro',
    category: 'Restaurant',
    path: 'assets/Index/index-8.html',
    accent: '#71805c',
    summary: 'Earthy bistro palette with warm hospitality and menu-led storytelling.'
  },
  {
    id: 9,
    title: 'Atomic Street Kitchen',
    category: 'Restaurant',
    path: 'assets/Index/index-9.html',
    accent: '#ff6b4a',
    summary: 'Urban street-kitchen concept with energetic contrast and bold CTAs.'
  },
  {
    id: 10,
    title: 'Maris Bleu Brasserie',
    category: 'Restaurant',
    path: 'assets/Index/index-10.html',
    accent: '#69b8c5',
    summary: 'Coastal brasserie styling with seafood focus and refined reservations.'
  },
  {
    id: 11,
    title: 'Corner House Kitchen',
    category: 'Restaurant',
    path: 'assets/Index/index-11.html',
    accent: '#c97c50',
    summary: 'Neighborhood kitchen feel with friendly everyday dining and ordering.'
  },
  {
    id: 12,
    title: 'Neon Street Bites',
    category: 'Restaurant',
    path: 'assets/Index/index-12.html',
    accent: '#ff43d0',
    summary: 'Fast-casual neon street-food concept with high-impact visual rhythm.'
  }
];
