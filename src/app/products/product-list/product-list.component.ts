import { Product } from './../../common/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../index';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .then(users => this.products = users)
    .catch((err) => console.log(err));
  }

}
