import { Component, signal } from '@angular/core';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { ExpertiseSectionComponent } from '../expertise-section/expertise-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProcessInvestmentSectionComponent } from '../process-investment-section/process-investment-section.component';
import { ProductsShowcaseSectionComponent } from '../products-showcase-section/products-showcase-section.component';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { ValuePillarsSectionComponent } from '../value-pillars-section/value-pillars-section.component';

@Component({
  selector: 'bigezo-home-page',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    ValuePillarsSectionComponent,
    ExpertiseSectionComponent,
    ProductsShowcaseSectionComponent,
    ProcessInvestmentSectionComponent,
    ExperienceSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  readonly selectedProductTopic = signal('');

  handleProductInquiry(productName: string): void {
    this.selectedProductTopic.set(productName);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
