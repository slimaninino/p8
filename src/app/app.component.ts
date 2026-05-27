import { AfterViewInit, Component, inject, OnDestroy, effect } from '@angular/core';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ThemeShowcaseComponent } from './components/theme-showcase/theme-showcase.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { NavigationService } from './services/navigation.service';
import { I18nService } from './services/i18n.service';
import {
  BEAUTY_PORTFOLIO_DEMOS,
  BEAUTY_PORTFOLIO_SHOWCASE,
  HOSPITALITY_DEMOS,
  HOSPITALITY_SHOWCASE
} from './data/site-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ThemeShowcaseComponent,
    PricingComponent,
    ContactComponent,
    SiteFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private readonly nav = inject(NavigationService);
  private readonly i18n = inject(I18nService);
  private observer?: IntersectionObserver;

  readonly hospitalityShowcase = HOSPITALITY_SHOWCASE;
  readonly hospitalityDemos = HOSPITALITY_DEMOS;
  readonly beautyPortfolioShowcase = BEAUTY_PORTFOLIO_SHOWCASE;
  readonly beautyPortfolioDemos = BEAUTY_PORTFOLIO_DEMOS;

  constructor() {
    // Initialize i18n service
    this.i18n.init().catch(error => console.error('Failed to initialize i18n:', error));
  }

  ngAfterViewInit(): void {
    const sectionIds = ['top', 'about', 'services', 'themes', 'portfolio', 'pricing', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!elements.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          this.nav.setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.15, 0.35, 0.55] }
    );

    elements.forEach((element) => this.observer?.observe(element));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
