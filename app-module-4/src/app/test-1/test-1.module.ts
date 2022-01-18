import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from '../test-2/second-comp/second-comp.component';
import { Test2Module } from '../test-2/test-2.module';



@NgModule({
  declarations: [
    FirstCompComponent,
    
  ],
  imports: [
    CommonModule,
    Test2Module
  ],
  exports: [
    FirstCompComponent
  ]
})
export class Test1Module { }
