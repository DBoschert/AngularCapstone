import { Component } from '@angular/core';
import { Request1Service } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { Request1 } from '../request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  title: string = "Request Create";
  req: Request1 = new Request1();
  users!: User[];
  constructor(
    // private syssvc: SystemService,
    private reqsvc: Request1Service,
    private usersvc: UserService,
    private router: Router
    ) {}
    
    save(): void {
      
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
      this.usersvc.list().subscribe({
        next: (res) => {
          console.debug(res);
          this.users = res;
        },
        error: (err) => console.error(err)
      });
      
    }

}
