import { Component } from '@angular/core';
import { RequestLine } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {

  reql: RequestLine = new RequestLine();
  prods!: Product[];

  constructor(
    private route: ActivatedRoute,
    private reqlsvc: RequestLineService,
    private prodsvc: ProductService,
    private sysvc: SystemService,
    private router: Router
  ) {}

  save(): void {
    
    this.reql.productId = + this.reql.productId;
    console.debug("Orderline B4:", this.reql);
    this.reqlsvc.create(this.reql).subscribe({
      next: (res) => {
        console.debug("Created...");
        this.router.navigateByUrl(`/request/request-lines/${this.reql.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.reql.requestId = +this.route.snapshot.params["rid"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.prods = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
