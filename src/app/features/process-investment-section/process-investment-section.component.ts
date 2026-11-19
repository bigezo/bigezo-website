import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../core/data/bigezo-catalog.data';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'bigezo-process-investment-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './process-investment-section.component.html',
  styleUrl: './process-investment-section.component.scss',
})
export class ProcessInvestmentSectionComponent {
  readonly steps = PROCESS_STEPS;
}
