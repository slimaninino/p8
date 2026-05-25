import { Component, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { LOGO_MARK, NAV_SECTIONS } from '../../data/site-content';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  readonly nav = inject(NavigationService);
  readonly logoMark = LOGO_MARK;
  readonly sections = NAV_SECTIONS;
  readonly currentYear = new Date().getFullYear();
}
