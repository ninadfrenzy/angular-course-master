import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countOcc'
})
export class CountOccPipe implements PipeTransform {

  transform(value: Array<string>, ...args: string[]): number {
    let toMatch = args[0];
    let count = 0;
    for(let item of value) {
      if(item === toMatch)
        count++;
    }
    return count;
  }

}
