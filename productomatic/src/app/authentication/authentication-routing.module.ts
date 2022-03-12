import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrLoginComponent } from './pr-login/pr-login.component';
import { PrSignupComponent } from './pr-signup/pr-signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: PrLoginComponent ///auth
  },
  {
    path: 'signup',
    component: PrSignupComponent ///auth
  },
  {
    path: '',
    redirectTo: 'login' ///auth
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
