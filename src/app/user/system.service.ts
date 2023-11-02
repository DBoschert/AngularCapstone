import { Injectable } from '@angular/core';
import { User } from './user.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = new User;
  get config() {return this.init.config; }
  
  constructor(
    private init: AppInitService
    ) { }
}
