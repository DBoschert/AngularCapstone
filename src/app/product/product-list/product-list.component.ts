import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = "Product List";
  prods!: Product[];
  locale: string = 'en'; 
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
    private prodsvc: ProductService,
    ) {}

    ngOnInit(): void {
      this.prodsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.prods = res as Product[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
