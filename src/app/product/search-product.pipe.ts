import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(prod: Product[], substr: string = ""): Product[] {
    if(substr === ""){
      return prod;
    }
    let selectedCustomers: Product[] = [];
    for(let p of prod){
      if(
        p.name.toLowerCase().includes(substr.toLowerCase())
        || (p.name !== null && p.name.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(p);
      }
    }
    return selectedCustomers;
  }

}
