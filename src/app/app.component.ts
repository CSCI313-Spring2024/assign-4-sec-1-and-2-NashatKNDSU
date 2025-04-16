import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactTitleComponent } from "./contact-title/contact-title.component";
import { user } from './model/user';
import { USERS } from './data/user-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';
  contacts = USERS;

}
