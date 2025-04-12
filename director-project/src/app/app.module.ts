import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { NetterHighlightDirective } from './netter-highlight/netter-highlight.directive';
import { NumberOnlyDirective } from './number-only.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryProductsComponent } from './category-products/category-products.component';


@NgModule({
  declarations: [
    AppComponent,
    NetterHighlightDirective,
    NumberOnlyDirective,
    NavigationComponent,
    HomeComponent,
    AllProductsComponent,
    ProductDetailComponent,
    CategoryProductsComponent,
    //BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
