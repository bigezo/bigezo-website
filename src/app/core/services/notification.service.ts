import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ContactInquiryPayload, ContactSubmissionResult, ProductItem } from '../models/catalog.models';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly baseSwalOptions = {
    background: '#0F1622',
    color: '#F3F5F8',
    confirmButtonColor: '#E48735',
    cancelButtonColor: '#1E293B',
    customClass: {
      popup: 'bigezo-swal-popup',
      title: 'bigezo-swal-title',
      confirmButton: 'bigezo-swal-confirm',
      cancelButton: 'bigezo-swal-cancel',
    },
  };

  private async getSwal() {
    const mod = await import('sweetalert2');
    return mod.default;
  }

  async showValidationWarning(message: string): Promise<void> {
    const Swal = await this.getSwal();
    await Swal.fire({
      ...this.baseSwalOptions,
      icon: 'warning',
      iconColor: '#E68836',
      title: 'Check Required Fields',
      text: message,
      confirmButtonText: 'Review Form',
    });
  }

  async showError(title: string, message: string): Promise<void> {
    const Swal = await this.getSwal();
    await Swal.fire({
      ...this.baseSwalOptions,
      icon: 'error',
      iconColor: '#45260B',
      title,
      text: message,
      confirmButtonText: 'Close',
    });
  }

  async showApiSuccess(result: ContactSubmissionResult): Promise<void> {
    const Swal = await this.getSwal();
    await Swal.fire({
      ...this.baseSwalOptions,
      icon: 'success',
      iconColor: '#E68836',
      title: 'Project Inquiry Received',
      html: `
        <p class="text-sm text-[#D4DEEC] mb-2">${this.escapeHtml(result.message)}</p>
        <p class="text-xs font-semibold uppercase tracking-wider text-[#FFA954]">Reference: ${this.escapeHtml(result.referenceCode)}</p>
      `,
      confirmButtonText: 'Done',
    });
  }

  async showPendingApiHandoff(
    payload: ContactInquiryPayload,
    result: ContactSubmissionResult
  ): Promise<void> {
    const Swal = await this.getSwal();
    const mailSubject = encodeURIComponent(
      `Project Inquiry [${result.referenceCode}]: ${payload.serviceCategory}`
    );
    const bodyText = [
      `Reference: ${result.referenceCode}`,
      `Name: ${payload.fullName}`,
      payload.organization ? `Organization: ${payload.organization}` : '',
      `Email: ${payload.email}`,
      `Phone/WhatsApp: ${payload.phone}`,
      `Service Category: ${payload.serviceCategory}`,
      `Estimated Investment: ${payload.budgetRange}`,
      '',
      'Project Summary:',
      payload.projectDetails,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoHref = `mailto:${environment.companyEmail}?subject=${mailSubject}&body=${encodeURIComponent(bodyText)}`;
    const whatsappHref = `https://wa.me/${environment.whatsappDigits}?text=${encodeURIComponent(bodyText)}`;

    const modalResult = await Swal.fire({
      ...this.baseSwalOptions,
      icon: 'info',
      iconColor: '#E68836',
      title: 'Inquiry Prepared — Choose Direct Channel',
      html: `
        <div class="text-left space-y-3 text-sm text-[#D4DEEC]">
          <p>${this.escapeHtml(result.message)}</p>
          <div class="rounded-xl border border-white/15 bg-white/5 p-3">
            <p class="text-xs font-semibold uppercase tracking-wider text-[#FFA954]">Prepared Brief (${this.escapeHtml(result.referenceCode)})</p>
            <p class="mt-1 font-medium text-white">${this.escapeHtml(payload.fullName)}${payload.organization ? ' — ' + this.escapeHtml(payload.organization) : ''}</p>
            <p class="text-xs text-[#A6B4C8]">${this.escapeHtml(payload.serviceCategory)}</p>
          </div>
          <p class="text-xs text-[#A6B4C8]">Send this brief immediately to our leadership via WhatsApp or Email:</p>
        </div>
      `,
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: 'Send via WhatsApp',
      denyButtonText: 'Send via Email',
      cancelButtonText: 'Close',
      denyButtonColor: '#1E293B',
    });

    if (modalResult.isConfirmed) {
      window.open(whatsappHref, '_blank', 'noopener,noreferrer');
    } else if (modalResult.isDenied) {
      window.location.href = mailtoHref;
    }
  }

  async showProductModal(product: ProductItem, onInquire: (productName: string) => void): Promise<void> {
    const Swal = await this.getSwal();
    const hasPublicUrl = Boolean(product.url);

    const modalResult = await Swal.fire({
      ...this.baseSwalOptions,
      title: product.name,
      html: `
        <div class="text-center space-y-3 py-2">
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E48735]/15 text-[#FFA954] text-3xl">
            <i class="${this.escapeHtml(product.iconClass)}" aria-hidden="true"></i>
          </div>
          <p class="text-xs uppercase tracking-widest font-semibold text-[#FFA954]">${this.escapeHtml(product.category)}</p>
          ${
            hasPublicUrl
              ? `<p class="text-sm text-[#D4DEEC]">Verified product portal: <span class="font-semibold text-white">${this.escapeHtml(product.displayUrl ?? product.url ?? '')}</span></p>`
              : `<p class="text-sm text-[#D4DEEC]">Enterprise solution built by Bigezo Technologies. Contact us for a live technical demonstration.</p>`
          }
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: hasPublicUrl ? 'Visit Product' : 'Request Technical Demo',
      cancelButtonText: hasPublicUrl ? 'Discuss Similar Build' : 'Close',
      cancelButtonColor: '#1E293B',
    });

    if (modalResult.isConfirmed) {
      if (hasPublicUrl && product.url) {
        window.open(product.url, '_blank', 'noopener,noreferrer');
      } else {
        onInquire(product.name);
      }
    } else if (modalResult.dismiss === Swal.DismissReason.cancel && hasPublicUrl) {
      onInquire(product.name);
    }
  }

  private escapeHtml(value: string): string {
    return value
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
}
