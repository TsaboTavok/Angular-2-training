import { Product } from './../product/product.model';
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item/cart-item.model';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

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

    addToCart(product: Product, count: number) {
      this.itemsInCartSubject.next([...this.itemsInCart, new CartItem(product, count)]);
    }

    public getItems(): Observable<CartItem[]> {
        return this.itemsInCartSubject;
    }

    public deleteItem(item: CartItem) {
        const newItems = this.itemsInCart.filter(_ => _ !== item);
        this.itemsInCartSubject.next(newItems);
    }

    public isEmpty(): boolean {
        return this.itemsInCart.length === 0;
    }
}
