import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CONTACT_GATEWAY, ContactGateway } from '../../core/interfaces/contact-gateway.interface';
import { NotificationService } from '../../core/services/notification.service';
import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
  let gatewaySpy: ContactGateway;
  let notificationStub: Pick<
    NotificationService,
    'showValidationWarning' | 'showApiSuccess' | 'showPendingApiHandoff' | 'showError'
  >;
  const originalUrl = environment.contactApiUrl;

  beforeEach(async () => {
    gatewaySpy = {
      submitInquiry: () =>
        of({
          deliveredViaApi: true,
          referenceCode: 'BGZ-10001',
          message: 'Received',
        }),
    };

    notificationStub = {
      showValidationWarning: () => Promise.resolve(),
      showApiSuccess: () => Promise.resolve(),
      showPendingApiHandoff: () => Promise.resolve(),
      showError: () => Promise.resolve(),
    };

    await TestBed.configureTestingModule({
      imports: [ContactSectionComponent],
      providers: [
        { provide: CONTACT_GATEWAY, useValue: gatewaySpy },
        { provide: NotificationService, useValue: notificationStub },
      ],
    }).compileComponents();
  });

    afterEach(() => {
      environment.contactApiUrl = originalUrl;
    });

    it('should hide the form when contactApiUrl is empty and show clickable WhatsApp and Email links', () => {
      environment.contactApiUrl = '';
      const fixture = TestBed.createComponent(ContactSectionComponent);
      fixture.detectChanges();

      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('form')).toBeNull();
      expect(el.querySelector('a[href^="https://wa.me/"]')).toBeTruthy();
      expect(el.querySelector('a[href^="mailto:ceo@bigezo.com"]')).toBeTruthy();
    });

      it('should show and validate the form when contactApiUrl is configured', () => {
        environment.contactApiUrl = 'https://api.example.com/inquiries';
        const fixture = TestBed.createComponent(ContactSectionComponent);
        fixture.detectChanges();

        const el = fixture.nativeElement as HTMLElement;
        expect(el.querySelector('form')).toBeTruthy();
        expect(fixture.componentInstance.inquiryForm.valid).toBe(false);

        fixture.componentInstance.inquiryForm.setValue({
          fullName: 'David Mukasa',
          organization: 'Kampala Logistics Ltd',
          email: 'david@kampalalogistics.ug',
          phone: '+256772111222',
          serviceCategory: 'Custom Business Platform (CRM / ERP / Portal)',
          budgetRange: 'UGX 15M – 30M',
          projectDetails:
            'Need a booking and fleet tracking platform with Mobile Money checkout integration.',
          consent: true,
        });

        expect(fixture.componentInstance.inquiryForm.valid).toBe(true);
      });
    });
