import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { CartItem } from "./cart-item/cart-item.model";
import { CategoryEnum } from "../common/enums/category.enum";
import { Product } from "../product/product.model";

@Injectable()
export class CartService {


    private itemsInCart: CartItem[] = [
        // new CartItem(
        //     new Product("Default_5$_Product","",5,CategoryEnum.Beverage,true,[]), 2)
        ];

    private itemsInCartSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject(this.itemsInCart);
    

        
    constructor() {
        this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
     }

	addToCart(product: Product, count: number) 
	{
      this.itemsInCartSubject.next([...this.itemsInCart, new CartItem(product,count)])
    }    

    public getItems(): Observable<CartItem[]> {
        return this.itemsInCartSubject;
    }
}
