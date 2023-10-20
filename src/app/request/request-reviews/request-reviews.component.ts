import { Component } from '@angular/core';
import { Request1 } from '../request.class';
import { Request1Service } from '../request.service';
import { SystemService } from 'src/app/user/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrls: ['./request-reviews.component.css']
})
export class RequestReviewsComponent {

  req: Request1 = new Request1();
  title: string = "Request To Review";
  reqs!: Request1[];
  locale: string = 'fr'; 
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
    private reqsvc: Request1Service,
    private syssvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.userLoggedIn = this.syssvc.loggedInUser;
      this.reqsvc.getReviews(this.syssvc.loggedInUser.id).subscribe({
        next: (res) => {
          console.log(res);
          console.log(this.syssvc.loggedInUser.id);
          this.reqs = res as unknown as Request1[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    

}
