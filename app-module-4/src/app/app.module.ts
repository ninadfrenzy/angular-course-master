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
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { InterceptService } from './intercept.service';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountOccPipe } from './count-occ.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    ErrPageComponent,
    DirectivesDemoComponent,
    EvenOddDirective,
    FormsDemoComponent,
    ObservableDemoComponent,
    PipeDemoComponent,
    CountOccPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
