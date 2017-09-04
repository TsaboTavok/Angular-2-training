import { ProductService } from './product.service';
import { Product } from './../../common';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class ProductResolveGuard implements Resolve<Product> {

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Product> | null {
    const id = +route.params['id'];

    return this.productService.getProduct(id).then(product => {
      if (product) {
        return product;
      } else {
        this.router.navigate(['/products']);
        return null;
      }
    });
  }
}
