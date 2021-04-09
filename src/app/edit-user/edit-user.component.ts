import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Userdata } from '../shared/userdata.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedrouteobj:ActivatedRoute, public usersservicesobj:UsersService) { }

  id!:number;
  prevData!:Userdata;
  @ViewChild('updateform',{static:false})
  newForm!:NgForm


  ngOnInit(): void {

    this.activatedrouteobj.queryParams.subscribe(params=>{
      this.id=params['id']
    });
    setTimeout(()=>{
      this.prevData=this.usersservicesobj.selectedUser(this.id);
      this.newForm.form.patchValue({
        username:this.prevData.username,
        email:this.prevData.email,
        location:this.prevData.location,
        profile:this.prevData.profile
      })
    },)
  }

}
