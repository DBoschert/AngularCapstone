import { Component } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  title: string = "Product Create";
  prod: Product = new Product();
  vends!: Vendor[];
  constructor(
    // private syssvc: SystemService,
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private router: Router
    ) {}
    
    save(): void {
      
      this.prodsvc.create(this.prod).subscribe({
        next: (res) => {
          console.debug("Created!");
          this.router.navigateByUrl("/product/product-list");

        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    ngOnInit(): void {
      this.vendsvc.list().subscribe({
        next: (res) => {
          console.debug(res);
          this.vends = res;
        },
        error: (err) => console.error(err)
      });
      
    }

}
