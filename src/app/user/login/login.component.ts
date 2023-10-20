import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users!: User[];
  user: User = new User();
  username: string = this.user.username;
  password: string = this.user.password;
  message: string = "";
  
  
  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
    
    logined(): void{
      this.usersvc.login(this.user.username, this.user.password).subscribe({
        next: (res) => {
          console.debug(res);
          this.syssvc.loggedInUser = res;
          this.router.navigateByUrl("/request/request-list"); 
          
        },
        error: (err) => {
          console.error(err);
          if(err.status === 404){
            this.message = "Not Found!";
          } else{
            console.error(err);
          }
        }
      });
    }
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
