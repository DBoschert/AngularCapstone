import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

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
    ) {}

    ngOnInit(): void {
      this.usersvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.users = res as User[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
