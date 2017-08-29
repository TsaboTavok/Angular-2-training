
import { SettingsModule } from './settings/settings.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CartService } from './cart/cart.service';
import {ProductService} from './product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RandomStringFactory,
  LocalStorageService, SettingsService,
  BorderDirective} from './common';
  import { APP_INFO, RANDOM_STRING_5 } from './common/tokens';


@NgModule({
  declarations: [
    AppComponent,
    BorderDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CartModule,
    ProductModule,
    SettingsModule
  ],
  providers: [
    LocalStorageService,
    SettingsService,
    { provide: APP_INFO, useValue: { App: 'pizza store', Version: '0.3 beta'} },
    { provide: RANDOM_STRING_5, useFactory:  RandomStringFactory(5), deps: [] }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
