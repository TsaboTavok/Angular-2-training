import { ProductService } from './product.service';
import { Product } from './product.model';
import {CategoryEnum} from '../common/enums/category.enum';
import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  categoryType = CategoryEnum;

	constructor(
    private _productService: ProductService,
  private _cartService: CartService) {
	} 

  ngOnInit() {
    this.product = this._productService.getProduct();
  }

  addToCart(count: number){
    this._cartService.addToCart(this.product, count || 1);
  }
}
