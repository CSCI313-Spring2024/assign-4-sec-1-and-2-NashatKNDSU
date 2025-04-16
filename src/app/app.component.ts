import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactTitleComponent } from "./contact-title/contact-title.component";
import { user } from './model/user';
import { USERS } from './data/user-data';
import { ContactListComponent } from "./contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactTitleComponent, ContactListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  contacts = USERS;

}
