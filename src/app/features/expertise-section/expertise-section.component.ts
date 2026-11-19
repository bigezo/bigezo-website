import { Component } from '@angular/core';
import { EXPERTISE_ITEMS } from '../../core/data/bigezo-catalog.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'bigezo-expertise-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './expertise-section.component.html',
  styleUrl: './expertise-section.component.scss',
})
export class ExpertiseSectionComponent {
  readonly expertiseItems = EXPERTISE_ITEMS;
}
