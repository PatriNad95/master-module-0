import { Injectable } from '@angular/core';
import { MemberEntity } from '../model';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private baseUrl = 'https://api.github.com/orgs';
  private members: MemberEntity[] = [];

  async getOrgMembers(org: string = 'lemoncode'): Promise<MemberEntity[]> {
    // let members: MemberEntity[] = [];
    if (this.members.length > 0) {
      return this.members;
    }
    try {
      const response = await fetch(`${this.baseUrl}/${org}/members`);
      if (response.ok) {
        const result = await response.json();
        this.members = [...result];
      }
    } catch (error) {
      console.error(error);
    } finally {
      return this.members;
    }
  }
}
