import { Component, inject } from '@angular/core';
import { LOGO_HERO } from '../../data/site-content';
import { NavigationService } from '../../services/navigation.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly nav = inject(NavigationService);
  readonly i18n = inject(I18nService);
  readonly logoHero = LOGO_HERO;
}
