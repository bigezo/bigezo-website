import { Component, input } from '@angular/core';

@Component({
  selector: 'bigezo-section-heading',
  standalone: true,
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss',
})
export class SectionHeadingComponent {
  readonly scriptTitle = input<string>('');
  readonly headingTitle = input<string>('');
  readonly subtitle = input<string>('');
  readonly tone = input<'light' | 'dark'>('light');
  readonly align = input<'left' | 'center'>('left');
}
