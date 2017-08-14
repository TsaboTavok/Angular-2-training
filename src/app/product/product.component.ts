import { ProductService } from './product.service';
import { Product } from './product.model';
import {CategoryEnum} from '../common/enums/category.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  categoryType = CategoryEnum;

	constructor(private _productService: ProductService) {
	} 

  ngOnInit() {
    this.product = this._productService.getProduct();
  }

}
