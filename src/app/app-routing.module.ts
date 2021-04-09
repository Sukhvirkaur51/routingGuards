import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MypostComponent } from './mypost/mypost.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },

  {
    path:'logout',
    component:LogoutComponent
  },

  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'post',
    component:MypostComponent,
    canActivate:[AuthGuard]

  },

  {
    path:'user',
    component:UserComponent
  },
  {
    path:'edit-user',
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
