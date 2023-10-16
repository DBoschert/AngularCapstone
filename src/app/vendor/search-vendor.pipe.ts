import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vend: Vendor[], substr: string = ""): Vendor[] {
    if(substr === ""){
      return vend;
    }
    let selectedCustomers: Vendor[] = [];
    for(let v of vend){
      if(
        v.name.toLowerCase().includes(substr.toLowerCase())
        || (v.name !== null && v.name.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(v);
      }
    }
    return selectedCustomers;
  }

}
