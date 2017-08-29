import { Product } from './../../product/product.model';

export interface ICartItem {
    product: Product;
    count: number;
    longDelivery: boolean;
}
