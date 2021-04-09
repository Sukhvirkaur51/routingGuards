import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public usersservicesobj:UsersService) { }

  user!: string
  ngOnInit(): void {
    this.user=JSON.stringify(this.usersservicesobj.getuser());
  }



}
