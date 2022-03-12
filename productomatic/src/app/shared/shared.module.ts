import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagcalcPipe } from '../tagcalc.pipe';
import { AutocompletePipe } from '../autocomplete.pipe';
import { HighlightDirective } from '../highlight.directive';



@NgModule({
  declarations: [
    TagcalcPipe,
    AutocompletePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    TagcalcPipe,
    AutocompletePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
