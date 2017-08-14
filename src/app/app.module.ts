import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from "./product/product.service";
import { CartComponent } from './cart/cart.component';
import { CartService } from "./cart/cart.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
