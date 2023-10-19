import { Component } from '@angular/core';
import { Request1Service } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request1 } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {

  title: string = "Request Detail";
  req: Request1 = new Request1();
  message: string = "";

  constructor(
    private reqsvc: Request1Service,
    private route: ActivatedRoute,
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

  delete(): void {
    this.message = "";
      let id = this.route.snapshot.params["id"];
      this.reqsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/requets/request-list");
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
