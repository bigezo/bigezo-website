import { TestBed } from '@angular/core/testing';
import { ProductItem } from '../../../core/models/catalog.models';
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  const mockProduct: ProductItem = {
    id: 'somero',
    name: 'Somero',
    iconClass: 'fa-solid fa-graduation-cap',
    url: 'https://www.somero.ug',
    displayUrl: 'www.somero.ug',
    category: 'Digital Product',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();
  });

  it('should display the centered icon and vivid product name', () => {
    const fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h3')?.textContent?.trim()).toBe('Somero');
    expect(el.querySelector('.fa-graduation-cap')).toBeTruthy();
  });

  it('should emit selected event when clicked', () => {
    const fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();

    let emitted: ProductItem | undefined;
    fixture.componentInstance.selected.subscribe((item) => {
      emitted = item;
    });

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(emitted).toEqual(mockProduct);
  });
});
