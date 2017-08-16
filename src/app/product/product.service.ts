import {CategoryEnum} from '../common/enums/category.enum';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  public getProduct(): Product  {
    return  new Product( 'Pizza',
    'Ingredients on a round bread'
   , 15.99
   , CategoryEnum.Food
   , true,
   ['Tomatoes', 'Pepperoni', 'Mozzarella']);
  }
}
