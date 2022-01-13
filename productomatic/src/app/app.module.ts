import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-home/product-page/product-page.component';
import { ProductListComponent } from './product-home/product-list/product-list.component';
import { ProductViewComponent } from './product-home/product-view/product-view.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './signup/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductViewComponent,
    NavbarComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
