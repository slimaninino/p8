import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ThemeDemo {
  title: string;
  category: string;
  path: string;
  accent: string;
  summary: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly sanitizer = inject(DomSanitizer);

  currentYear = new Date().getFullYear();
  mobileNavOpen = false;
  activeDemoIndex = 0;

  services: Service[] = [
    {
      icon: '🎯',
      title: 'Brand Strategy',
      description: 'Developing cohesive branding strategies that resonate with your target audience'
    },
    {
      icon: '🎨',
      title: 'Brand ID Systems',
      description: 'Crafting compelling brand identities that set you apart from the competition'
    },
    {
      icon: '📝',
      title: 'Brand Content',
      description: 'Creating captivating content that engages and inspires your audience'
    },
    {
      icon: '💡',
      title: 'Creative Concepts',
      description: 'Conceptualizing innovative digital solutions for modern challenges'
    },
    {
      icon: '💻',
      title: 'Digital Expertise',
      description: 'Website development, marketing, and international marketing excellence'
    },
    {
      icon: '🚀',
      title: 'Technology Training',
      description: 'Cutting-edge training programs to empower individuals and organizations'
    }
  ];

  readonly demoUrls: SafeResourceUrl[];

  demos: ThemeDemo[] = [
    {
      title: 'Neon Night Karaoke',
      category: 'Karaoke',
      path: 'assets/Index/index-1.html',
      accent: '#9557ff',
      summary: 'Neon nightlife concept with bold visuals and private-room booking flow.'
    },
    {
      title: 'Private Voice Lounge',
      category: 'Karaoke',
      path: 'assets/Index/index-2.html',
      accent: '#c9a46d',
      summary: 'Upscale lounge aesthetic with intimate rooms and premium atmosphere.'
    },
    {
      title: 'Pop Party Karaoke',
      category: 'Karaoke',
      path: 'assets/Index/index-3.html',
      accent: '#ff5c9a',
      summary: 'Playful pop-party energy built for groups, events, and social sharing.'
    },
    {
      title: 'StageHouse Karaoke Club',
      category: 'Karaoke',
      path: 'assets/Index/index-4.html',
      accent: '#6ea8ff',
      summary: 'Club-stage layout highlighting events, leaderboards, and themed nights.'
    },
    {
      title: 'Moonroom Karaoke Suites',
      category: 'Karaoke',
      path: 'assets/Index/index-5.html',
      accent: '#d7b67a',
      summary: 'Soft luxury suites with calm typography and reservation-first UX.'
    },
    {
      title: 'Karaoke Caravan',
      category: 'Karaoke',
      path: 'assets/Index/index-6.html',
      accent: '#4186ff',
      summary: 'Mobile event branding for weddings, offices, and pop-up entertainment.'
    },
    {
      title: 'Maison Élégance',
      category: 'Restaurant',
      path: 'assets/Index/index-7.html',
      accent: '#c8a46d',
      summary: 'Fine dining homepage with calm luxury and sophisticated menu hierarchy.'
    },
    {
      title: 'Olive & Ember Bistro',
      category: 'Restaurant',
      path: 'assets/Index/index-8.html',
      accent: '#71805c',
      summary: 'Earthy bistro palette with warm hospitality and menu-led storytelling.'
    },
    {
      title: 'Atomic Street Kitchen',
      category: 'Restaurant',
      path: 'assets/Index/index-9.html',
      accent: '#ff6b4a',
      summary: 'Urban street-kitchen concept with energetic contrast and bold CTAs.'
    },
    {
      title: 'Maris Bleu Brasserie',
      category: 'Restaurant',
      path: 'assets/Index/index-10.html',
      accent: '#69b8c5',
      summary: 'Coastal brasserie styling with seafood focus and refined reservations.'
    },
    {
      title: 'Corner House Kitchen',
      category: 'Restaurant',
      path: 'assets/Index/index-11.html',
      accent: '#c97c50',
      summary: 'Neighborhood kitchen feel with friendly everyday dining and ordering.'
    },
    {
      title: 'Neon Street Bites',
      category: 'Restaurant',
      path: 'assets/Index/index-12.html',
      accent: '#ff43d0',
      summary: 'Fast-casual neon street-food concept with high-impact visual rhythm.'
    }
  ];

  constructor() {
    this.demoUrls = this.demos.map((demo) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(demo.path)
    );
  }

  get activeDemo(): ThemeDemo {
    return this.demos[this.activeDemoIndex];
  }

  scrollToSection(sectionId: string): void {
    this.mobileNavOpen = false;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    this.scrollToSection('contact');
  }

  toggleNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  selectDemo(index: number): void {
    if (index >= 0 && index < this.demos.length) {
      this.activeDemoIndex = index;
    }
  }

  nextDemo(): void {
    this.activeDemoIndex = (this.activeDemoIndex + 1) % this.demos.length;
  }

  prevDemo(): void {
    this.activeDemoIndex =
      (this.activeDemoIndex - 1 + this.demos.length) % this.demos.length;
  }
}
