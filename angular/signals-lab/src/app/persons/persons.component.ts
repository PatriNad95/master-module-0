import { Component, effect, inject, signal } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'app-persons',
  imports: [],
  template: `
    <input type="number" (input)="updateNumberOfPersons($event)" />
    <ul>
      @for (person of persons; track person.id) {
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
  persons: Person[] = [];

  private personsSvc = inject(PersonService);

  updateNumberOfPersons(event: Event) {
    this.numberOfPersons.set(+(event.target as HTMLInputElement).value);
  }

  e = effect(() => {
    this.personsSvc.getPersons(this.numberOfPersons()).subscribe((persons) => {
      this.persons = persons;
    });
  });
}
