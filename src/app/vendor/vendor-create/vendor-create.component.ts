import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  title: string = "Vendor Create";
  vend: Vendor = new Vendor();

  constructor(
    private vendsvc: VendorService,
    private router: Router
  ) {}

  save(): void {

    this.vendsvc.create(this.vend).subscribe({
      next: (res) => {
        console.debug("Created!");
        this.router.navigateByUrl("/vendor/vendor-list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {

  }
}
