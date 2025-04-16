import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactServiceService } from '../contact-service.service';
import { USERS } from '../data/user-data';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {


  id!: number;

  firstname: string = '';
  lastname: string = '';
  phonenumber: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.firstname = USERS[this.id].firstname;
    this.lastname = USERS[this.id].lastname;
    this.phonenumber = USERS[this.id].phonenumber;
    this.email = USERS[this.id].email;
  }

  contactsService = inject(ContactServiceService);

  UpdatedContact(){
    this.contactsService.updateContact(this.id, this.firstname, this.lastname, this.phonenumber, this.email);
  }
}
