import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline.service';
import { SystemService } from 'src/app/user/system.service';
import { Request1 } from '../request.class';
import { Request1Service } from '../request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {

  title: string = "Request Review";
  invalid: string = "";
  req!: Request1;
  message: string = "";
  verifyDelete: boolean = false;
  count: number = 1;
  reql: RequestLine = new RequestLine();

  constructor(
    private syssvc: SystemService,
    private reqsvc: Request1Service,
    private reqlsvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  approve(): void {
    this.reqsvc.approve(this.req).subscribe({
      next: (res) => {
        console.debug("APPROVED!!!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"];
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


  ngOnInit(): void {
    this.refresh();
  }

  clicked(): void {
    if(this.count % 2 === 1){
      this.verifyDelete = true;
    }
    else{
      this.verifyDelete = false;
    }
    this.count++;
  }
  reject(): void {
    this.reqsvc.reject(this.req).subscribe({
      next: (res) => {
        console.debug("REJECTED!!!");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  update(): void{
    this.invalid = "";
    this.reqsvc.change(this.req).subscribe({
      next: (res) => {
        if(this.req.rejectionReason !== ""){

          console.debug("Changed!");
          this.reject();
          this.refresh();
        }
        else{
          this.invalid = "REJECTION REASON REQUIRED!!!";
          
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
