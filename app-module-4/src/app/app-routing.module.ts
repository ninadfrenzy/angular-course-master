import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { ErrPageComponent } from './err-page/err-page.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children:[{
      path: 'userdetail/:user',
      component: UserDetailComponent
    }]
  },
  {
    path: '',
    component: DirectivesDemoComponent
  },
  {
    path: 'page-not-existing',
    component: ErrPageComponent,
    data: {"message": "Page was not found"}
  },
  {
    path: '**',
    redirectTo: 'page-not-existing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
