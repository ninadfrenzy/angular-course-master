import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondCompComponent } from './second-comp/second-comp.component';



@NgModule({
  declarations: [
    SecondCompComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondCompComponent
  ]
})
export class Test2Module { }
