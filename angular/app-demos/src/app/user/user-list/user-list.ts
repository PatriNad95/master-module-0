import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login-pipe';
import { MembersService } from '../../services/members';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    Highlight,
    FormsModule,
    SearchByLoginPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  members: MemberEntity[] = [];
  selectedMember!: MemberEntity;
  newMember!: MemberEntity;
  editForm!: FormGroup;
  idControl!: FormControl;
  loginControl!: FormControl;
  avatarControl!: FormControl;

  constructor(
    private membersService: MembersService,
    private fb: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.members = await this.membersService.getOrgMembers();
    this.resetNewMember();
    this.createEditForm();
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

  createEditForm(): void {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', [Validators.required, Validators.minLength(6)]],
      avatar_url: '',
    });

    this.idControl = this.editForm.get('id') as FormControl;
    this.loginControl = this.editForm.get('login') as FormControl;
    this.avatarControl = this.editForm.get('avatar_url') as FormControl;
  }

  select(member: MemberEntity): void {
    this.selectedMember = member;
    this.editForm.patchValue(this.selectedMember);
  }

  handleEditFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.avatarControl.setValue(reader.result);
    };
  }

  save() {
    if (this.editForm.valid) {
      this.members = [...this.members];
      const member = this.editForm.value;
      const index = this.members.findIndex((i) => i.id === member.id);
      this.members.splice(index, 1, member);
    }
  }
}
