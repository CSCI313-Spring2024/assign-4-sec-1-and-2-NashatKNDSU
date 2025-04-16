import { Component, Input } from '@angular/core';
import { user } from '../model/user';
import { USERS } from '../data/user-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-title',
  imports: [FormsModule],
  templateUrl: './contact-title.component.html',
  styleUrl: './contact-title.component.css'
})
export class ContactTitleComponent {
  @Input() user!: user;
  

  // deleteUser()
  // {
   
  // }
  // editUser()
  // {
   
  // }

}


