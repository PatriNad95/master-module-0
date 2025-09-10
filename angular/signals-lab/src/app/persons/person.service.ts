import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { createPersons, Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  getPersons(numberOfPersons: number): Observable<Person[]> {
    return of(createPersons(numberOfPersons));
  }
}
