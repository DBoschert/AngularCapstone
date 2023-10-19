import { Component } from '@angular/core';
import { Request1 } from '../request.class';
import { Request1Service } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {

  title: string = "Request Edit";
  req: Request1 = new Request1(); 
  user: User = new User();
   
 constructor(
   private reqsvc: Request1Service,
   private route: ActivatedRoute, 
   private usersvc: UserService,
   private router: Router
   ) {}
 
   ngOnInit(): void {
     let id = this.route.snapshot.params["id"];
     this.reqsvc.get(id).subscribe({
       next: (res) => {
         console.debug(res);
         this.req = res;
       },
       error: (err) => {
         console.error(err);
       }
     });
   }
 
   update(): void{
     this.reqsvc.change(this.req).subscribe({
       next: (res) => {
         console.debug("Changed!");
         this.router.navigateByUrl("/request/request-list"); 
 
       },
       error: (err) => {
         console.error(err);
       }
     });
   }

}
