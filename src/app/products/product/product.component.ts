import { CartService } from '../../cart/cart.service';
import { ProductService } from './product.service';
import { Product } from './../../common';
import { CategoryEnum } from '../../common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  categoryType = CategoryEnum;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.data.forEach((data: { product: Product }) => {
      this.product = Object.assign({}, data.product);
    });
  }

  addToCart(count: number) {
    this._cartService.addToCart(this.product, count || 1);
  }
}
