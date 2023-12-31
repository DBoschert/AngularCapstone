import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BoolPipe } from './misc/bool.pipe';
import { SortPipe } from './misc/sort.pipe';
import { SearchUserPipe } from './user/search-user.pipe';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SearchVendorPipe } from './vendor/search-vendor.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { SearchProductPipe } from './product/search-product.pipe';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { SearchRequestPipe } from './request/search-request.pipe';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { LoginComponent } from './user/login/login.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestReviewsComponent } from './request/request-reviews/request-reviews.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { AppInitService } from './app-init.service';

const startupServiceFactory = (appinit: AppInitService) => {
  console.debug("startupServiceFactory()");
  return () => appinit.getSettings();
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    BoolPipe,
    SortPipe,
    SearchUserPipe,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    SearchVendorPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductListComponent,
    SearchProductPipe,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    RequestListComponent,
    SearchRequestPipe,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
    LoginComponent,
    RequestLinesComponent,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    RequestReviewsComponent,
    RequestReviewComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
