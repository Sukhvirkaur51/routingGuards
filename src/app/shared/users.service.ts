import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Userdata} from '../shared/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  setuser(username:string){           //setuser function to store value in localstorage
    localStorage.setItem('user',username);
  }

  getuser(){                         //getuser helps to display this stored value on next page
    return localStorage.getItem('user');

  }

  removeuser(){                    //remove stored data from localstorage....called at logout page
    localStorage.removeItem('user');
  }

islog(){                //if no user is loggedin then return false
  if(this.getuser()==null){
    return false;
  }

  else{
    return true;
  }
}

//userdetail is array of Userdata type(restricted type)
//creating object of Userdata by new keyword
//and pass four arguments.....because in userdata model constructer has four parameters

 private userdetails:Userdata[]=[new Userdata("amn","amn@gmail.com","chandigarh","Tester")]   //collect data for table


 //subject is event, (part of observables)
 //updatedData is obj of Subject(observables) helps to call the functions of observables
 public updatedData = new Subject <Userdata[]> ();

//addnewuser function pushes the values of Userdata type into userdetails array
//and whole data of userdetails array put into updatedData(observables)with next

 addnewuser(userdataobj:Userdata){
   this.userdetails.push(userdataobj);
 this.updatedData.next(this.userdetails.slice());
}


display()
{
  return this.userdetails.slice();   //it returns whole array
}

deleteUser(id:number){
  this.userdetails.splice(id,1);
  this.updatedData.next(this.userdetails.slice());
}

selectedUser(index:number){
  return this.userdetails[index];
}


}
