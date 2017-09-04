import { productsRouterComponents, ProductsRoutingModule } from './products.routing.module';
import { ProductService, ProductComponent } from '.';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductComponent,
    productsRouterComponents,
    ProductListComponent,
    ProductListItemComponent
  ],
  exports: [ProductComponent],
  providers: [ProductService],
})
export class ProductsModule { }
