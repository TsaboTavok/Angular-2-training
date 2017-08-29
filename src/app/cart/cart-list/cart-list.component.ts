import { CartService } from './../cart.service';
import { CartItem } from './../cart-item/cart-item.model';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderByPipe } from '../../common/index';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items$: Observable<CartItem[]>;
  items: CartItem[] = [];
  @Output() onOrder: EventEmitter<string> = new EventEmitter<string>();
  orderClickCount = 1;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.items$ = this._cartService.getItems();
    this.items$.subscribe(_ => this.items = _);
  }
  getTotalGoods(): Observable<number> {
    return this._cartService.getTotalGoods();
  }
  getTotalPrice(): Observable<number> {
    return this._cartService.getTotalPrice();
  }
  order() {
    this.onOrder.emit('Order requested ' + this.orderClickCount++);
  }
}
