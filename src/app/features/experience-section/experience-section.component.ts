import { Component } from '@angular/core';
import {
  DIGITAL_PRODUCTS,
  ENGINEERING_PILLARS,
  LEADERSHIP_ORGANISATIONS,
} from '../../core/data/bigezo-catalog.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'bigezo-experience-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  readonly digitalProducts = DIGITAL_PRODUCTS;
  readonly leadershipOrgs = LEADERSHIP_ORGANISATIONS;
  readonly engineeringPillars = ENGINEERING_PILLARS;
}
