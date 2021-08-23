// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CanActivateGuard implements CanActivate {

//   constructor(){}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       // the code here should allow user to navigate to dashboard if he is authenticated
//       // else the code should redirect to login view
//   }
  
// }


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteService } from '../services/route.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  private bearertoken: string;
  private isAuthenticated: boolean;
  constructor(private routeService: RouteService, private authService: AuthenticationService) {
    this.bearertoken = authService.getBearerToken();
    this.isAuthenticated = true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve, reject) => {
      this.authService.isUserAuthenticated(this.bearertoken).then(resp => {
        if (!resp) {
          reject(false);
          this.routeService.toLogin();
        } else {
          resolve(true);
        }
      });
    });

  }
}