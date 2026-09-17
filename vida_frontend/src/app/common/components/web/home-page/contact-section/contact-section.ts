import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidators } from '../../../../../validators/formValidators';
import { ContactRequest, ContactService } from '../../../../../services/contactService';

const FORBIDDEN_WORDS = ['viagra', 'préstamo', 'casino'];

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, FormValidators.notOnlyWhiteSpace]],
    surnames: ['', [Validators.required, FormValidators.notOnlyWhiteSpace]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, FormValidators.notOnlyWhiteSpace]],
    interest: ['', [Validators.required]],
    comment: [
      '',
      [Validators.required, FormValidators.notOnlyWhiteSpace, FormValidators.forbiddenWord(FORBIDDEN_WORDS)]
    ]
  });

  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly sendError = signal(false);

  get nameCtrl(): any {
    return this.contactForm.get('name');
  }

  get surnamesCtrl(): any {
    return this.contactForm.get('surnames');
  }

  get emailCtrl(): any {
    return this.contactForm.get('email');
  }

  get phoneCtrl(): any {
    return this.contactForm.get('phone');
  }

  get interestCtrl(): any {
    return this.contactForm.get('interest');
  }

  get commentCtrl(): any {
    return this.contactForm.get('comment');
  }

  submitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.sendError.set(false);
    this.sent.set(false);

    const request = this.contactForm.value as ContactRequest;

    this.contactService.send(request).subscribe({
      next: () => {
        this.sending.set(false);
        this.sent.set(true);
        this.contactForm.reset();
      },
      error: () => {
        this.sending.set(false);
        this.sendError.set(true);
      }
    });
  }
}
