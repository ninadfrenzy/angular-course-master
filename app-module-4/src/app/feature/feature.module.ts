import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureHomeComponent } from './feature-home/feature-home.component';
import { FeatureSubComponent } from './feature-sub/feature-sub.component';


@NgModule({
  declarations: [
    FeatureHomeComponent,
    FeatureSubComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
