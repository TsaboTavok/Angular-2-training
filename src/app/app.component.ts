import { APP_INFO, RANDOM_STRING_5 } from './common/tokens';
import { CartService } from './cart/cart.service';
import { Component, OnInit, Optional, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title;
  orderMessage = 'No order';

  constructor(
    private _cartService: CartService,
    @Inject(APP_INFO)private _appInfo: any,
    @Optional()@Inject(RANDOM_STRING_5) private _rand: string
  ) {
  }

  ngOnInit(): void {
    const extra = this._rand ? ' ' + this._rand : '';
    this.title = this._appInfo.App +  extra;
  }

  showCart(): boolean {
    return !this._cartService.isEmpty();
  }

  onOrderHandler(msg: string) {
    this.orderMessage = msg;
  }
}
