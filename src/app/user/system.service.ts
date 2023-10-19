import { Injectable } from '@angular/core';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = new User;

  constructor() { }
}
