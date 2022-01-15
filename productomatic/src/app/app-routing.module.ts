import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ProductPageComponent } from './product-home/product-page/product-page.component';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';

const routes: Routes = [
  {
    path:'product-home',
    component: ProductPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
