import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';
import { ContactInquiryPayload } from '../models/catalog.models';
import { ContactApiService } from './contact-api.service';

describe('ContactApiService', () => {
  let service: ContactApiService;
  let httpTesting: HttpTestingController;
  const originalUrl = environment.contactApiUrl;

  const samplePayload: ContactInquiryPayload = {
    fullName: 'Jane Doe',
    organization: 'Acme Corp',
    email: 'jane@acme.co.ug',
    phone: '+256773000000',
    serviceCategory: 'Custom Business Platform (CRM / ERP / Portal)',
    budgetRange: 'UGX 15M – 30M',
    projectDetails: 'We require an internal workflow and payment portal.',
    submittedAt: '2026-11-20T00:00:00.000Z',
  };

  beforeEach(() => {
    environment.contactApiUrl = '';
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ContactApiService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    environment.contactApiUrl = originalUrl;
    httpTesting.verify();
  });

  it('should return prepared non-API handoff result when contactApiUrl is empty', () => {
    let delivered = true;
    let ref = '';

    service.submitInquiry(samplePayload).subscribe((res) => {
      delivered = res.deliveredViaApi;
      ref = res.referenceCode;
    });

    expect(delivered).toBe(false);
    expect(ref.startsWith('BGZ-')).toBe(true);
  });

  it('should POST inquiry payload when contactApiUrl is configured', () => {
    environment.contactApiUrl = 'https://api.example.com/inquiries';
    let delivered = false;
    let ref = '';

    service.submitInquiry(samplePayload).subscribe((res) => {
      delivered = res.deliveredViaApi;
      ref = res.referenceCode;
    });

    const req = httpTesting.expectOne('https://api.example.com/inquiries');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(samplePayload);

    req.flush({ referenceCode: 'BGZ-99999', message: 'Saved' });

    expect(delivered).toBe(true);
    expect(ref).toBe('BGZ-99999');
  });
});
