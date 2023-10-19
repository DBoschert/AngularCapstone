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

  //added
  getRls(): void {
    this.reqlsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.req.requestLines = res;
      },
      error: (err) => console.error(err)
    });
    
  }

  ngOnInit(): void {
    this.refresh();
    this.getRls();
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
    // don't need this | let id = this.route.snapshot.params["id"]; | because this method used the passed in "id" in remove
    this.reqlsvc.remove(id).subscribe({
      next: (res) => {
        console.log("Deleted...");
        this.refresh();
        this.verifyDelete = false;
        this.count++;

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
