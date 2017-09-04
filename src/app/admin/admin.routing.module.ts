import { CanDeactivateGuard } from './../common/guards/can-deactivate.guard';
import { ProductFormComponent } from './product-form/product-form.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'product/:id',
      component: ProductFormComponent,
      // canDeactivate: [CanDeactivateGuard]
    },
  {
    path: '',
    component: AdminComponent
  }
];

export let cartRouterComponents = [AdminComponent, ProductFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
