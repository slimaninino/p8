import { Component, inject } from '@angular/core';
import { SERVICES } from '../../data/site-content';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  readonly services = SERVICES;
  readonly i18n = inject(I18nService);
}
