import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, throwError, timeout } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactGateway } from '../interfaces/contact-gateway.interface';
import { ContactInquiryPayload, ContactSubmissionResult } from '../models/catalog.models';

@Injectable({
  providedIn: 'root',
})
export class ContactApiService implements ContactGateway {
  private readonly http = inject(HttpClient);
  private readonly requestTimeoutMs = 15000;

  submitInquiry(payload: ContactInquiryPayload): Observable<ContactSubmissionResult> {
    const endpoint = environment.contactApiUrl.trim();

    if (!endpoint) {
      const referenceCode = this.createReferenceCode();
      return of({
        deliveredViaApi: false,
        referenceCode,
        message:
          'Direct API endpoint is not yet connected. Your brief has been validated and prepared for immediate executive handoff via email or WhatsApp.',
      });
    }

    return this.http
      .post<{ referenceCode?: string; message?: string }>(endpoint, payload)
      .pipe(
        timeout(this.requestTimeoutMs),
        map((response) => ({
          deliveredViaApi: true,
          referenceCode: response?.referenceCode ?? this.createReferenceCode(),
          message:
            response?.message ??
            'Your project inquiry has been received. Our technical leadership will review your requirements and respond shortly.',
        })),
        catchError((error: unknown) => this.handleHttpError(error))
      );
  }

  private handleHttpError(error: unknown): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      const detail =
        error.status === 0
          ? 'Unable to reach the inquiry server. Please verify your connection or reach us directly via email or WhatsApp.'
          : `Server responded with status ${error.status}. Please retry or contact us directly.`;
      return throwError(() => new Error(detail));
    }
    return throwError(
      () => new Error('Request timed out. Please retry or contact us directly via email or WhatsApp.')
    );
  }

  private createReferenceCode(): string {
    const stamp = Date.now().toString(36).toUpperCase().slice(-5);
    return `BGZ-${stamp}`;
  }
}
