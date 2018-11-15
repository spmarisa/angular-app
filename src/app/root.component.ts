import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-contact-list></app-contact-list>
    <app-contact-details></app-contact-details>
  `
})
export class RootComponent {
  values = '';

  // without strong typing
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
