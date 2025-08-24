import { Component, ElementRef } from '@angular/core';
import { Highlight } from '../directives/highlight';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  colorFromComponent = 'red';
}
