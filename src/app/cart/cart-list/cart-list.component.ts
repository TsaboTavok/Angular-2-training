import { CartService } from './../cart.service';
import { CartItem } from './../cart-item/cart-item.model';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items$: Observable<CartItem[]>;
  items: CartItem[] = [];

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
}
