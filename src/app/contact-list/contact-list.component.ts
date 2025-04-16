import { Component } from '@angular/core';
import { USERS } from '../data/user-data';
import { user } from '../model/user';
import { ContactTitleComponent } from '../contact-title/contact-title.component';


@Component({
  selector: 'app-contact-list',
  imports: [ContactTitleComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent 
{
  contacts = USERS;
}
