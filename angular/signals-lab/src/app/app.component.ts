import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals-lab';

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  selectedProduct = signal<Product>({ id: 1, name: 'Product 1', price: 100 });
  exPrice = computed(() => this.selectedProduct().price * this.quantity());
  color = computed(() => (this.exPrice() > 300 ? 'green' : 'blue'));

  constructor() {
    console.log(`Signals value ${this.quantity()}`);

    effect(() => console.log('In effect: ', this.quantity()));

    this.quantity.update((q) => q * 2);
  }

  onQuantitySelected($event: number): void {
    this.quantity.set($event);
  }
}
