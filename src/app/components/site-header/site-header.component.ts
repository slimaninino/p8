import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { LOGO_MARK, NAV_SECTIONS } from '../../data/site-content';
import { NavigationService } from '../../services/navigation.service';
import { I18nService } from '../../services/i18n.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [TitleCasePipe, LanguageSwitcherComponent],
  templateUrl: './site-header.component.html'
})
export class SiteHeaderComponent {
  readonly nav = inject(NavigationService);
  readonly i18n = inject(I18nService);
  readonly logoMark = LOGO_MARK;
  readonly sections = NAV_SECTIONS;
}
