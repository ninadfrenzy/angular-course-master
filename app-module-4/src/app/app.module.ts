import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { EvenOddDirective } from './even-odd.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    ErrPageComponent,
    DirectivesDemoComponent,
    EvenOddDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
