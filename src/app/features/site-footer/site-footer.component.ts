import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NAV_LINKS } from '../../core/data/bigezo-catalog.data';

@Component({
  selector: 'bigezo-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly navLinks = NAV_LINKS;
  readonly companyEmail = environment.companyEmail;
  readonly companyPhone = environment.companyPhone;
  readonly whatsappUrl = `https://wa.me/${environment.whatsappDigits}`;
}
