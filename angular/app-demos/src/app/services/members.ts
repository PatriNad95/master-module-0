import { Injectable } from '@angular/core';
import { MemberEntity } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private baseUrl = 'https://api.github.com/orgs';

  constructor(private http: HttpClient) {}

  getOrgMembers(org: string = 'lemoncode'): Observable<MemberEntity[]> {
    return this.http
      .get<MemberEntity[]>(`${this.baseUrl}/${org}/members`)
      .pipe(shareReplay(1));
  }
}
