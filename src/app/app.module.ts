import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { AuthService } from './common/services/auth.service';
import { AppRoutingModule, appRouterComponents } from './app.roututing.module';

import { SettingsModule } from './settings/settings.module';
import { ProductService } from './products';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products';
import { RandomStringFactory,
  LocalStorageService, SettingsService,
  BorderDirective} from './common';
  import { APP_INFO, RANDOM_STRING_5 } from './common/tokens';


@NgModule({
  declarations: [
    AppComponent,
    BorderDirective,
    appRouterComponents,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CartModule,
    ProductsModule,
    SettingsModule,
    AdminModule
  ],
  providers: [
    LocalStorageService,
    SettingsService,
    AuthService,
    { provide: APP_INFO, useValue: { App: 'pizza store', Version: '0.3 beta'} },
    { provide: RANDOM_STRING_5, useFactory:  RandomStringFactory(5), deps: [] }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
