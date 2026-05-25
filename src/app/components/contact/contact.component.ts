import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactFormComponent {
  submitted = false;
  sending = false;

  readonly googleFormAction =
    'https://docs.google.com/forms/d/e/1FAIpQLSchCRl788Zfx7l0VUGpm6-Yvmo0m0yUeQ1bZvUBfdWvkcRC-A/formResponse';

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    phone: [''],
    comments: ['']
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.submitted = false;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.form.reset();
    }, 500);
  }
}