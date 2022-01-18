import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureHomeComponent } from './feature-home/feature-home.component';
import { FeatureSubComponent } from './feature-sub/feature-sub.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureHomeComponent,
    children: [{
      path:'sub',
      component: FeatureSubComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
