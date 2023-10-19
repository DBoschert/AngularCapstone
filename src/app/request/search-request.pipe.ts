import { Pipe, PipeTransform } from '@angular/core';
import { Request1 } from './request.class';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(req: Request1[], substr: string = ""): Request1[] {
    if(substr === ""){
      return req;
    }
    let selectedCustomers: Request1[] = [];
    for(let r of req){
      if(
        r.description.toLowerCase().includes(substr.toLowerCase())
        || (r.description !== null && r.description.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(r);
      }
    }
    return selectedCustomers;
  }

}
