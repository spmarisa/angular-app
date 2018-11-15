import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  template: `
    <ul>
      <li *ngFor="let contact of contacts" class="item" [class.active]="selected==contact">
        <a (click)="onSelect(contact)">{{contact.firstName}} {{contact.lastName | uppercase}}</a>
        <a (click)="remove(contact)" class="remove" title="Remove"><span class="glyphicon glyphicon-remove-sign"></span></a>
      </li>
    </ul>
  `,
  styles: []
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getAll();
  }

  onSelect(contact: Contact) {
    console.log('Hello');
  }

}
