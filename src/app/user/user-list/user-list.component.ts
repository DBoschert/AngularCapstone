import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from '../system.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  title: string = "User List";
  users!: User[];
  locale: string = 'en'; 
  substr: string = "";
  sortCol: string = 'id';
  sortAsc: boolean = true;
  userLoggedIn: User = new User();

  sortOrder(col: string): void { 
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }
  
  constructor(
    private usersvc: UserService,
    private syssvc: SystemService
    ) {}

    ngOnInit(): void {
      this.userLoggedIn = this.syssvc.loggedInUser;
      this.usersvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.users = res as User[];
          console.log(this.userLoggedIn);
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
