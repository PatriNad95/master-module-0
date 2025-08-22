import { Component, OnDestroy, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login-pipe';
import { MembersService } from '../../services/members';
import { Subscription } from 'rxjs';
import { UserEdit } from '../user-edit/user-edit';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, Highlight, FormsModule, SearchByLoginPipe, UserEdit],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit, OnDestroy {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;
  selectedMember!: MemberEntity;
  sub!: Subscription;

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.sub = this.membersService
      .getOrgMembers()
      .subscribe((members) => (this.members = members));
    this.resetNewMember();
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

  // Para formulario reactivo

  select(member: MemberEntity): void {
    this.selectedMember = member;
  }

  save($event: MemberEntity) {
    this.members = [...this.members];
    const member = $event;
    const index = this.members.findIndex((i) => i.id === member.id);
    this.members.splice(index, 1, member);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
