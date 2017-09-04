import { Product } from '../../common';

export interface ICartItem {
    product: Product;
    count: number;
    longDelivery: boolean;
}
