import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  template: `
    <p>Hello from {{ fullName() }}</p>
    <p>{{ signalCounter }}</p>

    <button (click)="changeName()">Change Name</button>
  `,
  styles: ``,
})
export class SignalComponent {
  firstName = signal('Bart');
  lastName = signal('Simpson');

  signalCounter = 0;

  fullName = computed(() => {
    this.signalCounter++;
    return `${this.firstName()} ${this.lastName()}`;
  });

  changeName() {
    this.firstName.set('El');
    this.lastName.set('Barto');
  }
}
