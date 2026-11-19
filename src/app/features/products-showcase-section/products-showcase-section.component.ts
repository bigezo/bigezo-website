import { Component, inject, output } from '@angular/core';
import { DIGITAL_PRODUCTS } from '../../core/data/bigezo-catalog.data';
import { ProductItem } from '../../core/models/catalog.models';
import { NotificationService } from '../../core/services/notification.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'bigezo-products-showcase-section',
  standalone: true,
  imports: [SectionHeadingComponent, ProductCardComponent],
  templateUrl: './products-showcase-section.component.html',
  styleUrl: './products-showcase-section.component.scss',
})
export class ProductsShowcaseSectionComponent {
  private readonly notificationService = inject(NotificationService);

  readonly products = DIGITAL_PRODUCTS;
  readonly inquireAboutProduct = output<string>();

  handleProductSelect(product: ProductItem): void {
    void this.notificationService.showProductModal(product, (productName) => {
      this.inquireAboutProduct.emit(productName);
    });
  }
}
