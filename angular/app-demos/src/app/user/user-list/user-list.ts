import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login-pipe';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, Highlight, FormsModule, SearchByLoginPipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  members: MemberEntity[] = [];
  newMember: MemberEntity = {
    id: '',
    login: '',
    avatar_url: '',
  };

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch(
        'https://api.github.com/orgs/lemoncode/members'
      );
      if (response.ok) {
        const result = await response.json();
        this.members = result;
      }
    } catch (error) {
      console.error(error);
    }
  }

  add() {
    this.members.push(this.newMember);
    this.resetNewMember();
  }

  private resetNewMember() {
    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  handleFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.newMember.avatar_url = reader.result as string;
    };
  }
}
