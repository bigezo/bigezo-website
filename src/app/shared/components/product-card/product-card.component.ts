import { Component, input, output } from '@angular/core';
import { ProductItem } from '../../../core/models/catalog.models';

@Component({
  selector: 'bigezo-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly product = input.required<ProductItem>();
  readonly selected = output<ProductItem>();

  onSelect(): void {
    this.selected.emit(this.product());
  }
}
