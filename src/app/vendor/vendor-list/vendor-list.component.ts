import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { User } from 'src/app/user/user.class';
import { SystemService } from 'src/app/user/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  title: string = "Vendor List";
  vends!: Vendor[];
  locale: string = 'en'; 
  substr: string = "";
  sortCol: string = 'id';
  sortAsc: boolean = true;
  userLoggedIn: User = new User();
  sortOrder(col: string): void { 
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortCol = col;
    this.sortAsc = true;
  }
  
  constructor(
    private vendsvc: VendorService,
    private syssvc: SystemService
    ) {}

    ngOnInit(): void {
      this.userLoggedIn = this.syssvc.loggedInUser;
      this.vendsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.vends = res as Vendor[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

}
