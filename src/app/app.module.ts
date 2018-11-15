import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './contact.service';



@NgModule({
  declarations: [
    RootComponent,
    ContactDetailsComponent,
    ContactListComponent,
    // Directives
    // Pipes
    // Components
  ],
  imports: [
    // Modules
    BrowserModule
  ],
  providers: [
    ContactService
    // Injectables (Services)
  ],
  bootstrap: [RootComponent
    // Declarables that will be used in index.html (on bootstrap)
  ]
})
export class AppModule { }
