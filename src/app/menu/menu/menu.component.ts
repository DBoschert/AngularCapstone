import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus: Menu[] = [
    new Menu("HOME", "/home"),
    new Menu ("USERS", "/user/user-list"),
    new Menu ("VENDORS", "/vendor/vendor-list"),
    new Menu ("PRODUCTS", "/product/product-list"),
    new Menu ("REQUESTS", "/request/request-list"),
    new Menu ("REVIEWS", "/request/request-reviews"),
    new Menu ("ABOUT", "/about"),
    new Menu ("LOGIN", "/user/login")
    
  ];
}
