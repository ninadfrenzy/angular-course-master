import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './models/product.model';

@Pipe({
  name: 'autocomplete',
  pure: true
})
export class AutocompletePipe implements PipeTransform {

  transform(value: Array<Product>, ...args: string[]): Array<Product> {
    
    
    let filterStr = args[0];
    console.log(value);
    if (filterStr.length === 0)
      return value;
    let data =  value.filter((product) => product.name.toLowerCase().startsWith(filterStr.toLowerCase()))
    return data;
  }

}
