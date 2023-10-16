import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  title: string = "User Detail";
  user: User = new User();
  message: string = "";

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

  delete(): void {
    this.message = "";
      let id = this.route.snapshot.params["id"];
      this.usersvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/user/user-list");
        },
        error: (err) => {
          if(err.status === 404){
            this.message = "Customer not found";
          }else{
            console.error(err);
          }
        }
      });
  }

}
