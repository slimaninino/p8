import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  readonly activeSection = signal<string>('top');
  mobileNavOpen = false;

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

  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
  }

  isActive(sectionId: string): boolean {
    return this.activeSection() === sectionId;
  }
}
