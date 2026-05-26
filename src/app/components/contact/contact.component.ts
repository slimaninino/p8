import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly i18n = inject(I18nService);

  @ViewChild('contactForm')
  contactFormRef?: ElementRef<HTMLFormElement>;

  submitted = false;
  sending = false;

  readonly googleFormAction =
    'https://docs.google.com/forms/d/e/1FAIpQLSchCRl788Zfx7l0VUGpm6-Yvmo0m0yUeQ1bZvUBfdWvkcRC-A/formResponse';

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

    const formEl = this.contactFormRef?.nativeElement;

    if (!formEl) {
      return;
    }

    this.sending = true;
    this.submitted = false;

    formEl.submit();

    window.setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.form.reset();
    }, 800);
  }

  showError(controlName: 'name' | 'email' | 'address'): boolean {
    const control = this.form.get(controlName);

    return !!control && control.touched && control.invalid;
  }
}