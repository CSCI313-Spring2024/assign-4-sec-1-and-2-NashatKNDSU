import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  phonenumber: string = '';
  email: string = '';

  contactsService = inject(ContactServiceService);

  addContact() {
    this.contactsService.addContact(
      this.id,
      this.firstname,
      this.lastname,
      this.phonenumber,
      this.email
    );
  }

}
