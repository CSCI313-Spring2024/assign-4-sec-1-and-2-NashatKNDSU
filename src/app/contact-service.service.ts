import { Injectable } from '@angular/core';
import { USERS } from './data/user-data';
import { user } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor() { }

  addContact(id: number, firstname: string, lastname: string, phonenumber: string, email: string){
    id = USERS.length + 1;
    USERS.push({id, firstname, lastname, phonenumber, email});
  }

  updateContact(id: number, firstname: string, lastname: string,  phonenumber:string, email: string,){

    USERS[id] = {id, firstname, lastname, phonenumber, email};
  }

  deleteContact(id: number){
    USERS.splice(id, 1);
  }
}
