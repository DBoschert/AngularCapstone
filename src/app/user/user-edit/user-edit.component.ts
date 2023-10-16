import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  title: string = "User Edit";
  user: User = new User(); 
  
    constructor(
      private usersvc: UserService,
      private route: ActivatedRoute, 
      private router: Router
      ) {}
      ngOnInit(): void {
        let id = this.route.snapshot.params["id"];
        this.usersvc.get(id).subscribe({
          next: (res) => {
            console.debug(res);
            this.user = res;
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
  
      update(): void{
        this.usersvc.change(this.user).subscribe({
          next: (res) => {
            console.debug("Changed!");
            this.router.navigateByUrl("/user/user-list"); 
  
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
}
