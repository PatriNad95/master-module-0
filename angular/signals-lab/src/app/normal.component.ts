import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map, tap } from 'rxjs';

@Component({
  selector: 'app-normal',
  imports: [AsyncPipe],
  template: `
    <p>Hello from {{ fullName$ | async }}</p>
    <p>{{ fullNameCounter }}</p>

    <button (click)="changeName()">Change Name</button>
  `,
  styles: ``,
})
export class NormalComponent {
  firstName = new BehaviorSubject('Bart');
  lastName = new BehaviorSubject('Simpson');

  fullNameCounter = 0;

  public fullName$ = combineLatest([this.firstName, this.lastName]).pipe(
    debounceTime(0),
    tap(() => {
      this.fullNameCounter++;
    }),
    map(([firstName, lastName]) => `${firstName} ${lastName}`)
  );

  changeName() {
    this.firstName.next('El');
    this.lastName.next('Barto');
  }
}
