import { Component, HostListener, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { THEME_DEMOS } from '../../data/site-content';

@Component({
  selector: 'app-theme-showcase',
  standalone: true,
  templateUrl: './theme-showcase.component.html'
})
export class ThemeShowcaseComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly demos = THEME_DEMOS;
  readonly demoUrls: SafeResourceUrl[];
  activeDemoIndex = 0;
  readonly loadedDemoIndices = new Set<number>([0]);

  constructor() {
    this.demoUrls = this.demos.map((demo) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(demo.path)
    );
  }

  get activeDemo() {
    return this.demos[this.activeDemoIndex];
  }

  get progressPercent(): number {
    return ((this.activeDemoIndex + 1) / this.demos.length) * 100;
  }

  isDemoLoaded(index: number): boolean {
    return this.loadedDemoIndices.has(index);
  }

  selectDemo(index: number): void {
    if (index < 0 || index >= this.demos.length) {
      return;
    }
    this.activeDemoIndex = index;
    this.loadedDemoIndices.add(index);
  }

  nextDemo(): void {
    this.selectDemo((this.activeDemoIndex + 1) % this.demos.length);
  }

  prevDemo(): void {
    this.selectDemo(
      (this.activeDemoIndex - 1 + this.demos.length) % this.demos.length
    );
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) {
      return;
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prevDemo();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.nextDemo();
    }
  }
}
