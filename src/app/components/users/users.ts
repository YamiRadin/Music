import { Component } from '@angular/core';
import { Usermodel } from '../../interface/usermodel';
@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  contactList: Usermodel[] = [
    {name:"tali",
    email:"talywaser@",
    phone:"0556772592",
    status:true}
  ]
}
