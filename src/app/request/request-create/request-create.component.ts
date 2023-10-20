import { Component } from '@angular/core';
import { Request1Service } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { Request1 } from '../request.class';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  title: string = "Request Create";
  req: Request1 = new Request1();
  user: User = new User();
  userLoggedIn: User = this.syssvc.loggedInUser;

  constructor(
    private reqsvc: Request1Service,
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
    ) {}
    
    save(): void {
      
      this.req.userId = this.userLoggedIn.id;
      this.reqsvc.create(this.req).subscribe({
        next: (res) => {
          console.debug("Created!");
          this.router.navigateByUrl("/request/request-list");

        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    ngOnInit(): void {
      this.userLoggedIn = this.syssvc.loggedInUser;
    }
    

    

}
