/** Same artwork as originals; URL-safe filenames for reliable asset loading */
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

export const NAV_SECTIONS = ['about', 'services', 'themes', 'portfolio', 'contact'] as const;

export interface ThemeShowcaseConfig {
  sectionId: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaAlt: string;
}

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

export const HOSPITALITY_SHOWCASE: ThemeShowcaseConfig = {
  sectionId: 'themes',
  eyebrow: 'Hospitality',
  title: 'Karaoke & Restaurant Themes',
  intro:
    'Explore homepage concepts crafted for karaoke venues and restaurants. Browse one full demo at a time, then open the live preview in a new tab.',
  metaAlt: 'Karaoke & restaurants'
};

export const BEAUTY_PORTFOLIO_SHOWCASE: ThemeShowcaseConfig = {
  sectionId: 'portfolio',
  eyebrow: 'Beauty & Portfolio',
  title: 'Barber, Nail & Portfolio Themes',
  intro:
    'Homepage concepts for barbershops, nail salons, and personal or agency portfolios. Same showcase experience — preview one theme at a time or open the full page.',
  metaAlt: 'Barber · Nails · Portfolio'
};

export const HOSPITALITY_DEMOS: ThemeDemo[] = [
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

export const BEAUTY_PORTFOLIO_DEMOS: ThemeDemo[] = [
  {
    id: 1,
    title: 'Minimal Swiss Designer',
    category: 'Portfolio',
    path: 'assets/Portfolio_Barber_Nail/index-1.html',
    accent: '#0b0b0b',
    summary: 'Editorial Swiss-style portfolio with clean grids and restrained typography.'
  },
  {
    id: 2,
    title: 'Futuristic Developer Portfolio',
    category: 'Portfolio',
    path: 'assets/Portfolio_Barber_Nail/index-2.html',
    accent: '#3fd8ff',
    summary: 'Tech-forward developer showcase with neon accents and structured case studies.'
  },
  {
    id: 3,
    title: 'Creative Agency Portfolio',
    category: 'Portfolio',
    path: 'assets/Portfolio_Barber_Nail/index-3.html',
    accent: '#ff6b4a',
    summary: 'Bold agency layout built to present campaigns, clients, and creative work.'
  },
  {
    id: 4,
    title: 'Luxury Personal Brand',
    category: 'Portfolio',
    path: 'assets/Portfolio_Barber_Nail/index-4.html',
    accent: '#c8a46d',
    summary: 'Premium personal brand site with calm luxury and high-end visual rhythm.'
  },
  {
    id: 5,
    title: 'Brutalist Portfolio',
    category: 'Portfolio',
    path: 'assets/Portfolio_Barber_Nail/index-5.html',
    accent: '#e85d04',
    summary: 'Raw brutalist aesthetic for designers who want loud, confident presentation.'
  },
  {
    id: 6,
    title: 'AI / Tech Resume',
    category: 'Portfolio',
    path: 'assets/Portfolio_Barber_Nail/index-6.html',
    accent: '#6366f1',
    summary: 'Modern résumé and portfolio hybrid for AI, data, and software professionals.'
  },
  {
    id: 7,
    title: 'Coastal Grooming House',
    category: 'Barber',
    path: 'assets/Portfolio_Barber_Nail/index-7.html',
    accent: '#69b8c5',
    summary: 'Relaxed coastal barbershop with grooming services and appointment-led UX.'
  },
  {
    id: 8,
    title: 'Tokyo Fade Lab',
    category: 'Barber',
    path: 'assets/Portfolio_Barber_Nail/index-8.html',
    accent: '#f59e0b',
    summary: 'Urban fade-focused barbershop with sharp visuals and booking clarity.'
  },
  {
    id: 9,
    title: 'The Green Room Barber Spa',
    category: 'Barber',
    path: 'assets/Portfolio_Barber_Nail/index-9.html',
    accent: '#71805c',
    summary: 'Barber spa concept blending cuts, treatments, and a wellness tone.'
  },
  {
    id: 10,
    title: 'Blossom Nail Atelier',
    category: 'Nail Salon',
    path: 'assets/Portfolio_Barber_Nail/index-10.html',
    accent: '#c98fa2',
    summary: 'Soft luxury nail atelier with spa-like palette and service-first layout.'
  },
  {
    id: 11,
    title: 'Neon Nail Club',
    category: 'Nail Salon',
    path: 'assets/Portfolio_Barber_Nail/index-11.html',
    accent: '#ff43d0',
    summary: 'High-energy nail lounge with neon styling and social-ready brand feel.'
  },
  {
    id: 12,
    title: 'Minimal Spa Studio',
    category: 'Nail Salon',
    path: 'assets/Portfolio_Barber_Nail/index-12.html',
    accent: '#8ec9a8',
    summary: 'Clean minimal studio for nails, spa treatments, and calm online booking.'
  }
];

/** @deprecated Use HOSPITALITY_DEMOS */
export const THEME_DEMOS = HOSPITALITY_DEMOS;

// ── CLIENT SHOWCASE ───────────────────────────────────────

export interface ClientDemo {
  id: number;
  title: string;
  category: string;
  url: string;          // full external URL — opened in new tab AND loaded in iframe
  accent: string;
  summary: string;
}

export interface ClientShowcaseConfig {
  sectionId: string;
  eyebrow: string;
  title: string;
  intro: string;
}

export const CLIENT_SHOWCASE: ClientShowcaseConfig = {
  sectionId: 'clients',
  eyebrow: 'Our Work',
  title: 'Live Client Websites',
  intro:
    'Real websites we have designed and built — browse the live preview, then open the full site in a new tab.'
};

export const CLIENT_DEMOS: ClientDemo[] = [
  {
    id: 1,
    title: 'Madame Architects',
    category: 'Architecture',
    url: 'https://madamearchitects.com',
    accent: '#c8a46d',
    summary: 'Elegant portfolio for an architecture studio — refined layout, project gallery, and studio identity.'
  },
  {
    id: 2,
    title: 'By Maroua',
    category: 'Beauty & Personal Brand',
    url: 'https://bymaroua.com',
    accent: '#c98fa2',
    summary: 'Personal brand site for a beauty professional — warm aesthetics, service showcase, and booking-ready UX.'
  },  
  {
    id: 3,
    title: 'NoahSwitch',
    category: 'Professional Portfolio',
    url: 'https://noahswitch.github.io',
    accent: '#48bfd9',
    summary: 'Results-driven Digital Expert with a proven track record of designing scalable online strategies.'
  }, 
  {
    id: 4,
    title: 'I Want To Date You',
    category: 'Fun & Interactive',
    url: 'https://p.iwanttodateyou.fr/',
    accent: '#e91e8c',
    summary: 'A playful romantic prank page that asks "Do you want to date me?" — featuring a runaway NO button, confetti, cute quiz questions, and a Google Form submission. Built with vanilla HTML/CSS/JS.'
  },
];