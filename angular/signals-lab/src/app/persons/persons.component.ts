import { Component, effect, inject, Signal, signal } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounce, debounceTime, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-persons',
  imports: [],
  template: `
    <input type="number" (input)="updateNumberOfPersons($event)" />
    <ul>
      @for (person of persons(); track person.id) {
      <li>
        {{ person.name }}
      </li>
      }
    </ul>
    <div>Number of persons: {{ numberOfPersons() }}</div>
  `,
  styles: ``,
})
export class PersonsComponent {
  numberOfPersons = signal<number>(0);
  // persons: Person[] = [];

  private personsSvc = inject(PersonService);

  updateNumberOfPersons(event: Event) {
    this.numberOfPersons.set(+(event.target as HTMLInputElement).value);
  }

  // e = effect(() => {
  //   this.personsSvc.getPersons(this.numberOfPersons()).subscribe((persons) => {
  //     this.persons = persons;
  //   });
  // });

  persons = toSignal(
    toObservable(this.numberOfPersons).pipe(
      debounceTime(500),
      tap((t) => t),
      switchMap((numberOfPersons) =>
        this.personsSvc.getPersons(numberOfPersons)
      )
    )
  ) as Signal<Person[]>;
}
