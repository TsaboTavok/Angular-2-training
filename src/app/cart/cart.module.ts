import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderByPipe } from '../common/index';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartListComponent
  ],
  providers: [CartService]
})
export class CartModule { }
