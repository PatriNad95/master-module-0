import { Component, ElementRef } from '@angular/core';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-menu',
  imports: [Highlight],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  colorFromComponent = 'red';
}
