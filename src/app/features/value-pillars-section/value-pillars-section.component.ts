import { Component } from '@angular/core';
import { VALUE_PILLARS } from '../../core/data/bigezo-catalog.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'bigezo-value-pillars-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './value-pillars-section.component.html',
  styleUrl: './value-pillars-section.component.scss',
})
export class ValuePillarsSectionComponent {
  readonly pillars = VALUE_PILLARS;
}
