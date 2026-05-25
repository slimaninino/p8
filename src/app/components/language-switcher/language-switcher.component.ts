import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService, type Language } from '../../services/i18n.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  private readonly i18n = inject(I18nService);

  currentLanguage = this.i18n.currentLanguage$;
  supportedLanguages = this.i18n.getSupportedLanguages();
  dropdownOpen = false;

  setLanguage(lang: Language): void {
    this.i18n.setLanguage(lang);
    this.dropdownOpen = false;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown(): void {
    this.dropdownOpen = false;
  }

  getLanguageLabel(lang: Language): string {
    const labels: Record<Language, string> = {
      en: 'English',
      fr: 'Français',
      hu: 'Magyar',
      ar: 'العربية'
    };
    return labels[lang];
  }
}
