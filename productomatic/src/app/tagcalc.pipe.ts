import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagcalc'
})
export class TagcalcPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let idNum = Number(value);
    if(idNum > 25) {
      return "NEW";
    } else {
      return "OLD";
    }
  }

}
