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
    new Menu ("ABOUT", "/about"),
    new Menu ("USERS", "/user/user-list"),
    new Menu ("VENDORS", "/vendor/vendor-list"),
    new Menu ("PRODUCTS", "/product/product-list")
    
  ];
}
