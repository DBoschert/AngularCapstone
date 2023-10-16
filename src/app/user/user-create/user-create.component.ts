import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  title: string = "User Create";
  user: User = new User();

  constructor(
    private usersvc: UserService,
    private router: Router
  ) {}

  save(): void {

    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("Created!");
        this.router.navigateByUrl("/user/user-list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {

  }

}
