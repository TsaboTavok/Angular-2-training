import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, CanLoad, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, NavigationExtras
   } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
      ) {}

      private checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { return true; }

        this.authService.redirectUrl = url;


        // Navigate to the login page
        this.router.navigate(['/login']);
        return false;
      }

      canLoad(route: Route): boolean {
        const url = `/${route.path}`;
        return this.checkLogin(url);
      }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
      }

      canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
      }
}
