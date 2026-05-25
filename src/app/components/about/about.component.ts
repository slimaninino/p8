import { Component, inject } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
}
