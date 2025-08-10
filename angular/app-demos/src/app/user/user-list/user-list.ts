import { Component, OnInit } from '@angular/core';
import { MemberEntity } from '../../model';
import { CommonModule } from '@angular/common';

const delay = (delay: number = 1_000) =>
  new Promise((res) => {
    setTimeout(() => {
      res(undefined);
    }, delay);
  });

const memberFact = () => [
  {
    avatar_url: '',
    id: '1',
    login: 'lk',
  },
  {
    avatar_url: '',
    id: '2',
    login: 'dsf',
  },
];

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  members: MemberEntity[] = [];

  constructor() {
    console.log('Constructor');
    // setTimeout(() => {
    //   this.members = [
    //     {
    //       avatar_url: '',
    //       id: '1',
    //       login: 'lk',
    //     },
    //   ];
    // }, 4000);
  }

  async ngOnInit(): Promise<void> {
    await delay(3_000);
    this.members = memberFact();
  }
}
