import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { PageNotFoundComponent, LoginComponent } from './common/components';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'products',
    loadChildren: 'app/products/products.module#ProductsModule',
    data: { title: 'Products' }
  },
  {
    path: 'cart',
    loadChildren: 'app/cart/cart.module#CartModule',
    data: { title: 'Cart' }
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    data: { title: 'Admin' }
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page not found' }
  }
];

export let appRouterComponents = [PageNotFoundComponent, LoginComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
