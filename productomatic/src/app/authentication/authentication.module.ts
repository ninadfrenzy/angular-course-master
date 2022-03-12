import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { PrLoginComponent } from './pr-login/pr-login.component';
import { PrSignupComponent } from './pr-signup/pr-signup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrLoginComponent,
    PrSignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    AngularFireModule,
    AngularFireAuthModule
  ]
})
export class AuthenticationModule { }
