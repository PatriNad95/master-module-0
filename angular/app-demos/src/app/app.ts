import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Search } from './utils/search/search';
import { UserList } from './user/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    // Search,
    UserList,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'My Awesome App';

  onClick($event: string) {
    console.log('event emitted from child', $event);
  }
}
