import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public usersservicesobj:UsersService , private router:Router) { }

  ngOnInit() {
    this.usersservicesobj.removeuser();
    this.router.navigateByUrl('/');
  }

}
