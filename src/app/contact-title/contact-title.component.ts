import { Component, Input } from '@angular/core';
import { user } from '../model/user';
@Component({
  selector: 'app-contact-title',
  imports: [],
  templateUrl: './contact-title.component.html',
  styleUrl: './contact-title.component.css'
})
export class ContactTitleComponent {
  @Input() user!: user;

}
