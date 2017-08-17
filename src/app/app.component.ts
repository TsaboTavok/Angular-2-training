import { CartService } from './cart/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'the shop';
  orderMessage = 'No order';

  constructor(private _cartService: CartService) {
  }

  showCart(): boolean {
    return !this._cartService.isEmpty();
  }

  onOrderHandler(msg: string) {
    this.orderMessage = msg;
  }
}
