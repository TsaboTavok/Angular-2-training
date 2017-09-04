import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from './../common';
import { ProductResolveGuard } from '.';

import { ProductComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: ':id',
        component: ProductComponent,
        resolve: {
          user: ProductResolveGuard
        }
      },
      {
        path: '',
        component: ProductListComponent
      },
    ]
  }
];

export let productsRouterComponents = [ProductsComponent, ProductComponent, ProductListComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    ProductResolveGuard
  ]
})
export class ProductsRoutingModule { }
