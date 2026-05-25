import { Component } from '@angular/core';
import { SERVICES } from '../../data/site-content';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  readonly services = SERVICES;
}
