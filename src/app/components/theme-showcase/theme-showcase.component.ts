import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ThemeDemo, ThemeShowcaseConfig } from '../../data/site-content';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-theme-showcase',
  standalone: true,
  templateUrl: './theme-showcase.component.html'
})
export class ThemeShowcaseComponent implements OnInit, OnChanges {
  private readonly sanitizer = inject(DomSanitizer);
  readonly i18n = inject(I18nService);

  @Input({ required: true }) config!: ThemeShowcaseConfig;
  @Input({ required: true }) demos: ThemeDemo[] = [];

  demoUrls: SafeResourceUrl[] = [];
  activeDemoIndex = 0;
  readonly loadedDemoIndices = new Set<number>([0]);

  ngOnInit(): void {
    this.initDemos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['demos'] && !changes['demos'].firstChange) {
      this.initDemos();
    }
  }

  get activeDemo(): ThemeDemo {
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

    if (!this.isSectionInView()) {
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

  private isSectionInView(): boolean {
    const section = document.getElementById(this.config?.sectionId ?? '');
    if (!section) {
      return false;
    }
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.25;
  }

  private initDemos(): void {
    if (!this.demos?.length) {
      return;
    }
    this.demoUrls = this.demos.map((demo) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(demo.path)
    );
    this.activeDemoIndex = 0;
    this.loadedDemoIndices.clear();
    this.loadedDemoIndices.add(0);
  }
}
