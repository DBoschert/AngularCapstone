import { Component } from '@angular/core';
import { Request1 } from '../request.class';
import { Request1Service } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  reqs!: Request1[];
  locale: string = 'fr'; 
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
    private reqsvc: Request1Service,
    ) {}

    ngOnInit(): void {
      this.reqsvc.list().subscribe({
        next: (res) => {
          console.log(res);
          this.reqs = res as Request1[];
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
