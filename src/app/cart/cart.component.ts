import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CartItem } from './cart-item/cart-item.model';
import { CartService } from './cart.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items$: Observable<CartItem[]>;
  items: CartItem[] = [];

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.items$ = this._cartService.getItems();
    this.items$.subscribe(_ => this.items = _);
  }
}
