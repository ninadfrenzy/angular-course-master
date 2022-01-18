import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalc'
})
export class AgeCalcPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {
    
    return new Date().getFullYear() - value.getFullYear();
  }

}
