import { CartService } from './cart/cart.service';
import { Component } from '@angular/core';
import { CategoryEnum } from "./common/enums/category.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'the shop';  

	constructor(private _cartService: CartService) {
  }
  
  showCart() : boolean{
    return !this._cartService.isEmpty();
  }
}
