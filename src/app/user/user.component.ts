import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Userdata } from '../shared/userdata.model';
import { UsersService } from '../shared/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  constructor( public usersserviceobj: UsersService, public router:Router ) { }

  users!:Userdata[];
  subs!:Subscription;

  ngOnInit(): void {

    //by calling display func userdetails array copy into users array
this.users=this.usersserviceobj.display();
console.log(this.users)

//updatedData is observables reference
// with the help of userserviceobj we call updatedData
//and with the help of updatedData we call subscribe method of observables
//inside subscribe there is old array (user) transfer user(old) values into users(new)
this.subs=this.usersserviceobj.updatedData.subscribe((user:Userdata[])=>{this.users=user})
console.log(this.subs)

  }
  model:any={username:"",email:"",location:"",profile:""}; //for userform values

login(form:NgForm){
  console.log(form.value)

  const user =new Userdata(form.value.username, form.value.email,form.value.location,form.value.profile)

  this.usersserviceobj.addnewuser(user);

  alert("data inserted");

}


delete(index:number){
  this.usersserviceobj.deleteUser(index);
  alert("Data deleted successfully");

}

edit(index:number){
  this.router.navigate(['/edit-user'],{queryParams:{id:index}})
}


}

