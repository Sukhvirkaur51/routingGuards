import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public usersservicesobj:UsersService ,private router: Router) { }

  ngOnInit(): void {
  }

  login(f:NgForm){

    this.usersservicesobj.setuser(f.value.username);
    this.router.navigateByUrl('/profile');

  }

}
