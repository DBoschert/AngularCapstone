import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  title: string = "Vendor Detail";
  vend: Vendor = new Vendor();
  message: string = "";
  verifyDelete: boolean = false;
  count: number = 1;

  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
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
      this.vendsvc.remove(id).subscribe({
        next: (res) => {
          console.log("Deleted...");
          this.router.navigateByUrl("/vendor/vendor-list");
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

  clicked(): void {
    if(this.count % 2 === 1){
      this.verifyDelete = true;
    }
    else{
      this.verifyDelete = false;
    }
    this.count++;
  }

}
