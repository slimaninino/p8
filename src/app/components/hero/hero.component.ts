import { Component, inject } from '@angular/core';
import { LOGO_HERO } from '../../data/site-content';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly nav = inject(NavigationService);
  readonly logoHero = LOGO_HERO;
}
