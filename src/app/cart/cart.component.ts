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


  constructor(private _cartService: CartService) { }

  ngOnInit() {
  }
}
