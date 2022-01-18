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
import { AgeCalcPipe } from './age-calc.pipe';
import { Test1Module } from './test-1/test-1.module'
import { Test2Module } from './test-2/test-2.module';
import { FeatureModule } from './feature/feature.module';
import { FeatureRoutingModule } from './feature/feature-routing.module';

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
    CountOccPipe,
    AgeCalcPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Test1Module,
    Test2Module,
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
