import { LocalStorageService } from './../../common/services/local-storage.service';
import { Resolve } from '@angular/router';
import { Product, CategoryEnum } from './../../common';
import { Injectable, OnInit } from '@angular/core';

const productsList = new Array<Product>();

const productsPromise = Promise.resolve(productsList);

@Injectable()
export class ProductService implements OnInit {

  ngOnInit(): void {
  }

  constructor(private localSt: LocalStorageService) {
    let localProducts = this.localSt.getValue<Product[]>('products');

    if (localProducts === null) {
      localProducts = [
        new Product(1,
        'Pizza',
        'Ingredients on a round bread'
       , 15.99
       , CategoryEnum.Food
       , true,
       ['Tomatoes', 'Pepperoni', 'Mozzarella'])];
    }

    productsList.push(...localProducts);
  }

  getProducts(): Promise<Product[]> {
    return productsPromise;
  }

  public getProduct(id: number | string): Promise<Product>  {
    return this.getProducts()
      .then(prods => prods.find(p => p.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }
}
