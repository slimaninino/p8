// src/app/components/client-showcase/client-showcase.component.ts
import {
  Component,
  HostListener,
  OnInit,
  inject
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CLIENT_DEMOS, CLIENT_SHOWCASE, ClientDemo } from '../../data/site-content';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-client-showcase',
  standalone: true,
  templateUrl: './client-showcase.component.html',
  styleUrls: ['./client-showcase.component.css']
})
export class ClientShowcaseComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer);
  readonly i18n = inject(I18nService);

  readonly config = CLIENT_SHOWCASE;
  readonly demos = CLIENT_DEMOS;

  demoUrls: SafeResourceUrl[] = [];
  activeDemoIndex = 0;
  readonly loadedDemoIndices = new Set<number>([0]);

  ngOnInit(): void {
    this.demoUrls = this.demos.map(d =>
      this.sanitizer.bypassSecurityTrustResourceUrl(d.url)
    );
  }

  get activeDemo(): ClientDemo {
    return this.demos[this.activeDemoIndex];
  }

  get progressPercent(): number {
    return ((this.activeDemoIndex + 1) / this.demos.length) * 100;
  }

  isDemoLoaded(index: number): boolean {
    return this.loadedDemoIndices.has(index);
  }

  selectDemo(index: number): void {
    if (index < 0 || index >= this.demos.length) return;
    this.activeDemoIndex = index;
    this.loadedDemoIndices.add(index);
  }

  nextDemo(): void {
    this.selectDemo((this.activeDemoIndex + 1) % this.demos.length);
  }

  prevDemo(): void {
    this.selectDemo((this.activeDemoIndex - 1 + this.demos.length) % this.demos.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    const target = event.target;
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement
    ) return;

    if (!this.isSectionInView()) return;

    if (event.key === 'ArrowLeft') { event.preventDefault(); this.prevDemo(); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); this.nextDemo(); }
  }

  private isSectionInView(): boolean {
    const section = document.getElementById(this.config.sectionId);
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.25;
  }
}