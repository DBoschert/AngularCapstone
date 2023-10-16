import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  title: string = "Product Edit";
  prod: Product = new Product(); 
  vends!: Vendor[];
   
 constructor(
   private prodsvc: ProductService,
   private route: ActivatedRoute, 
   private vendsvc: VendorService,
   private router: Router
   ) {}
 
   ngOnInit(): void {
     let id = this.route.snapshot.params["id"];
     this.prodsvc.get(id).subscribe({
       next: (res) => {
         console.debug(res);
         this.prod = res;
         this.getVends();
       },
       error: (err) => {
         console.error(err);
       }
     });
   }

   getVends(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.vends = res;
      },
      error: (err) => console.error(err)
    });
    
  }
 
 
   update(): void{
     this.prodsvc.change(this.prod).subscribe({
       next: (res) => {
         console.debug("Changed!");
         this.router.navigateByUrl("/product/product-list"); 
 
       },
       error: (err) => {
         console.error(err);
       }
     });
   }
 }
 
 

