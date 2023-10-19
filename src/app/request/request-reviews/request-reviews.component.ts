import { Component } from '@angular/core';
import { Request1 } from '../request.class';
import { Request1Service } from '../request.service';
import { SystemService } from 'src/app/user/system.service';

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
    private syssvc: SystemService
    ) {}

    ngOnInit(): void {
      this.reqsvc.getReviews(this.syssvc.loggedInUser.id).subscribe({
        next: (res) => {
          console.log(res);
          this.reqs = res as unknown as Request1[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
