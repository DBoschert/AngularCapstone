import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { LoginComponent } from './user/login/login.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "user/user-list", component: UserListComponent },
  { path: "user/user-create", component: UserCreateComponent },
  { path: "user/user-detail/:id", component: UserDetailComponent },
  { path: "user/user-edit/:id", component: UserEditComponent },
  { path: "user/login", component: LoginComponent },
  
  
  { path: "vendor/vendor-list", component: VendorListComponent },
  { path: "vendor/vendor-create", component: VendorCreateComponent },
  { path: "vendor/vendor-detail/:id", component: VendorDetailComponent },
  { path: "vendor/vendor-edit/:id", component: VendorEditComponent },
  
  { path: "product/product-list", component: ProductListComponent },
  { path: "product/product-create", component: ProductCreateComponent },
  { path: "product/product-detail/:id", component: ProductDetailComponent },
  { path: "product/product-edit/:id", component: ProductEditComponent },
  
  { path: "request/request-list", component: RequestListComponent },
  { path: "request/request-create", component: RequestCreateComponent },
  { path: "request/request-detail/:id", component: RequestDetailComponent },
  { path: "request/request-edit/:id", component: RequestEditComponent },
  { path: "request/request-lines/:id", component: RequestLinesComponent },
  
  { path: "requestline/requestline-create/:rid", component: RequestlineCreateComponent },
  
  

  { path: "about", component: AboutComponent },
  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
