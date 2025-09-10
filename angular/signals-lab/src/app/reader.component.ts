import { Component, input, Input, signal } from '@angular/core';

function quoteString(value: string | undefined) {
  if (value) {
    return `"${value}"`;
  }
  return '';
}
@Component({
  selector: 'app-reader',
  imports: [],
  template: ` <p>{{ inputSignal() }}</p> `,
  styles: ``,
})
export class ReaderComponent {
  // inputSignal = input<string>('');
  //You can also use required if you want to ensure the input is provided
  // you can also use alias to have a different name for the input property
  // or use transform to transform the input value before setting the signal
  inputSignal = input.required<string, string>({
    transform: quoteString,
    alias: 'input',
  });
}
