import { APP_INFO, RANDOM_STRING_5 } from './common/tokens';
import { CartService } from './cart/cart.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, Optional, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title;
  orderMessage = 'No order';
  private sub: Subscription;

  constructor(
    private _cartService: CartService,
    @Inject(APP_INFO)private _appInfo: any,
    @Optional()@Inject(RANDOM_STRING_5) private _rand: string,
    private titleService: Title,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const extra = this._rand ? ' ' + this._rand : '';
    this.title = this._appInfo.App +  extra;
    this.setPageTitles();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showCart(): boolean {
    return !this._cartService.isEmpty();
  }

  onOrderHandler(msg: string) {
    this.orderMessage = msg;
  }

  private setPageTitles() {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .switchMap(route => route.data)
      .subscribe(
         data => {
          this.titleService.setTitle(data['title']);
         }
      );
  }
}
