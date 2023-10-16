import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  title: string = "Product Detail";
  vend: Product = new Product();
  message: string = "";

  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug(res);
        this.vend = res;
      },
      error: (err) => {
        console.error(err);
      }
    });  
  }

  delete(): void {
    this.message = "";
      let id = this.route.snapshot.params["id"];
      this.prodsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/product/product-list");
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
