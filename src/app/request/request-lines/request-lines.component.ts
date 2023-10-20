import { Component } from '@angular/core';
import { RequestLineService } from 'src/app/requestline/requestline.service';
import { SystemService } from 'src/app/user/system.service';
import { Request1Service } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { Request1 } from '../request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {
  title: string = "Request Lines";
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

  review(): void {
    this.reqsvc.review(this.req).subscribe({
      next: (res) => {
        console.debug("Placed on REVIEW!");
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


  remove(id:number): void {
    this.message = "";
    this.reqlsvc.remove(id).subscribe({
      next: (res) => {
        console.log("Deleted...");
        this.refresh();
        this.verifyDelete = false;
        this.count++;

      },
      error: (err) => {
        if(err.status === 404){
          this.message = "Request not found";
        }else{
          console.error(err);
        }
      }
    });
  }
}
