import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(user: User[], substr: string = ""): User[] {
    if(substr === ""){
      return user;
    }
    let selectedCustomers: User[] = [];
    for(let u of user){
      if(
        u.username.toLowerCase().includes(substr.toLowerCase())
        || (u.username !== null && u.username.toLowerCase().includes(substr.toLowerCase()))
      ){
        selectedCustomers.push(u);
      }
    }
    return selectedCustomers;
  }

}
