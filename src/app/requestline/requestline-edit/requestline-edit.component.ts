import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/user/system.service';
import { RequestLineService } from '../requestline.service';
import { Product } from 'src/app/product/product.class';
import { RequestLine } from '../requestline.class';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent {
  title: string = "Requestline Edit";
  reql: RequestLine = new RequestLine();
  items!: Product[];
   
 constructor(
  private route: ActivatedRoute,
  private reqlsvc: RequestLineService,
  private prodsvc: ProductService,
  private sysvc: SystemService,
  private router: Router
   ) {}
 

   ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
    let id = this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.reql = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
 
   update(): void{
     this.reqlsvc.change(this.reql).subscribe({
       next: (res) => {
         console.debug("Changed!");
         this.router.navigateByUrl(`/request/request-lines/${this.reql.requestId}`);
 
       },
       error: (err) => {
         console.error(err);
       }
     });
   }
}
