import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18nService } from '../../services/i18n.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly i18n = inject(I18nService);

  @ViewChild('contactForm') contactFormRef?: ElementRef<HTMLFormElement>;

  submitted = false;
  sending = false;
  errorMessage: string | null = null;

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    phone: [''],
    comments: ['']
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.submitted = false;
    this.errorMessage = null;

    const formData = this.form.getRawValue();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.status === 429) {
          // Rate limited
          this.errorMessage = this.i18n.t('contact.form.rateLimitError', 'You can send only one message every 3 minutes. Please try again later.');
          return Promise.reject(new Error('rate-limited'));
        }
        if (!response.ok) {
          // Server error
          this.errorMessage = this.i18n.t('contact.form.serverError', 'An error occurred. Please try again.');
          return Promise.reject(new Error(`HTTP ${response.status}`));
        }
        return response.json();
      })
      .then(() => {
        this.submitted = true;
        this.form.reset();
      })
      .catch((error) => {
        if (error.message !== 'rate-limited') {
          console.error('Form submission error:', error);
          this.errorMessage = this.i18n.t('contact.form.serverError', 'An error occurred. Please try again.');
        }
      })
      .finally(() => {
        this.sending = false;
      });
  }

  showError(controlName: 'name' | 'email' | 'address'): boolean {
    const control = this.form.get(controlName);
    return !!control && control.touched && control.invalid;
  }
}
