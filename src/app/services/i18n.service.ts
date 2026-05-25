import { Injectable, signal, effect } from '@angular/core';

export type Language = 'en' | 'fr' | 'hu' | 'ar';

const SUPPORTED_LANGUAGES: Language[] = ['en', 'fr', 'hu', 'ar'];
const DEFAULT_LANGUAGE: Language = 'en';
const STORAGE_KEY = 'app-language';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = signal<Language>(DEFAULT_LANGUAGE);
  private translations: Record<Language, Record<string, any>> = {
    en: {},
    fr: {},
    hu: {},
    ar: {}
  };

  currentLanguage$ = this.currentLanguage.asReadonly();

  constructor() {
    effect(() => {
      const lang = this.currentLanguage();
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem(STORAGE_KEY, lang);
    });
  }

  async init(): Promise<void> {
    // Load saved language or use default
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    const lang = saved && SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;

    // Load all translation files
    for (const supportedLang of SUPPORTED_LANGUAGES) {
      try {
        const response = await fetch(`/assets/i18n/${supportedLang}.json`);
        if (response.ok) {
          this.translations[supportedLang] = await response.json();
        }
      } catch (error) {
        console.error(`Failed to load translations for ${supportedLang}:`, error);
        this.translations[supportedLang] = {};
      }
    }

    this.setLanguage(lang);
  }

  setLanguage(lang: Language): void {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      this.currentLanguage.set(lang);
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  t(key: string, defaultValue?: string): string {
    const lang = this.currentLanguage();
    const keys = key.split('.');
    let value: any = this.translations[lang];

    for (const k of keys) {
      value = value?.[k];
    }

    return typeof value === 'string' ? value : defaultValue || key;
  }

  getSupportedLanguages(): Language[] {
    return SUPPORTED_LANGUAGES;
  }
}
