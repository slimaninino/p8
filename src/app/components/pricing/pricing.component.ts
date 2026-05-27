// src/app/components/pricing/pricing.component.ts
import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  readonly i18n = inject(I18nService);
  private readonly nav = inject(NavigationService);

  goToContact(): void {
    this.nav.scrollToContact();
  }

  get price(): string {
    const lang = this.i18n.getCurrentLanguage();
    switch (lang) {
      case 'hu': return '50 000 HUF';
      case 'fr': return '150 €';
      default:   return '$200 USD';
    }
  }
}