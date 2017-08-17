import { ICartItem } from './i-cart-item.model';
import { Product } from '../../product/product.model';

export class CartItem implements ICartItem {
    public longDelivery: boolean;

    constructor(
        public product: Product,
        public count: number,
        longDelivery?: boolean,
    ) {
        this.longDelivery = longDelivery || false;
    }
  }
