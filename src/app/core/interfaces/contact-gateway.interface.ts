import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactInquiryPayload, ContactSubmissionResult } from '../models/catalog.models';

export interface ContactGateway {
  submitInquiry(payload: ContactInquiryPayload): Observable<ContactSubmissionResult>;
}

export const CONTACT_GATEWAY = new InjectionToken<ContactGateway>('CONTACT_GATEWAY');
