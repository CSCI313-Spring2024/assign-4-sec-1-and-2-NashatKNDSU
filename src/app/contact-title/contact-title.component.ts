import { Component, inject, Input } from '@angular/core';
import { user } from '../model/user';
import { USERS } from '../data/user-data';
import { FormsModule } from '@angular/forms';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-contact-title',
  imports: [FormsModule],
  templateUrl: './contact-title.component.html',
  styleUrl: './contact-title.component.css'
})
export class ContactTitleComponent {
  @Input() user!: user;
  
  contactsService = inject(ContactServiceService);

  deleteContact()
  {
   this.contactsService.deleteContact(this.user.id);
  }
  // editUser()
  // {
   
  // }

}


