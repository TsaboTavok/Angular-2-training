import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/cart.service';
import {ProductService} from './product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AppInfoService, RandomStringService,
  LocalStorageService,
  BorderDirective} from './common';

const stringServce = new RandomStringService(5);

@NgModule({
  declarations: [
    AppComponent,
    BorderDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CartModule,
    ProductModule
  ],
  providers: [
    AppInfoService,
    LocalStorageService,
    { provide: RandomStringService, useValue: stringServce}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
