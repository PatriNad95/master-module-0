import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-reader',
  imports: [],
  template: ` <p>{{ inputSignal() }}</p> `,
  styles: ``,
})
export class ReaderComponent {
  inputSignal = signal<string>('');

  @Input() set input(value: string) {
    this.inputSignal.set(value);
  }
}
