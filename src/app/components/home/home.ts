import { Component } from '@angular/core';
import { Users } from '../../components/users/users';

@Component({
  imports: [Users],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
