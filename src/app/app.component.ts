import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
   <app-contact-list></app-contact-list>
   <app-contact-details></app-contact-details>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}
