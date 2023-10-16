import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  title: string = "Vendor Edit";
  vend: Vendor = new Vendor(); 

  
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
  
      update(): void{
        this.vendsvc.change(this.vend).subscribe({
          next: (res) => {
            console.debug("Changed!");
            this.router.navigateByUrl("/vendor/vendor-list"); 
  
          },
          error: (err) => {
            console.error(err);
          }
        });
      }

}
