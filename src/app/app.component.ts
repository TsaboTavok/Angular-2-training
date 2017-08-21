import { CartService } from './cart/cart.service';
import { Component, OnInit, Optional } from '@angular/core';
import { AppInfoService, RandomStringService } from './common/';

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
    private _appInfo: AppInfoService,
    @Optional() private _rand: RandomStringService
  ) {
  }

  ngOnInit(): void {
    const extra = this._rand ? ' ' + this._rand.getString() : '';
    this.title = (<any>this._appInfo.getAppInfo()).App +  extra;
  }

  showCart(): boolean {
    return !this._cartService.isEmpty();
  }

  onOrderHandler(msg: string) {
    this.orderMessage = msg;
  }
}
