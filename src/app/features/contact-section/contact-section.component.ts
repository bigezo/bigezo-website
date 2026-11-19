import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BUDGET_RANGES, SERVICE_CATEGORIES } from '../../core/data/bigezo-catalog.data';
import { CONTACT_GATEWAY } from '../../core/interfaces/contact-gateway.interface';
import { ContactInquiryPayload } from '../../core/models/catalog.models';
import { NotificationService } from '../../core/services/notification.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'bigezo-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeadingComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactGateway = inject(CONTACT_GATEWAY);
  private readonly notificationService = inject(NotificationService);

  readonly prefilledTopic = input<string>('');
  readonly serviceCategories = SERVICE_CATEGORIES;
  readonly budgetRanges = BUDGET_RANGES;
  readonly companyPhone = environment.companyPhone;
  readonly companyEmail = environment.companyEmail;
  readonly telUrl = `tel:${environment.companyPhone.replaceAll(/\s+/g, '')}`;
  readonly submitting = signal(false);

  // Automatically shows the form once environment.contactApiUrl is configured
  readonly showContactForm = computed(() => environment.contactApiUrl.trim().length > 0);

  readonly whatsappUrl = computed(() => {
    const topic = this.prefilledTopic().trim();
    const message = topic
      ? `Hello Bigezo Technologies, I would like to discuss a solution similar to ${topic}.`
      : 'Hello Bigezo Technologies, I would like to discuss a custom software project.';
    return `https://wa.me/${environment.whatsappDigits}?text=${encodeURIComponent(message)}`;
  });

  readonly emailUrl = computed(() => {
    const topic = this.prefilledTopic().trim();
    const subject = topic
      ? `Project Inquiry: ${topic} — Bigezo Technologies`
      : 'Project Inquiry — Bigezo Technologies';
    const body = topic
      ? `Hello Bigezo Technologies,\n\nI would like to discuss a project similar to ${topic}.\n\nOrganization:\nRequirements:\n`
      : 'Hello Bigezo Technologies,\n\nI would like to discuss a custom software project.\n\nOrganization:\nRequirements:\n';
    return `mailto:${environment.companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  readonly inquiryForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    organization: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    serviceCategory: [SERVICE_CATEGORIES[0], [Validators.required]],
    budgetRange: [BUDGET_RANGES[0], [Validators.required]],
    projectDetails: ['', [Validators.required, Validators.minLength(20)]],
    consent: [false, [Validators.requiredTrue]],
  });

  constructor() {
    effect(() => {
      const topic = this.prefilledTopic().trim();
      if (topic) {
        this.inquiryForm.patchValue({
          projectDetails: `We are interested in a solution similar to ${topic}. Here are our requirements:\n`,
        });
      }
    });
  }

  hasFieldError(controlName: keyof typeof this.inquiryForm.controls): boolean {
    const control = this.inquiryForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
      if (!this.showContactForm() || this.submitting()) {
        return;
      }

      if (this.inquiryForm.invalid) {
        this.inquiryForm.markAllAsTouched();
        void this.notificationService.showValidationWarning(
          'Please complete all required fields, provide a brief description of your project (at least 20 characters), and confirm consent.'
        );
        return;
      }

      const raw = this.inquiryForm.getRawValue();
      const payload: ContactInquiryPayload = {
        fullName: raw.fullName.trim(),
        organization: raw.organization.trim(),
        email: raw.email.trim(),
        phone: raw.phone.trim(),
        serviceCategory: raw.serviceCategory,
        budgetRange: raw.budgetRange,
        projectDetails: raw.projectDetails.trim(),
        submittedAt: new Date().toISOString(),
      };

      this.submitting.set(true);

      this.contactGateway
        .submitInquiry(payload)
        .pipe(finalize(() => this.submitting.set(false)))
        .subscribe({
          next: (result) => {
            if (result.deliveredViaApi) {
              void this.notificationService.showApiSuccess(result);
              this.inquiryForm.reset({
                fullName: '',
                organization: '',
                email: '',
                phone: '',
                serviceCategory: SERVICE_CATEGORIES[0],
                budgetRange: BUDGET_RANGES[0],
                projectDetails: '',
                consent: false,
              });
            } else {
              void this.notificationService.showPendingApiHandoff(payload, result);
            }
          },
          error: (err: Error) => {
            void this.notificationService.showError('Submission Unavailable', err.message);
          },
        });
    }
  }
