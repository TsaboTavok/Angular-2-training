import { CartService } from './../cart.service';
import { CartItem } from './cart-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
  }

  deleteItem() {
    this._cartService.deleteItem(this.item);
  }
}
