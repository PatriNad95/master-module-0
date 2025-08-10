import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  @Input()
  placeHolder = 'Buscar...';

  @Input()
  label = 'Buscar';

  name = 'Patricia';

  @Output()
  clickEnLupa: EventEmitter<string> = new EventEmitter();

  changeName() {
    this.name = 'Pat';
    this.clickEnLupa.emit(this.name);
  }
}
