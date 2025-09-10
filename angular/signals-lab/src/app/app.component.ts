import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from './product';
import { NormalComponent } from './normal.component';
import { SignalComponent } from './signal.component';
import { PersonsComponent } from './persons/persons.component';
import { ReaderComponent } from './reader.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    NormalComponent,
    SignalComponent,
    PersonsComponent,
    ReaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals-lab';

  toggleCasing() {
    this.title = this.isUpperCase(this.title)
      ? this.title.toLowerCase()
      : this.title.toUpperCase();
  }

  private isUpperCase(str: string): boolean {
    return str === str.toUpperCase();
  }

  // quantity = signal(1);
  // qtyAvailable = signal([1, 2, 3, 4, 5, 6]);
  // selectedProduct = signal<Product>({ id: 1, name: 'Product 1', price: 100 });
  // exPrice = computed(() => this.selectedProduct().price * this.quantity());
  // color = computed(() => (this.exPrice() > 300 ? 'green' : 'blue'));

  // constructor() {
  //   console.log(`Signals value ${this.quantity()}`);

  //   effect(() => console.log('In effect: ', this.quantity()));

  //   this.quantity.update((q) => q * 2);
  // }

  // onQuantitySelected($event: number): void {
  //   this.quantity.set($event);
  // }
}
